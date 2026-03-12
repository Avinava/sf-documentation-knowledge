---
title: "Limit Info Header"
domain: rest-api
topic: limit-info-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:35.016Z
estimatedTokens: 299
keywords: [Limit, Info, REST, API, except, calls, Versions, URI, count, towards, org’s, monitor, limits]
---

# Limit Info Header

> This response header is returned in each request to REST API (except for calls to the Versions URI, /, which do not count towards your org’s limit). You can use the information to monitor API limits.

# Limit Info Header

This response header is returned in each request to REST API (except for calls to the [Versions](atlas.en-us.api_rest.meta/api_rest/resources_versions.htm "Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.") URI, /, which do not count towards your org’s limit). You can use the information to monitor API limits.

## Header Field Name and Values

Field name

Sforce-Limit-Info

Field values

-   api-usage—Specifies the daily API usage for the organization against which the call was made. The first number is the number of API calls used, and the second number is the API limit for the organization.

The values returned in the header represent standard REST API limits and usage, except when calls are made using Salesforce Functions. Calls made using Salesforce Functions draw from a Functions-specific allocation.

Example

Sforce-Limit-Info: api-usage=10018/100000

#### See Also

-   [*Salesforce Functions Guide*: Functions Limits](https://developer.salesforce.com/docs/platform/functions/guide/limits.html "Salesforce Functions Guide: Functions Limits - HTML (New Window)")

## Related Topics

- Versions (atlas.en-us.api_rest.meta/api_rest/resources_versions.htm)
