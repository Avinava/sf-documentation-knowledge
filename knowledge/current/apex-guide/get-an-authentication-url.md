---
title: "Get an Authentication URL"
domain: apex-guide
topic: get-an-authentication-url
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.846Z
keywords: [Get, Authentication, URL, See]
---

# Get an Authentication URL

# Get an Authentication URL

Call a method to get an authentication URL.

Call [getOAuthCredentialAuthUrl(requestBody)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm#apex_ConnectAPI_NamedCredentials_getOAuthCredentialAuthUrl_1) to retrieve the URL that a user must visit to begin an authentication flow, ultimately returning authentication tokens to Salesforce. Accepts input parameters representing a specific external credential and, optionally, a named principal. Use this method as part of building a customized or branded user interface to help users initiate authentication.

```

```

#### See Also

-   [*Apex Reference Guide*: NamedCredentials Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_NamedCredentials_static_methods.htm "Apex Reference Guide: NamedCredentials Methods - HTML (New Window)")