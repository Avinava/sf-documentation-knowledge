---
title: "Feed Elements Capability, Bundle Elements"
domain: chatterapi
topic: feed-elements-capability-bundle-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.138Z
estimatedTokens: 453
keywords: [Feed, Elements, Capability, Bundle, Access, grouped, together]
---

# Feed Elements Capability, Bundle Elements

> Access all feed elements that are grouped
together in a bundle.

# Feed Elements Capability, Bundle Elements

Access all feed elements that are grouped together in a bundle.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Bundled posts contain feed-tracked changes and are in record feeds only.

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

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3. | Optional | 31.0 |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 31.0 |
| pageSize | Integer | Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25. | Optional | 31.0 |
| recentCommentCount | Integer | Maximum number of comments to return with each feed element. The default value is 3. | Optional | 31.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/bundle/feed-elements
```

```
connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/bundle/feed-elements
```

## Related Topics

- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
