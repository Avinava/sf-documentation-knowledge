---
title: "IndividualRecordTypeMapper"
domain: financial-services-cloud-object-reference
topic: individualrecordtypemapper
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.783Z
estimatedTokens: 479
keywords: [IndividualRecordTypeMapper, Maps, new, custom, Individual, record, standard, Financial, Services, Cloud, Calls]
---

# IndividualRecordTypeMapper

> Maps a new custom Individual record type to the standard Individual
   record type from Financial Services Cloud.

# IndividualRecordTypeMapper

Maps a new custom Individual record type to the standard Individual record type from Financial Services Cloud.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

New custom fields can’t be added to managed custom metadata types.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve(), search()

| Field | Details |
| --- | --- |
| AccountRecordTypeNamespace__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace for Account record type being mapped. |
| AccountRecordType__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of your new custom Individual record type being mapped to the Financial Services Cloud Individual record type.NoteThis field is for Salesforce internal-use only. By default, this field doesn’t appear on any page layout. |
| ContactRecordTypeNamespace__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace for Contact record type being mapped. |
| ContactRecordType__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionContact record type being mapped to the Financial Services Cloud Individual record type. |
| DetailPage__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSalesforce internal-use only. |
| IndividualType__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of Individual being mapped. |
| LeadRecordTypeNamespace__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLead namespace for your custom record type’s org. |
| LeadRecordType__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLead Record Type to be used when converting Lead records. Leave this field blank to use any record type. All available record types are converted to an Individual record type unless there is another mapping specified. |
