---
title: "getCallAttachedData()"
domain: service-cloud
topic: getcallattacheddata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.437Z
estimatedTokens: 316
keywords: [getCallAttachedData, attached, data, call, represented, null, there, isn’t, active, call., returned, JSON, format., computer-telephony, integration, CTI, it’s, only, API, version]
---

# getCallAttachedData()

> Returns the attached data of a call represented by the
      call object ID or null if there isn’t an active call. The data is returned in JSON
      format. This method is for computer-telephony integration (CTI);
                it’s only available in API version 24.0 or later.

# getCallAttachedData()

Returns the attached data of a call represented by the call object ID or null if there isn’t an active call. The data is returned in JSON format. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callObjectId | string | The call object ID of the call that retrieves the attached data. |
| getCallType | boolean | true if the type of call is returned as either ‘INTERNAL,’ ‘INBOUND,’ or ‘OUTBOUND’; false otherwise. This field is only available in API version 29.0 or later. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| data | string | The attached data of a call in JSON format. |
| success | boolean | true if returning the attached data was successful; false if returning the attached data wasn’t successful. |
| type | string | The type of call. Possible values are 'INTERNAL', 'INBOUND', and 'OUTBOUND'. |

## Code Examples

```
sforce.console.cti.getCallAttachedData( callObjectId, getCallType, (optional) callback:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
     <script type="text/javascript">

     /* Note: Open CTI needs to set call type to before getting it, and call type is INTERNAL/INBOUND/OUTBOUND.   
      */

           var callback2 = function (result) {
              alert('Call attached data  is ' + result.data + '
 Call Type is ' + result.type);
     
           };

           /* Retrieving call ID of first call that came in and 
            * calling getCallAttachedData() to retrieve call data.
            */
           var callback1 = function (result) {
                if (result.ids && result.ids.length > 0) {
                  sforce.console.cti.getCallAttachedData(result.ids[0], callback2, {getCallType:true});
                }
           };

          //Note that we are using the CTI submodule here
          function testGetCallAttachedData() {
            sforce.console.cti.getCallObjectIds(callback1);
         };

     </script>
  <h1>CTI</h1>
   <button onclick="testGetCallAttachedData()">getAttachedData</button>
</apex:page>
```
