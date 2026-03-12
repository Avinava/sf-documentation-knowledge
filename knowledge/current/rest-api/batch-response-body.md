---
title: "Batch Response Body"
domain: rest-api
topic: batch-response-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.032Z
estimatedTokens: 202
keywords: [Batch, result, Composite, Results, Subrequest]
---

# Batch Response Body

> Describes the result of a Composite Batch
  request.

# Batch Response Body

Describes the result of a Composite Batch request.

## Batch Results

Properties

| Name | Type | Description |
| --- | --- | --- |
| hasErrors | Boolean | true if at least one of the results in the result set is an HTTP status code in the 400 or 500 range; false otherwise. |
| results | Subrequest Result[] | Collection of subrequest results. |

JSON example

```

```

## Subrequest Result

Properties

| Name | Type | Description |
| --- | --- | --- |
| result | The type depends on the response type of the subrequest.ImportantIf the result is an error, the type is a collection containing the error message and error code. | The response body of this subrequest. |
| statusCode | Integer | An HTTP status code indicating the status of this subrequest. |

JSON example

```

```

## Code Examples

```
{
   "hasErrors" : false,
   "results" : [{
      "statusCode" : 204,
      "result" : null
      },{
      "statusCode" : 200,
      "result": {
         "attributes" : {
            "type" : "Account",
            "url" : "/services/data/v66.0/sobjects/Account/001D000000K0fXOIAZ"
         },
         "Name" : "NewName",
         "BillingPostalCode" : "94105",
         "Id" : "001D000000K0fXOIAZ"
      }
   }]
}
```

```
{
   "attributes" : {
      "type" : "Account",
      "url" : "/services/data/v66.0/sobjects/Account/001D000000K0fXOIAZ"
   },
   "Name" : "NewName",
   "BillingPostalCode" : "94015",
   "Id" : "001D000000K0fXOIAZ"
}
```
