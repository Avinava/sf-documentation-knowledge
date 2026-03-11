---
title: "Headers"
domain: rest-api
topic: headers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:44:25.046Z
keywords: [Headers]
---

# Headers

# Headers

REST API supports several standard and custom HTTP headers, including both request headers and response headers.

-   **[Assignment Rule Header](atlas.en-us.api_rest.meta/api_rest/headers_autoassign.htm)**  
    The Assignment Rule header is a request header applied when creating or updating Accounts, Cases, or Leads. If enabled, the active assignment rules are used. If disabled, the active assignment rules are not applied. If a valid AssignmentRule ID is provided, the AssignmentRule is applied. If the header is not provided with a request, REST API defaults to using the active assignment rules.
-   **[Call Options Header](atlas.en-us.api_rest.meta/api_rest/headers_calloptions.htm)**  
    Specifies options for the client you’re using to access REST API resources. For example, you can provide a default namespace prefix so that you don’t need to specify the prefix in your code.
-   **[Compression Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_compression.htm)**  
    Use a compression header to compress a REST API request or response. Compression reduces the bandwidth required for a request, although it requires more processing power at your client. In most cases, this tradeoff benefits the overall performance of your application.
-   **[Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm)**  
    Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.
-   **[Duplicate Rule Header](atlas.en-us.api_rest.meta/api_rest/headers_duplicaterules.htm)**  
    Configure options for duplicate rules. Salesforce uses duplicate rules to see if the record that is being created, updated, or upserted is a duplicate of an existing record. Duplicate rules are part of Duplicate Management.
-   **[Limit Info Header](atlas.en-us.api_rest.meta/api_rest/headers_api_usage.htm)**  
    This response header is returned in each request to REST API (except for calls to the Versions URI, /, which do not count towards your org’s limit). You can use the information to monitor API limits.
-   **[MRU Header](atlas.en-us.api_rest.meta/api_rest/headers_mru.htm)**  
    Defines if the record that is created, updated, upserted, or retrieved updates the list of most recently used (MRU) items. MRU items are shown in the Recent Items section of the sidebar in the Salesforce user interface. This header is available in API version 60.0 and later.
-   **[Package Version Header](atlas.en-us.api_rest.meta/api_rest/headers_packageversion.htm)**  
    Specifies the version of each package referenced by a client. A package version is a number that identifies the set of components and behavior contained in a package. This header can also be used to specify a package version when making calls to an Apex REST web service.
-   **[Query Options Header](atlas.en-us.api_rest.meta/api_rest/headers_queryoptions.htm)**  
    Specifies options used in a query, such as the query results batch size. Use this request header with the Query resource.
-   **[Warning Header](atlas.en-us.api_rest.meta/api_rest/headers_warning.htm)**  
    This header is returned if there are warnings, such as the use of a deprecated version of the API.