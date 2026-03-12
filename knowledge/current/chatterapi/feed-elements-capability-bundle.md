---
title: "Feed Elements Capability, Bundle"
domain: chatterapi
topic: feed-elements-capability-bundle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.132Z
estimatedTokens: 431
keywords: [Feed, Elements, Capability, Bundle, Access, element]
---

# Feed Elements Capability, Bundle

> Access the bundle capability of a feed element.

# Feed Elements Capability, Bundle

Access the bundle capability of a feed element.

Resource

```

```

```

```

Available version

31.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3. | Optional | 31.0 |
| recentCommentCount | Integer | Maximum number of comments to return with each feed element. The default value is 3. | Optional | 31.0 |

Response bodies for GET

One of these response bodies:

-   [Generic Bundle Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_generic_clumps_capability.htm#connect_responses_generic_clumps_capability "If a feed element has this capability, the feed element may be a group of other feed elements condensed into one.")
-   [Tracked Change Bundle Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_change_clumps_capability.htm#connect_responses_tracked_change_clumps_capability "If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a bundle. This type of bundle aggregates feed tracked changes.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/bundle
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/bundle
```

## Related Topics

- Generic Bundle Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_generic_clumps_capability.htm)
- Tracked Change Bundle Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_change_clumps_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
