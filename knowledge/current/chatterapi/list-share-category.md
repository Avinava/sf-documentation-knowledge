---
title: "List Share Category"
domain: chatterapi
topic: list-share-category
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.327Z
estimatedTokens: 287
keywords: [Share, Category, Groups, roles, associated]
---

# List Share Category

> Groups and roles associated with a list.

# List Share Category

Groups and roles associated with a list.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| imageColor | String | Color of the image for the recipient. | Small, 44.0 | 44.0 |
| imageUrl | String | URL of the image for the recipient. | Small, 44.0 | 44.0 |
| shareLabel | String | Translated label to show in the UI for this category of shares. | Small, 44.0 | 44.0 |
| shareType | String | Type of group a list view is shared with. Values are:ChannelProgramGroup—Shared with a channel program.Regular—Shared with a group.Role—Shared with a role.RoleAndSubordinates—Shared with a role and all subordinates types.RoleAndSubordinatesInternal—Shared with a role and subordinates that aren’t partners.Territory—Shared with a territory.TerritoryAndSubordinates—Shared with a territory and its subordinates. | Small, 44.0 | 44.0 |
| shares | List Share[] | List of structures for shared groups. | Small, 44.0 | 44.0 |
| sharesListComplete | Boolean | Indicates whether the shares list contains all available results (true) or not (false). | Small, 44.0 | 44.0 |

## Related Topics

- List Share[] (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_list_share.htm)
