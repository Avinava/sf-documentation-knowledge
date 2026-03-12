---
title: "Feed Item Attachment: Case Comment"
domain: chatterapi
topic: feed-item-attachment-case-comment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.743Z
estimatedTokens: 512
keywords: [Feed, Item, Attachment, Case, Comment]
---

# Feed Item Attachment: Case Comment

> Case comment feed item attachment.

# Feed Item Attachment: Case Comment

Case comment feed item attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Case Comment Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_case_comment_capability.htm "If a feed element has this capability, it has a case comment on the case feed.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actorType | String | Specifies the type of user who made the comment. Valid values are:Customer—if a Chatter customer made the commentCustomerService—if a service representative made the comment | Small, 29.0 | 24.0–31.0 |
| createdBy | User Summary | Information about the user who created the comment | Small, 29.0 | 24.0–31.0 |
| createdDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z | Small, 29.0 | 24.0–31.0 |
| eventType | String | Event type of a comment in Case Feed One of these values:NewInternal—A case comment that has newly been marked Internal Only.NewPublished—A newly published case comment.NewPublishedByCustomer—A case comment by a customer that was newly published.PublishExisting—An existing case comment that was republished.PublishExistingByCustomer—An existing case comment by a customer that was republished.UnpublishExistingByCustomer—An existing case comment by a customer that was unpublished.UnpublishExsiting—An existing case comment that was unpublished.NoteUnfortunately, this typo is in the code, not the documentation. Use this spelling in your code. | Small, 29.0 | 29.0–31.0 |
| id | String | 18-character ID of case comment | Small, 29.0 | 24.0–31.0 |
| published | Boolean | Specifies whether the comment has been published | Small, 29.0 | 24.0–31.0 |
| text | String | Text of the case comment | Small, 29.0 | 24.0–31.0 |
| type | String | CaseComment | Small, 29.0 | 27.0–31.0 |

## Related Topics

- Case Comment Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_case_comment_capability.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
