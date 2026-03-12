---
title: "onCallEnd()"
domain: service-cloud
topic: oncallend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.245Z
estimatedTokens: 188
keywords: [onCallEnd, Registers, function, called, call, ends., computer-telephony, integration, CTI, it’s, only, API, version, 24.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onCallEnd()

> Registers a function that is called when a call ends. This method is for computer-telephony integration (CTI);
                it’s only available in API version 24.0 or later.

# onCallEnd()

Registers a function that is called when a call ends. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a call ends. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The call object ID of the call which has ended. |
| duration | string | The duration of the call. |
| disposition | string | The disposition of the call. |

## Code Examples

```
sforce.console.cti.onCallEnd( eventHandler:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
     <script type="text/javascript">

           var callback = function (result) {
              var str = 'Call ' + result.id + ' ended! ';
              str += 'Call duration is ' + result.duration + '. ';
              str += 'Call disposition is ' + result.disposition;
              alert(str);
           };

          //Note that we are using the CTI submodule here
           sforce.console.cti.onCallEnd(callback);
     </script>
</apex:page>
```
