---
title: "Flow for Digital Lending"
domain: omnistudio
topic: flow-for-digital-lending
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:51.042Z
estimatedTokens: 278
keywords: [Flow, Digital, Lending, Represents, metadata, associated, flow., create, application, navigates, users, through, series, screens, query, update, records, database., execute, logic]
---

# Flow for Digital Lending

> Represents the metadata associated with a flow. With Flow, you can create an application
  that navigates users through a series of screens to query and update records in the database. You
  can also execute logic and provide branching capability based on user input to build dynamic
  applications.

# Flow for Digital Lending

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Digital Lending exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall metadata type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Digital Lending include:checkInContractDocumentVersion—Check-in a contract document version.createClmContract—Create a contract for a specified record.performContractAction—Perform actions on a contract based on its status.sendContractForESignature—Send a contract to specified recipients for e-signature. |
