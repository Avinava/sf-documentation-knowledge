---
title: "Generic Batch Input"
domain: chatterapi
topic: generic-batch-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.795Z
estimatedTokens: 611
keywords: [Generic, Batch, Input]
---

# Generic Batch Input

> Generic batch input.

# Generic Batch Input

Generic batch input.

Root XML Tag

<request>

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| binaryPartName | String | The name of the binary part in the multipart request.When there are multiple binary parts uploaded in one batch request, this value is used to map a request to its binary part. To prevent name collisions, use a unique value for each binaryPartName property in a batch request.This property is optional. If this value exists, a binaryPartNameAlias value must also exist. | 28.0 |
| binaryPartNameAlias | String | The name parameter in the Content-Disposition header of the binary body part. Different resources expect different values. See Uploading Binary Files.This property is optional. If this value exists, a binaryPartName value must also exist. | 28.0 |
| method | String | One of these HTTP methods:HttpDelete—Returns HTTP 204 on success. Response body or output class is empty.HttpGet—Returns HTTP 200 on success.HttpHead—Returns HTTP 200 on success. Response body or output class is empty.HttpPatch—Returns HTTP 200 on success or HTTP 204 if the response body or output class is empty.HttpPost—Returns HTTP 201 on success or HTTP 204 if the response body or output class is empty. Exceptions are the batch posting resources and methods, which return HTTP 200 on success.HttpPut—Return HTTP 200 on success or HTTP 204 if the response body or output class is empty. | 28.0 |
| richInput |  | The input body for the request.The type depends on the request specified in the url property.This property is optional. | 28.0 |
| url | String | The Connect REST API resource to request. This value is called a subrequest.The subrequest URL can start with:/services/data/version, for example, /services/data/v66.0​​​/chatter/users/me./version, for example, /v66.0/chatter​​​/users/me. The version number must be less than or equal to the version of the request given to the /connect/batch request URL.Additional information about subrequests:The URL can include any query string parameters that the subrequest supports. The query string must be URL-encoded.You can use parameters to filter response bodies.You cannot apply headers at the subrequest level. | 28.0 |

#### See Also

-   [Generic Batch Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_collection_input.htm "Generic batch collection input.")

## Code Examples

```
{
   "method" : "Get",
   "url" : "/v28.0/chatter/feeds/news/me"
}
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- filter
                                          response bodies (atlas.en-us.chatterapi.meta/chatterapi/connect_returns_filters.htm)
- Generic Batch Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_collection_input.htm)
