---
title: "Composite Subrequest"
domain: rest-api
topic: composite-subrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.425Z
estimatedTokens: 1245
keywords: [Composite, Subrequest, composite, subrequest, describes, execute, Graph, resource., Examples, Usage, Results]
---

# Composite Subrequest

> The composite subrequest describes a subrequest to execute with the Composite Graph
		resource.

# Composite Subrequest

The composite subrequest describes a subrequest to execute with the Composite Graph resource.

## Properties

| Name | Type | Description |
| --- | --- | --- |
| body | Varies | Optional.The input body for the subrequest.The contents depend on the request specified in the url property. Referenceable types are DateTime, String, Boolean, Byte, Character, Short, Integer, Long, Double, and Float. |
| method | String | Required.The method to use with the requested resource. Possible values are DELETE, GET, PATCH, and POST (case-sensitive). For a list of valid methods, refer to the documentation for the requested resource.This method is distinct from the POST method that is used to submit the composite graph request. The method specified here is the one that operates (within the graph) on the resource specified in the url.If the url is /services/data/vXX.X/sobject/sObject then POST is supported. (See sObject Basic Information.)If the url is /services/data/vXX.X/sobject/sObject/id then DELETE, GET, and PATCH are supported. (See sObject Rows.)If the url is /services/data/vXX.X/sobject/sObject/customFieldName/externalId then DELETE, GET, PATCH, and POST are supported. You can use PATCH to upsert via an external ID). See Insert or Update (Upsert) a Record Using an External ID. |
| referenceId | String | Required.Reference ID that maps to the subrequest’s response and can be used to reference the response in later subrequests. You can reference the referenceId in either the body or URL of a subrequest. Use this syntax to include a reference: @{referenceId.FieldName}.You can use two operators with the reference ID.The . operator references a field on a JSON object in the response. For example, say you retrieve an account record’s data in one subrequest and assign the reference ID Account1Data to the output. You can refer to the account’s name in later subrequests like this: @{Account1Data.Name}.The [] operator indexes a JSON collection in the response. For example, say you request basic account information with the sObject Basic Information resource in one subrequest and assign the reference ID AccountInfo to the output. Part of the response includes a collection of recently created accounts. You can refer to the ID of the first account in the recent items collection like this: @{AccountInfo.recentItems[0].Id}.You can use each operator recursively as long as it makes sense in the context of the response. For example, to refer to the billing city component of an account’s compound address field: @{NewAccount.BillingAddress.city}.referenceId is case-sensitive, so pay close attention to the case of the fields you’re referring to. See Usage.The referenceId must start with a letter or a number.The referenceId must not contain anything besides letters, numbers, or underscores (’_’). |
| url | String | Required.The resource to request.The URL can include any query string parameters that the subrequest supports. The query string must be URL-encoded.You can use parameters to filter response bodies.Only the following URLs are supported:/services/data/vXX.X/sobject/sObject/services/data/vXX.X/sobject/sObject/id/services/data/vXX.X/sobject/sObject/customFieldName/externalIdThe version number XX.X must be 50.0 or later. |

## Examples

The following is an example of a POST subrequest.

```

```

The following is an example of a GET subrequest.

```

```

## Usage

Because referenceId is case-sensitive, it’s important to note the case of the fields that you’re referring to. The same field can use different cases in different contexts. For example, when you create a record, the ID field appears as id in the response. But when you access a record’s data with the sObject Rows resource, the ID field appears as Id. In the Example 2, the @{refAccount.id} reference is valid because refAccount refers to the response from a POST like that shown in Example 1. If you use Id instead (mixed case rather than all lowercase), as in @{refAccount.Id}, you get an error when sending the request because the reference ID uses the wrong case.

When processing a composite graph request, if the number of graph failures exceeds the maximum limit of 14, processing is halted for the remaining graphs in the request. The response includes errors for the failed graphs, and the status for the remaining graphs is shown as PROCESSING\_HALTED. See [Composite Graph Limits](atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_limits.htm "These limits are specific to composite graph resources. Review the platform API limits and allocations for a comprehensive list of all applicable limits to composite graph API resources.") for the current limits.

## Results

Results for subrequests are the same as that for other Composite requests. See [Composite Subrequest Result](atlas.en-us.api_rest.meta/api_rest/resources_composite_subrequest_result.htm "The composite subrequest result describes the result for a subrequest.").

## Code Examples

```
{
   "body" : {
     "Name" : "Sample Account"
   },
   "method" : "POST",
   "referenceId" : "refAccount",
   "url" : "/services/data/v66.0/sobjects/Account"
}
```

```
{
   "method" : "GET",
   "referenceId" : "NewAccountFields",
   "url" : "/services/data/v66.0/sobjects/Account/@{refAccount.id}"
}
```

## Related Topics

- sObject Basic
											Information (atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm)
- sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm)
- Insert or Update (Upsert) a Record Using an
												External ID (atlas.en-us.api_rest.meta/api_rest/dome_upsert.htm)
- Composite Graph Limits (atlas.en-us.api_rest.meta/api_rest/resources_composite_graph_limits.htm)
- Composite Subrequest Result (atlas.en-us.api_rest.meta/api_rest/resources_composite_subrequest_result.htm)
