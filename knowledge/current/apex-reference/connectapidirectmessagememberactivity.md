---
title: "ConnectApi.DirectMessageMemberActivity"
domain: apex-reference
topic: connectapidirectmessagememberactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.132Z
estimatedTokens: 201
keywords: [ConnectApi.DirectMessageMemberActivity, Direct, message, member, activity]
---

# ConnectApi.DirectMessageMemberActivity

> Direct message member activity.

# ConnectApi.DirectMessageMemberActivity

Direct message member activity.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activityDate | Datetime | Direct message member activity date. | 40.0 |
| actor | ConnectApi.​UserSummary | User who changed the direct message membership. | 40.0 |
| membersAdded | ConnectApi.​DirectMessage​MemberPage | Members added to the direct message as part of the activity. | 40.0 |
| membersRemoved | ConnectApi.​DirectMessage​MemberPage | Members removed from the direct message as part of the activity. | 40.0 |

#### See Also

-   [ConnectApi.DirectMessageMemberActivityPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_membership_activity_collection.htm "A page of direct message member activities.")

## Related Topics

- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.​DirectMessage​MemberPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_member_collection.htm)
- ConnectApi.DirectMessageMemberActivityPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_membership_activity_collection.htm)
