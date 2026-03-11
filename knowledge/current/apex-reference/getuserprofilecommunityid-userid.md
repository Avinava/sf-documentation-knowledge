---
title: "getUserProfile(communityId, userId)"
domain: apex-reference
topic: getuserprofilecommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [getUserProfile, communityId, userId, Get, user, profile, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getUserProfile(communityId, userId)

> Get the user profile of the context user.

### getUserProfile(communityId, userId)

Get the user profile of the context user.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserProfile getUserProfile(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.UserProfile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_profile.htm "Details necessary to render a view of a user profile.")