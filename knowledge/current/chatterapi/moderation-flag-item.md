---
title: "Moderation Flag Item"
domain: chatterapi
topic: moderation-flag-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.734Z
estimatedTokens: 309
keywords: [Moderation, Flag, Item, feed, comment, file]
---

# Moderation Flag Item

> Flag details on a feed item, comment, or file.

# Moderation Flag Item

Flag details on a feed item, comment, or file.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdBy | String | ID of the user who flagged the item. | Small, 40.0 | 40.0 |
| createdDate | String | Date when the item was flagged. Format is ISO 8601. | Small, 40.0 | 40.0 |
| id | String | ID of the moderation flag. | Small, 40.0 | 40.0 |
| moderationType | String | Type of moderation flag. Values are:FlagAsInappropriate—Flag for inappropriate content.FlagAsSpam—Flag for spam. | Small, 40.0 | 40.0 |
| note | String | Note from user who flagged the item. | Small, 40.0 | 40.0 |
| visibility | String | Visibility behavior of a flag for various user types. Values are:ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Small, 40.0 | 40.0 |

#### See Also

-   [Moderation Flags Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags_collection.htm "Collection of flags on a feed item, comment, or file.")

## Related Topics

- Moderation Flags Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags_collection.htm)
