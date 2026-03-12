---
title: "Flow for Identity Verification"
domain: omnistudio
topic: flow-for-identity-verification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.943Z
estimatedTokens: 258
keywords: [Flow, Identity, Verification, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Identity Verification

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Identity Verification

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Identity Verification exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall metadata type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Identity Verification include:saveMemberVerificationSteps—Saves the customer verification data for auditing purposes when the identity verification flow is run. This value is available in API version 56.0 and later. |
