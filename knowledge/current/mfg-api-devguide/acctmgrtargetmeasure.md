---
title: "AcctMgrTargetMeasure"
domain: mfg-api-devguide
topic: acctmgrtargetmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.078Z
estimatedTokens: 276
keywords: [AcctMgrTargetMeasure, measure, account, manager, target, dynamic, pick, referenced, API, version, 49.0, later, Calls]
---

# AcctMgrTargetMeasure

> Represents the type of measure for an account manager target. This object is a
      dynamic pick list table, which is referenced in account manager target. It is available
    in API version 49.0 and later.

# AcctMgrTargetMeasure

Represents the type of measure for an account manager target. This object is a dynamic pick list table, which is referenced in account manager target. It is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe API name of the measure type. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the measure type is Currency (false) or Other (true). The default value is false. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the account manager target. |
| MeasureType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThis field has two predefined measure types for an account manager target. The valid values are:CurrencyOther |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order of sorting the values in AcctMgrTargetMeasure. |
