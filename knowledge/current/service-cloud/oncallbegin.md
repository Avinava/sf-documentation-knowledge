---
title: "onCallBegin()"
domain: service-cloud
topic: oncallbegin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.241Z
estimatedTokens: 166
keywords: [onCallBegin, Registers, function, called, call, begins, comes, computer-telephony, integration, CTI, it’s, only, API, version, 24.0, later., Syntax, Arguments, Sample, Code–Visualforce]
---

# onCallBegin()

> Registers a function that is called when a call begins (comes
   in). This method is for computer-telephony integration (CTI);
                it’s only available in API version 24.0 or later.

# onCallBegin()

Registers a function that is called when a call begins (comes in). This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a call begins. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The call object ID of the call which has begun. |

## Code Examples

```
sforce.console.cti.onCallBegin( eventHandler:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
     <script type="text/javascript">

           var callback = function (result) {
              alert('Call ' + result.id + 'Just came in!');
           };

          //Note that we are using the CTI submodule here
           sforce.console.cti.onCallBegin(callback);
     </script>
</apex:page>
```
