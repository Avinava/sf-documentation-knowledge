---
title: "Flow for Net Zero Cloud"
domain: netzero-cloud-dev-guide
topic: flow-for-net-zero-cloud
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.884Z
estimatedTokens: 255
keywords: [Flow, Net, Zero, Cloud, metadata, associated, application, navigates, users, series, screens, query, records, database, execute]
---

# Flow for Net Zero Cloud

> Represents the metadata associated with a flow. With Flow, you can create an application
  that navigates users through a series of screens to query and update records in the database. You
  can also execute logic and provide branching capability based on user input to build dynamic
  applications.

# Flow for Net Zero Cloud

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Net Zero Cloud exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid value only for Net Zero Cloud include:dstrEnergyAttrCertCredits—Distribute energy attribute certificate credits to claim the renewable electricity usage in stationary asset energy use records. |

#### See Also

-   [*Metadata API Developer Guide*: Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm "Metadata API Developer Guide: Flow - HTML (New Window)")
