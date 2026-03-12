---
title: "ReferralRecordTypeMapper"
domain: financial-services-cloud-object-reference
topic: referralrecordtypemapper
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.787Z
estimatedTokens: 242
keywords: [ReferralRecordTypeMapper, Maps, new, custom, record, Lead, represent, referral, standard, Financial, Services, Cloud, Calls]
---

# ReferralRecordTypeMapper

> Maps a new custom record type on the Lead object, used to represent a
   new type of referral, to the standard Referral record type from Financial Services
  Cloud.

# ReferralRecordTypeMapper

Maps a new custom record type on the Lead object, used to represent a new type of referral, to the standard Referral record type from Financial Services Cloud.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

New custom fields can’t be added to managed custom metadata types.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve(), search()

| Field | Details |
| --- | --- |
| LeadRecordType__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of your new custom record type on the Lead object being mapped to the Financial Services Cloud Referral record type.NoteThis field is for Salesforce internal-use only. By default, this field doesn’t appear on any page layout. |
| LeadRecordTypeNamespace__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace for Lead record type being mapped. |
