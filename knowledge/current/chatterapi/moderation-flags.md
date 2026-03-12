---
title: "Moderation Flags"
domain: chatterapi
topic: moderation-flags
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.740Z
estimatedTokens: 371
keywords: [Moderation, Flags]
---

# Moderation Flags

> Moderation flags.

# Moderation Flags

Moderation flags.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| flagCount | Integer | If the context user is a community moderator, the total number of flags on the post, comment, or file. If the context user isn’t a community moderator, value is null.Flags on files is available starting in version 30.0. | Small, 29.0 | 29.0 |
| flagCount​ByReason | Map<String, Integer> | Number of moderation flags categorized by reason. Values for String are:FlaggedByRule—Moderation rule flagged the item.FlaggedBySystem—Einstein flagged the item.FlaggedByUserAsInappropriate—User flagged the item as inappropriate.FlaggedByUserAsSpam—User flagged the item as spam. | Small, 40.0 | 40.0 |
| flaggedByMe | Boolean | Indicates whether the post, comment, or file was flagged by the context user (true) or not (false).Flags on files is available starting in version 30.0. | Small, 29.0 | 29.0 |
| flags | Moderation Flags Collection | Collection of flags. | Small, 40.0 | 40.0 |

#### See Also

-   [File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm "Description of a file.")

-   [Moderation Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_capability.htm "If a feed element has this capability, users in the Experience Cloud site can flag the feed element for moderation. This response body also includes information about the flagged content.")

## Related Topics

- Moderation Flags Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags_collection.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Moderation Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_capability.htm)
