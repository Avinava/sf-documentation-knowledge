---
title: "onSendCTIMessage()"
domain: service-cloud
topic: onsendctimessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.329Z
estimatedTokens: 259
keywords: [onSendCTIMessage, Registers, function, fired, message, sent, sendCTIMessage, send, interaction, log, custom, console, component, API, version]
---

# onSendCTIMessage()

> Registers a function that is fired when a message is
            sent with the sendCTIMessage(). Use to get information or send
            information between an interaction log and a custom console component. This method is
            only available in API version 31.0 or later.

# onSendCTIMessage()

Registers a function that is fired when a message is sent with the [sendCTIMessage()](atlas.en-us.api_console.meta/api_console/sforce_api_console_sendctimessage.htm "Sends a message to the CTI adapter or Open CTI. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later."). Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a message is sent with the onSendCTIMessage() method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| message | string | The message that was sent with the onSendCTIMessage() method. |

## Code Examples

```
sforce.console.cti.onSendCTIMessage( eventHandler:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
     <script type="text/javascript">

           var callback = function (result) {
               alert('sendCTIMessage API sent the following message: ' + result.message);
           };

           sforce.console.cti.onSendCTIMessage(callback);

           function sendCTIMessage() {
               sforce.console.cti.sendCTIMessage('sending a message to CTI');
           }
     </script>
     <a href="#" onClick="sendCTIMessage();return false">
                 Send a message to see your listener receiving it!</a>
</apex:page>
```

## Related Topics

- sendCTIMessage() (atlas.en-us.api_console.meta/api_console/sforce_api_console_sendctimessage.htm)
