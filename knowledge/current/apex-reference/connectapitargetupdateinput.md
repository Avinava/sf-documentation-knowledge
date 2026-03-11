---
title: "ConnectApi.TargetUpdateInput"
domain: apex-reference
topic: connectapitargetupdateinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.624Z
keywords: [ConnectApi.TargetUpdateInput, See]
---

# ConnectApi.TargetUpdateInput

# ConnectApi.TargetUpdateInput

Target to update.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| audienceId | String | ID of the audience to assign to the target. | Required if priority isn’t specified. Otherwise, Optional | 48.0 |
| priority | Integer | Priority of the target. Within a group, priority determines which target is returned if the user matches more than one audience. | Required if audienceId isn’t specified. Otherwise, Optional | 48.0 |
| targetId | String | ID of the target to update. | Required | 48.0 |

#### See Also

-   [ConnectApi.TargetCollectionUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_target_collection_update.htm "Collection of targets to update.")