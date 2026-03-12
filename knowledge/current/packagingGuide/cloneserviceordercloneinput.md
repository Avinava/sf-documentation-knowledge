---
title: "clone(serviceOrderCloneInput)"
domain: packagingGuide
topic: cloneserviceordercloneinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.190Z
estimatedTokens: 138
keywords: [clone, serviceOrderCloneInput, entry, point, orders, org, optionally, associated, line, items]
---

# clone(serviceOrderCloneInput)

> Provides an entry point to clone orders in your org and, optionally, associated line
    items.

# clone(serviceOrderCloneInput)

Provides an entry point to clone orders in your org and, optionally, associated line items.

## Signature

global static List<COA\_ServiceOrderClone.COA\_ServiceOrderCloneOutput> edit(List<COA\_ServiceOrderClone.COA\_ServiceOrderCloneInput> serviceOrderCloneInput)

## Parameters

serviceOrderCloneInput

Type: List<COA\_ServiceOrderClone.COA\_ServiceOrderCloneInput>

List of wrapper classes to pass as input for the clone operation

## Return Value

Type: List<COA\_\_ServiceOrderClone.COA\_\_ServiceOrderCloneOutput>
