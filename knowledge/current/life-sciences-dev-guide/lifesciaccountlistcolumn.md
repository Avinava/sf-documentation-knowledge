---
title: "LifeSciAccountListColumn"
domain: life-sciences-dev-guide
topic: lifesciaccountlistcolumn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.229Z
estimatedTokens: 460
keywords: [LifeSciAccountListColumn, columns, selected, accounts, direct, relationship, objects, account, filters, API, version, 65.0, later, Calls]
---

# LifeSciAccountListColumn

> Represents the information of the columns selected from accounts or its
         supported direct relationship objects in account filters. This object is available in API
         version 65.0 and later.

# LifeSciAccountListColumn

Represents the information of the columns selected from accounts or its supported direct relationship objects in account filters. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

LifeSciAccountListColumn isn't available in the Object Manager and can't be customized.

## Fields

| Field | Details |
| --- | --- |
| ColumnApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of Life Science Account List Object field. |
| DisplayOrder | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe display order of the Life Science Account List Column in Life Science Account List. |
| LifeSciAccountListObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionStores the Life Science Account List Object associated with Life Science Account List Column.This is a relationship field.Relationship NameLifeSciAccountListObjectRelationship TypeMaster-detailRefers ToLifeScienceAccountListObject (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of Life Science Account List Column. |
| SortOrderType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe sort order of the Life Science Account List Column.Possible values are:ASCDESC |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
