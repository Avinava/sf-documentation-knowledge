---
title: "setCallObjectIds()"
domain: service-cloud
topic: setcallobjectids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.413Z
estimatedTokens: 178
keywords: [setCallObjectIds, call, IDs, ascending, order, arrival., only, API, version, 31.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCallObjectIds()

> Sets call object IDs, in ascending order of arrival.
                This method is only available in API version 31.0 or
        later.

# setCallObjectIds()

Sets call object IDs, in ascending order of arrival. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callObjectId | array | An array of string IDs specifying the calls to set. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the call IDs was successful; false otherwise. |

## Code Examples

```
sforce.console.cti.setCallObjectIds( callObjectIds:Array, callback:Function )
```

```
<apex:page>
    <A HREF="#" onClick="testSetCallObjectIds();return false">
             Click here to set call object Ids</A>

     <apex:includeScript value="/support/console/66.0/integration.js"/>
     <script type="text/javascript">

          function checkResult(result) {
              if (result.success) {
                    alert('Call object ids set successfully!');
              } else {
                    alert('Call object ids cannot be set!');
              }
          }

          function testSetCallObjectIds() {
              sforce.console.cti.setCallObjectIds(['call.1', 'call.2', 'call.3'], checkResult);
          }
     </script>
</apex:page>
```
