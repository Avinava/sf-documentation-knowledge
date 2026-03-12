---
title: "Experience Cloud Sites Chatter Moderation Resources"
domain: chatterapi
topic: experience-cloud-sites-chatter-moderation-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.677Z
estimatedTokens: 1098
keywords: [Experience, Cloud, Sites, Chatter, Moderation, Resources, whether, user, flagged, feed, element, comment, inappropriate, flags, Comments]
---

# Experience Cloud Sites Chatter Moderation Resources

> Get information about whether a user has flagged a feed element or comment as
        inappropriate. Delete flags.

# Experience Cloud Sites Chatter Moderation Resources

Get information about whether a user has flagged a feed element or comment as inappropriate. Delete flags.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/communities​/communityId/​chatter/feed-elements​/feedElementId/​capabilities/moderation | Get information about a feed element's moderation capability, add a moderation flag to a feed element, or delete all moderation flags from a feed element. |
| /connect/communities​/communityId/​chatter/comments​/commentId/​moderation-flags | If the context user is a moderator, get the number of times members flagged a comment. Also flag a comment for moderation and delete all flags on a comment.If the context user isn’t a moderator, returns whether the user flagged a comment. Also flag a comment for moderation and remove a flag the user previously added. |

## Moderation Flags on Comments

If the context user is a moderator, get the number of times members flagged a comment. Also flag a comment for moderation and delete all flags on a comment.

If the context user isn’t a moderator, returns whether the user flagged a comment. Also flag a comment for moderation and remove a flag the user previously added.

Resource

```

```

Available since release

29.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, HEAD, POST

Request parameters for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 40.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. The default size is 0. | Optional | 40.0 |
| visibility | String | Visibility behavior of a flag for various user types.ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 30.0 |

Request body for POST

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

Request parameters for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| note | String | A note of up to 4,000 characters about the flag. | Optional | 38.0 |
| type | String | Type of moderation flag.FlagAsInappropriate—Flag for inappropriate content.FlagAsSpam—Flag for spam.If a type isn’t specified, it defaults to FlagAsInappropriate. | OptionalIf not specified, FlagAs​Inappropriate is the default value. | 38.0 |
| visibility | String | Visibility behavior of a flag for various user types.ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 30.0 |

Request parameters for DELETE

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| userId | String | The ID of the context user. If specified, removes the flag the user previously added to the comment. If not specified and the context user is a moderator, removes all flags on the comment. | Optional | 29.0 |

Response body for GET and POST

[Moderation Flags](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm "Moderation flags.")

## Code Examples

```
/connect/communities/communityId/chatter/comments/commentId/moderation-flags
```

```
{ 
   "note" : "Flagged by moderator as spam on 6.6.16.",
   "type" : "FlagAsSpam",
   "visibility" : "ModeratorsOnly"
}
```

## Related Topics

- /connect/communities​/communityId/​chatter/feed-elements​/feedElementId/​capabilities/moderation (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_moderation_capability.htm)
- Moderation
                            Flags (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm)
