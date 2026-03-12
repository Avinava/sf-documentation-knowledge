---
title: "cgc_sync__Sync_Message_Translation__c"
domain: retail-api
topic: cgcsyncsyncmessagetranslationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.729Z
estimatedTokens: 293
keywords: [cgc_sync__Sync_Message_Translation__c, translated, sync, messages, API, version, 53.0, later, cgc, _sync, _Message, _Translation, Calls]
---

# cgc_sync__Sync_Message_Translation__c

> Contains translated sync messages. This object is available in API
      version 53.0 and later.

# cgc\_sync\_\_Sync\_Message\_Translation\_\_c

Contains translated sync messages. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the translation file. |
| cgc_sync__LanguageCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage code of the translation file, such as en_US. |
| cgc_sync__Language__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the language. |
| cgc_sync__Sync_Message__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRefers to the sync message record.This is a relationship field.Relationship Namecgc_sync__Sync_Message__rRelationship TypeMaster-detailRefers Tocgc_sync__Sync_Message__c (the master object) |
| cgc_sync__Text__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTranslated text. |
