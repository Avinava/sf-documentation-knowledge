---
title: "cgcloud__Batch_Last_Successful_Run__c"
domain: retail-api
topic: cgcloudbatchlastsuccessfulrunc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.165Z
estimatedTokens: 453
keywords: [cgcloud__Batch_Last_Successful_Run__c, Keeps, track, successful, runs, API, version, 55.0, later, cgcloud, _Batch, _Last, _Successful, _Run, Calls]
---

# cgcloud__Batch_Last_Successful_Run__c

> Keeps track of the last successful runs. This object is available in API
      version 55.0 and later.

# cgcloud\_\_Batch\_Last\_Successful\_Run\_\_c

Keeps track of the last successful runs. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUnique ID of the userThis field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Last_Run_Mode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe mode for which the batch process ran. |
| cgcloud__Last_Successful_Run__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time of the last successful run of the batch process. |
| cgcloud__Process_Id__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe process reference ID of the batch. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe sales org on which the batch process ran.Possible values are:0000000100020003 |
| cgcloud__Unique_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique concatenation of process and sales org. |
