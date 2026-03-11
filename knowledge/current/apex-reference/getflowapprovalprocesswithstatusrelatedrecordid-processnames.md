---
title: "getFlowApprovalProcessWithStatus(relatedRecordId, processNames)"
domain: apex-reference
topic: getflowapprovalprocesswithstatusrelatedrecordid-processnames
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.121Z
keywords: [getFlowApprovalProcessWithStatus, relatedRecordId, processNames, Get, status, available, actions, flow, approval, processes., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFlowApprovalProcessWithStatus(relatedRecordId, processNames)

> Get the status and available actions for flow approval processes.

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