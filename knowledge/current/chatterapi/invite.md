---
title: "Invite"
domain: chatterapi
topic: invite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.230Z
estimatedTokens: 260
keywords: [Invite, invitation]
---

# Invite

> An invitation.

# Invite

An invitation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| email | String | Email address of the user. | Small, 39.0 | 39.0 |
| status | String | Specifies the status of an invitation to join a group. Values are:ActedUponUser—The user was added to the group. An email was sent asking the user to visit the group.Invited—An email was sent asking the user to sign up for the org.MaxedOutUsers—The group has the maximum allowed members.MultipleError—The user wasn’t invited due to multiple errors.NoActionNeededUser—The user is already a member of the group.NotVisibleToExternalInviter—The user is not accessible to the user sending the invitation.Unhandled—The user couldn’t be added to the group for an unknown reason. | Small, 39.0 | 39.0 |
| userId | String | ID of the user. | Small, 39.0 | 39.0 |

#### See Also

-   [Invite Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_invite_collection.htm "A collection of invitations.")

## Related Topics

- Invite Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_invite_collection.htm)
