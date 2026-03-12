---
title: "PaymentMethod"
domain: sfFieldRef
topic: paymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:07.369Z
estimatedTokens: 645
keywords: [PaymentMethod, buyer, uses, compensate, seller, good, service, Common, payment, include, cash, checks, credit, debit, cards]
---

# PaymentMethod

> Represents the method that a buyer uses to compensate the seller of a good or service. Common payment methods include cash, checks, credit or debit cards, money orders, bank
			transfers, and online payment services. This object is available in API version 48.0 and later.

# PaymentMethod

Represents the method that a buyer uses to compensate the seller of a good or service. Common payment methods include cash, checks, credit or debit cards, money orders, bank transfers, and online payment services. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentMethod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentmethod.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Comments | Comments | textarea |  | 32000 |  |  |
| CompanyName | Company Name | string |  | 255 |  |  |
| CreatedById | User ID | reference |  | 18 |  |  |
| CreatedDate | __MISSING LABEL__ PropertyFile - val CreatedDate not found in section udd_PaymentMethod | datetime |  |  |  |  |
| Id | Payment Method ID | id |  | 18 |  |  |
| ImplementorType | Implementor Type | string |  | 255 |  |  |
| IsAutoPayEnabled | Auto Pay | boolean |  |  |  |  |
| IsDeleted | __MISSING LABEL__ PropertyFile - val IsDeleted not found in section udd_PaymentMethod | boolean |  |  |  |  |
| LastModifiedById | User ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Payment Method Name | string |  | 255 |  |  |
| NickName | Nickname | string |  | 255 |  |  |
| PaymentMethodAddress | Payment Method Address | address |  |  |  |  |
| PaymentMethodCity | City | string |  | 40 |  |  |
| PaymentMethodCountry | Country | string |  | 80 |  |  |
| PaymentMethodDetails | Payment Method Details | string |  | 255 |  |  |
| PaymentMethodGeocodeAccuracy | Geo Code Accuracy | picklist |  | 40 |  |  |
| PaymentMethodLatitude | Latitude | double |  |  | 18 | 15 |
| PaymentMethodLongitude | Longitude | double |  |  | 18 | 15 |
| PaymentMethodPostalCode | Postal Code | string |  | 20 |  |  |
| PaymentMethodState | State | string |  | 80 |  |  |
| PaymentMethodStreet | Street | textarea |  | 255 |  |  |
| PaymentMethodSubType | Payment Method Sub Type | string |  | 255 |  |  |
| PaymentMethodType | Payment Method Type | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | __MISSING LABEL__ PropertyFile - val SystemModstamp not found in section udd_PaymentMethod | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
