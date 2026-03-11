---
title: "getMember(communityId, membershipId)"
domain: apex-reference
topic: getmembercommunityid-membershipid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getMember, communityId, membershipId, Get, information, group, member., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getMember(communityId, membershipId)

> Get information about a group member.

### getMember(communityId, membershipId)

Get information about a group member.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMember getMember(String communityId, String membershipId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

membershipId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a membership.

#### Return Value

Type: [ConnectApi.​GroupMember](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Member_Output.htm "Member of a group.")