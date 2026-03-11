---
title: "getCommunity(communityId)"
domain: apex-reference
topic: getcommunitycommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.852Z
keywords: [getCommunity, communityId, Get, information, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommunity(communityId)

> Get information about an Experience Cloud site.

### getCommunity(communityId)

Get information about an Experience Cloud site.

#### API Version

28.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Community getCommunity(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an Experience Cloud site. You can’t specify null or internal.

#### Return Value

Type: [ConnectApi.​Community](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_community.htm "Experience Cloud site.")