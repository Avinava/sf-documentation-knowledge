---
title: "ConnectApi.DirectMessageMemberActivity"
domain: apex-reference
topic: connectapidirectmessagememberactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.586Z
keywords: [ConnectApi.DirectMessageMemberActivity, See]
---

# ConnectApi.DirectMessageMemberActivity

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