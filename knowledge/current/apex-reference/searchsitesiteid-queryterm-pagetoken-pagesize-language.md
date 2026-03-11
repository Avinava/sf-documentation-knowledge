---
title: "searchSite(siteId, queryTerm, pageToken, pageSize,
      language)"
domain: apex-reference
topic: searchsitesiteid-queryterm-pagetoken-pagesize-language
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.779Z
keywords: [searchSite, siteId, queryTerm, pageToken, pageSize, language, Search, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# searchSite(siteId, queryTerm, pageToken, pageSize,
      language)

> Search an Experience Cloud site.

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