---
title: "updateChatterSettings(communityId, userId,
                        defaultGroupEmailFrequency)"
domain: apex-reference
topic: updatechattersettingscommunityid-userid-defaultgroupemailfrequency
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [updateChatterSettings, communityId, userId, defaultGroupEmailFrequency, Update, default, Chatter, settings, user., API, Version, Requires, Signature, Parameters, Return, Value]
---

# updateChatterSettings(communityId, userId,
                        defaultGroupEmailFrequency)

> Update the default Chatter settings for a user.

### updateChatterSettings(communityId, userId, defaultGroupEmailFrequency)

Update the default Chatter settings for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserChatterSettings updateChatterSettings(String communityId, String userId, ConnectApi.GroupEmailFrequency defaultGroupEmailFrequency)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

defaultGroupEmailFrequency

Type: [ConnectApi.​GroupEmail​Frequency](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupEmailFreq_enum)

Frequency with which a user receives email. Values are:

-   EachPost
-   DailyDigest
-   WeeklyDigest
-   Never
-   UseDefault

Don’t pass the value UseDefault for the defaultGroupEmailFrequency parameter because calling updateChatterSettings sets the default value.

#### Return Value

Type: [ConnectApi.​User​​ChatterSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_chatter_settings.htm "User’s global Chatter settings.")