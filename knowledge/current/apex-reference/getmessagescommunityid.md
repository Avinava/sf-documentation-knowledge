---
title: "getMessages(communityId)"
domain: apex-reference
topic: getmessagescommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getMessages, communityId, Get, most, recent, messages, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getMessages(communityId)

> Get the most recent messages from an Experience Cloud
      site.

### getMessages(communityId)

Get the most recent messages from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessagePage getMessages(String communityId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​Chatter​MessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")