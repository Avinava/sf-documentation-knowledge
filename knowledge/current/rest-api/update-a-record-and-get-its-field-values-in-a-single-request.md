---
title: "Update a Record and Get Its Field Values in a Single
        Request"
domain: rest-api
topic: update-a-record-and-get-its-field-values-in-a-single-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.827Z
estimatedTokens: 207
keywords: [Record, Composite, Batch, resource, execute, multiple, requests, API, call]
---

# Update a Record and Get Its Field Values in a Single
        Request

> Use the Composite Batch resource to execute multiple requests in a single API
        call.

# Update a Record and Get Its Field Values in a Single Request

Use the Composite Batch resource to execute multiple requests in a single API call.

The following example updates the name on an account and gets some of the account’s field values in a single request. The batch.json file contains the subrequest data.

Update a record and query its name and billing postal code in a single request

```

```

Request body batch.json file

```

```

Response body after successfully executing the subrequests

```

```

#### See Also

-   [Composite Batch](atlas.en-us.api_rest.meta/api_rest/resources_composite_batch.htm "Executes up to 25 subrequests in a single request. The response bodies and HTTP statuses of the subrequests in the batch are returned in a single response body. Each subrequest counts against rate limits.")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/batch/ -H "Authorization: Bearer token -H "Content-Type: application/json" -d "@batch.json"
```

```
{
"batchRequests" : [
    {
    "method" : "PATCH",
    "url" : "v66.0/sobjects/account/001D000000K0fXOIAZ",
    "richInput" : {"Name" : "NewName"}
    },{
    "method" : "GET",
    "url" : "v66.0/sobjects/account/001D000000K0fXOIAZ?fields=Name,BillingPostalCode"
    }]
}
```

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

## Related Topics

- Composite Batch (atlas.en-us.api_rest.meta/api_rest/resources_composite_batch.htm)
