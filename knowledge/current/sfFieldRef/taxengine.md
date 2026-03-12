---
title: "TaxEngine"
domain: sfFieldRef
topic: taxengine
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.133Z
estimatedTokens: 640
keywords: [TaxEngine, tax, engine, instance, provider, well, merchant, credentials, specific, Subscription, Management, calculates, order, item, Calculation]
---

# TaxEngine

> A tax engine represents both an instance of a tax engine provider as well as
         the merchant credentials for that specific instance. When Subscription Management
         calculates tax on an order item, it sends a request through Subscription Management Tax
         Calculation API to an external tax engine. The Salesforce tax engine record contains
         information passed to the external tax engine, such as This object is available in API
      version 55.0 and later.

# TaxEngine

A tax engine represents both an instance of a tax engine provider as well as the merchant credentials for that specific instance. When Subscription Management calculates tax on an order item, it sends a request through Subscription Management Tax Calculation API to an external tax engine. The Salesforce tax engine record contains information passed to the external tax engine, such as This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TaxEngine](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_taxengine.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| ExternalReference | External Reference | string |  | 255 |  |  |
| Id | Tax Engine ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MerchantCredentialId | Named Credential ID | reference |  | 18 |  |  |
| SellerCode | Seller Code | string |  | 255 |  |  |
| Status | Tax Engine Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxEngineAddress | Tax Engine Address | address |  |  |  |  |
| TaxEngineCity | City | string |  | 40 |  |  |
| TaxEngineCountry | Country | string |  | 80 |  |  |
| TaxEngineGeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| TaxEngineLatitude | Latitude | double |  |  | 18 | 15 |
| TaxEngineLongitude | Longitude | double |  |  | 18 | 15 |
| TaxEngineName | Tax Engine Name | string |  | 255 |  |  |
| TaxEnginePostalCode | Postal Code | string |  | 20 |  |  |
| TaxEngineProviderId | Tax Engine Provider ID | reference |  | 18 |  |  |
| TaxEngineState | State | string |  | 80 |  |  |
| TaxEngineStreet | Street | textarea |  | 255 |  |  |
| TaxPrvdAccountIdentifier | Tax Provider Account Identifier | string |  | 255 |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
