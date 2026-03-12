---
title: "AlternativePaymentMethod"
domain: sfFieldRef
topic: alternativepaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:47.008Z
estimatedTokens: 990
keywords: [AlternativePaymentMethod, payment, isn’t, cash, debit, card, credit, aren’t, defined, CardPaymentMethod, DigitalWallet, objects, Examples, alternative, include]
---

# AlternativePaymentMethod

> Represents a payment method that isn’t cash, a debit card, or a credit
			card. This object defines methods that aren’t defined by the CardPaymentMethod or DigitalWallet objects. Examples of alternative payment
			methods include CashOnDeliver, Klarna, and Direct Debit. AlternativePaymentMethod functions the same as any other type of payment
			method for processing transactions through a payment gateway. This object is
		available in API version 51.0 and later.

# AlternativePaymentMethod

Represents a payment method that isn’t cash, a debit card, or a credit card. This object defines methods that aren’t defined by the CardPaymentMethod or DigitalWallet objects. Examples of alternative payment methods include CashOnDeliver, Klarna, and Direct Debit. AlternativePaymentMethod functions the same as any other type of payment method for processing transactions through a payment gateway. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AlternativePaymentMethod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_alternativepaymentmethod.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AlternativePaymentMethodNumber | Alternative Payment Method Number | string |  | 255 |  |  |
| AuditEmail | Audit Email | email |  | 80 |  |  |
| BankAccountHolderType | Account Ownership Type | picklist |  | 255 |  |  |
| BankAccountType | Bank Account Type | string |  | 25 |  |  |
| BankCode | Bank Code | string |  | 25 |  |  |
| BillingFirstName | First name of the person tied to billing address | string |  | 255 |  |  |
| BillingLastName | Last name of the person tied to billing address | string |  | 255 |  |  |
| BillingName | Name of the person tied to billing address | string |  | 255 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CompanyName | Company Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Email | Registered Email | email |  | 80 |  |  |
| ExtendedPaymentMethodType | Extended Payment Method Type | string |  | 255 |  |  |
| GatewayToken | Gateway Token | encryptedstring |  | 1000 |  |  |
| GatewayTokenDetails | Gateway Token Details | textarea |  | 1000 |  |  |
| Id | Alternative Payment Method ID | id |  | 18 |  |  |
| IpAddress | IP Address | string |  | 39 |  |  |
| IsAutoPayEnabled | Auto Pay | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MacAddress | MAC Address | string |  | 32 |  |  |
| Mandate | Mandate Text | string |  | 255 |  |  |
| NickName | Nickname | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
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
| StandardEntryClassCode | Standard Entry Class Code (ACH) | picklist |  | 255 |  |  |
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
