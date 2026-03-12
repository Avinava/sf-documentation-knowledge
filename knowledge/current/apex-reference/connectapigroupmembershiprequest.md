---
title: "ConnectApi.GroupMembershipRequest"
domain: apex-reference
topic: connectapigroupmembershiprequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.566Z
estimatedTokens: 318
keywords: [ConnectApi.GroupMembershipRequest, Request, become, group, member.]
---

# ConnectApi.GroupMembershipRequest

> Request to become a group member.

# ConnectApi.GroupMembershipRequest

Request to become a group member.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| createdDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 28.0 |
| id | String | ID for the group membership request object. | 28.0 |
| lastUpdateDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 28.0 |
| requestedGroup | ConnectApi.​​Reference | Information about the group the context user is requesting to join. | 28.0 |
| responseMessage | String | A message for the user if their membership request is declined. The value of this property is used only when the value of the status property is Declined.The maximum length is 756 characters. | 28.0 |
| status | ConnectApi.​GroupMembership​RequestStatus Enum | Status of a request to join a private group. Values are:AcceptedDeclinedPending | 28.0 |
| url | String | URL of the group membership request object. | 28.0 |
| user | ConnectApi.​User​Summary | Information about the user requesting membership in a group. | 28.0 |

#### See Also

-   [ConnectApi.GroupMembershipRequests](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_requests.htm "Requests to become group members.")

## Related Topics

- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.GroupMembershipRequests (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_requests.htm)
