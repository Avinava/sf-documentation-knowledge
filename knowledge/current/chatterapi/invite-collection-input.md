---
title: "Invite Collection Input"
domain: chatterapi
topic: invite-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.898Z
estimatedTokens: 102
keywords: [Invite, Collection, Input, Invitation]
---

# Invite Collection Input

> Invitation collection input.

# Invite Collection Input

Invitation collection input.

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

## Code Examples

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
