---
title: "SalesTransactionType"
domain: revenue-cloud
topic: salestransactiontype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.488Z
estimatedTokens: 257
keywords: [SalesTransactionType, Represents, sales, transaction., API, version, 61.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# SalesTransactionType

> Represents the type of the sales transaction. This object is
      available in API version 61.0 and later.

# SalesTransactionType

Represents the type of the sales transaction. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view but not viewed it directly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the sales transaction type. |
