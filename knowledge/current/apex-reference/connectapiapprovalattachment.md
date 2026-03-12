---
title: "ConnectApi.ApprovalAttachment"
domain: apex-reference
topic: connectapiapprovalattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.068Z
estimatedTokens: 289
keywords: [ConnectApi.ApprovalAttachment, Attach, approval, feed, item., Important]
---

# ConnectApi.ApprovalAttachment

> Attach an approval to a feed item.

# ConnectApi.ApprovalAttachment

Attach an approval to a feed item.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.ApprovalCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_approval_capability.htm#apex_connectapi_output_approval_capability "If a feed element has this capability, it includes information about an approval.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | A work item ID. | 28.0–31.0 |
| postTemplateFields | List <ConnectApi.​Approval​Post​Template​Field> | Collection of approval post template fields | 28.0–31.0 |
| process​InstanceStepId | String | An approval step ID. | 30.0–31.0 |
| status | ConnectApi.​WorkflowProcess​Status Enum | Status of a workflow process.ApprovedFaultHeldNoResponsePendingReassignedRejectedRemovedStarted | 28.0–31.0 |

## Related Topics

- ConnectApi.ApprovalCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_approval_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​Approval​Post​Template​Field (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_approval_post.htm)
