---
title: "Example REST Activity"
domain: mc-app-development
topic: example-rest-activity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.069Z
estimatedTokens: 2905
keywords: [REST, Activity, Every, custom, index.html, root, endpoint, config.json, customActivity.js, Sample, Items]
---

# Example REST Activity

> Every custom activity must have an index.html in the root of its endpoint.

# Example REST Activity

## config.json

```json
{
    "workflowApiVersion": "1.1",
    "metaData": {
       "icon": "images/sms.png",
       "category": "message"
    },
    "type": "REST",
    "lang": {
       "en-US": {
           "name": "REST Activity (Workflow API v1.1)",
           "description": "An example REST activity using workflow API v1.1 format."
       }
    },
    "arguments": {
        "execute": {
            "inArguments": [
                {
                    "emailAddress": "{{InteractionDefaults.Email}}"
                },
                {
                    "phoneNumber": "{{Contact.Default.PhoneNumber}}"
                }
            ],
            "outArguments": [
                {
                    "foundSignupDate": ""
                }
            ],
            "url": "https://some-endpoint.com/execute"
        }
    },
    "configurationArguments": {
       "save": {
           "url": "URI/for/your/activity/save"
       },
       "publish": {
           "url": "URI/for/your/activity/publish"
       },
       "validate": {
           "url": "URI/for/your/activity/validate"
       },
       "stop": {
           "url": "URI/for/your/activity/stop"
       }
    },
    "wizardSteps": [
       { "label": "Step 1", "key": "step1" },
       { "label": "Step 2", "key": "step2" },
       { "label": "Step 3", "key": "step3" },
       { "label": "Step 4", "key": "step4", "active": false }
    ],
    "userInterfaces": {
       "configModal": {
           "height": 200,
           "width": 300,
           "fullscreen": true
       }
    },
    "schema": {
        "arguments": {
            "execute": {
                "inArguments": [
                    {
                        "phoneNumber": {
                            "dataType": "Phone",
                            "isNullable": false,
                            "direction": "in"
                        }
                    },
                    {
                        "emailAddress": {
                            "dataType": "Email",
                            "isNullable": false,
                            "direction": "in"
                        }
                    }
                ],
                "outArguments": [
                    {
                        "foundSignupDate": {
                            "dataType": "Date",
                            "direction": "out",
                            "access": "visible"
                        }
                    }
                ]
            }
        }
    }
}
```

## index.html

Every custom activity must have an index.html in the root of its endpoint.

```html
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Custom Journey Builder Activity</title>

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/require.js"></script>
    <script type="text/javascript">
        (function() {
            var config = {
                baseUrl: ''
            };

            var dependencies = [
                'customActivity'
            ];

            require(config, dependencies);
        })();
    </script>

    <!--Styles-->
    <style type="text/css">
        body {
            padding: 20px;
            margin: 0;
        }
        .step {
            display: none;
        }
        #step1 {
            display: block;
        }
    </style>

</head>
<body>
<div id="step1" class="step">

    Select your SMS message:
    <select id="select1">
        <option value="">Select an option</option>
        <option value="someMessage">Some SMS</option>
        <option value="anotherMessage">Another SMS</option>
        <option value="thirdMessage">Third SMS</option>
        <option value="unknownMessage">Unknown SMS</option>
    </select>

    <button id="toggleLastStep">Toggle Last Step</button>
</div>
<div id="step2" class="step">
    Here's a second page with some info on it.
</div>
<div id="step3" class="step">
    You chose the message: <div id="message"></div>
</div>
<div id="step4" class="step">
    Hey, here's a fourth step, just for you.  Toggle this on or off from step 1.
</div>
</body>
</html>
```

## customActivity.js

Postmonger is required for communication between Journey Builder and the activity.

