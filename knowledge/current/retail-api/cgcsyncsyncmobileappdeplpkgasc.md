---
title: "cgc_sync__Sync_Mobile_App_Depl_Pkg_As__c"
domain: retail-api
topic: cgcsyncsyncmobileappdeplpkgasc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.763Z
estimatedTokens: 614
keywords: [recipient, deployment, package, API, version, 53.0, later, cgc, _sync, _Mobile, _App, _Depl, _Pkg, _As, Calls]
---

# cgc_sync__Sync_Mobile_App_Depl_Pkg_As__c

> Contains information about the recipient of the deployment
         package. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Depl\_Pkg\_As\_\_c

Contains information about the recipient of the deployment package. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgc_sync__Assignment_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionInformation about to whom the deployment package is assigned.Possible values are:AllUserThe default value is All. |
| cgc_sync__Installation_Deadline__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLast date by which the deployment package must be installed on the device. |
| cgc_sync__Publishing_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate from which the deployment package is available for download. |
| cgc_sync__State__c | TypestringPropertiesFilter, Nillable, SortDescriptionState of the deployment package.This is a calculated field.FormulaIf( cgc_sync__Sync_Mobile_App_Depl_Pkg__r.cgc_sync__Revoked__c, "Revoked", If(cgc_sync__Publishing_Date__c > NOW() , "Scheduled","Published")) |
| cgc_sync__Sync_Mobile_App_Depl_Pkg__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionDeployment package to which the assignment belongs.Relationship Namecgc_sync__Sync_Mobile_App_Depl_Pkg__rRelationship TypeMaster-detailRefers Tocgc_sync__Sync_Mobile_App_Depl_Pkg__c (the master object) |
| cgc_sync__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser to whom the deployment package is assigned.Relationship Namecgc_sync__User__rRelationship TypeLookupRefers ToUser |
