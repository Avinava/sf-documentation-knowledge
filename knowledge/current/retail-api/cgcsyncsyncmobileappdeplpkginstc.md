---
title: "cgc_sync__Sync_Mobile_App_Depl_Pkg_Inst__c"
domain: retail-api
topic: cgcsyncsyncmobileappdeplpkginstc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.773Z
estimatedTokens: 740
keywords: [Maintains, record, installed, deployment, packages, their, installation, timestamps, devices, deployed, API, version, 53.0, later, cgc]
---

# cgc_sync__Sync_Mobile_App_Depl_Pkg_Inst__c

> Maintains a record of the installed deployment packages, their
         installation timestamps, and devices on which those packages are deployed. This object
      is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Depl\_Pkg\_Inst\_\_c

Maintains a record of the installed deployment packages, their installation timestamps, and devices on which those packages are deployed. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__AppInstallationID__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the application.This is a relationship field.Relationship Namecgc_sync__AppInstallationID__rRelationship TypeLookupRefers Tocgc_sync__Sync_Mobile_App_Installation__c |
| cgc_sync__Deployment_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the deployment package was deployed. |
| cgc_sync__Device_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the device. |
| cgc_sync__Is_Current__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is related to the latest installed deployment package (true) or not (false). The value is set by an event trigger.The default value is false. |
| cgc_sync__Recipient_User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDevice user ID.This is a relationship field.Relationship Namecgc_sync__Recipient_User__rRelationship TypeLookupRefers ToUser |
| cgc_sync__State__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the deployment package installation.Possible values are:DownloadedErrorInstalled |
| cgc_sync__Sync_Mobile_App_Depl_Pkg_As__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRelation to the deployment package assignment.Relationship Namecgc_sync__Sync_Mobile_App_Depl_Pkg_As__rRelationship TypeLookupRefers Tocgc_sync__Sync_Mobile_App_Depl_Pkg_As__c |
| cgc_sync__Sync_Mobile_App_Depl_Pkg__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRelation to the deployment package.This is a relationship field.Relationship Namecgc_sync__Sync_Mobile_App_Depl_Pkg__rRelationship TypeLookupRefers Tocgc_sync__Sync_Mobile_App_Depl_Pkg__c |
