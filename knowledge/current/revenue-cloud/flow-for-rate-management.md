---
title: "Flow for Rate Management"
domain: revenue-cloud
topic: flow-for-rate-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.256Z
estimatedTokens: 177
keywords: [Flow, Rate, Management, Represents, metadata, associated, flow., create, application, takes, users, through, series, pages, query, update, records, database., run, logic]
---

# Flow for Rate Management

> Represents the metadata associated with a flow. With Flow, you can create an
    application that takes users through a series of pages to query and update the records in the
    database. You can also run logic and provide branching capability based on user input to build
    dynamic applications.

# Flow for Rate Management

Represents the metadata associated with a flow. With Flow, you can create an application that takes users through a series of pages to query and update the records in the database. You can also run logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Rate Management exposes additional actionType values for the FlowActionCall metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values for Rate Management include:invokeRatingService—Invoke the rating service to rate the usage records. |
