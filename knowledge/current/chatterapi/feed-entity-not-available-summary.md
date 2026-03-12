---
title: "Feed Entity Not Available Summary"
domain: chatterapi
topic: feed-entity-not-available-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.697Z
estimatedTokens: 226
keywords: [Feed, Entity, Summary, isn’t]
---

# Feed Entity Not Available Summary

> A summary when the feed entity isn’t available.

# Feed Entity Not Available Summary

A summary when the feed entity isn’t available.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actor | One of these response bodies:Record SummaryUser SummaryUnauthenticated User | null | Small, 39.0 | 39.0 |
| body | Feed Item Body | null | Small, 39.0 | 39.0 |
| createdDate | String | null | Small, 39.0 | 39.0 |
| feedElementType | String | null | Small, 39.0 | 39.0 |
| id | String | null | Small, 39.0 | 39.0 |
| isEntity​Available | Boolean | The value is false because the user doesn’t have access to the entity or the entity was deleted. | Small, 39.0 | 39.0 |
| parent | One of these response bodies:File SummaryGroupRecord SummaryUser Summary | null | Medium, 39.0 | 39.0 |
| relativeCreated​Date | String | null | Small, 39.0 | 39.0 |
| url | String | null | Small, 39.0 | 39.0 |

## Related Topics

- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Unauthenticated
                    User (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_unauthenticated_user.htm)
- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
