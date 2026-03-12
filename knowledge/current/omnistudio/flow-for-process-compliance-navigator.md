---
title: "Flow for Process Compliance Navigator"
domain: omnistudio
topic: flow-for-process-compliance-navigator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:52.922Z
estimatedTokens: 252
keywords: [Flow, Process, Compliance, Navigator, Represents, metadata, associated, flow., flow, create, application, takes, users, through, series, pages, query, update, records, database.]
---

# Flow for Process Compliance Navigator

> Represents the metadata associated with a flow. Use a flow to create an application
    that takes users through a series of pages to query and update records in the database. You can
    also execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Process Compliance Navigator

Represents the metadata associated with a flow. Use a flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Process Compliance Navigator exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid value only for Process Compliance Navigator include:evalCmplValidationProcedure—Evaluate a compliance validation procedure, and create a procedure evaluation API response.evalCmplVldProcedureAsync—Asynchronously evaluate a compliance validation procedure and create a procedure evaluation job ID.retrieveCmplAsyncEvalJobDtl—Get the job details for an asynchronous compliance evaluation. |
