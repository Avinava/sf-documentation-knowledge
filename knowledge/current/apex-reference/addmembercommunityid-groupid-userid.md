---
title: "addMember(communityId, groupId, userId)"
domain: apex-reference
topic: addmembercommunityid-groupid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [addMember, communityId, groupId, userId, Add, user, group, standard, member., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addMember(communityId, groupId, userId)

> Add a user to a group as a standard member.

### addMember(communityId, groupId, userId)

Add a user to a group as a standard member.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMember addMember(String communityId, String groupId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.​GroupMember](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Member_Output.htm "Member of a group.")

#### Usage

To execute this method, the context user must be the group owner or moderator.