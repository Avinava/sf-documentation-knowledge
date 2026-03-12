---
title: "Limit Info Header"
domain: tooling-api
topic: limit-info-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:44.230Z
estimatedTokens: 195
keywords: [Limit, Info, Header, response, header, returned, request, REST, API, except, calls, Versions, URI, which, count, towards, org’s, limit, information, monitor]
---

# Limit Info Header

> This response header is returned in each request to REST API (except for calls to the Versions URI, /, which do not count towards your org’s limit). You can use the information to monitor API limits.

# Limit Info Header

This response header is returned in each request to REST API (except for calls to the Versions URI, /, which do not count towards your org’s limit). You can use the information to monitor API limits.

## Header Field Name and Values

Field name

Sforce-Limit-Info

Field values

-   api-usage—Specifies the daily API usage for the organization against which the call was made. The first number is the number of API calls used, and the second number is the API limit for the organization.

The values returned in the header represent standard REST API limits and usage, except when calls are made using Salesforce Functions. Calls made using Salesforce Functions draw from a Functions-specific allocation.

Example

Sforce-Limit-Info: api-usage=10018/100000
