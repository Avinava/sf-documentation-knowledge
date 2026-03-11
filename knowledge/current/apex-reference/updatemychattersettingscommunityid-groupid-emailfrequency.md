---
title: "updateMyChatterSettings(communityId, groupId,
   emailFrequency)"
domain: apex-reference
topic: updatemychattersettingscommunityid-groupid-emailfrequency
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [updateMyChatterSettings, communityId, groupId, emailFrequency, Update, context, user’s, email, frequency, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateMyChatterSettings(communityId, groupId,
   emailFrequency)

> Update the context user’s email frequency for a group.

### updateMyChatterSettings(communityId, groupId, emailFrequency)

Update the context user’s email frequency for a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupChatterSettings updateMyChatterSettings(String communityId, String groupId, ConnectApi.GroupEmailFrequency emailFrequency)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

emailFrequency

Type: [ConnectApi.​GroupEmail​Frequency](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupEmailFreq_enum)

Frequency with which a user receives email.

-   EachPost
-   DailyDigest
-   WeeklyDigest
-   Never
-   UseDefault

The value UseDefault uses the value set in a call to [updateChatterSettings(communityId, userId, defaultGroupEmailFrequency)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_updateChatterSettings "Update the default Chatter settings for a user.").

#### Return Value

Type: [ConnectApi.Group​​ChatterSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Chatter_Settings.htm "A user’s Chatter settings for a specific group.")