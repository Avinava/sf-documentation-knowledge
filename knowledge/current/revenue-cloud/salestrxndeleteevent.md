---
title: "SalesTrxnDeleteEvent"
domain: revenue-cloud
topic: salestrxndeleteevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:50.462Z
estimatedTokens: 124
keywords: [SalesTrxnDeleteEvent, platform, event, triggers, deletion, sales, transaction, fulfillment, records, corresponding, deleted, API, 64.0]
---

> Represents the platform event that triggers the deletion of sales transaction
         fulfillment request records when the corresponding reference records are deleted. This
      object is available in API version 64.0 and later.

# SalesTrxnDeleteEvent

Represents the platform event that triggers the deletion of sales transaction fulfillment request records when the corresponding reference records are deleted. This object is available in API version 64.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| ReferenceObjectIdentifier | TypestringPropertiesCreate, NillableDescriptionObject identifier for the sales transaction fulfillment request to be deleted. |
