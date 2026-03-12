---
title: "cgc_sync__Sync_Metadata_Changes__c"
domain: retail-api
topic: cgcsyncsyncmetadatachangesc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.739Z
estimatedTokens: 647
keywords: [cgc_sync__Sync_Metadata_Changes__c, Stores, timestamps, changes, made, metadata, API, version, 53.0, later, cgc, _sync, _Metadata, _Changes, Calls]
---

# cgc_sync__Sync_Metadata_Changes__c

> Stores the timestamps for the changes that are made in the metadata.
      This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Metadata\_Changes\_\_c

Stores the timestamps for the changes that are made in the metadata. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__DeploymentTimeStamp__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the latest changes in the deployment package. |
| cgc_sync__Device_Health_Status_Requires_Alert__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether there’s one or more external devices that have an error or warning status (true) or not (false).The default value is false. |
| cgc_sync__Identifier__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionInternal identifier of the client. |
| cgc_sync__MobilityThemesTimeStamp__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the latest changes in the theme configuration. |
| cgc_sync__NamedQueriesTimeStamp__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the latest changes in the named query configuration. |
| cgc_sync__NftsTimeStamp__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the latest changes in the NFT configuration. |
| cgc_sync__SyncConfigurationTimeStamp__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the latest changes in the sync configuration. |
| cgc_sync__TrackedObjectDescribeTimeStamp__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the client metadata for configured tracked objects. |
| cgc_sync__TrackedObjectSettingsTimeStamp__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the latest changes in the tracked object configuration. |
| cgc_sync__TranslationTimeStamp__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp of the latest changes in sync messages. |
