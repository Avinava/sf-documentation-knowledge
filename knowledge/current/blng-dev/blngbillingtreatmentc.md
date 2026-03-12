---
title: "blng__BillingTreatment__c"
domain: blng-dev
topic: blngbillingtreatmentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.053Z
estimatedTokens: 1158
keywords: [blng__BillingTreatment__c, how, Salesforce, Billing, records, rule, actions, finance, books, general, ledgers, treatments, specify, invoice, plan]
---

# blng__BillingTreatment__c

> Represents information about how Salesforce Billing records billing rule
         actions in your finance books and general ledgers. Use billing treatments to specify an
         invoice plan and cancellation invoice plan for dynamic invoice plans. You can also set up
         the cancellation rule for amendment orders to override the package setting for the default
         cancel order rule.

# blng\_\_BillingTreatment\_\_c

Represents information about how Salesforce Billing records billing rule actions in your finance books and general ledgers. Use billing treatments to specify an invoice plan and cancellation invoice plan for dynamic invoice plans. You can also set up the cancellation rule for amendment orders to override the package setting for the default cancel order rule.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the billing treatment when multiple currencies are enabled.The default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp of when the current user had last accessed the billing treatment, or a record or list view related to the billing treatment. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed the billing treatment, a record related to this record, or a record or list view related to the billing treatment. If this value is null, it's possible the user accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the billing treatment. |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the billing treatment is active (true) or not (false).The default value is true. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe finance book that has finance periods to all the invoice lines that the billing rule creates from the order product.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__BillingGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe General Ledger (GL) rule used to determine the GL accounts for the finance transaction.This field is a relationship field.Relationship Nameblng__BillingGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__BillingLegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity related to the billing treatment. When your billing rule evaluates an order product, Salesforce Billing applies one of the rule’s treatments if the order product and treatment have matching legal entities.This field is a relationship field.Relationship Nameblng__BillingLegalEntity__rRelationship TypeLookupRefers Toblng__LegalEntity__c |
| blng__BillingRule__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe billing rule related to the billing treatment.This field is a relationship field.Relationship Nameblng__BillingRule__rRelationship TypeMaster-detailRefers Toblng__BillingRule__c (the master object) |
| blng__CancellationInvoicePlan__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cancellation invoice plan related to the billing treatment.This field is a relationship field.Relationship Nameblng__CancellationInvoicePlan__rRelationship TypeLookupRefers Toblng__InvoicePlan__c |
| blng__CancellationRule__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe cancellation rule for amendment orders. This rule overrides the package setting for the default cancel order rule.Valid values are:LIFO by Order Product Creation DateLegacyThe default value is Legacy. |
| blng__InvoicePlan__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice plan associated with the billing treatment.This field is a relationship field.Relationship Nameblng__InvoicePlan__rRelationship TypeLookupRefers Toblng__InvoicePlan__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the billing transaction. |
