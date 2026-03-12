---
title: "cgc_sync__Sync_Message__c"
domain: retail-api
topic: cgcsyncsyncmessagec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.723Z
estimatedTokens: 550
keywords: [cgc_sync__Sync_Message__c, messages, exposed, mobile, app, user, sync, process, API, version, 53.0, later, cgc, _sync, _Message]
---

# cgc_sync__Sync_Message__c

> Represents the messages that are exposed to a mobile app user during the sync
         process. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Message\_\_c

Represents the messages that are exposed to a mobile app user during the sync process. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgc_sync__Category__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCategory of the sync message. Possible values are:Core sync messageStatic sync messageDynamic sync message |
| cgc_sync__Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the message code. |
| cgc_sync__IsCore__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the sync message is a core system message (true) or not (false).These are the possible values:TrueFalseThe default value is false. |
| cgc_sync__MappingType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the mapping type of the sync message.These are the possible values:CategoryBasedCodeBasedObjectBased |
| cgc_sync__Nr_of_Translations__c | TypedoublePropertiesFilter, Nillable, SortDescriptionCount of the translations.This is a calculated field. |
