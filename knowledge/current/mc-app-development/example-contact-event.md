---
title: "Example Contact Event"
domain: mc-app-development
topic: example-contact-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.048Z
estimatedTokens: 2307
keywords: [Contact, Event, Every, custom, index.html, root, endpoint, config.json, customEvent.js]
---

# Example Contact Event

> Every custom event must have an index.html in the root of its endpoint.

# Example Contact Event

## config.json

```json
{
    "workflowApiVersion": "1.1",
    "metaData": {
        "icon": "images/icon.png",
        "transactionKeys": {
            "0": {
                "from": "Event Property",
                "to": "DE_Name.DE_Property"
            }
        }
    },
    "type": "Event",
    "lang":{
        "en-US": {
            "name": "Event (Workflow API v1.1)",
            "description": "An example event using workflow API v1.1 format.",
            "selectCountry": "Select Country",
            "enterFirstName": "Enter First Name",
            "enterLastName": "Enter Last Name",
            "enterFavoriteFood": "Enter Favorite Food",
            "countryCodeLabel": "Country Code",
            "firstNameLabel": "First Name",
            "lastNameLabel": "Last Name",
            "favoriteFoodLabel": "Favorite Food",
            "selectTransactionKeyMapping": "Transaction Key"
        }
    },
    "configurationArguments": {},
    "filterExpressionEnabled": false,
    "wizardSteps": [
        { "key": "selectCountry", "label": "selectCountry" },
        { "key": "enterFirstName", "label": "enterFirstName" },
        { "key": "enterLastName", "label": "enterLastName" },
        { "key": "enterFavoriteFood", "label": "enterFavoriteFood", "active": false },
        { "key": "selectTransactionKeyMapping", "label": "selectTransactionKeyMapping" }
    ],
    "userInterfaces": {
        "configModal": {
            "url": "index.html"
        },
        "summary": [
            {
                "valuePath": "arguments.countryCode",
                "label": "countryCodeLabel"
            },
            {
                "valuePath": "arguments.firstName",
                "label": "firstNameLabel"
            },
            {
                "valuePath": "arguments.lastName",
                "label": "lastNameLabel"
            },
            {
                "valuePath": "arguments.favoriteFood",
                "label": "favoriteFoodLabel"
            },
             {
                "valuePath": "metaData.transactionKeys",
                "label": "Transaction Key"
            }
        ]
    }
}
```

### index.html

Every custom event must have an index.html in the root of its endpoint.

```html
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Custom Event Test</title>

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/require.js"></script>
    <script type="text/javascript">
        (function() {
            var config = {
                baseUrl: ''
            };

            var dependencies = [
                'customEvent'
            ];

            require(config, dependencies);
        })();
    </script>

    <!--Styles-->
    <style type="text/css">
        body {
            padding: 15px;
            margin: 0;
        }
        h1 {
            font-size: 16px;
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
    <h1>Step 1: Country Code</h1>
    <select id="select-country-code">
        <option value="US">United States</option>
        <option value="GB">United Kingdom</option>
        <option value="BR">Brazil</option>
        <option value="DE">Germany</option>
    </select>
    <br />
    <button id="toggleLastStep">Toggle Favorite Food Step</button>
</div>
<div id="step2" class="step">
    <h1>Step 2: First Name</h1>
    <input id="select-first-name">
</div>
<div id="step3" class="step">
    <h1>Step 3: Last Name</h1>
    <input id="select-last-name">
</div>
<div id="step4" class="step">
    <h1>Step 4: Favorite Food</h1>
    <input id="select-favorite-food">
</div>
</body>
</html>
```

### customEvent.js

Postmonger is required for communication between Journey Builder and the custom event.

