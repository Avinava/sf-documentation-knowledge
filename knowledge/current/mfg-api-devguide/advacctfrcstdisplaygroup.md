---
title: "AdvAcctFrcstDisplayGroup"
domain: mfg-api-devguide
topic: advacctfrcstdisplaygroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.568Z
estimatedTokens: 359
keywords: [AdvAcctFrcstDisplayGroup, groups, advanced, account, forecast, measures, dimensions, API, version, 54.0, later, Calls]
---

# AdvAcctFrcstDisplayGroup

> Represents information about the groups for the advanced account forecast set
         measures or dimensions. This object is available in API version 54.0 and later.

# AdvAcctFrcstDisplayGroup

Represents information about the groups for the advanced account forecast set measures or dimensions. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvAccountForecastSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe forecast set associated with the advanced account forecast display group.This is a relationship field.Relationship NameAdvAccountForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet |
| AdvAcctFrcstDisplayGroupName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the advanced account forecast display group. |
| GroupType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the category for the display group.Possible values are:MEASURE—Measure |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the display group is the default group.The default value is 'false'. |
| UserProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe profile for which the display group is applicable.This is a relationship field.Relationship NameUserProfileRelationship TypeLookupRefers ToProfile |
