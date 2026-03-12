---
title: "LifeSciAcctListFilterCrit"
domain: life-sciences-dev-guide
topic: lifesciacctlistfiltercrit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.254Z
estimatedTokens: 595
keywords: [LifeSciAcctListFilterCrit, Stores, rules, conditions, derived, Account, direct, relationship, objects, filter, Life, Sciences, accounts, API, version]
---

# LifeSciAcctListFilterCrit

> Stores the rules and conditions derived from the Account object or its
         supported direct relationship objects to filter Life Sciences accounts. This object is
         available in API version 65.0 and later.

# LifeSciAcctListFilterCrit

Stores the rules and conditions derived from the Account object or its supported direct relationship objects to filter Life Sciences accounts. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

LifeSciAcctListFilterCrit isn't available in the Object Manager and can't be customized.

## Fields

| Field | Details |
| --- | --- |
| ColumnApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of Life Science Account List Object field. |
| ColumnDataType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of the Life Science Account List object field. |
| ColumnValue | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionStores the value against which the Life Science Account List object field is evaluated. |
| LifeSciAccountListObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionStores the Life Science Account List object associated with the filter criteria.This field is a relationship field.Relationship NameLifeSciAccountListObjectRelationship TypeMaster-detailRefers ToLifeScienceAccountListObject (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of Life Science Account List Filter Criteria. |
| OperatorType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStores the information about an operator that will be used to evaluate a criteria.Possible values are:ContainsDoesNotContain—Does Not ContainEqualsGreaterOrEqual—Greater Or EqualGreaterThan—Greater ThanInLessOrEqual—Less Or EqualLessThan—Less ThanNotEqualTo—Not Equal To |
| SequenceNumber | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe sequence number of the Life Science Account List Filter Criteria in the filter logic of the related account list. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
