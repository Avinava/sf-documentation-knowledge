---
title: "edit(serviceOrderEditInput)"
domain: packagingGuide
topic: editserviceordereditinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.206Z
estimatedTokens: 148
keywords: [edit, serviceOrderEditInput, entry, point, orders, you’ve, submitted, Salesforce, Partner, Operations, haven’t, processed]
---

# edit(serviceOrderEditInput)

> Provides an entry point to edit orders that you’ve submitted to Salesforce Partner
    Operations. You can edit only orders that haven’t been processed.

# edit(serviceOrderEditInput)

Provides an entry point to edit orders that you’ve submitted to Salesforce Partner Operations. You can edit only orders that haven’t been processed.

## Signature

global static List<COA\_ServiceOrderEdit.COA\_ServiceOrderEditOutput> edit(List<COA\_ServiceOrderEdit.COA\_ServiceOrderEditInput> serviceOrderEditInput)

## Parameters

serviceOrderEditInput

Type: List<COA\_ServiceOrderEdit.COA\_ServiceOrderEditInput>

List of wrapper classes to pass as input for the edit operation

## Return Value

Type: List<COA\_ServiceOrderEdit.COA\_ServiceOrderEditOutput>
