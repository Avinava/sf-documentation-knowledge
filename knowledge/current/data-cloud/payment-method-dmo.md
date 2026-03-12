---
title: "Payment Method DMO"
domain: data-cloud
topic: payment-method-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:15.423Z
estimatedTokens: 1386
keywords: [Payment, DMO, way, customer, pays, transaction, API, Category, Primary, Subject, Area, Key, Label, Relationships]
---

# Payment Method DMO

> Represents the way a customer pays for a transaction.

# Payment Method DMO

Represents the way a customer pays for a transaction.

## API Name

ssot\_\_PaymentMethod\_dlm

## Category

Profile

## Primary Subject Area

Payment Method

## Primary Key Label

Payment Method ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label |
| --- | --- | --- | --- | --- |
| Payment Method | Account ID | Many To One (N:1) | Account | ID |
| Payment Method | Alternate Payment ID | Many To One (N:1) | Alternate Payment | ID |
| Payment Method | Bank Transfer Tender ID | Many To One (N:1) | Bank Transfer Tender | ID |
| Payment Method | Cash Tender ID | Many To One (N:1) | Cash Tender | ID |
| Payment Method | Check Tender ID | Many To One (N:1) | Check Tender | ID |
| Payment Method | Credit Tender ID | Many To One (N:1) | Credit Tender | ID |
| Payment Method | Digital Wallet ID | Many To One (N:1) | Digital Wallet | ID |
| Payment Method | Financial Account ID | Many To One (N:1) | Financial Account | ID |
| Payment Method | Party ID | Many To One (N:1) | Party | ID |
| Payment Method | Prepaid Card ID | Many To One (N:1) | Prepaid Card | ID |
| Payment Method | Trade In Tender ID | Many To One (N:1) | Trade In Tender | ID |
| Payment Method | Voucher ID | Many To One (N:1) | Voucher | ID |
| Account | Auto Payment Method | Many To One (N:1) | Payment Method | ID |
| Alternate Payment | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Bank Transfer Tender | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Cash Tender | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Check Tender | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Credit Tender | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Digital Wallet | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Gift Commitment Schedule | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Gift Entry | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Gift Transaction | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Prepaid Card | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Retail Store | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Sales Order Payment Summary | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Trade In Tender | Payment Method ID | Many To One (N:1) | Payment Method | ID |
| Voucher | Payment Method ID | Many To One (N:1) | Payment Method | ID |

## Fields

| Label | API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account | ssot__AccountId__c | The account ID. | Text |
| Comments | ssot__Comments__c | Users can add comments to provide additional details about a record. | Text |
| Company Name | ssot__CompanyName__c | The company of the cardholder. | Text |
| Created Date | ssot__CreatedDate__c | The date and time the record was created. | Date Time |
| External Record ID | ssot__ExternalRecordId__c | The external record ID. | Text |
| First Name | ssot__FirstName__c | The customer’s first name. | Text |
| Payment Method ID | ssot__Id__c | The payment method ID. | Text |
| Implementer Type | ssot__ImplementerType__c | The implementer type. | Text |
| Is Auto Pay Enabled | ssot__IsAutoPayEnabled__c | Indicates whather auto pay is enabled. | Text |
| Is Deleted | ssot__IsDeleted__c | Indicates whether the record is deleted. | Text |
| Last Modified Date | ssot__LastModifiedDate__c | The date the record was last modified. | Date Time |
| Last Name | ssot__LastName__c | The customer’s last name. | Text |
| Name | ssot__Name__c | The customer’s name. | Text |
| Nick Name | ssot__NickName__c | The nick name. | Text |
| Payment Method Address | ssot__PaymentMethodAddress__c | The address of the payment method. | Text |
| Payment Method City | ssot__PaymentMethodCity__c | The city of the payment method. | Text |
| Payment Method Country | ssot__PaymentMethodCountry__c | The country of the payment method. | Text |
| Payment Method Country Code | ssot__PaymentMethodCountryCode__c | The country code of the payment method. | Text |
| Payment Method Details | ssot__PaymentMethodDetails__c | The details of the payment method. | Text |
| Payment Method Geocode Accuracy | ssot__PaymentMethodGeocodeAccuracy__c | The geocode accuracy of the payment method. | Text |
| Payment Method Latitude | ssot__PaymentMethodLatitude__c | The latitude of the payment method. | Text |
| Payment Method Longitude | ssot__PaymentMethodLongitude__c | The longitude of the payment method. | Text |
| Payment Method Postal Code | ssot__PaymentMethodPostalCode__c | The postal code of the payment method. | Text |
| Payment Method State | ssot__PaymentMethodState__c | The state of the payment method. | Text |
| Payment Method State Code | ssot__PaymentMethodStateCode__c | The state code of the payment method. | Text |
| Payment Method Street | ssot__PaymentMethodStreet__c | The street of the payment method. | Text |
| Payment Method Sub Type | ssot__PaymentMethodSubType__c | The sub-type of the payment method. | Text |
| Payment Method Type | ssot__PaymentMethodType__c | The type of the payment method. | Text |
| Payment Policy | ssot__PaymentPolicy__c | The payment policy. | Text |
| Saved Payment Method | ssot__SavedPaymentMethod__c | The saved payment method. | Text |
| Status | ssot__Status__c | The status of the payment method. | Text |
| System Modstamp | ssot__SystemModstamp__c | The system modstamp. | Date Time |
