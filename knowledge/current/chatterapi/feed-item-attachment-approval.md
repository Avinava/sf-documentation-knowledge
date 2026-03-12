---
title: "Feed Item Attachment: Approval"
domain: chatterapi
topic: feed-item-attachment-approval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.728Z
estimatedTokens: 285
keywords: [Feed, Item, Attachment, Approval]
---

# Feed Item Attachment: Approval

> An approval attachment.

# Feed Item Attachment: Approval

An approval attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Approval Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_approval_capability.htm "If a feed element has this capability, it includes information about an approval.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The work item ID | Small, 29.0 | 27.0–31.0 |
| process​InstanceStepId | String | The process instance step ID. The associated record represents one step in an approval process. | Small, 30.0 | 30.0–31.0 |
| status | String | The status of the approval. Values are:ApprovedFaultHeldNoResponsePendingReassignedRejectedRemovedStarted | Small, 29.0 | 27.0–31.0 |
| postTemplate​Fields | Approval Post Template Field[] | Collection of approval post template fields | Small, 29.0 | 28.0–31.0 |
| type | String | Approval | Small, 29.0 | 27.0–31.0 |

## Related Topics

- Approval Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_approval_capability.htm)
- Approval Post Template Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_approval_post.htm)
