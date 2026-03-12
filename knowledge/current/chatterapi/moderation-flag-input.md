---
title: "Moderation Flag Input"
domain: chatterapi
topic: moderation-flag-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.120Z
estimatedTokens: 211
keywords: [Moderation, Flag, Input]
---

# Moderation Flag Input

> Moderation flag input.

# Moderation Flag Input

Moderation flag input.

Root XML tag

<moderationFlag>

JSON

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| note | String | A note of up to 4,000 characters about the flag. | Optional | 38.0 |
| type | String | Type of moderation flag.FlagAsInappropriate—Flag for inappropriate content.FlagAsSpam—Flag for spam. | OptionalIf not specified, FlagAs​Inappropriate is the default value. | 38.0 |
| visibility | String | Visibility behavior of a flag for various user types.ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 30.0 |

## Code Examples

```
{ 
   "note" : "Flagged by moderator as spam on 6.6.16.",
   "type" : "FlagAsSpam",
   "visibility" : "ModeratorsOnly"
}
```
