---
title: "AdvAcctFrcstDplyGroupItem"
domain: mfg-api-devguide
topic: advacctfrcstdplygroupitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.572Z
estimatedTokens: 305
keywords: [AdvAcctFrcstDplyGroupItem, items, associated, display, group, advanced, account, forecast, API, version, 54.0, later, Calls]
---

# AdvAcctFrcstDplyGroupItem

> Represents information about the items associated with a display group for an
         advanced account forecast set. This object is available in API version 54.0 and later.

# AdvAcctFrcstDplyGroupItem

Represents information about the items associated with a display group for an advanced account forecast set. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvAcctFrcstDisplayGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe advanced account forecast display group that’s associated with the group item.This is a relationship field.Relationship NameAdvAcctFrcstDisplayGroupRelationship TypeLookupRefers ToAdvAcctFrcstDisplayGroup |
| AdvAcctFrcstDplyGroupItemName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the advanced account forecast display group item. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe display order of the display group item. |
| MeasureReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the measure associated with the display group item.This is a relationship field.Relationship NameMeasureReferenceRelationship TypeLookupRefers ToAdvAcctForecastMeasureDef |