```javascript
define([
    'postmonger'
], function(
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
    var payload = {};
    var lastStepEnabled = false;
    var steps = [ // initialize to the same value as what's set in config.json for consistency
        { "label": "Step 1", "key": "step1" },
        { "label": "Step 2", "key": "step2" },
        { "label": "Step 3", "key": "step3" },
        { "label": "Step 4", "key": "step4", "active": false }
    ];
    var currentStep = steps[0].key;

    $(window).ready(onRender);

    connection.on('initActivity', initialize);
    connection.on('requestedTokens', onGetTokens);
    connection.on('requestedEndpoints', onGetEndpoints);

    connection.on('clickedNext', onClickedNext);
    connection.on('clickedBack', onClickedBack);
    connection.on('gotoStep', onGotoStep);

    function onRender() {
        // JB will respond the first time 'ready' is called with 'initActivity'
        connection.trigger('ready');

        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');

        // Disable the next button if a value isn't selected
        $('#select1').change(function() {
            var message = getMessage();
            connection.trigger('updateButton', { button: 'next', enabled: Boolean(message) });

            $('#message').html(message);
        });

        // Toggle step 4 active/inactive
        // If inactive, wizard hides it and skips over it during navigation
        $('#toggleLastStep').click(function() {
            lastStepEnabled = !lastStepEnabled; // toggle status
            steps[3].active = !steps[3].active; // toggle active

            connection.trigger('updateSteps', steps);
        });
    }

    function initialize (data) {
        if (data) {
            payload = data;
        }

        var message;
        var hasInArguments = Boolean(
            payload['arguments'] &&
            payload['arguments'].execute &&
            payload['arguments'].execute.inArguments &&
            payload['arguments'].execute.inArguments.length > 0
        );

        var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

        $.each(inArguments, function(index, inArgument) {
            $.each(inArgument, function(key, val) {
                if (key === 'message') {
                    message = val;
                }
            });
        });

        // If there is no message selected, disable the next button
        if (!message) {
            showStep(null, 1);
            connection.trigger('updateButton', { button: 'next', enabled: false });
            // If there is a message, skip to the summary step
        } else {
            $('#select1').find('option[value='+ message +']').attr('selected', 'selected');
            $('#message').html(message);
            showStep(null, 3);
        }
    }

    function onGetTokens (tokens) {
        // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
        // console.log(tokens);
    }

    function onGetEndpoints (endpoints) {
        // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
        // console.log(endpoints);
    }

    function onClickedNext () {
        if (
            (currentStep.key === 'step3' && steps[3].active === false) ||
            currentStep.key === 'step4'
        ) {
            save();
        } else {
            connection.trigger('nextStep');
        }
    }

    function onClickedBack () {
        connection.trigger('prevStep');
    }

    function onGotoStep (step) {
        showStep(step);
        connection.trigger('ready');
    }

    function showStep(step, stepIndex) {
        if (stepIndex && !step) {
            step = steps[stepIndex-1];
        }

        currentStep = step;

        $('.step').hide();

        switch(currentStep.key) {
            case 'step1':
                $('#step1').show();
                connection.trigger('updateButton', {
                    button: 'next',
                    enabled: Boolean(getMessage())
                });
                connection.trigger('updateButton', {
                    button: 'back',
                    visible: false
                });
                break;
            case 'step2':
                $('#step2').show();
                connection.trigger('updateButton', {
                    button: 'back',
                    visible: true
                });
                connection.trigger('updateButton', {
                    button: 'next',
                    text: 'next',
                    visible: true
                });
                break;
            case 'step3':
                $('#step3').show();
                connection.trigger('updateButton', {
                     button: 'back',
                     visible: true
                });
                if (lastStepEnabled) {
                    connection.trigger('updateButton', {
                        button: 'next',
                        text: 'next',
                        visible: true
                    });
                } else {
                    connection.trigger('updateButton', {
                        button: 'next',
                        text: 'done',
                        visible: true
                    });
                }
                break;
            case 'step4':
                $('#step4').show();
                break;
        }
    }

    function save() {
        var name = $('#select1').find('option:selected').html();
        var value = getMessage();

        // 'payload' is initialized on 'initActivity' above.
        // Journey Builder sends an initial payload with defaults
        // set by this activity's config.json file.  Any property
        // may be overridden as desired.
        payload.name = name;

        payload['arguments'].execute.inArguments = [{ "message": value }];

        payload['metaData'].isConfigured = true;

        connection.trigger('updateActivity', payload);
    }

    function getMessage() {
        return $('#select1').find('option:selected').attr('value').trim();
    }

});
```

## Sample Request

Sample POST data sent to `https://some-endpoint.com/execute`.

```js
{
        "inArguments": [
                {
                    "emailAddress": "{{InteractionDefaults.Email}}"
                },
                {
                    "phoneNumber": "{{Contact.Default.PhoneNumber}}"
                }
            ],
        "outArguments": [],
        "activityObjectID": "1234abcd-56ef-78gh-90ij-9876klmn5432",
        "journeyId": "1234abcd-56ef-78gh-90ij-9876klmn5432",
        "activityId": "1234abcd-56ef-78gh-90ij-9876klmn5432",
        "definitionInstanceId": "1234abcd-56ef-78gh-90ij-9876klmn5432",
        "activityInstanceId": "1234abcd-56ef-78gh-90ij-9876klmn5432",
        "keyValue": "someContactKeyHere",
        "mode": 0
}
```

## Sample Response

Sample 200 OK response expected from the server.

```js
{
        "foundSignupDate": "2016-03-10"
}
```

## Related Items

-   [Build Custom Activities and Events](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/creating-activities.htm)
