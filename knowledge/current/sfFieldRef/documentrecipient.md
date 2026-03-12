---
title: "DocumentRecipient"
domain: sfFieldRef
topic: documentrecipient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.515Z
estimatedTokens: 507
keywords: [DocumentRecipient, Connects, Service, Report, Digital, API, version, 55.0, later]
---

# DocumentRecipient

> Connects a Service Report to a Digital Signature. This object is
      available in API version 55.0 and later.

# DocumentRecipient

Connects a Service Report to a Digital Signature. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DocumentRecipient](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_documentrecipient.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeliveredDateTime | Delivered Date Time | datetime |  |  |  |  |
| DocumentAccessKey | Document Access Key | string |  | 80 |  |  |
| DocumentId | Document ID | reference |  | 18 |  |  |
| DocumentRecipient | Name | string |  | 255 |  |  |
| Email | Email | email |  | 80 |  |  |
| FinalStatusDateTime | Final Status Date Time | datetime |  |  |  |  |
| Id | Document Recipient ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalName | Legal Name | string |  | 255 |  |  |
| LocaleCode | Locale Code | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecipientId | Recipient ID | reference |  | 18 |  |  |
| RecipientName | Recipient Name | string |  | 255 |  |  |
| RecipientSequence | Recipient Sequence | int | 9 |  |  |  |
| RoutingOrder | Routing Order | int | 9 |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusReason | Status Reason | textarea |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
