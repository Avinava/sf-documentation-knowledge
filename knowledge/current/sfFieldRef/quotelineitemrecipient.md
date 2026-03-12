---
title: "QuoteLineItemRecipient"
domain: sfFieldRef
topic: quotelineitemrecipient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.173Z
estimatedTokens: 660
keywords: [QuoteLineItemRecipient, site, employee, entity, services, quoted, include, recipient's, contact, associated, location, any, specific, requirements, preferences]
---

# QuoteLineItemRecipient

> Represents a site, employee, or other entity for which services are being
         quoted. This could include details such as the recipient's name, contact information,
         associated site or location, and any specific requirements or preferences for the quoted
         services. This object is available in API version 62.0 and later.

# QuoteLineItemRecipient

Represents a site, employee, or other entity for which services are being quoted. This could include details such as the recipient's name, contact information, associated site or location, and any specific requirements or preferences for the quoted services. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QuoteLineItemRecipient](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quotelineitemrecipient.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Quote Line Item Recipient ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| QuoteId | Quote ID | reference |  | 18 |  |  |
| RecipientType | Recipient Type | picklist |  | 255 |  |  |
| ServiceAccountId | Account ID | reference |  | 18 |  |  |
| ServiceAddrValidationDate | Service Address Validation Date | datetime |  |  |  |  |
| ServiceAddrValidationMsg | Service Address Validation Message | string |  | 255 |  |  |
| ServiceAddrValidationResult | Service Address Validation Result | picklist |  | 255 |  |  |
| ServiceAddress | Service Address | address |  |  |  |  |
| ServiceCity | Service City | string |  | 40 |  |  |
| ServiceCountry | Service Country | string |  | 80 |  |  |
| ServiceGeocodeAccuracy | Service Geocode Accuracy | picklist |  | 40 |  |  |
| ServiceLatitude | Service Latitude | double |  |  | 18 | 15 |
| ServiceLongitude | Service Longitude | double |  |  | 18 | 15 |
| ServicePostalCode | Service Postal Code | string |  | 20 |  |  |
| ServiceState | Service State | string |  | 80 |  |  |
| ServiceStreet | Service Street | textarea |  | 255 |  |  |
| ServiceabilityCheckDate | Serviceability Check Date | datetime |  |  |  |  |
| ServiceabilityData | Serviceability Data | textarea |  | 131072 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
