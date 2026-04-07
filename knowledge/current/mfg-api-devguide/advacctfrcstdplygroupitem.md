---
title: "AdvAcctFrcstDplyGroupItem"
domain: mfg-api-devguide
topic: advacctfrcstdplygroupitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:13.514Z
estimatedTokens: 305
keywords: [AdvAcctFrcstDplyGroupItem, items, display, group, advanced, account, forecast, API, 54.0]
---

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
