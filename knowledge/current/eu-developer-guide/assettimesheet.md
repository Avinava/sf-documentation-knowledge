---
title: "AssetTimesheet"
domain: eu-developer-guide
topic: assettimesheet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.082Z
estimatedTokens: 284
keywords: [AssetTimesheet, junction, asset, time, sheet, entry, records, vehicles, heavy, equipment, technician, job, API, version, 66.0]
---

# AssetTimesheet

> Represents a junction between an asset and a time sheet or time sheet entry that records all
         vehicles and heavy equipment used by a technician during a job. This object is available in API version 66.0 and later.

# AssetTimesheet

Represents a junction between an asset and a time sheet or time sheet entry that records all vehicles and heavy equipment used by a technician during a job. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Asset | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the asset used to complete a time sheet or a time sheet entry.This field is a relationship field.Relationship NameAssetRefers ToAsset |
| TimeSheetEntry | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the time sheet entry associated with the asset.This field is a relationship field.Relationship NameTimeSheetEntryRefers ToTimeSheetEntry |
| TimeSheet | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the time sheet associated with the asset.This field is a relationship field.Relationship NameTimeSheetRefers ToTimeSheet |
