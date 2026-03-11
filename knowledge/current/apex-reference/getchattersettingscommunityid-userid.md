---
title: "getChatterSettings(communityId, userId)"
domain: apex-reference
topic: getchattersettingscommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.471Z
keywords: [getChatterSettings, communityId, userId, Get, default, Chatter, settings, user., API, Version, Requires, Signature, Parameters, Return, Value]
---

# getChatterSettings(communityId, userId)

> Get the default Chatter settings for a user.

### getChatterSettings(communityId, userId)

Get the default Chatter settings for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserChatterSettings getChatterSettings(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

#### Return Value

Type: [ConnectApi.​User​​ChatterSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_chatter_settings.htm "User’s global Chatter settings.")