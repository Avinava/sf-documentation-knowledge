---
title: "ConnectApi.ModerationFlagItemDetail"
domain: apex-reference
topic: connectapimoderationflagitemdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.985Z
estimatedTokens: 295
keywords: [ConnectApi.ModerationFlagItemDetail, Flag, details, feed, item, comment, file.]
---

# ConnectApi.ModerationFlagItemDetail

> Flag details on a feed item, comment, or file.

# ConnectApi.ModerationFlagItemDetail

Flag details on a feed item, comment, or file.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| createdBy | String | ID of the user who flagged the item. | 40.0 |
| createdDate | Datetime | Date when the item was flagged. | 40.0 |
| id | String | ID of the moderation flag. | 40.0 |
| moderationType | ConnectApi.​CommunityFlagType | Type of moderation flag. Values are:FlagAsInappropriate—Flag for inappropriate content.FlagAsSpam—Flag for spam. | 40.0 |
| note | String | Note from user who flagged the item. | 40.0 |
| visibility | ConnectApi.​CommunityFlag​Visibility | Visibility behavior of a flag for various user types. Values are:ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | 40.0 |

#### See Also

-   [ConnectApi.ModerationFlagsCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_flags_collection.htm "A collection of flags on a feed item, comment, or file.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​CommunityFlagType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CommunityFlag​Visibility (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ModerationFlagsCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_flags_collection.htm)
