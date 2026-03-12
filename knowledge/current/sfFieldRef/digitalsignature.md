---
title: "DigitalSignature"
domain: sfFieldRef
topic: digitalsignature
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.138Z
estimatedTokens: 464
keywords: [DigitalSignature, captured, service, report]
---

# DigitalSignature

> Represents a signature captured on a service report in field
			service.

# DigitalSignature

Represents a signature captured on a service report in field service.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DigitalSignature](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_digitalsignature.htm "HTML (New Window)") in the Field Service Developer Guide, Life Sciences Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DeviceOs | Device OS | string |  | 255 |  |  |
| DeviceType | Device Type | string |  | 255 |  |  |
| DigitalSignatureNumber | Signature Number | string |  | 255 |  |  |
| DocumentBody | Digital Signature Body | base64 |  |  |  |  |
| DocumentContentType | Digital Signature Content Type | picklist |  | 255 |  |  |
| DocumentLength | Digital Signature Length | int | 9 |  |  |  |
| DocumentName | Signature Document Name | string |  | 40 |  |  |
| Id | Digital Signature ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParentId | Parent Record ID | reference |  | 18 |  |  |
| Place | Place | string |  | 255 |  |  |
| SignatureType | Type | picklist |  | 40 |  |  |
| SignedBy | Signed By | string |  | 255 |  |  |
| SignedDate | Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WebBrowser | Web Browser | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
