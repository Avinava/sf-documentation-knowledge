---
title: "GroupRecordTypeMapper"
domain: financial-services-cloud-object-reference
topic: grouprecordtypemapper
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.777Z
estimatedTokens: 225
keywords: [GroupRecordTypeMapper, Maps, new, custom, Group, record, standard, Financial, Services, Cloud, Calls]
---

# GroupRecordTypeMapper

> Maps a new custom Group record type to the standard Group record type
   from Financial Services Cloud.

# GroupRecordTypeMapper

Maps a new custom Group record type to the standard Group record type from Financial Services Cloud.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

New custom fields can’t be added to managed custom metadata types.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve(), search()

| Field | Details |
| --- | --- |
| AccountRecordType__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of your new custom Group record type being mapped to the Financial Services Cloud Group record type.NoteThis field is for Salesforce internal-use only. By default, this field doesn’t appear on any page layout. |
| AccountRecordTypeNamespace__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace for Account record type being mapped. |
