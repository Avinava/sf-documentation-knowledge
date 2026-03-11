---
title: "getMessage(communityId, messageId)"
domain: apex-reference
topic: getmessagecommunityid-messageid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getMessage, communityId, messageId, Get, message, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getMessage(communityId, messageId)

> Get a message from an Experience Cloud site.

### getMessage(communityId, messageId)

Get a message from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage getMessage(String communityId, String messageId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

messageId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the message.

#### Return Value

Type:[ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")