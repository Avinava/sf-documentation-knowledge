---
title: "ConnectApi.ModerationFlags"
domain: apex-reference
topic: connectapimoderationflags
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.995Z
estimatedTokens: 347
keywords: [ConnectApi.ModerationFlags, moderation, flags, feed, item, comment, file]
---

# ConnectApi.ModerationFlags

> Information about the moderation flags on a feed item,
      comment, or file.

# ConnectApi.ModerationFlags

Information about the moderation flags on a feed item, comment, or file.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| flagCount | Integer | Number of moderation flags on this feed item, comment, or file. If the context user is not a moderator, the property is null. | 29.0 |
| flagCount​ByReason | Map<ConnectApi.​CommunityFlag​ReasonType, Integer> | Number of moderation flags categorized by reason. Values for ConnectApi.CommunityFlagReasonType are:FlaggedByRule—Moderation rule flagged the item.FlaggedBySystem—Einstein flagged the item.FlaggedByUserAsInappropriate—User flagged the item as inappropriate.FlaggedByUserAsSpam—User flagged the item as spam. | 40.0 |
| flaggedByMe | Boolean | true if the context user flagged the feed item, comment, or file for moderation; false otherwise. | 29.0 |
| flags | ConnectApi.ModerationFlagsCollection | Collection of flags. | 40.0 |

#### See Also

-   [ConnectApi.Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm "A comment.")

-   [ConnectApi.File](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file.htm "File.")

-   [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​CommunityFlag​ReasonType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.ModerationFlagsCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_flags_collection.htm)
- ConnectApi.Comment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm)
- ConnectApi.File (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file.htm)
- ConnectApi.ModerationCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm)
