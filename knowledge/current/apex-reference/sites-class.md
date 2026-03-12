---
title: "Sites Class"
domain: apex-reference
topic: sites-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.601Z
estimatedTokens: 658
namespace: ConnectApi
keywords: [Sites, Search, Experience, Cloud, site, searchSite, siteId, queryTerm, pageToken, pageSize, language, API, Version, Guest, Users]
---

# Sites Class

> Search an Experience Cloud site.

**Namespace:** `ConnectApi`

# Sites Class

Search an Experience Cloud site.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Sites Methods

These methods are for Sites. All methods are static.

-   **[searchSite(siteId, queryTerm, pageToken, pageSize, language)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Sites_static_methods.htm#apex_ConnectAPI_Sites_searchSite_1)**
    Search an Experience Cloud site.

### searchSite(siteId, queryTerm, pageToken, pageSize, language)

Search an Experience Cloud site.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SiteSearchResult searchSite(String siteId, String queryTerm, String pageToken, Integer pageSize, String language)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

queryTerm

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

White-space separated words used to search for relevant content. Provide a maximum of 1024 characters, composed of up to 32 words and white spaces. Logical operators aren’t supported.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 240. If you pass in null, the default size is 25.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the context user. If unspecified or if the specified language locale isn’t available, the default value is en\_US.

#### Return Value

Type: [ConnectApi.SiteSearchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_site_search_result.htm "Site search result.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- searchSite(siteId, queryTerm, pageToken, pageSize, language) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Sites_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.SiteSearchResult (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_site_search_result.htm)
