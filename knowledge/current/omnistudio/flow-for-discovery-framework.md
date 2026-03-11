---
title: "Flow for Discovery Framework"
domain: omnistudio
topic: flow-for-discovery-framework
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:10.048Z
keywords: [Flow, Discovery, Framework, FlowActionCall]
---

# Flow for Discovery Framework

# Flow for Discovery Framework

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Discovery Framework exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall metadata types, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Discovery Framework include:getAssessmentResponseSummary—Invoke the Get Assessment Response Summary action. This value is available in API version 57.0 and later. |