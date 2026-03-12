---
title: "setCallAttachedData()"
domain: service-cloud
topic: setcallattacheddata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.408Z
estimatedTokens: 243
keywords: [setCallAttachedData, call, data, associated, ID., get, information, send, between, interaction, log, custom, console, component.This, only, API, version, 31.0, later., Syntax]
---

# setCallAttachedData()

> Sets the call data associated with a call object
                  ID. Use to get information or send information between an interaction
                log and a custom console component.This method is only available in API version 31.0 or
        later.

# setCallAttachedData()

Sets the call data associated with a call object ID. Use to get information or send information between an interaction log and a custom console component.This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callObjectId | string | The object ID of the call. |
| callData | string | JSON string that specifies the data to attach to the call. |
| callType | string | String that specifies the call type, such as internal, inbound, or outbound. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the event firing was successful; false otherwise. |

## Code Examples

```
sforce.console.cti.setCallAttachedData( callObjectId:String, callData:JSON string callType:String, (optional)callback:Functional)
```

```
<apex:page>
    <A HREF="#" onClick="testSetCallAttachedData();return false">
          Click here to set call attached data </A>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
     <script type="text/javascript">

           function testSetCallAttachedData() {
              //callData must be a JSON string. We assume that your browser has
              //access to a JSON library.
              var callData = JSON.stringify({"ANI":"4155551212", "DNIS":"8005551212"});

              //Set the call attached data associated to call id 'call.1'
              sforce.console.cti.setCallAttachedData('call.1', callData, 'outbound');
           }
     </script>
</apex:page>
```
