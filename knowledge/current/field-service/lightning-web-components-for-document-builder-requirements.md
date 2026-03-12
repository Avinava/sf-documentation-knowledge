---
title: "Lightning Web Components for Document Builder: Requirements"
domain: field-service
topic: lightning-web-components-for-document-builder-requirements
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:53.798Z
estimatedTokens: 689
keywords: [Lightning, Web, Components, Document, Builder, Requirements, creating, LWCs, Salesforce, Design, System, SLDS, wire, adapters, operations]
---

# Lightning Web Components for Document Builder: Requirements

> Here are the requirements for creating Lightning web components (LWCs) for Document
  Builder.

# Lightning Web Components for Document Builder: Requirements

Here are the requirements for creating Lightning web components (LWCs) for Document Builder.

## Use Salesforce Lightning Design System (SLDS) wire adapters

-   Don’t use aura controllers.
-   Don’t use Apex. While Apex works online, it returns an empty array when offline.
-   Calls to a third-party data source to retrieve data don’t work offline.

## Use wire adapters for create, update, and delete operations

You can use only these operations, which are logically primed: create, update, delete, getRecord, getRecords, getObjectInfo, and graphQL. Use of graphQL is recommended. getRelatedListRecords is not fully supported for offline use.

You can use these wire adapters to create, update, delete, and get records.

-   import { getRecord } from ‘lightning/uiRecordApi'
-   import { createRecord } from 'lightning/uiRecordApi'
-   import { deleteRecord } from 'lightning/uiRecordApi'
-   import { updateRecord } from 'lightning/uiRecordApi'
-   import { getObjectInfo } from 'lightning/uiObjectInfoApi'
-   import { gql, graphql } from 'lightning/uiGraphQLApi'

## Remove Aura dependencies

Field Service developers using the Lightning Software Developers Kit (LSDK) can’t use any code that relies on Aura because Field Service must be able to execute offline. To do so, use only LWCs.

LWCs that depend on Aura run into trouble at run time. To avoid problems, you must fully evaluate your component’s dependencies and go all the way down the chain, ensuring that no code uses Aura.

## Ensure LWCs Are Statically Analyzable

If your LWC isn’t statically analyzable, also known as Komaci-friendly, Komaci doesn’t prime the LWC. Komaci is a suite of packages that provides data flow graph generation and processing capabilities. It defines a schema for an Abstract Data Graph (ADG), which is a serializable metadata-based representation of a data flow graph. Komaci includes an ADG generation service. It also includes a framework for building plug-ins to read, process, and transform an ADG and a runtime engine for hosting an ADG with live inputs and full reactivity.

Komaci provides an abstraction layer for the data flow through an LWC component tree. It includes a utility to analyze an LWC module and generate an ADG and runtime helpers for runtime integration with LWC wires. It also provides an extension for LWC applications to apply progressive data resolution and integrate with the Komaci engine.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=field_service_dev)

#### Important

For custom LWCs to appear on mobile document preview, you must include this code in your js-meta.xml file: <supportedFormFactor type="Small" />
