---
title: "List Share Recipients"
domain: chatterapi
topic: list-share-recipients
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.642Z
estimatedTokens: 352
keywords: [Share, Recipients, data, groups, potential, view, shared]
---

# List Share Recipients

> Get data on all groups, and all potential groups, a list view is
      shared with.

# List Share Recipients

Get data on all groups, and all potential groups, a list view is shared with.

Resource

```

```

Available version

44.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listViewId | String | To find out which groups a specific list view can be shared with, use this parameter. When provided, entities that are already shared with the provided list view are removed from the output.To return all the possible groups to share a new a new list view with, omit this parameter. | Optional | 44.0 |
| q | String | Filters results to groups or roles whose name contains the search term. | Optional | 44.0 |
| shareType | String | Filters results to the type of group a list view is shared with. Values are:ChannelProgramGroup—Shared with a channel program.Regular—Shared with a group.Role—Shared with a role.RoleAndSubordinates—Shared with a role and all subordinates types.RoleAndSubordinatesInternal—Shared with a role and subordinates that aren’t partners.Territory—Shared with a territory.TerritoryAndSubordinates—Shared with a territory and its subordinates. | Optional | 44.0 |

Response body for GET

[List Share Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_list_share_collection.htm "Current and potential shares associated with a list.")

## Code Examples

```
/connect/list-share-recipients
```

## Related Topics

- List Share Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_list_share_collection.htm)
