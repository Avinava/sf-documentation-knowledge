---
title: "ConnectApi.FlowApprovalProcess"
domain: apex-reference
topic: connectapiflowapprovalprocess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.900Z
keywords: [ConnectApi.FlowApprovalProcess, See]
---

# ConnectApi.FlowApprovalProcess

# ConnectApi.FlowApprovalProcess

Details about a flow approval process, its status, and available actions.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| approvalProcess​Name | String | The name of the flow approval process. | 66.0 |
| availableActions | List<ConnectApi.​FlowApproval​ProcessAction> | Available actions for the flow approval process. | 66.0 |
| isApproval​InProgress | Boolean | Specifies whether one or more approval submissions are in progress (true) or not (false). | 66.0 |

#### See Also

-   [ConnectApi.FlowApprovalProcessCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_approval_process_collection.htm "The results of requesting a flow approval status.")