---
title: "Case Comment Capability"
domain: chatterapi
topic: case-comment-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.625Z
estimatedTokens: 449
keywords: [Case, Comment, Capability, feed, element]
---

# Case Comment Capability

> If a feed element has this capability, it has a case comment on the case
    feed.

# Case Comment Capability

If a feed element has this capability, it has a case comment on the case feed.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actorType | String | Specifies the type of user who made the comment.Customer—if a Chatter customer made the commentCustomerService—if a service representative made the comment | Small, 32.0 | 32.0 |
| createdBy | User Detail or User Summary | Information about the user who created the comment. | Small, 32.0 | 32.0 |
| createdDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | Small, 32.0 | 32.0 |
| eventType | String | Specifies an event type for a comment in the case feed.NewInternal—A case comment that has newly been marked Internal Only.NewPublished—A newly published case comment.NewPublishedByCustomer—A case comment by a customer that was newly published.PublishExisting—An existing case comment that was republished.PublishExistingByCustomer—An existing case comment by a customer that was republished.UnpublishExistingByCustomer—An existing case comment by a customer that was unpublished.UnpublishExsiting—An existing case comment that was unpublished.NoteUnfortunately, this typo is in the code, not the documentation. Use this spelling in your code. | Small, 32.0 | 32.0 |
| id | String | 18-character ID of case comment. | Small, 32.0 | 32.0 |
| published | Boolean | Specifies whether the comment has been published. | Small, 32.0 | 32.0 |
| text | String | Text of the case comment. | Small, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
