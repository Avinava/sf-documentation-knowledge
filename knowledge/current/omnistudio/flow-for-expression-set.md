---
title: "Flow for Expression Set"
domain: omnistudio
topic: flow-for-expression-set
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.808Z
estimatedTokens: 234
keywords: [Flow, Expression, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic, provide]
---

# Flow for Expression Set

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Expression Set

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Business Rules Engine exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall metadata type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Expression Set include:runExpressionSet—Invoke an active expression set. This value is available in API version 55.0 and later. |
