---
title: "Composite Request Body"
domain: tooling-api
topic: composite-request-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.242Z
estimatedTokens: 793
keywords: [Composite, collection, subrequests, execute, resource, Input, Subrequest, Usage]
---

# Composite Request Body

> Describes a collection of subrequests to execute with the /composite resource.

# Composite Request Body

Describes a collection of subrequests to execute with the /composite resource.

## Composite Collection Input

The request body contains an allOrNone flag that specifies how to roll back errors and a compositeRequest collection that includes subrequests to execute.

Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| allOrNone | Boolean | Specifies what to do when an error occurs while processing a subrequest. If the value is true, the entire composite request is rolled back.If the value is false, the remaining subrequests that don’t depend on the failed subrequest are executed. Dependent subrequests aren’t executed.In either case, the top-level request returns HTTP 200 and includes responses for each subrequest. | Optional |
| compositeRequest | Composite Subrequest[] | Collection of subrequests to execute. | Required |

JSON example

```

```

## Composite Subrequest

Contains the resource, method, headers, body, and reference ID for the subrequest.

Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| body | The type depends on the request specified in the url property. | The input body for the subrequest. | Optional |
| httpHeaders | Map<String, String> | Request headers and their values to include with the subrequest. You can include any header supported by the requested resource, except for the following headers because the subrequests inherit their values from the top-level request.AcceptAuthorizationContent-TypeIf you specify these headers in a subrequest, the top-level request fails and returns an HTTP 400 response. | Optional |
| method | String | The method to use with the requested resource. Possible values are POST, PUT, PATCH, GET, and DELETE (case sensitive). For a list of valid methods, see the documentation for the requested resource. | Required |
| referenceId | String | Reference ID that maps to the subrequest’s response and can be used to reference the response in later subrequests.You can include the referenceId in either the body or URL of a subrequest. Use this syntax to include a reference: @{referenceId.FieldName}.The referenceId is case sensitive.You can use two operators with the reference ID.The . operator references a field on a JSON object in the response. The [] operator indexes a JSON collection in the response. You can use each operator recursively as long as it makes sense in the context of the response. | Required |
| url | String | The resource to request.The URL can include any query string parameters that the subrequest supports. The query string must be URL-encoded.The URL must start with /services/data/vXX.X/tooling.You can use parameters to filter response bodies. | Required |

## Usage

Because referenceId is case sensitive, make sure that the case of the field that you’re referring to is correct. The same field can use different cases in different contexts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

You can have up to 25 subrequests in a single call. Up to five of these subrequests can be query operations.

## Code Examples

```
{
   "allOrNone" : true,
   "compositeRequest" : [{
      Composite Subrequest
      },{
      Composite Subrequest
      },{
      Composite Subrequest
   }]
}
```
