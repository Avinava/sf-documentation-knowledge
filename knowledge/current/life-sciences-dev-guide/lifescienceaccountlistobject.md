---
title: "LifeScienceAccountListObject"
domain: life-sciences-dev-guide
topic: lifescienceaccountlistobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.360Z
estimatedTokens: 396
keywords: [LifeScienceAccountListObject, referenced, provider, account, API, version, 65.0, later, Calls]
---

# LifeScienceAccountListObject

> Represents the object that is referenced in the provider account list. This
         object is available in API version 65.0 and later.

# LifeScienceAccountListObject

Represents the object that is referenced in the provider account list. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

LifeScienceAccountListObject isn't available in the Object Manager and can't be customized.

## Fields

| Field | Details |
| --- | --- |
| LifeScienceAccountListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionStores the provider account list which is of filter Type.This field is a relationship field.Relationship NameLifeScienceAccountListRelationship TypeMaster-detailRefers ToLifeScienceAccountList (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the Life Science Account List object. |
| ObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStores the information about the object used in the filter.Possible values are:AccountContactPointAddress —Contact Point AddressProviderAcctProductInfo—Provider Account Product InformationProviderAcctTerritoryInfo—Provider Account Territory Information |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
