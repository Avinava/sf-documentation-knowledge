---
title: "IndexRate"
domain: revenue-cloud
topic: indexrate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.346Z
estimatedTokens: 186
keywords: [IndexRate, Standard, extend, Salesforce, Pricing, represent, rate, API, version, 65.0, later, Calls]
---

# IndexRate

> Standard fields extend the IndexRate object for use in Salesforce Pricing to
         represent information for a given rate. This object is available in API version 65.0 and
         later.

# IndexRate

Standard fields extend the IndexRate object for use in Salesforce Pricing to represent information for a given rate. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Region | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecified the region associated with the given rate. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type associated with the given rate.Possible values are:Pricing |
