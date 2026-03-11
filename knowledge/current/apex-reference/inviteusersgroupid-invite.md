---
title: "inviteUsers(groupId, invite)"
domain: apex-reference
topic: inviteusersgroupid-invite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [inviteUsers, groupId, invite, Invite, internal, external, users, join, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# inviteUsers(groupId, invite)

> Invite internal and external users to join a group.

### inviteUsers(groupId, invite)

Invite internal and external users to join a group.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Invitations inviteUsers(String groupId, ConnectApi.InviteInput invite)

#### Parameters

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group.

invite

Type: [ConnectApi.InviteInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_invite_collection.htm#apex_connectapi_input_invite_collection "An invitation.")

A ConnectApi.InviteInput body.

#### Return Value

Type: [ConnectApi.Invitations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_invite_collection.htm#apex_connectapi_output_invite_collection "A collection of invitations.")