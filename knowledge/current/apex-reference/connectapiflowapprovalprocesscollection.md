---
title: "ConnectApi.FlowApprovalProcessCollection"
domain: apex-reference
topic: connectapiflowapprovalprocesscollection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.905Z
keywords: [ConnectApi.FlowApprovalProcessCollection, See]
---

# ConnectApi.FlowApprovalProcessCollection

# ConnectApi.FlowApprovalProcessCollection

The results of requesting a flow approval status.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| flowApproval​Processes | List<ConnectApi.​FlowApproval​Process> | A list of flow approval processes retrieved with the specified process names and related record ID. | 66.0 |
| relatedRecordId | String | The ID of the related record associated with the approval submission. | 66.0 |

#### See Also

-   [getFlowApprovalProcessWithStatus(relatedRecordId, processNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FlowApprovalProcesses_static_methods.htm#apex_ConnectAPI_FlowApprovalProcesses_getFlowApprovalProcessWithStatus_1 "Get the status and available actions for flow approval processes.")