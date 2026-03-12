---
title: "Feed Elements Capability, Editability"
domain: chatterapi
topic: feed-elements-capability-editability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.197Z
estimatedTokens: 211
keywords: [Feed, Elements, Capability, Editability, whether, context, user, edit, element, items, edited]
---

# Feed Elements Capability, Editability

> Indicates whether the context user can edit the feed element. Feed
      items are the only type of feed element that can be edited.

# Feed Elements Capability, Editability

Indicates whether the context user can edit the feed element. Feed items are the only type of feed element that can be edited.

Resource

```

```

```

```

Available version

34.0

Requires Chatter

Yes

HTTP methods

GET

Response body for GET

[Feed Entity Is Editable](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_entity_is_editable.htm "Indicates whether the context user can edit a feed element or comment.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/edit/is-editable-by-me
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/edit/is-editable-by-me
```

## Related Topics

- Feed Entity Is Editable (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_entity_is_editable.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
