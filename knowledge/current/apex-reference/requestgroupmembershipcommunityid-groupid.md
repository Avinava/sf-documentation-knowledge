---
title: "requestGroupMembership(communityId, groupId)"
domain: apex-reference
topic: requestgroupmembershipcommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [requestGroupMembership, communityId, groupId, Request, membership, private, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Sample, Requesting, Join, Private, Group]
---

# requestGroupMembership(communityId, groupId)

> Request membership in a private group.

### requestGroupMembership(communityId, groupId)

Request membership in a private group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMembershipRequest requestGroupMembership(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.​Group​Membership​Request](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_request.htm "Request to become a group member.")

#### Sample: Requesting to Join a Private Group

This sample code calls ConnectApi.ChatterGroups.requestGroupMembership to request to join a private group.

```

```