---
title: "Moderation Flags on a Feed Item"
domain: chatterapi
topic: moderation-flags-on-a-feed-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.685Z
estimatedTokens: 912
keywords: [Moderation, Flags, Feed, Item, Experience, Cloud, sites, flagged, post, flag]
---

# Moderation Flags on a Feed Item

> In Experience Cloud sites, get a flagged post, flag a post for
      moderation, and delete moderation flags.

# Moderation Flags on a Feed Item

In Experience Cloud sites, get a flagged post, flag a post for moderation, and delete moderation flags.

If the context user has the Moderate Experiences Feeds permission, get the number of times members flagged a post, flag a post for moderation, and delete all flags on a post.

If the context user isn’t a moderator, get whether the user flagged a post, flag a post for moderation, and remove a flag the user previously added.

Resource

```

```

Available version

29.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Feed Elements Capability, Moderation](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_moderation_capability.htm "Get information about a feed element's moderation capability, add a moderation flag to a feed element, or delete all moderation flags from a feed element.").

Requires Chatter

Yes

HTTP methods

GET, DELETE, POST

Request parameters for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| visibility | String | Visibility behavior of a flag for various user types.ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 30.0–31.0 |

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
| visibility | String | Visibility behavior of a flag for various user types.ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 30.0–31.0 |

Request parameters for DELETE

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| userId | String | The ID of the context user. If specified, removes the flag the user previously added to the post. If not specified and the context user is a moderator, removes all flags on the post. | Optional | 29.0–31.0 |

Response body for GET and POST

[Moderation Flags](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm "Moderation flags.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/communities/communityId/chatter/feed-items/feedItemId/moderation-flags
```

```
{ 
   "note" : "Flagged by moderator as spam on 6.6.16.",
   "type" : "FlagAsSpam",
   "visibility" : "ModeratorsOnly"
}
```

## Related Topics

- Feed Elements Capability, Moderation (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_moderation_capability.htm)
- Moderation Flags (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