```javascript
define([
    'js/postmonger'
], function(
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
    var payload = {};
    var lastStepEnabled = false;
    var steps = [ // initialize to the same value as what's set in config.json for consistency
        { "key": "selectCountry", "label": "selectCountry" },
        { "key": "enterFirstName", "label": "enterFirstName" },
        { "key": "enterLastName", "label": "enterLastName" },
        { "key": "enterFavoriteFood", "label": "enterFavoriteFood", "active": false }
    ];
    var currentStep = steps[0].key;

    $(window).ready(onRender);

    connection.on('initEvent', initialize);
    connection.on('requestedTokens', onGetTokens);
    connection.on('requestedEndpoints', onGetEndpoints);

    connection.on('clickedNext', onClickedNext);
    connection.on('clickedBack', onClickedBack);
    connection.on('gotoStep', onGotoStep);

    function initialize (data) {
        var countryCode;
        var firstName;
        var lastName;

        if (data) {
            payload = data;
        }

        if (payload['arguments']) {
            countryCode = payload['arguments'].countryCode;
            firstName = payload['arguments'].firstName;
            lastName = payload['arguments'].lastName;
        }

        $('#select-country-code').val(countryCode);
        $('#select-first-name').val(firstName);
        $('#select-last-name').val(lastName);
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
        if ((currentStep.key === 'enterLastName' && steps[3].active === false) || currentStep.key === 'enterFavoriteFood') {
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

    function onRender() {
        connection.trigger('ready'); // JB will respond the first time 'ready' is called with 'initEvent'

        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');

        $('#toggleLastStep').click(function() {
            lastStepEnabled = !lastStepEnabled; // toggle status
            steps[3].active = !steps[3].active; // toggle active

            connection.trigger('updateSteps', steps);
        });
    }

    function showStep(step, stepIndex) {
        if (stepIndex && !step) {
            step = steps[stepIndex-1];
        }

        currentStep = step;

        $('.step').hide();

        switch(currentStep.key) {
            case 'selectCountry':
                $('#step1').show();
                break;
            case 'enterFirstName':
                $('#step2').show();
                $('#step2 input').focus();
                break;
            case 'enterLastName':
                $('#step3').show();
                $('#step3 input').focus();
                break;
            case 'enterFavoriteFood':
                $('#step4').show();
                $('#step4 input').focus();
                break;
        }
    }

    function save() {
        var countryCode = $('#select-country-code').find('option:selected').attr('value');
        var firstName = $('#select-first-name').val();
        var lastName = $('#select-last-name').val();
        var favoriteFood = $('#select-favorite-food').val();

        payload['arguments'] = payload['arguments'] || {};
        payload['arguments'].countryCode = countryCode;
        payload['arguments'].firstName = firstName;
        payload['arguments'].lastName = lastName;

        // Example criteria - if 'filterExpressionEnabled' is set to true in config.json, Journey Builder will
        // populate this step with the 'criteria' XML passed here
        // payload['arguments'].criteria = "<FilterDefinition Source='SubscriberAttribute'><ConditionSet Operator='AND' ConditionSetName='Grouping'><Condition ID='13D65BB5-1F98-E411-9D68-00237D5401CE' isParam='false' Operator='Equal' operatorEditable='0' valueEditable='1' annotation=''><Value><![CDATA[" + countryCode + "]]></Value></Condition><Condition ID='0CD65BB5-1F98-E411-9D68-00237D5401CE' isParam='false' Operator='Equal' operatorEditable='0' valueEditable='1' annotation=''><Value><![CDATA[" + firstName + "]]></Value></Condition><Condition ID='12D65BB5-1F98-E411-9D68-00237D5401CE' isParam='false' Operator='Equal' operatorEditable='0' valueEditable='1' annotation=''><Value><![CDATA[" + lastName + "]]></Value></Condition></ConditionSet></FilterDefinition>";

        if (favoriteFood && steps[3].active) {
            payload['arguments'].favoriteFood = favoriteFood;
        }

        payload['metaData'] = payload['metaData'] || {};

        payload['configurationArguments'] = payload['configurationArguments'] || {};

        payload.dataExtensionId = '<data extension ID>';

        connection.trigger('updateEvent', payload);
    }
});
```
