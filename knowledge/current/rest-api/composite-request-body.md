---
title: "Composite Request Body"
domain: rest-api
topic: composite-request-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.171Z
keywords: [Composite, Request, Body, Collection, Input, Subrequest, Note]
---

# Composite Request Body

# Composite Request Body

Describes a collection of subrequests to execute with the Composite resource.

## Composite Collection Input

The request body contains an allOrNone flag that specifies how to roll back errors and a compositeRequest collection that includes subrequests to execute.

Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| allOrNone | Boolean | Specifies what to do when an error occurs while processing a subrequest. If the value is true, the entire composite request is rolled back. The top-level request returns HTTP 200 and includes responses for each subrequest.If the value is false, the remaining subrequests that don’t depend on the failed subrequest are executed. Dependent subrequests aren’t executed.In either case, the top-level request returns HTTP 200 and includes responses for each subrequest.NoteIf the Composite request includes an sObject Collections request, the sObject Collections request’s allOrNone parameter can also affect the results. See allOrNone Parameters in Composite and Collections Requests. | Optional |
| collateSubrequests | Boolean | Controls whether the API collates unrelated subrequests to bulkify them (true) or not (false).When subrequests are collated, the processing speed is faster, but the order of execution is not guaranteed (unless there is an explicit dependency between the subrequests).If collation is disabled, then the subrequests are executed in the order in which they are received.Subrequests that contain valid HTTP headers are not collated.In API version 49.0 and later, the default value is true. In version 48.0, the default value is false.Subrequests can be collated if they meet these conditions:The HTTP methods are the same.The API versions of the resources are the same.The parents of the resources are /sobjects resources.No more than five sObjects resources are present across a grouping of subrequests.NoteCollation can cause issues if there are implicit but not explicit dependencies between items. For example, consider a request that createsan Accounta Contact related to the Accounta custom object that has a trigger dependent on the account name.The Account and the custom object are collated, since there is no explicit dependency. But the custom object’s trigger may fail because there is no guarantee that the Account is created first.If you have relationships like this where you need to control the order of execution, set collateSubrequests to false.Available in API version 48.0 and later. (In earlier versions, subrequests cannot be collated.) | Optional |
| compositeRequest | Composite Subrequest[] | Collection of subrequests to execute. | Required |

JSON example

```

```

## Composite Subrequest

Contains the resource, method, headers, body, and reference ID for the subrequest.

Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| body | Varies | The input body for the subrequest.The type depends on the request specified in the url property. The referenceable types are DateTime, String, Boolean, Byte, Character, Short, Integer, Long, Double, and Float. | Optional |
| httpHeaders | Map<String, String> | Request headers and their values to include with the subrequest. You can include any header supported by the requested resource except for the following three headers.AcceptAuthorizationContent-TypeSubrequests inherit these three header values from the top-level request. Don’t specify these headers in a subrequest. If you do, the top-level request fails and returns an HTTP 400 response.NoteSubrequests that contain valid HTTP headers cannot be collated, which slows the processing speed of the request. | Optional |
| method | String | The method to use with the requested resource. Possible values are POST, PUT, PATCH, GET, and DELETE (case-sensitive). For a list of valid methods, refer to the documentation for the requested resource. | Required |
| referenceId | String | Reference ID that maps to the subrequest’s response and can be used to reference the response in later subrequests. You can reference the referenceId in either the body or URL of a subrequest. Use this syntax to include a reference: @{referenceId.FieldName}.You can use two operators with the reference ID.The . operator references a field on a JSON object in the response. For example, let’s say you retrieve an account record’s data in one subrequest and assign the reference ID Account1Data to the output. You can refer to the account’s name in later subrequests like this: @{Account1Data.Name}.The [] operator indexes a JSON collection in the response. For example, let’s say you request basic account information with the sObject Basic Information resource in one subrequest and assign the reference ID AccountInfo to the output. Part of the response includes a collection of recently created accounts. You can refer to the ID of the first account in the recent items collection like this: @{AccountInfo.recentItems[0].Id}.You can use each operator recursively as long as it makes sense in the context of the response. For example, to refer to the billing city component of an account’s compound address field: @{NewAccount.BillingAddress.city}.referenceId is case-sensitive, so pay close attention to the case of the fields you’re referring to. See Usage.NoteThe referenceId must start with a letter or a number.The referenceId must not contain anything besides letters, numbers, or underscores (’_’). | Required |
| url | String | The resource to request.The URL can include any query string parameters that the subrequest supports. The query string must be URL-encoded.You can use parameters to filter response bodies.The URL must start with /services/data/vXX.X/. | Required |

JSON examples

**Example 1**

```

```

**Example 2**

```

```

**Example 3**

```

```

**Example 4**

```

```

Usage

Because referenceId is case-sensitive, it’s important to note the case of the fields that you’re referring to. The same field can use different cases in different contexts. For example, when you create a record, the ID field appears as id in the response. But when you access a record’s data with the sObject Rows resource, the ID field appears as Id. In Example 3, the @{refAccount.id} reference is valid because refAccount refers to the response from a POST like that shown in Example 2. If you use Id instead (mixed case rather than all lowercase), as in @{refAccount.Id}, you get an error when sending the request because the reference ID uses the wrong case.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

You can have up to 25 subrequests in a single call. Up to 5 of these subrequests can be sObject Collections or query operations, including Query and QueryAll requests.