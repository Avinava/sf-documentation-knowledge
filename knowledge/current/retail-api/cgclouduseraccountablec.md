---
title: "cgcloud__User_Accountable__c"
domain: retail-api
topic: cgclouduseraccountablec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.317Z
estimatedTokens: 378
keywords: [cgcloud__User_Accountable__c, Sales, Rep, Supervisor, Retail, Execution, user, accountable, business, process, API, version, 55.0, later, cgcloud]
---

# cgcloud__User_Accountable__c

> Represents a Sales Rep or Supervisor or other Retail Execution user who is
         accountable for a Retail Execution business process. This object is available in API
      version 55.0 and later.

# cgcloud\_\_User\_Accountable\_\_c

Represents a Sales Rep or Supervisor or other Retail Execution user who is accountable for a Retail Execution business process. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRequired. Default name of this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Unique_User_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identification of the user. |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to the user.This field is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |
