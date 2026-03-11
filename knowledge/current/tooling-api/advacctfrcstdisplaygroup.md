---
title: "AdvAcctFrcstDisplayGroup"
domain: tooling-api
topic: advacctfrcstdisplaygroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.131Z
keywords: [AdvAcctFrcstDisplayGroup, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# AdvAcctFrcstDisplayGroup

# AdvAcctFrcstDisplayGroup

Represents information about the groups for the advanced account forecast set measures or dimensions. This object is available in API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AdvAccountForecastSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe forecast set associated with the advanced account forecast display group.This field is a polymorphic relationship field.Relationship NameAdvAccountForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet, SalesAgreementSettings |
| AdvAcctFrcstDisplayGroupName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the advanced account forecast group. |
| GroupType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the category for the display group.Possible value is:MEASURE |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the display group is the default group.The default value is false. |
| UserProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe profile for which the display group is applicable.This field is a relationship field.Relationship NameUserProfileRelationship TypeLookupRefers ToProfile |