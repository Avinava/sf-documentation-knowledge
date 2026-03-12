---
title: "CardPaymentMethod"
domain: sfFieldRef
topic: cardpaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:51.231Z
estimatedTokens: 1025
keywords: [CardPaymentMethod, credit, card, debit, payment, implements, PaymentMethod, API, version, 48.0, later]
---

# CardPaymentMethod

> Represents a credit card or debit card payment method, which implements the
			PaymentMethod object. This object  is available in API version 48.0 and later.

# CardPaymentMethod

Represents a credit card or debit card payment method, which implements the PaymentMethod object. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CardPaymentMethod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_cardpaymentmethod.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AuditEmail | Audit Email | email |  | 80 |  |  |
| AutoCardType | Auto Card Type | string |  | 20 |  |  |
| CardBin | Card BIN | int | 6 |  |  |  |
| CardCategory | Card Category | picklist |  | 255 |  |  |
| CardHolderFirstName | Card Holder First Name | string |  | 255 |  |  |
| CardHolderLastName | Card Holder Last Name | string |  | 255 |  |  |
| CardHolderName | Card Holder Name | string |  | 255 |  |  |
| CardLastFour | Card Last Four | int | 4 |  |  |  |
| CardPaymentMethodNumber | Card Payment Method Number | string |  | 255 |  |  |
| CardType | Card Type | picklist |  | 40 |  |  |
| CardTypeCategory | Card Type Category | picklist |  | 255 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CompanyName | Company Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DisplayCardNumber | Display Card Number | string |  | 20 |  |  |
| Email | Registered Card Email | email |  | 80 |  |  |
| ExpiryMonth | Expiry Month | int | 2 |  |  |  |
| ExpiryYear | Expiry Year | int | 4 |  |  |  |
| GatewayDate | Gateway Date | datetime |  |  |  |  |
| GatewayResultCode | Gateway Result Code | string |  | 64 |  |  |
| GatewayResultCodeDescription | Gateway Result Code Description | string |  | 255 |  |  |
| GatewayToken | Gateway Token | string |  | 255 |  |  |
| GatewayTokenDetails | Gateway Token Details | textarea |  | 1000 |  |  |
| GatewayTokenEncrypted | Gateway Token Encrypted | encryptedstring |  | 1000 |  |  |
| Id | Card Payment Method ID | id |  | 18 |  |  |
| InputCardNumber | Input Card Number | string |  | 20 |  |  |
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
| SfResultCode | Salesforce Result Code | picklist |  | 255 |  |  |
| StartMonth | Start Month | int | 2 |  |  |  |
| StartYear | Start Year | int | 4 |  |  |  |
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
