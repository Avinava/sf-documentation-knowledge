---
title: "Improve Performance with the Composite Resource"
domain: tooling-api
topic: improve-performance-with-the-composite-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.247Z
estimatedTokens: 813
keywords: [Improve, Performance, Composite, Resource, development, tool, app, built, Tooling, API, executes, series, requests, call, minimizing]
---

# Improve Performance with the Composite Resource

> Use the /composite resource to
      improve the performance of a development tool or app built with Tooling API. This resource
      executes a series of Tooling API requests in a single call, minimizing the number of round
      trips needed between the client and server. You can use the output of one request as the input
      to a subsequent request. The requests’ response bodies and HTTP statuses are returned in a
      single response body. The entire request counts as a single call toward your API limits.
    Available in API version 40.0 and later.

# Improve Performance with the Composite Resource

Use the /composite resource to improve the performance of a development tool or app built with Tooling API. This resource executes a series of Tooling API requests in a single call, minimizing the number of round trips needed between the client and server. You can use the output of one request as the input to a subsequent request. The requests’ response bodies and HTTP statuses are returned in a single response body. The entire request counts as a single call toward your API limits. Available in API version 40.0 and later.

For the most current API limit information, see the Salesforce Developer Limits Quick Reference. Contractual limits may also apply, as per your Salesforce contract.

The requests in a composite call are called subrequests. The subrequests are executed in the context of the same user.

In a subrequest’s body, you specify a reference ID that maps to the subrequest’s response. You can then refer to the ID in the url or body fields of later subrequests by using a JavaScript-like reference notation.

You can specify whether an error in a subrequest causes the entire composite request to roll back or just the subrequests that depend on it. You can also specify headers for each subrequest.

The following resources support composite.

-   All sObject resources (vXX.X/tooling/sobjects/)
-   The Query resource (vXX.X/tooling/query/?q=soql)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

You can have up to 25 subrequests in a single call. Up to five of these subrequests can be query operations.

URI

/vXX.X/composite

Formats

JSON

HTTP method

GET (lists other available composite resources), POST

Authentication

Authorization: Bearer token

Parameters

None required

Request body

[Composite Request Body](atlas.en-us.api_tooling.meta/api_tooling/tooling_requests_composite_composite.htm "Describes a collection of subrequests to execute with the /composite resource.")

Response body

[Composite Response Body](atlas.en-us.api_tooling.meta/api_tooling/tooling_responses_composite_composite.htm "Describes the result of a /composite request.")

## Example

The following composite request body includes five subrequests.

-   The first subrequest creates a MetadataContainer.
-   The second subrequest creates an ApexClassMember.
-   The third subrequest creates a ContainerAsyncRequest and starts the asynchronous deployment process.
-   The fourth subrequest gets the created ContainerAsyncRequest.
-   The fifth subrequest gets the created MetadataContainer.

The five subrequests count as a single call toward the API limit.

```

```

-   **[Composite Request Body](atlas.en-us.api_tooling.meta/api_tooling/tooling_requests_composite_composite.htm)**
    Describes a collection of subrequests to execute with the /composite resource.
-   **[Composite Response Body](atlas.en-us.api_tooling.meta/api_tooling/tooling_responses_composite_composite.htm)**
    Describes the result of a /composite request.

#### See Also

-   [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite.htm "REST API Developer Guide - HTML (New Window)")

## Code Examples

```apex
{
  "allOrNone":false,
  "compositeRequest":
  [
    {
     "method":"POST",
     "body":{
       "Name":"MetadataContainer Unique Name"
     },
     “url":"/services/data/v40.0/tooling/sobjects/metadatacontainer/",
     "referenceId":"metadatacontainer_reference_id"
    },
    {
     "method":"POST",
     "body":{
       "contententityid":"<ID of an ApexClass you want to update>" ,
       "fullname":"ApexClassMemberUniqueFullName",
       "body":"public class Classtest2test {}",
       "MetadataContainerId":"@{metadatacontainer_reference_id.id}"
     },
     "url":"/services/data/v40.0/tooling/sobjects/apexclassmember/",
     "referenceId":"apexclassmember_reference_id"
    },
    {
     "method":"POST",
     "body":{
       "IsCheckOnly":"false",
       "MetadataContainerId":"@{metadatacontainer_reference_id.id}"
     },
     "url":"/services/data/v40.0/tooling/sobjects/containerasyncrequest/",
     "referenceId":"containerasyncrequest_reference_id"
    },
    {
     "method":"GET",
   "url":"/services/data/v40.0/tooling/sobjects/containerasyncrequest/@{containerasyncrequest_reference_id.id}",
     "referenceId":"containerasyncrequest_GET_reference_id"
    },
    {
     "method":"GET",
     "url":"/services/data/v40.0/tooling/sobjects/metadatacontainer/@{metadatacontainer_reference_id.id}",
     "referenceId":"metadatacontainer_GET_reference_id"
    }
  ]
}
```

## Related Topics

- Composite Request
              Body (atlas.en-us.api_tooling.meta/api_tooling/tooling_requests_composite_composite.htm)
- Composite Response
              Body (atlas.en-us.api_tooling.meta/api_tooling/tooling_responses_composite_composite.htm)
- Composite Request Body (atlas.en-us.api_tooling.meta/api_tooling/tooling_requests_composite_composite.htm)
- Composite Response Body (atlas.en-us.api_tooling.meta/api_tooling/tooling_responses_composite_composite.htm)
