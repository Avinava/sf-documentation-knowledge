---
title: "getCallAttachedData()"
domain: service-cloud
topic: getcallattacheddata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.007Z
keywords: [getCallAttachedData, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getCallAttachedData()

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