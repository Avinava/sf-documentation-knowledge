---
title: "REST Overview"
domain: tooling-api
topic: rest-overview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:36.918Z
keywords: [REST, Overview, See]
---

# REST Overview

# REST Overview

Use REST if you’re using a language that isn’t strongly typed, like JavaScript.

For details on usage, syntax, and authentication, see the REST API Developer Guide.

-   **[REST Resources](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources.htm)**  
    REST resources give you access to Tooling API objects. When querying Tooling API objects using REST resources, keep in mind that the user permissions needed for access vary from endpoint to endpoint and from object to object. Check the description of the endpoint and object you want to use to determine user permission requirements for access.
-   **[REST Resources for Unit Testing](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources_testing.htm)**  
    Retrieve and execute Apex and flow tests in one place. Get a complete view of your tests by using the Test Discovery API. Execute tests asynchronously or synchronously by using the Test Runner API. These APIs are both Tooling API REST resources.
-   **[REST Resource Examples](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resource_examples.htm)**  
    Robust examples using REST resources in the Tooling API.
-   **[REST Headers](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_headers.htm)**  
    Use REST if you’re using a language that isn’t strongly typed, like JavaScript.
-   **[REST Header Examples](atlas.en-us.api_tooling.meta/api_tooling/intro_rest_header_examples.htm)**  
    Use these examples to understand REST headers.
-   **[Improve Performance with the Composite Resource](atlas.en-us.api_tooling.meta/api_tooling/tooling_resources_composite_composite.htm)**  
    Use the /composite resource to improve the performance of a development tool or app built with Tooling API. This resource executes a series of Tooling API requests in a single call, minimizing the number of round trips needed between the client and server. You can use the output of one request as the input to a subsequent request. The requests’ response bodies and HTTP statuses are returned in a single response body. The entire request counts as a single call toward your API limits. Available in API version 40.0 and later.

#### See Also

-   [Tooling API Objects](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_list.htm)
    
-   [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/ "REST API Developer Guide - HTML (New Window)")