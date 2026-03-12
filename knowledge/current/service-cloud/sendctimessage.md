---
title: "sendCTIMessage()"
domain: service-cloud
topic: sendctimessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.395Z
estimatedTokens: 187
keywords: [sendCTIMessage, Sends, message, CTI, adapter, Open, CTI., computer-telephony, integration, it’s, only, API, version, 24.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# sendCTIMessage()

> Sends a message to the CTI adapter or Open CTI. This
            method is for computer-telephony integration (CTI); it’s only available in API
            version 24.0 or later.

# sendCTIMessage()

Sends a message to the CTI adapter or Open CTI. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| msg | string | Message to send to the adapter. |
| callback | function | JavaScript method called when the message is sent. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if sending the message was successful; false if sending the message wasn’t successful. |

## Code Examples

```
sforce.console.cti.sendCTIMessage( msg, (optional) callback:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
     <script type="text/javascript">

           var callback = function (result) {
              if (result.success) {
                 alert('CTI message was sent successfully!');
             } else {
                 alert('CTI message was not sent successfully.');
               }
           };

          //Note that we are using the CTI submodule here
           sforce.console.cti.sendCTIMessage('/ANSWER?LINE_NUMBER=1', callback);
     </script>
</apex:page>
```
