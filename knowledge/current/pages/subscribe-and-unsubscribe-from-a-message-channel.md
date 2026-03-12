---
title: "Subscribe and Unsubscribe from a Message Channel"
domain: pages
topic: subscribe-and-unsubscribe-from-a-message-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.813Z
estimatedTokens: 657
keywords: [Subscribe, Unsubscribe, Message, Channel, sforce.one.subscribe, sforce.one.unsubscribe]
---

# Subscribe and Unsubscribe from a Message Channel

> To subscribe and unsubscribe from a message channel, use the sforce.one.subscribe() and sforce.one.unsubscribe() methods.

# Subscribe and Unsubscribe from a Message Channel

To subscribe and unsubscribe from a message channel, use the sforce.one.subscribe() and sforce.one.unsubscribe() methods.

## Example

The lmsSubscriberVisualforceRemoting page from the [github.com/trailheadapps/lwc-recipes](https://github.com/trailheadapps/lwc-recipes "HTML (New Window)") repo shows how to subscribe and unsubscribe from a message channel.

The following example is a continuation of the example in [Publish on a Message Channel](atlas.en-us.pages.meta/pages/message_channel_publish.htm "To publish on a Message Channel from a Visualforce page, include the $MessageChannel global variable in your page's JavaScript code and write a method that calls sforce.one.publish().") that lets you subscribe and unsubscribe from a message channel when you click the respective button. In the JavaScript, we have the subscribeMC() and unsubscribeMC() methods, and onMCPublished() to populate the textarea with message output.

Load the custom message channel $MessageChannel.SampleMessageChannel\_\_c into the variable SAMPLEMC. The $MessageChannel global variable creates a unique token for the associated message channel. Under SAMPLEMC, we declare the variable subscriptionToMC that holds the subscription object returned from the sforce.one.subscribe() method.

The subscribeMC() method checks whether the subscription object is empty. If it is, then it calls the sforce.one.subscribe() method. sforce.one.subscribe() has two parameters, the subscribing message channel, onMCPublished(), and the method that processes the message output.

By default, communication over a message channel can occur only between components in an active navigation tab, an active navigation item, or a utility item. Utility items are always active. A navigation tab or item is active when it’s selected. Navigation tabs and items include:

-   Standard navigation tabs
-   Console navigation workspace tabs
-   Console navigations subtabs
-   Console navigation items

To receive messages on a message channel from anywhere in the application, use the sforce.one.subscribe() method's optional fourth parameter, subscriberOptions. Set scope in the subscriberOptions to the value "APPLICATION".

```

```

The unsubscribeMC() method checks whether there is a subscription object. If so, it calls sforce.one.unsubscribe(), and passes in the subscriptionToMC object. Then, it clears the subscriptionToMC object.

The onMCPublished() method converts the message payload from a JSON object to a string. It then displays the message in the textarea with the ID MCMessageTextArea.

```

```

## Code Examples

```
sforce.one.subscribe(messageChannel, listener, {scope: "APPLICATION"});
```

```
<apex:page >
    <div>
        <p>Subscribe to SampleMessageChannel </p>
        <button onclick="subscribeMC()">Subscribe</button>
        <p>Unsubscribe from subscription</p>
        <button onclick="unsubscribeMC()">Unsubscribe</button>
        <br/>
        <br/>
        <p>Received message:</p>
    <textarea id="MCMessageTextArea" rows="10" style="disabled:true;resize:none;width:100%;"/>
    </div>

    <script>
        // Load the MessageChannel token in a variable
        var SAMPLEMC = "{!$MessageChannel.SampleMessageChannel__c}";
        var subscriptionToMC;

        function onMCPublished(message) {
            var textArea = document.querySelector("#MCMessageTextArea");
            textArea.innerHTML = message ? JSON.stringify(message, null, '\t') : 'no message payload';
        }

        function subscribeMC() {
            if (!subscriptionToMC) {
                subscriptionToMC = sforce.one.subscribe(SAMPLEMC, onMCPublished);
            }
        }

        function unsubscribeMC() {
            if (subscriptionToMC) {
                sforce.one.unsubscribe(subscriptionToMC);
                subscriptionToMC = null;
            }
        }
    </script>

</apex:page>
```

## Related Topics

- Publish on a Message Channel (atlas.en-us.pages.meta/pages/message_channel_publish.htm)
