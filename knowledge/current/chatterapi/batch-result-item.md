---
title: "Batch Result Item"
domain: chatterapi
topic: batch-result-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.349Z
estimatedTokens: 453
keywords: [Batch, Result, Item]
---

# Batch Result Item

> Batch result item.

# Batch Result Item

Batch result item.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | The type depends on the object type of the batch.ImportantIf the result is an error, the type is a collection. | Dependent on the type of batch. Value could be one of the following:Asset File for /connect/file-assets/batch/assetIds (v43.0)Audience for /connect/communities/communityId/​personalization/audiences/batch/​audienceIds (v48.0)Cart Item for /commerce/webstores/webstoreId/​carts/cartId/​cart-items/batch (v49.0) and /commerce/webstores/webstoreId/​carts/active/​cart-items/batch (v49.0)Comment for /chatter/comments/batch/commentIds (v42.0)Error Message (v23.0)Feed Item for /chatter/feed-elements/batch (v32.0) and /chatter/feed-elements/batch/​feedElementIds (v32.0)File Summary for /connect/files/batch/​fileIds (v26.0)Group for /chatter/groups/batch/groupIds (v23.0)Group Member for /chatter/group-memberships/batch/​membershipIds (v27.0)Motif for /connect/motifs/batch/​idOrPrefixList (v27.0)Read By Capability for /chatter/feed-elements/batch/​feedElementIds/capabilities/read-by (v40.0)Target for /connect/communities/communityId/​personalization/targets/batch/​targetIds (v47.0)Topics People Are Knowledgeable About Collection for /chatter/users/batch/​userIds/knowledgeable-about-topics (v36.0)User Detail for/chatter/users/batch/​userIds (v23.0)For /connect/batch, the value can be any response body depending on the subrequest in the batch. (v28.0) | Small, 29.0 |  |
| statusCode | Integer | HTTP status code indicating the status of this individual request in the batch. | Small, 29.0 | 23.0 |

#### See Also

-   [Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

## Related Topics

- Asset File (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_asset.htm)
- Audience (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience.htm)
- Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
- Error Message (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_message.htm)
- Feed
                                        Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
- Group Member (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
