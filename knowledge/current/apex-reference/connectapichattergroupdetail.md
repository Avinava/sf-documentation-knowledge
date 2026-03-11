---
title: "ConnectApi.ChatterGroupDetail"
domain: apex-reference
topic: connectapichattergroupdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.722Z
keywords: [ConnectApi.ChatterGroupDetail, See]
---

# ConnectApi.ChatterGroupDetail

# ConnectApi.ChatterGroupDetail

Chatter group details.

Subclass of [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm "Chatter group.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fileCount | Integer | The number of files posted to the group. | 28.0 |
| information | ConnectApi.​Group​Information | Describes the Information section of the group. If the group is private, this section is visible only to members. If the context user is not a member of the group or does not have Modify All Data or View All Data permission, this value is null. | 28.0 |
| pending​Requests | Integer | The number of requests to join a group that are in a pending state. | 29.0 |

#### See Also

-   [ConnectApi.ChatterGroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")
    
-   [ConnectApi.UserGroupDetailPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_group_detail_collection.htm "A page of groups that a user is a member of.")