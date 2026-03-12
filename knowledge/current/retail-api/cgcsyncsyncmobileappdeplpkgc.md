---
title: "cgc_sync__Sync_Mobile_App_Depl_Pkg__c"
domain: retail-api
topic: cgcsyncsyncmobileappdeplpkgc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.756Z
estimatedTokens: 1210
keywords: [cgc_sync__Sync_Mobile_App_Depl_Pkg__c, Deployment, packages, contain, application, runtime, artifacts, mobile, app, API, version, 53.0, later, cgc, _sync]
---

# cgc_sync__Sync_Mobile_App_Depl_Pkg__c

> Deployment packages that contain application runtime artifacts of the mobile
         app. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_Depl\_Pkg\_\_c

Deployment packages that contain application runtime artifacts of the mobile app. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgc_sync__AggregatedState__c | TypestringPropertiesFilter, Nillable, SortDescriptionDeployment package state. Possible values are:InitialRevokedScheduledPublishedPublished (partially)This is a calculated field.FormulaIF(cgc_sync__Revoked__c = True, "Revoked",        IF(cgc_sync__Assignment_to_All__c + cgc_sync__Assignment_to_User__c == 0, 'Initial',      IF(cgc_sync__MinPublishingDate__c > NOW() && cgc_sync__MaxPublishingDate__c > NOW(), 'Scheduled',        IF(cgc_sync__MinPublishingDate__c <= NOW() && cgc_sync__MaxPublishingDate__c <= NOW(), 'Published', 'Published (partially)')     )   ) ) |
| cgc_sync__Assignment__c | TypestringPropertiesFilter, Nillable, SortDescriptionDisplay assignment type and number of assignments per assignment type in .csv format.This is a calculated field.FormulaIf( cgc_sync__Assignment_to_All__c = 0 && cgc_sync__Assignment_to_User__c = 0, 'Not assigned',  If( cgc_sync__Assignment_to_All__c > 0, 'All', '') & If( cgc_sync__Assignment_to_All__c > 0 && cgc_sync__Assignment_to_User__c > 0, ', ', '') & If( cgc_sync__Assignment_to_User__c > 0, 'User(' & Text(cgc_sync__Assignment_to_User__c) & ')', '')) |
| cgc_sync__Assignment_to_All__c | TypedoublePropertiesFilter, Nillable, SortDescriptionDeployment package that users can download.This is a calculated field. |
| cgc_sync__Assignment_to_User__c | TypedoublePropertiesFilter, Nillable, SortDescriptionDeployment package that a specific user can download.This is a calculated field. |
| cgc_sync__Deployment_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDeployment type of the mobile app package. Possible values are:Complete RTADelta RTAFullPicturesThe default value is Complete RTA. |
| cgc_sync__Description__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the mobile deployment package. |
| cgc_sync__Installation_Deadline__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time by when this package must be installed. |
| cgc_sync__MaxPublishingDate__c | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time by when this package must be published.This is a calculated field. |
| cgc_sync__MinPublishingDate__c | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate from which this package can be published.This is a calculated field. |
| cgc_sync__Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the deployment mobile package. |
| cgc_sync__Publish_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when this package is made available to a user's devices. |
| cgc_sync__Registration_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the deployment package record was created. |
| cgc_sync__Registration_User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser who registered the package.This is a relationship field.Relationship Namecgc_sync__Registration_User__rRelationship TypeLookupRefers ToUser |
| cgc_sync__Revoked__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the deployment mobile package is revoked (true) or not (false). A revoked deployment mobile package isn’t available for download.The default value is false. |
| cgc_sync__Version__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVersion of the deployment package. |

## Code Examples

```
IF(cgc_sync__Revoked__c = True, "Revoked",     
  IF(cgc_sync__Assignment_to_All__c + cgc_sync__Assignment_to_User__c == 0, 'Initial', 
    IF(cgc_sync__MinPublishingDate__c > NOW() && cgc_sync__MaxPublishingDate__c > NOW(), 'Scheduled', 
      IF(cgc_sync__MinPublishingDate__c <= NOW() && cgc_sync__MaxPublishingDate__c <= NOW(), 'Published', 'Published (partially)')
    )
  )
)
```
