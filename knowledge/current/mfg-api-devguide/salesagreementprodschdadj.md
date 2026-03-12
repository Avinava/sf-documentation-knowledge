---
title: "SalesAgreementProdSchdAdj"
domain: mfg-api-devguide
topic: salesagreementprodschdadj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.181Z
estimatedTokens: 359
keywords: [SalesAgreementProdSchdAdj, manual, adjustments, made, metric, sales, agreement, product, schedule, API, version, 47.0, later, Calls]
---

# SalesAgreementProdSchdAdj

> Represents the manual adjustments made to metric values for a sales agreement
      product schedule. This object is available in API version 47.0 and later.

# SalesAgreementProdSchdAdj

Represents the manual adjustments made to metric values for a sales agreement product schedule. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Adjusted By | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who’s made an adjustment to the sales agreement product schedule record. |
| Sales Agreement Product Schedule | TypereferencePropertiesFilter, Group, SortDescriptionThe sales agreement product schedule record to which an adjustment was made. |
| Advanced Account Forecast Measure Definition | TypereferencePropertiesFilter, Group, SortDescriptionThe measure definition of the advanced account forecast record to which the adjustment is being made. |
| Initial Value | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe value in the sales agreement product schedule record before the adjustment is made. |
| Updated Value Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the adjustment made to a sales agreement product schedule. |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information provided by the user who made the adjustments. |
