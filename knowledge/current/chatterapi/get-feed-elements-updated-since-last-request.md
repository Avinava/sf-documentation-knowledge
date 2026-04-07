---
title: "Get Feed Elements Updated Since Last Request"
domain: chatterapi
topic: get-feed-elements-updated-since-last-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.162Z
estimatedTokens: 544
keywords: [Feed, Elements, Updated, Since]
---

# Get Feed Elements Updated Since Last Request

> Get the feed elements updated since the last request.

# Get Feed Elements Updated Since Last Request

Get the feed elements updated since the last request.

Resource

To get feed elements that were updated since the last call to a feeds resource, make a request to the value of the updatesUrl property of the Feed Element Page response body. Feed elements that are updated in the same second as the request aren’t returned.

These feeds return an updatesUrl property.

-   Company—[/chatter/feeds/company/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_company.htm#cc_company_feed_elements)
-   Files—[/chatter/feeds/files/me/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_files.htm#cc_files_feed_elements)
-   Filter—[/chatter/feeds/filter/me/filterId/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter_elements.htm "Feed elements from the context user’s news feed whose parent has the specified key prefix, such as the feed elements from all the groups the context user is a member of.")
-   Groups—[/chatter/feeds/groups/me/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_groups.htm#cc_groups_feed_elements)
-   News—[/chatter/feeds/news/me/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_news.htm#cc_news_feed_elements)
-   People—[/chatter/feeds/people/me/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_people.htm#cc_people_feed_elements)
-   Record—[/chatter/feeds/record/recordId/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm#cc_record_feed_elements)

This excerpt from the Feed Elements Page response body shows a sample value for the updatesUrl property:

```

```

A feed element is considered to be updated if it was created since the last feed request, or if sort=LastModifiedDateDesc and a comment was added to the feed element since the last feed request. Adding likes and topics doesn’t update a feed element.

HTTP method

GET

Returns

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
{
...
..."updatesUrl" : "/services/data/v66.0/chatter/feeds
   /news/005D0000001LL8OIAW/feed-elements?updatedSince=2:1384811809000"
...
}
```

## Related Topics

- /chatter/feeds/company/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_company.htm)
- /chatter/feeds/files/me/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_files.htm)
- /chatter/feeds/filter/me/filterId/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_filter_elements.htm)
- /chatter/feeds/groups/me/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_groups.htm)
- /chatter/feeds/news/me/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_news.htm)
- /chatter/feeds/people/me/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_people.htm)
- /chatter/feeds/record/recordId/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm)
- Feed Element
                  Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
