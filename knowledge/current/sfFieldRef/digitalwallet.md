---
title: "DigitalWallet"
domain: sfFieldRef
topic: digitalwallet
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:56.216Z
estimatedTokens: 797
keywords: [DigitalWallet, customer’s, digital, wallet, service, Salesforce, Payments, payment, source, processing, gateway, API, version, 48.0, later]
---

# DigitalWallet

> Represents a customer’s digital wallet service. Salesforce Payments can use a digital wallet as a payment source when processing payments through a payment gateway. This
		object is available in API version 48.0 and later.

# DigitalWallet

Represents a customer’s digital wallet service. Salesforce Payments can use a digital wallet as a payment source when processing payments through a payment gateway. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DigitalWallet](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_digitalwallet.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AuditEmail | Audit Email | email |  | 80 |  |  |
| BillingName | Billing Name | string |  | 255 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CompanyName | Company Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Customer | Customer ID | string |  | 255 |  |  |
| DigitalWalletNumber | Digital Wallet Number | string |  | 255 |  |  |
| Email | Registered Email | email |  | 80 |  |  |
| ExtendedPaymentMethodType | Extended Payment Method Type | string |  | 255 |  |  |
| GatewayToken | Gateway Token | string |  | 255 |  |  |
| GatewayTokenDetails | Gateway Token Details | textarea |  | 1000 |  |  |
| GatewayTokenEncrypted | Gateway Token Encrypted | encryptedstring |  | 1000 |  |  |
| Id | Digital Wallet ID | id |  | 18 |  |  |
| IpAddress | IP Address | string |  | 39 |  |  |
| IsAutoPayEnabled | Auto Pay | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MacAddress | MAC Address | string |  | 32 |  |  |
| NickName | Nickname | string |  | 255 |  |  |
| PaymentGatewayId | Payment Gateway ID | reference |  | 18 |  |  |
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
| Phone | Phone | phone |  | 40 |  |  |
| ProcessingMode | Processing Mode | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
