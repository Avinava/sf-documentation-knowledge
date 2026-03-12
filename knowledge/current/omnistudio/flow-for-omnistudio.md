---
title: "Flow for Omnistudio"
domain: omnistudio
topic: flow-for-omnistudio
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:52.783Z
estimatedTokens: 188
keywords: [Flow, Omnistudio, Represents, metadata, associated, flow., flow, create, application, takes, users, through, series, pages, query, update, records, database., execute, logic]
---

# Flow for Omnistudio

> Represents the metadata associated with a flow. Use a flow to create an application
    that takes users through a series of pages to query and update records in the database. You can
    also execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Omnistudio

Represents the metadata associated with a flow. Use a flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Omnistudio exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid value only for Omnistudio include:executeIntegrationProcedure—Executes an Integration Procedure with Agentforce configured. Available in API version 64.0 and later. |
