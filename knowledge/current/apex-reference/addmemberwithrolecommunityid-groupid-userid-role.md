---
title: "addMemberWithRole(communityId, groupId, userId,
    role)"
domain: apex-reference
topic: addmemberwithrolecommunityid-groupid-userid-role
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [addMemberWithRole, communityId, groupId, userId, role, Add, user, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addMemberWithRole(communityId, groupId, userId,
    role)

> Add a user with a role to a group.

### addMemberWithRole(communityId, groupId, userId, role)

Add a user with a role to a group.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMember addMemberWithRole(String communityId, String groupId, String userId, ConnectApi.GroupMembershipType role)

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

role

Type: [ConnectApi.GroupMembershipType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupMemType_enum)

The group membership type. One of these values:

-   GroupManager
-   StandardMember

#### Return Value

Type: [ConnectApi.​GroupMember](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Member_Output.htm "Member of a group.")

#### Usage

To execute this method, the context user must be the group owner or moderator.