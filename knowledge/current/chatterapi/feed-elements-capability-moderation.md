---
title: "Feed Elements Capability, Moderation"
domain: chatterapi
topic: feed-elements-capability-moderation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.288Z
estimatedTokens: 895
keywords: [Feed, Elements, Capability, Moderation, element's, add, flag, element, flags]
---

# Feed Elements Capability, Moderation

> Get information about a feed element's
moderation capability, add a moderation flag to a feed element, or
delete all moderation flags from a feed element.

# Feed Elements Capability, Moderation

Get information about a feed element's moderation capability, add a moderation flag to a feed element, or delete all moderation flags from a feed element.

Resource

```

```

Available version

31.0

Requires Chatter

Yes

HTTP methods

GET, POST, DELETE, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 40.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. The default size is 0. | Optional | 40.0 |
| visibility | String | Visibility behavior of a flag for various user types. One of these values:ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 31.0 |

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

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| note | String | A note of up to 4,000 characters about the flag. | Optional | 38.0 |
| type | String | Type of moderation flag.FlagAsInappropriate—Flag for inappropriate content.FlagAsSpam—Flag for spam.If a type isn’t specified, it defaults to FlagAsInappropriate. | OptionalIf not specified, FlagAs​Inappropriate is the default value. | 38.0 |
| visibility | String | Visibility behavior of a flag for various user types. One of these values:ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 31.0 |

Response body for GET and POST

[Moderation Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_capability.htm "If a feed element has this capability, users in the Experience Cloud site can flag the feed element for moderation. This response body also includes information about the flagged content.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/connect/communities/communityId/chatter/feed-elements
/feedElementId/capabilities/moderation
```

```
{ 
   "note" : "Flagged by moderator as spam on 6.6.16.",
   "type" : "FlagAsSpam",
   "visibility" : "ModeratorsOnly"
}
```

## Related Topics

- Moderation Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
