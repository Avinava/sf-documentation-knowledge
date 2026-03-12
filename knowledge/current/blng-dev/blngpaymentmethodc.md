---
title: "blng__PaymentMethod__c"
domain: blng-dev
topic: blngpaymentmethodc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.530Z
estimatedTokens: 2854
keywords: [blng__PaymentMethod__c, storage, different, payment, customers, blng, _PaymentMethod, Calls]
---

# blng__PaymentMethod__c

> Represents the storage of information about different payment methods
         used by customers.

# blng\_\_PaymentMethod\_\_c

Represents the storage of information about different payment methods used by customers.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment authorization when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a payment method record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a payment method record. If this value is null, it’s possible that the user only accessed the payment method record or a related list view (LastReferencedDate), but not viewed the payment method record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the payment method. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The account of the customer who made the payment. This field is a relationship field.Relationship Nameblng__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the payment method is active (true) or not (false). To deactivate the payment method, clear the Active checkbox. This won't affect past or existing transactions or assignments. The default value is true. |
| blng__AutoPay__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The payment method to create payments toward posted invoices on a customer account.The default value is false. |
| blng__BankAccountName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the bank account associated with the payment method. |
| blng__BankAccountNumber__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe bank account number associated with the payment method. |
| blng__BankAccountType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of bank account associated with the payment method.Valid values are:Business CheckingCheckingSavings |
| blng__BankName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the bank associated with the payment method. |
| blng__BankRoutingCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe valid routing number of the bank, also known as the American Bankers Association (ABA) code. |
| blng__BillingAddress__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing address associated with the payment method that must match the address on file with the payment provider. |
| blng__BillingCity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the billing address associated with the payment method. |
| blng__BillingCompany__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe company name associated with the billing address. |
| blng__BillingCountry__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe country of the billing address associated with the payment method. |
| blng__BillingEmail__c | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address associated with the billing information. |
| blng__BillingFax__c | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fax details associated with the billing information. |
| blng__BillingFirstName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name provided in the billing information. |
| blng__BillingLastName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name provided in the billing information. |
| blng__BillingPhone__c | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number provided in the billing information. |
| blng__BillingStateProvince__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the billing address associated with the payment method. |
| blng__BillingStreet__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the billing address associated with the payment method. |
| blng__BillingZipPostal__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe zip code of the billing address associated with the payment method. |
| blng__CVV__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe Card Verification Value (CVV) code linked to the credit or debit card in the billing information. |
| blng__CardBIN__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe six digit Bank Identification Number (BIN) associated with a credit or debit card in the billing information. |
| blng__CardExpirationMonth__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expiration month of a credit or debit card in the billing information. This information is sent from the payment gateway following a transaction request. |
| blng__CardExpirationYear__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expiration year of a credit or debit card in the billing information. This information is sent from the payment gateway following a transaction request. |
| blng__CardLastFour__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last four digits of a credit or debit card number in the billing information. |
| blng__CardNumber__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe credit or debit card number in the billing information. |
| blng__CardType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe credit or debit card type in the billing information.Valid values are:American ExpressDiscoverMastercardVisa |
| blng__GLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe General Ledger (GL) rule associated with the payment method.This field is a relationship field.Relationship Nameblng__GLRule__rRefers Toblng__GLRule__c |
| blng__GLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe GL treatment associated with the payment method.This field is a relationship field.Relationship Nameblng__GLTreatment__rRefers Toblng__GLTreatment__c |
| blng__GatewayResponse__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe response received from the payment gateway after processing a transaction. |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with a payment method. This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Nameoncard__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name on the payment card. |
| blng__NickName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe nick name on the payment card. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information or comments related to the payment method. |
| blng__PaymentGatewayToken__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA token for secured payment gateway transactions. |
| blng__PaymentGateway__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Salesforce Billing payment gateway record used to establish communication with the external payment gateway.This field is a relationship field.Relationship Nameblng__PaymentGateway__rRefers Toblng__PaymentGateway__c |
| blng__PaymentType__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the payment method.Valid values are:ACHCredit Card |
| blng__StreetAddress2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street associated with the customer's identification address for the payment. |
| pyzblng__ChequeNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cheque number associated with a payment. This field is used for Payeezy gateway. |
| pyzblng__EncryptedCustomerId__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThis field stores the encrypted customer data and is used for Payeezy gateway. |
| pyzblng__IdentificationAddress__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address used to identify the customer making the payment. |
| pyzblng__IdentificationCity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city associated with the customer's identification address for the payment. |
| pyzblng__IdentificationCountry__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the identification address of the customer making the payment. |
| pyzblng__IdentificationIdNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identification number to verify the customer making the payment. |
| pyzblng__IdentificationPhoneNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identification phone number of the customer making the payment. |
| pyzblng__IdentificationPhoneType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the identification phone number.Valid values are:DayHomeNightWork |
| pyzblng__IdentificationState__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state of the identification address of the customer making the payment. |
| pyzblng__IdentificationType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe process for verifying a customer's identity.Valid values are:Driver licenseMilitary IDSocial Security NumberTax ID |
| pyzblng__IdentificationZIP__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ZIP code associated with the customer's identification address for the payment. |
