---
title: "blng__PaymentGateway__c"
domain: blng-dev
topic: blngpaymentgatewayc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.491Z
estimatedTokens: 1559
keywords: [blng__PaymentGateway__c, connection, external, payment, gateway, blng, _PaymentGateway, Calls]
---

# blng__PaymentGateway__c

> Represents the connection to an external payment
      gateway.

# blng\_\_PaymentGateway\_\_c

Represents the connection to an external payment gateway.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment gateway record when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a payment gateway record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a payment gateway record. If this value is null, it’s possible that the user only accessed the payment gateway record or a related list view (LastReferencedDate), but not viewed the payment gateway record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the payment gateway. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| adnblng__APILoginId__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionA unique identifier to authenticate API requests. This field is used with a transaction key to ensure secure communication between the application and payment gateway. |
| adnblng__APITransactionKey__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe transaction key required for API authentication with the payment gateway. |
| adnblng__TestMode__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the authorize.net merchant is operating in test mode (true) or not (false). The test mode is used to simulate transactions without processing actual payments.The default value is false. |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the payment gateway is active (true) or not (false). To deactivate the payment gateway, clear the Active checkbox. This won't affect past or existing transactions. The default value is true. |
| blng__Default__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether a particular payment gateway is set as the default gateway for processing payments (true) or not (false).The default value is false. |
| blng__GatewayType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the payment gateway provider.Valid values are:AuthorizeDotNetCyberSourcePayFlowProPayeezy |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information or comments related to the payment gateway. |
| csblng__MerchantId__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe ID of the merchant account used by the payment gateway. This merchant account links to a merchant account at the payment processor. |
| csblng__MerchantReference__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe merchant reference identifier for transactions processed through a payment gateway. |
| csblng__TestMode__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the CyberSource merchant is operating in test mode (true) or not (false). The test mode is used to simulate transactions without processing actual payments.The default value is false. |
| csblng__TransactionSecurityKey__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe security key used for authenticating transactions with the payment gateway. |
| pyzblng__APIKey__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API key used to authenticate and authorize transactions with the payment gateway service. |
| pyzblng__APILoginId__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionA unique identifier to authenticate the payeezy API requests. This field is used with a transaction key to ensure secure communication between the application and the payment gateway. |
| pyzblng__APISecret__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API secret used along with the API key to authenticate and authorize transactions with the payment gateway service. |
| pyzblng__APITransactionKey__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionStores the payeezy transaction key required for API authentication with the payment gateway. |
| pyzblng__EnableUserIdentification__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the user identification during payment processing is enabled (true) or not (false).The default value is false. |
| pyzblng__JSSecurityKey__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA JavaScript security key used to enhance the security of client interactions with the payment gateway. |
| pyzblng__TestMode__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the Payeezy merchant is operating in test mode (true) or not (false). Test mode is used to simulate transactions without processing actual payments.The default value is false. |
| pyzblng__Token__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. A token used for secure Payeezy transactions. |
| pyzblng__TransarmorToken__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA token provided by the TransArmor service, which is used to securely handle and store payment card information. |
