---
title: "blng__PaymentTransaction__c"
domain: blng-dev
topic: blngpaymenttransactionc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.576Z
estimatedTokens: 3019
keywords: [blng__PaymentTransaction__c, payment, transactions, associated, blng, _PaymentTransaction, Calls]
---

# blng__PaymentTransaction__c

> Represents the payment transactions associated with a
      payment.

# blng\_\_PaymentTransaction\_\_c

Represents the payment transactions associated with a payment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment transaction record when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a payment transaction record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a payment transaction record. If this value is null, it’s possible that the user only accessed the payment transaction record or a related list view (LastReferencedDate), but not viewed the payment transaction record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the payment transaction. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| blng__AVSResponseCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe numeric value contained in a gateway response alongside the response status, response, and response message. The code is used as an indexing value for different types of responses. You can generally ignore it and focus on the response and response message to get the details you need about the results of your transaction request. |
| blng__AVSZip__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe numeric address and zip code used as an indexing value. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account containing the invoice that the payment transaction is set to pay.This field is a relationship field.Relationship Nameblng__Account__rRelationship TypeLookupRefers ToAccount |
| blng__Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that Salesforce Billing attempts to use against the balance of an invoice. |
| blng__Authorization__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe approval from a customer's bank or credit card issuer to charge a payment to their account. |
| blng__BankAccountName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA user-defined value for the bank account name. This field used to record information about externally recorded Automated Clearing House (ACH) payments. |
| blng__BankAccountNumber__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionA user-defined value for the bank account number. This field used to record information about externally recorded ACH payments. |
| blng__BankAccountType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionA user-defined value for the bank account type. This field used to record information about externally recorded ACH payments. Valid values are:Business CheckingCheckingSavings |
| blng__BankName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA user-defined value for the bank name. This field used to record information about externally recorded ACH payments. |
| blng__BankRoutingCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA user-defined value for the bank routing code. This field used to record information about externally recorded ACH payments. |
| blng__CardCodeResponse__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe response code from the card issuer. This code indicates the result of the authorization request for a credit card transaction. |
| blng__CardExpirationMonth__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expiration month of a credit or debit card in the billing information. This information is sent from the payment gateway following a transaction request. |
| blng__CardExpirationYear__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expiration year of a credit or debit card in the billing information. This information is sent from the payment gateway following a transaction request. |
| blng__CardType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe credit or debit card type in the billing information.Valid values are:American ExpressDiscoverMastercardVisa |
| blng__ExceptionMessage__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe message displayed when a transaction is created without any associated payment against the invoice. |
| blng__GatewayDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the transaction request occurred in the payment gateway. |
| blng__GatewayID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identification number associated with the transaction request that occurred in the payment gateway. |
| blng__GatewayRequest__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe payment request to a payment gateway. |
| blng__GatewayResponse__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe response from the payment gateway. |
| blng__GatewayStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe values that summarizes the payment gateway’s response to the payment transaction request. Valid values are:DeclineIndeterminatePermanentFailRequiresReviewSuccessSystemErrorValidationError |
| blng__IsPaymentProcessedSuccessfully__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether Salesforce Billing created a payment for a successful transaction (true) or not (false). If this field is deselected on a successful transaction, review why Salesforce Billing didn’t create the payment, For example, the user who owns the payment run didn’t have the permission to access payment records. After you resolve the issue, create a payment for the same amount as the payment transaction, and then allocate it to the transaction’s invoice on your own.The default value is false. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information or comments related to the payment transaction. |
| blng__PaymentGateway__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Salesforce Billing payment gateway record used to establish communication with the external payment gateway. This field is inherited from the payment method.This field is a relationship field.Relationship Nameblng__PaymentGateway__rRelationship TypeLookupRefers Toblng__PaymentGateway__c |
| blng__PaymentMethod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment method used to provide customer payment information to the payment gateway.This field is a relationship field.Relationship Nameblng__PaymentMethod__rRelationship TypeLookupRefers Toblng__PaymentMethod__c |
| blng__PaymentRun__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment run that created the payment transaction to record the result of external payment gateway communication.This field is a relationship field.Relationship Nameblng__PaymentRun__rRelationship TypeLookupRefers Toblng__PaymentRun__c |
| blng__ReasonCode__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reason for a particular payment transaction. |
| blng__RequestCreditCardNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe credit card number associated with a payment transaction. |
| blng__RequestInvoice__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice that Salesforce Billing is attempting to pay through the payment transaction. If the transaction is successful, Salesforce Billing creates a payment record and attempts to allocate it to the invoice.This field is a relationship field.Relationship Nameblng__RequestInvoice__rRelationship TypeLookupRefers Toblng__Invoice__c |
| blng__RequestTransactionType__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of payment action requested of the customer bank: authorization, charge, void, or refund. |
| blng__RequestTypeOfPayment__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of payment being requested. |
| blng__ResponseCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe numeric value contained in a gateway response alongside the response status, response, and response message. The code is used as an indexing value for different types of responses. You can generally ignore it and focus on the response and response message to get the details you need about the results of your transaction request. |
| blng__ResponseMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe message sent from the external payment gateway to show the result of the transaction request. You can review this message for additional context regarding the value of the transaction’s gateway status. |
| blng__ResponseStatus__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe message sent from the external payment gateway to show the result of the transaction request. While this value can vary between gateways, it’s often the same as the response message. |
| blng__Response__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA detailed message contained in a gateway response alongside the response code, response, response status, and response message. Although specific responses vary between gateways, the response usually provides more information about the response message. |
| blng__SourceTransactionId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique identifier of the source transaction that’s associated with the payment. |
| blng__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the payment transaction. The transaction’s status isIn Progresswhile the external payment gateway communicates with the customer bank. Salesforce Billing changes it to Completed after the gateway returns a transaction response. Valid values are:CompletedIn ProgressProcessed |
| blng__Transaction__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAll customer transactions in a payment transaction.This field is a relationship field.Relationship Nameblng__Transaction__rRelationship TypeLookupRefers Toblng__PaymentTransaction__c |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of action requested from the customer bank. Valid values are:AuthorizationCaptureChargeRefundVoid |
