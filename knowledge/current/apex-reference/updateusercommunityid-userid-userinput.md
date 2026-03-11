---
title: "updateUser(communityId, userId, userInput)"
domain: apex-reference
topic: updateusercommunityid-userid-userinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [updateUser, communityId, userId, userInput, Update, section, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateUser(communityId, userId, userInput)

> Update the About Me section for a user.

### updateUser(communityId, userId, userInput)

Update the About Me section for a user.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserDetail updateUser(String communityId, String userId, ConnectApi.UserInput userInput)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

userInput

Type: [ConnectApi.UserInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_userInput.htm "Update a user’s About Me information.")

Specifies the updated information.

#### Return Value

Type: [ConnectApi.​User​Detail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_detail.htm "Details about a user in an org.")