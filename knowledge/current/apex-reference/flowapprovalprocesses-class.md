---
title: "FlowApprovalProcesses Class"
domain: apex-reference
topic: flowapprovalprocesses-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.196Z
estimatedTokens: 497
namespace: ConnectApi
keywords: [FlowApprovalProcesses, Get, status, actions, flow, approval, processes., getFlowApprovalProcessWithStatus, relatedRecordId, processNames, API, Version, Requires, Chatter]
---

# FlowApprovalProcesses Class

> Get the status and available actions for flow approval processes.

**Namespace:** `ConnectApi`

# FlowApprovalProcesses Class

Get the status and available actions for flow approval processes.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## FlowApprovalProcesses Methods

These methods are for FlowApprovalProcesses. All methods are static.

-   **[getFlowApprovalProcessWithStatus(relatedRecordId, processNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FlowApprovalProcesses_static_methods.htm#apex_ConnectAPI_FlowApprovalProcesses_getFlowApprovalProcessWithStatus_1)**
    Get the status and available actions for flow approval processes.

### getFlowApprovalProcessWithStatus(relatedRecordId, processNames)

Get the status and available actions for flow approval processes.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FlowApprovalProcessCollection getFlowApprovalProcessWithStatus(String relatedRecordId, List<String\> processNames)

#### Parameters

relatedRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the related record associated with the approval submission.

processNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of flow approval process names.

#### Return Value

Type: [ConnectApi.FlowApprovalProcessCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_approval_process_collection.htm "The results of requesting a flow approval status.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getFlowApprovalProcessWithStatus(relatedRecordId, processNames) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FlowApprovalProcesses_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.FlowApprovalProcessCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_approval_process_collection.htm)
