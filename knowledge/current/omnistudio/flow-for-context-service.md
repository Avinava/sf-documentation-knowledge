---
title: "Flow for Context Service"
domain: omnistudio
topic: flow-for-context-service
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.946Z
keywords: [Flow, Context, Service, FlowActionCall]
---

# Flow for Context Service

# Flow for Context Service

Represents the metadata associated with a flow. Use a flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Context Service exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid value only for Context Service include:deleteContextCache—Deletes the context instance from the context cache using specified context ID. This value is available in API version 64.0 and later.queryContextTags—Queries context instance tags associated with a context definition. This value is available in API version 64.0 and later.updateContextAttributes—Updates attributes on the context instance using context tags. This value is available in API version 64.0 and later. |