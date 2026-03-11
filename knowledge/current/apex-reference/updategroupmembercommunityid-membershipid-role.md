---
title: "updateGroupMember(communityId, membershipId,
    role)"
domain: apex-reference
topic: updategroupmembercommunityid-membershipid-role
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [updateGroupMember, communityId, membershipId, role, Update, group, member., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# updateGroupMember(communityId, membershipId,
    role)

> Update the role of a group member.

### updateGroupMember(communityId, membershipId, role)

Update the role of a group member.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroup updateGroupMember(String communityId, String membershipId, ConnectApi.GroupMembershipType role)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

membershipId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a membership.

role

Type: [ConnectApi.GroupMembershipType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupMemType_enum)

The group membership type. One of these values:

-   GroupManager
-   StandardMember

#### Return Value

Type: [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm "Chatter group.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.