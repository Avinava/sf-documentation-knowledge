---
title: "Publish on a Message Channel"
domain: pages
topic: publish-on-a-message-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.809Z
estimatedTokens: 360
keywords: [Publish, Message, Channel, Visualforce, include, $MessageChannel, variable, page's, JavaScript, code, write, calls, sforce.one.publish]
---

# Publish on a Message Channel

> To publish on a Message Channel from a Visualforce page, include the $MessageChannel global variable in your page's JavaScript code
    and write a method that calls sforce.one.publish().

# Publish on a Message Channel

To publish on a Message Channel from a Visualforce page, include the $MessageChannel global variable in your page's JavaScript code and write a method that calls sforce.one.publish().

## Example

The lmsPublisherVisualforce page from the [github.com/trailheadapps/lwc-recipes](https://github.com/trailheadapps/lwc-recipes "HTML (New Window)") repo shows how to publish a message to notify subscribers on a Lightning page when a contact is selected.

The following example walks through the Visualforce page markup to show how to publish to a Message Channel when a button is clicked.

In the page's JavaScript, we first get a reference to the custom Lightning Message Channel with the formula expression {!$MessageChannel.SampleMessageChannel\_\_c}. This expression creates a token that is unique to your Message Channel. We then assign the token as a string to the variable SAMPLEMC.

The function handleClick() contains the message content that we want to publish. Here, the message is a recordId with the value "some string" and recordData, whose value is the key-value pair value: "some value". We then call the Lightning Message Service API's publish() method on the sforce.one object. The publish() function takes two parameters, a string containing the Message Channel token and the message payload.

In the page markup, we create a button and call handleClick() on its onclick() method.

```

```

## Code Examples

```
<apex:page >
    <script>
    // Load the MessageChannel token in a variable
    var SAMPLEMC = "{!$MessageChannel.SampleMessageChannel__c}";
    function handleClick() {
        const payload = {
            recordId: "some string",
            recordData: {value: "some value"}
        }
        sforce.one.publish(SAMPLEMC, payload);
      }
    </script>
    <div>
    <p>Publish SampleMessageChannel</p>
    <button onclick="handleClick()">Publish</button>
    </div>
</apex:page>
```
