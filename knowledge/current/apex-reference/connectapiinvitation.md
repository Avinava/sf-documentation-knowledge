---
title: "ConnectApi.Invitation"
domain: apex-reference
topic: connectapiinvitation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.613Z
estimatedTokens: 254
keywords: [ConnectApi.Invitation, invitation.]
---

# ConnectApi.Invitation

> An invitation.

# ConnectApi.Invitation

An invitation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| email | String | Email address of the user. | 39.0 |
| status | ConnectApi.​GroupViral​InvitationsStatus | Specifies the status of an invitation to join a group. Values are:ActedUponUser—The user was added to the group. An email was sent asking the user to visit the group.Invited—An email was sent asking the user to sign up for the org.MaxedOutUsers—The group has the maximum allowed members.MultipleError—The user wasn’t invited due to multiple errors.NoActionNeededUser—The user is already a member of the group.NotVisibleToExternalInviter—The user is not accessible to the user sending the invitation.Unhandled—The user couldn’t be added to the group for an unknown reason. | 39.0 |
| userId | String | ID of the user. | 39.0 |

#### See Also

-   [ConnectApi.Invitations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_invite_collection.htm "A collection of invitations.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​GroupViral​InvitationsStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.Invitations (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_invite_collection.htm)
