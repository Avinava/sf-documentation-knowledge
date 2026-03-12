---
title: "OrderItemRecipient"
domain: sfFieldRef
topic: orderitemrecipient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.887Z
estimatedTokens: 651
keywords: [OrderItemRecipient, site, employee, entity, services, ordered, includes, essential, recipient's, contact, specific, location, provided, API, version]
---

# OrderItemRecipient

> Represents a site, employee, or other entity for which services are being
         ordered. This includes essential details such as the recipient's name, contact information,
         and the specific site or location where the services will be provided. This object is
      available in API version 62.0 and later.

# OrderItemRecipient

Represents a site, employee, or other entity for which services are being ordered. This includes essential details such as the recipient's name, contact information, and the specific site or location where the services will be provided. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderItemRecipient](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderitemrecipient.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Order Product Recipient ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
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
