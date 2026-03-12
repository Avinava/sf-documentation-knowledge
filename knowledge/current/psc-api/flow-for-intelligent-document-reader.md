---
title: "Flow for Intelligent Document Reader"
domain: psc-api
topic: flow-for-intelligent-document-reader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.764Z
estimatedTokens: 303
keywords: [Flow, Intelligent, Document, Reader, metadata, associated, application, navigates, users, series, screens, query, records, database, execute]
---

# Flow for Intelligent Document Reader

> Represents the metadata associated with a flow. With a flow, you can create an
  application that navigates users through a series of screens to query and update records in the
  database. You can also execute logic and provide branching capability based on user input to build
  dynamic applications.

# Flow for Intelligent Document Reader

Represents the metadata associated with a flow. With a flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Intelligent Document Reader exposes additional actionType values for the FlowActionCall metadata type. For more information on Flow and FlowActionCall metadata types, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Intelligent Document Reader include:fetchActiveOcrTemplates—Fetch all the active OCR templates present in an org. Available in API version 58.0 and later.fetchExtractedText—Fetch the text extracted from an uploaded document. Available in API version 58.0 and later.initiateTextExtraction—Extract text from the pages of an uploaded document. Available in API version 58.0 and later. |
