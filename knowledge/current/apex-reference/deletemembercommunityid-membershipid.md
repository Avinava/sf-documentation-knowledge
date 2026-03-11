---
title: "deleteMember(communityId, membershipId)"
domain: apex-reference
topic: deletemembercommunityid-membershipid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [deleteMember, communityId, membershipId, Remove, member, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# deleteMember(communityId, membershipId)

> Remove a member from a group.

### deleteMember(communityId, membershipId)

Remove a member from a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteMember(String communityId, String membershipId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

membershipId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a membership.

#### Return Value

Type: Void

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.