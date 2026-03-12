---
title: "Group Invites"
domain: chatterapi
topic: group-invites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.591Z
estimatedTokens: 172
keywords: [Group, Invites, Invite, internal, external, users, join]
---

# Group Invites

> Invite internal and external users to join a group.

# Group Invites

Invite internal and external users to join a group.

Resource

```

```

Available version

39.0

Requires Chatter

Yes

HTTP methods

POST

Request body for POST

Root XML tag

<inviteCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invitees | String[] | List of email addresses to send the invitation to. | Required | 39.0 |
| message | String | Message to include in the invitation. | Optional | 39.0 |

Response body for POST

[Invite Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_invite_collection.htm "A collection of invitations.")

## Code Examples

```
/chatter/groups/group/groupId/invite
```

```
{
   "invitees" : {
      "emails": [
         "emailaddress1@internaldomain.com",
         "emailaddress2@externaldomain.com"
      ]
   },
   "message" : "Join this group to participate in the discussion about your favorite feature."
}
```

## Related Topics

- Invite Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_invite_collection.htm)
