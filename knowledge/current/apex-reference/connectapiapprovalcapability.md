---
title: "ConnectApi.ApprovalCapability"
domain: apex-reference
topic: connectapiapprovalcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.248Z
estimatedTokens: 283
keywords: [ConnectApi.ApprovalCapability, feed, element, capability, includes, approval]
---

# ConnectApi.ApprovalCapability

> If a feed element has this capability, it includes information about
      an approval.

# ConnectApi.ApprovalCapability

If a feed element has this capability, it includes information about an approval.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | The work item ID. The work item ID is null if there isn’t a pending work item associated with the approval record. | 32.0 |
| postTemplate​Fields | List<ConnectApi.​ApprovalPost​TemplateField> | The details of the approval post template field. | 32.0 |
| processInstance​StepId | String | The process instance step ID. The associated record represents one step in an approval process. | 32.0 |
| status | ConnectApi.​WorkflowProcess​Status | The status of the approval. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ApprovalPost​TemplateField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_approval_post.htm)
- ConnectApi.​WorkflowProcess​Status (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
