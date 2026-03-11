---
title: "searchMessages(communityId, q)"
domain: apex-reference
topic: searchmessagescommunityid-q
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [searchMessages, communityId, Get, messages, match, search, criteria, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# searchMessages(communityId, q)

> Get messages that match the search criteria in an
      Experience Cloud site.

### searchMessages(communityId, q)

Get messages that match the search criteria in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage searchMessages(String communityId, String q)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")