---
title: "Approval Capability"
domain: chatterapi
topic: approval-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.226Z
estimatedTokens: 258
keywords: [Approval, Capability, feed, element, includes]
---

# Approval Capability

> If a feed element has this capability, it includes information about
      an approval.

# Approval Capability

If a feed element has this capability, it includes information about an approval.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The work item ID. The work item ID is null if there isn’t a pending work item associated with the approval record. | Small, 32.0 | 32.0 |
| postTemplate​Fields | Approval Post Template Field[] | The details of the approval post template field. | Small, 32.0 | 32.0 |
| processInstance​StepId | String | The process instance step ID. The associated record represents one step in an approval process. | Small, 32.0 | 32.0 |
| status | String | The status of the approval. One of these values:ApprovedFaultHeldNoResponsePendingReassignedRejectedRemovedStarted | Small, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Approval Post Template Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_approval_post.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
