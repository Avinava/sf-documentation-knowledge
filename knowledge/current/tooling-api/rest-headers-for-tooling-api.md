---
title: "REST Headers for Tooling API"
domain: tooling-api
topic: rest-headers-for-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:44.246Z
estimatedTokens: 334
keywords: [REST, Headers, Tooling, API, provides, subset, headers, API.]
---

# REST Headers for Tooling API

> Tooling API provides a subset of the REST headers
            available in REST API.

# REST Headers for Tooling API

Tooling API provides a subset of the REST headers available in REST API.

Control the behavior of REST requests:

-   **[Call Options Header](atlas.en-us.api_tooling.meta/api_tooling/headers_calloptions.htm)**
    Specifies options for the client you’re using to access REST API resources. For example, you can provide a default namespace prefix so that you don’t need to specify the prefix in your code.
-   **[Limit Info Header](atlas.en-us.api_tooling.meta/api_tooling/headers_api_usage.htm)**
    This response header is returned in each request to REST API (except for calls to the Versions URI, /, which do not count towards your org’s limit). You can use the information to monitor API limits.
-   **[Package Version Header](atlas.en-us.api_tooling.meta/api_tooling/headers_packageversion.htm)**
    Specifies the version of each package referenced by a client. A package version is a number that identifies the set of components and behavior contained in a package. This header can also be used to specify a package version when making calls to an Apex REST web service.
-   **[Query Options Header](atlas.en-us.api_tooling.meta/api_tooling/headers_queryoptions.htm)**
    Specifies options used in a query, such as the query results batch size. Use this request header with the Query resource.

## Related Topics

- Call Options Header (atlas.en-us.api_tooling.meta/api_tooling/headers_calloptions.htm)
- Limit Info Header (atlas.en-us.api_tooling.meta/api_tooling/headers_api_usage.htm)
- Package Version Header (atlas.en-us.api_tooling.meta/api_tooling/headers_packageversion.htm)
- Query Options Header (atlas.en-us.api_tooling.meta/api_tooling/headers_queryoptions.htm)
