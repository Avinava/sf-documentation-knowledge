---
title: "getCallObjectIds()"
domain: service-cloud
topic: getcallobjectids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.556Z
estimatedTokens: 222
keywords: [getCallObjectIds, any, active, call, IDs, order, they, arrived, there, aren’t, calls, computer-telephony, integration, CTI, it’s]
---

# getCallObjectIds()

> Returns any active call object IDs in the order in
            which they arrived or null if there aren’t any active calls. This method is for computer-telephony integration (CTI);
                it’s only available in API version 24.0 or later.

# getCallObjectIds()

Returns any active call object IDs in the order in which they arrived or null if there aren’t any active calls. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| ids | string | The call object IDs of active calls or null if no call is active. |
| success | boolean | true if returning the active call object IDs was successful; false if returning the active call object IDs wasn’t successful. |

## Code Examples

```
sforce.console.cti.getCallObjectIds( (optional) callback:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
     <script type="text/javascript">

          var callback = function (result) {
              alert('Active call object ids: ' + result.ids);
          };

          //Note that we are using the CTI submodule here
          sforce.console.cti.getCallObjectIds(callback);
     </script>
</apex:page>
```
