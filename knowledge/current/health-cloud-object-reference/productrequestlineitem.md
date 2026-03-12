---
title: "ProductRequestLineItem"
domain: health-cloud-object-reference
topic: productrequestlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.993Z
estimatedTokens: 362
keywords: [ProductRequestLineItem, junction, ProductRequest, ProductTransfer, API, version, 50.0, later, Calls]
---

# ProductRequestLineItem

> A junction object between ProductRequest
      and ProductTransfer This object is available in API
    version 50.0 and later.

# ProductRequestLineItem

A junction object between ProductRequest and ProductTransfer This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time this record was viewed. |
| NeedByDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date specified as required in a transfer request. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the parent ProductRequest record. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the product requested. |
| ProductRequestLineItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. This is auto-generated. |
| QuantityRequested | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity that was requested. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the quantity requested.Possible values are:Each |
