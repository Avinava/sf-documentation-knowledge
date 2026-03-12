---
title: "blng__Payment__c"
domain: blng-dev
topic: blngpaymentc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.441Z
estimatedTokens: 3703
keywords: [blng__Payment__c, event, shopper, payment, credit, cards, capture, sale, doesn't, appear, shopper's, card, statement, blng, _Payment]
---

# blng__Payment__c

> Represents a single event when a shopper makes a payment. For credit cards, this event
      is a payment capture or payment sale, but it doesn't appear on the shopper's credit card
      statement.

# blng\_\_Payment\_\_c

Represents a single event when a shopper makes a payment. For credit cards, this event is a payment capture or payment sale, but it doesn't appear on the shopper's credit card statement.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the payment record. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with this record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a payment record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a payment record. If this value is null, it’s possible that the user only accessed the payment record or a related list view (LastReferencedDate), but not viewed the payment record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the payment record. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The account of the customer who made the payment.This field is a relationship field.Relationship Nameblng__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| blng__AllocatedtoDebitNoteLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe assigned payments to the debit note lines within your account.This field is a calculated field. |
| blng__AllocatedtoInvoiceLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe assigned payments to the invoice lines within an account.This field is a calculated field. |
| blng__AllocatedtoInvoices__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe assigned payments to the invoice within an account.This field is a calculated field. |
| blng__AllocationStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether a payment has been allocated to invoices, invoice lines, and debit note lines. A status of Fail means the payment has not yet been allocated. |
| blng__Allocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total sum of payments allocated to invoices, invoice lines, and debit note lines.This field is a calculated field. |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The amount to be debited or captured. |
| blng__Balance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount remaining after deducting the net applied amount from total amount.This field is a calculated field. |
| blng__BankAccountName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe bank account name of the customer who made the payment. |
| blng__BankAccountNumber__c | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe bank account number of the customer who made the payment. |
| blng__BankAccountType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe bank account type of the customer who made the payment. Valid values are:Business CheckingCheckingSavings |
| blng__BankName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe bank name of the customer who made the payment. |
| blng__BankRoutingCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe valid routing number of the bank of the customer, also called as the American Bankers Association (ABA) code. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the payment in the base currency of the organization. It’s used to standardize the amount across different currencies. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the Foreign Exchange (FX) rate is applied to convert an amount into the base currency. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe FX rate used to convert an amount from a foreign currency to the base currency. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary currency in which the financial transactions are recorded and reported. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial ledger that tracks all transactions related to billing, including the allocation of payments to debit note lines. It ensures that all financial activities are accurately recorded and reported.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA specific time frame for financial reporting and accounting purposes.This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__CardCodeResponse__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe response code from the card issuer. This code indicates the result of the authorization request for a credit card transaction. |
| blng__CardExpirationMonth__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expiration month of a credit or debit card in the billing information. This information is sent from the payment gateway following a transaction request. |
| blng__CardExpirationYear__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expiration year of a credit or debit card in the billing information. This information is sent from the payment gateway following a transaction request. |
| blng__CardType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe credit or debit card type in the billing information.Valid values are:American ExpressDiscoverMastercardVisa |
| blng__CheckDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which a check payment was issued or received. |
| blng__CheckNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe check number issued in an external system for a refund. |
| blng__FinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA finance period stores lookups to all the accounting or revenue transactions associated with the payment that occurred within a period of time. This field is a relationship field.Relationship Nameblng__FinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__GLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe accounting treatment for financial transactions, including which general ledger accounts to debit and credit.This field is a relationship field.Relationship Nameblng__GLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__GLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe general ledger treatment defines how a financial transaction is recorded in the general ledger, specifying the accounts and the nature of the entries.This field is a relationship field.Relationship Nameblng__GLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__GatewayID__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique transaction ID created by the payment gateway. |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payment's financial impact against the customer's accounts receivable.This field is a calculated field. |
| blng__Invoice__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice to which the payment has been applied or unapplied.This field is a relationship field.Relationship Nameblng__Invoice__rRelationship TypeLookupRefers Toblng__Invoice__c |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity used to associate the payment with other transactional records in Salesforce Billing.This field is a relationship field.Relationship Nameblng__LegalEntity__rRelationship TypeLookupRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information or comments related to the payment. |
| blng__PaidBy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer who made a payment, the payment amount, and other details.This field is a relationship field.Relationship Nameblng__PaidBy__rRelationship TypeLookupRefers ToContact |
| blng__PaymentAuthorization__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authorization record for this payment. If there's a delayed capture (when the capture occurs after the authorization), all captures must be made against a previously successful authorization transaction.This field is a relationship field.Relationship Nameblng__PaymentAuthorization__rRelationship TypeLookupRefers Toblng__PaymentAuthorization__c |
| blng__PaymentDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the payment was made. |
| blng__PaymentDescription__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional details about the payment. |
| blng__PaymentGatewayToken__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique string of numbers that’s used to process transactions without exposing the actual payment information. |
| blng__PaymentGateway__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the payment gateway that processed the payment. If there’s a delayed payment, the field is populated from the authorization record.This field is a relationship field.Relationship Nameblng__PaymentGateway__rRelationship TypeLookupRefers Toblng__PaymentGateway__c |
| blng__PaymentMethod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment method associated with the payment.This field is a relationship field.Relationship Nameblng__PaymentMethod__rRelationship TypeLookupRefers Toblng__PaymentMethod__c |
| blng__PaymentMode__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe mode of payment. Select Electronic if the payments are processed through Salesforce Billing and External to manually enter a payment that was processed outside of Salesforce.Valid values are:ElectronicExternal |
| blng__PaymentType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe payment type for a payment.Valid values are:ACHBank TransferCashCheckCredit Card |
| blng__RefundsAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total refund that has been allocated against this payment. This field is a calculated field. |
| blng__RefundsUnallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total number of a previously applied refund that has since been unapplied from this payment. This field is a calculated field. |
| blng__Refunds__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionA refund that's applied to a payment.This field is a calculated field. |
| blng__RequestCreditCardNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA tokenized version of the credit card number sent to the customer bank within the transaction request. Salesforce Billing doesn’t store credit card numbers or other sensitive customer payment information. Instead, it stores tokenized versions of that information and sends the tokens to the external payment gateway. |
| blng__RequestTypeOfPayment__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of payment action requested of the customer bank: authorization, charge, void, or refund. |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the payment transaction. Valid values are:Cancelled—The payment has been voided and can no longer be allocated.Draft—The payment can be edited before posting and allocating it to a target.Processed—The payment has been finalized and can be allocated against a target.Failed—The authorization for the payment failed.The default value is Draft. |
| blng__Transaction__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial activities or operations that are recorded as part of a payment.This field is a relationship field.Relationship Nameblng__Transaction__rRelationship TypeLookupRefers Toblng__PaymentTransaction__c |
| blng__UnallocatedfromDebitNoteLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from debit note lines that has not been allocated to any specific payment.This field is a calculated field. |
| blng__UnallocatedfromInvoiceLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from invoice lines that has not been allocated to any specific payment.This field is a calculated field. |
| blng__UnallocatedfromInvoices__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from invoice that has not been allocated to any specific payment.This field is a calculated field. |
| blng__Unallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total unallocated amounts in a payment.This field is a calculated field. |
