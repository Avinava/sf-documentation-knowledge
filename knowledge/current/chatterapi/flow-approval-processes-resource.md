---
title: "Flow Approval Processes Resource"
domain: chatterapi
topic: flow-approval-processes-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.413Z
estimatedTokens: 177
keywords: [Flow, Approval, Processes, Resource, status, actions]
---

# Flow Approval Processes Resource

> Get the status and available actions for flow approval processes.

# Flow Approval Processes Resource

Get the status and available actions for flow approval processes.

Resource

```

```

Available version

66.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| processNames | String[] |  | A list of flow approval process names. | 66.0 |
| relatedRecordId | String |  | The ID of the related record associated with the approval submission. | 66.0 |

Response body for GET

[Flow Approval Process Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_approval_process_collection.htm "The results of requesting a flow approval status.")

## Code Examples

```
/connect/interaction/flow-approval-process/status
```

## Related Topics

- Flow Approval Process Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_approval_process_collection.htm)
