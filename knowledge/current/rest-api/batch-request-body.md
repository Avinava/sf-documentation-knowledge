---
title: "Batch Request Body"
domain: rest-api
topic: batch-request-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.156Z
estimatedTokens: 738
keywords: [Batch, collection, subrequests, execute, Composite, resource, Input, Subrequest]
---

# Batch Request Body

> Describes a collection of subrequests to execute with the Composite Batch
  resource.

# Batch Request Body

Describes a collection of subrequests to execute with the Composite Batch resource.

## Batch Collection Input

The request body contains a batchRequests collection that includes subrequests to execute.

Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| batchRequests | Subrequest[] | Collection of subrequests to execute. | Required |
| haltOnError | Boolean | Controls whether a batch continues to process after a subrequest fails. The default is false.If the value is false and a subrequest in the batch doesn’t complete, Salesforce attempts to execute the subsequent subrequests in the batch.If the value is true and a subrequest in the batch doesn’t complete due to an HTTP response in the 400 or 500 range, Salesforce halts execution. It returns an HTTP 412 status code and a BATCH_PROCESSING_HALTED error message for each subsequent subrequest. The top-level request to /composite/batch returns HTTP 200, and the hasErrors property in the response is set to true.This setting is only applied during subrequest processing, and not during initial request deserialization. If an error is detected during deserialization, such as a syntax error in the Subrequest request data, Salesforce returns an HTTP 400 Bad Request error without processing any subrequests, regardless of the value of haltOnError. An example where this could occur is if a subrequest has an invalid method or url field. | Optional |

Root XML Tag

<batch>

JSON example

```

```

## Subrequest

Contains the resource, method, and accompanying information for the subrequest.

Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| binaryPartName | String | The name of the binary part in the multipart request.When multiple binary parts are uploaded in one batch request, this value is used to map a request to its binary part. To prevent name collisions, use a unique value for each binaryPartName property in a batch request.If this value exists, a binaryPartNameAlias value must also exist. | Optional |
| binaryPartNameAlias | String | The name parameter in the Content-Disposition header of the binary body part. Different resources expect different values. See Insert or Update Blob Data.If this value exists, a binaryPartName value must also exist. | Optional |
| method | String | The method to use with the requested resource. For a list of valid methods, refer to the documentation for the requested resource. | Required |
| richInput |  | The input body for the request.The type depends on the request specified in the url property. | Optional |
| url | String | The resource to request.The URL can include any query string parameters that the subrequest supports. The query string must be URL-encoded.You can use parameters to filter response bodies.You cannot apply headers at the subrequest level. | Required |

Root XML Tag

<request>

JSON example

```

```

## Code Examples

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
    "method" : "GET",
    "url" : "v66.0/sobjects/account/001D000000K0fXOIAZ?fields=Name,BillingPostalCode"
}
```

## Related Topics

- Insert or Update Blob Data (atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm)
