---
title: "LifeSciAccountListMember"
domain: life-sciences-dev-guide
topic: lifesciaccountlistmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.236Z
estimatedTokens: 552
keywords: [LifeSciAccountListMember, account, routine, API, version, 65.0, later, Calls]
---

# LifeSciAccountListMember

> Represents information about account static lists and routine. This object is
         available in API version 65.0 and later.

# LifeSciAccountListMember

Represents information about account static lists and routine. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

LifeSciAccountListMember isn't available in the Object Manager and can't be customized.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the identifier for the account associated with the static list or route.This is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactPointAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the location details of an event in a route.This is a relationship field.Relationship NameContactPointAddressRefers ToContactPointAddress |
| DurationInMinutes | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the duration of the route event in minutes. |
| LifeScienceAccountListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionStores the provider account list, which is a static list or a route.This is a relationship field.Relationship NameLifeScienceAccountListRelationship TypeMaster-detailRefers ToLifeScienceAccountList (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Life Science Account List Member. |
| ProviderVisitOffsetDay | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the duration between the start date of the route and the date of the visit, in days. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| VisitStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start time of an event in a route in the 24-Hour format. |
