---
title: "blng__RevenueTransaction__c"
domain: blng-dev
topic: blngrevenuetransactionc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.753Z
estimatedTokens: 2031
keywords: [blng__RevenueTransaction__c, revenue, transactions, made, against, order, product, blng, _RevenueTransaction, Calls]
---

# blng__RevenueTransaction__c

> Represents the revenue transactions made against an order
      product.

# blng\_\_RevenueTransaction\_\_c

Represents the revenue transactions made against an order product.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the revenue transaction when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a revenue transaction record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a revenue transaction record. If this value is null, it’s possible that the user only accessed the revenue transaction record or a related list view (LastReferencedDate), but not viewed the revenue transaction record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the revenue transaction. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the customer who made the transaction.This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the revenue transaction in the base currency of the organization. This value is used to standardize the amount across different currencies. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the Foreign Exchange (FX) rate is applied to convert the amount into the base currency. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe FX rate used to convert an amount from a foreign currency to the base currency. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary currency in which the financial transactions are recorded and reported. |
| blng__Contract__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__Contract__rRefers ToContract |
| blng__CreditNoteLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe credit note line associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__CreditNoteLine__rRefers Toblng__CreditNoteLine__c |
| blng__DebitNoteLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe debit note line associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__DebitNoteLine__rRefers Toblng__DebitNoteLine__c |
| blng__DeferredBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total unrecognized revenue in the current period.This field is a calculated field. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice line associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__InvoiceLine__rRefers Toblng__InvoiceLine__c |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the revenue transaction. |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__OrderProduct__rRefers ToOrderItem |
| blng__OriginalFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe original finance period defined in the revenue schedule.This field is a relationship field.Relationship Nameblng__OriginalFinancePeriod__rRefers Toblng__FinancePeriod__c |
| blng__PreviouslyRecognizedRevenue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all prior transactions using the revenue schedule. |
| blng__RevenueAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of revenue associated with a transaction. |
| blng__RevenueDistributionMethod__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe distribution method selected in the revenue schedule. Specifies whether revenue is allocated over a predefined period, recognized all at once, or distributed based on a manually entered time frame. |
| blng__RevenueFinanceBook__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book associated with the revenue transaction. |
| blng__RevenueFinancePeriodUniqueId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique ID of the revenue finance period. |
| blng__RevenueFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The revenue finance period associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__RevenueFinancePeriod__rRelationship TypeMaster-detailRefers Toblng__FinancePeriod__c (the detail object) |
| blng__RevenueRecognitionGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe revenue recognition General Ledger (GL) rule associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__RevenueRecognitionGLRule__rRefers Toblng__GLRule__c |
| blng__RevenueRecognitionGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescriptionThe revenue recognition GL treatment associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__RevenueRecognitionGLTreatment__rRefers Toblng__GLTreatment__c |
| blng__RevenueRecognitionRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe revenue recognition rule linked to the revenue transaction, whichis used to calculate the transaction.This field is a relationship field.Relationship Nameblng__RevenueRecognitionRule__rRefers Toblng__RevenueRecognitionRule__c |
| blng__RevenueRecognitionTreatment__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe revenue recognition treatment linked to the revenue transaction, which is used to calculate the transaction. |
| blng__RevenueSchedule__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The revenue schedule associated with the revenue transaction.This field is a relationship field.Relationship Nameblng__RevenueSchedule__rRelationship TypeMaster-detailRefers Toblng__RevenueSchedule__c (the master object) |
| blng__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the revenue transaction.Valid values are:CanceledDeferredRecognized |
| blng__SystemPeriodStartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the system period for the revenue transaction. |
