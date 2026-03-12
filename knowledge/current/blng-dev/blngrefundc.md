---
title: "blng__Refund__c"
domain: blng-dev
topic: blngrefundc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.592Z
estimatedTokens: 1772
keywords: [blng__Refund__c, refund, made, against, payment, blng, _Refund, Calls]
---

# blng__Refund__c

> Represents a refund made against a payment.

# blng\_\_Refund\_\_c

Represents a refund made against a payment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the invoice when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the refund. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a refund record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a refund record. If this value is null, it’s possible that the user only accessed the refund record or a related list view (LastReferencedDate), but not viewed the refund record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the refund. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The customer account containing the payment that this refund targets.This field is a relationship field.Relationship Nameblng__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| blng__Amount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of this refund.This field is a calculated field. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the refund in the base currency of the organization. It’s used to standardize the amount across different currencies. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the Foreign Exchange (FX) rate is applied to convert an amount into the base currency. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe foreign exchange rate used to convert an amount from a foreign currency to the base currency. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary currency in which the financial transactions are recorded and reported. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial ledger that tracks all transactions related to billing, including the allocation of payments to debit note lines. This value ensures that all financial activities are accurately recorded and reported.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRefers Toblng__FinanceBook__c |
| blng__CheckNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe check number issued in an external system for a refund. |
| blng__GLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe accounting treatment for financial transactions, including which general ledger accounts to debit and credit.This field is a relationship field.Relationship Nameblng__GLRule__rRefers Toblng__GLRule__c |
| blng__GLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe general ledger treatment defines how a financial transaction is recorded in the general ledger, specifying the accounts and the nature of the entries.This field is a relationship field.Relationship Nameblng__GLTreatment__rRefers Toblng__GLTreatment__c |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSpecifies how this refund impacts a customer’s accounts receivable.This field is a calculated field. |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity used to associate the refund with other transactional records in Salesforce Billing.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the refund. |
| blng__PaymentGatewayTransactionID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction ID used to identify the refund in the payment gateway. |
| blng__RefundDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which a refund is processed or issued to a customer. |
| blng__RefundDescription__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description or additional details about a refund. |
| blng__RefundLineCreationStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the refund line creation. A Fail status means that the refund line couldn’t be created. The system configuration provides more details about the status. |
| blng__RefundMode__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The mode of refund. External mode refers to a refund made through an external system, while electronic mode represents a refund processed within Salesforce.Valid values are:ElectronicExternalThe default value is External. |
| blng__RefundPaymentMethod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment method represents a credit card or banking details that can be used to process a payment.This field is a relationship field.Relationship Nameblng__RefundPaymentMethod__rRefers Toblng__PaymentMethod__c |
| blng__RefundType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of refund being processed.Valid values are:ACHBank TransferCashCheckCredit Card |
| blng__RefundedfromCreditNoteLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount refunded from credit note lines.This field is a calculated field. |
| blng__RefundedfromPayments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount refunded from payments.This field is a calculated field. |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state of this refund.Valid values are:CancelledDraftPostedThe default value is Draft. |
