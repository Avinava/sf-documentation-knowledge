---
title: "recall(serviceOrderRecallInput)"
domain: packagingGuide
topic: recallserviceorderrecallinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.223Z
estimatedTokens: 157
keywords: [recall, serviceOrderRecallInput, entry, point, orders, you’ve, submitted, Salesforce, Partner, Operations, haven’t, processed]
---

# recall(serviceOrderRecallInput)

> Provides an entry point to recall orders that you’ve submitted to Salesforce Partner
    Operations. You can recall only orders that haven’t been processed.

# recall(serviceOrderRecallInput)

Provides an entry point to recall orders that you’ve submitted to Salesforce Partner Operations. You can recall only orders that haven’t been processed.

## Signature

global static List<COA\_ServiceOrderRecall.COA\_ServiceOrderRecallOutput> recall(List<COA\_ServiceOrderRecall.COA\_ServiceOrderRecallInput> serviceOrderRecallInput)

## Parameters

serviceOrderRecallInput

Type: List<COA\_ServiceOrderRecall.COA\_ServiceOrderRecallInput>

List of wrapper classes to pass as input for the recall operation

## Return Value

Type: List<COA\_\_ServiceOrderRecall.COA\_\_ServiceOrderRecallOutput>
