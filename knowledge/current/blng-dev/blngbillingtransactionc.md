---
title: "blng__BillingTransaction__c"
domain: blng-dev
topic: blngbillingtransactionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.039Z
estimatedTokens: 1101
keywords: [blng__BillingTransaction__c, invoice, plan, line, billing, schedule, transaction, stores, billed, amount, relationship, line’s, commencement, date, order]
---

# blng__BillingTransaction__c

> Represents information about each invoice plan line of a billing schedule. A
         billing transaction stores the billed amount based on the relationship between the invoice
         plan line’s commencement date and the order product’s service start and end dates. When a
         billing transaction is invoiced, Salesforce Billing copies data from the billing
         transaction to the invoice line.

# blng\_\_BillingTransaction\_\_c

Represents information about each invoice plan line of a billing schedule. A billing transaction stores the billed amount based on the relationship between the invoice plan line’s commencement date and the order product’s service start and end dates. When a billing transaction is invoiced, Salesforce Billing copies data from the billing transaction to the invoice line.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the billing transaction's schedule when multiple currencies are enabled.The default value is USD. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the billing transaction. |
| blng__AmountToBeBilled__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount to be billed for the order product related to the billing transaction's billing schedule. The formula for calculating this amount when its blank isIF( ISBLANK( blng__OverrideAmount__c ) , blng__Amount__c  , blng__OverrideAmount__c ).This field is a calculated field. |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that has been invoiced for the order product by the billing transaction. |
| blng__BillingSchedule__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe billing schedule related to the billing transaction.This field is a relationship field.Relationship Nameblng__BillingSchedule__rRelationship TypeMaster-detailRefers Toblng__BillingSchedule__c |
| blng__BillingTargetDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the invoice line is created for the order product. |
| blng__CalculatedStatus__c | TypestringPropertiesFilter, Nillable, SortDescriptionThe status of the billing transaction by using the formulaIF(ISPICKVAL(blng__OverrideStatus__c, "--None--"), TEXT(blng__Status__c), TEXT(blng__OverrideStatus__c)).This field is a calculated field. |
| blng__InvoicePlanLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice plan associated with the billing transaction.This field is a relationship field.Relationship Nameblng__InvoicePlanLine__rRelationship TypeLookupRefers Toblng__InvoicePlanLine__c |
| blng__OverrideAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescription |
| blng__OverrideBillingTargetDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that overrides the billing target date of the billing transaction. |
| blng__OverrideStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe value that overrides the Status value of the billing transaction.Valid value is Cancelled. |
| blng__Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the order product that the billing transaction invoices. |
| blng__ServicePeriodEnd__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the service period of the order product associated with the billing schedule. |
| blng__ServicePeriodStart__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the service period of the order product associated with the billing schedule. |
| blng__Source__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source of the billing transaction.Valid values are:ExternalStandard |
| blng__Status__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the billing transaction.Valid values are:BilledCancelledPending |
