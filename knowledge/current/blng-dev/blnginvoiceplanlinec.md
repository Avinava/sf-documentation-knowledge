---
title: "blng__InvoicePlanLine__c"
domain: blng-dev
topic: blnginvoiceplanlinec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.382Z
estimatedTokens: 816
keywords: [blng__InvoicePlanLine__c, custom, behavior, invoice, transaction, plan, lines, blng, _InvoicePlanLine, Calls]
---

# blng__InvoicePlanLine__c

> Represents the custom behavior for a single invoice transaction. An invoice
         plan contains the invoice plan lines.

# blng\_\_InvoicePlanLine\_\_c

Represents the custom behavior for a single invoice transaction. An invoice plan contains the invoice plan lines.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with invoice plan line when multiple currencies are enabled. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the invoice plan line. |
| blng__CommencementDateOffsetUnits__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The unit of time that defines the offset applied to the commencement date. Valid values are:DaysMonthsYears |
| blng__CommencementDateOffset__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number by which the invoice start date is adjusted to have an invoice plan line start date. |
| blng__CommencementDate__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The start date of the invoice plan line cycle.The default value is Order Product Activation. |
| blng__FlatAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA fixed amount billed each installment. |
| blng__InvoicePlan__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The invoice plan related to the invoice plan line.This field is a relationship field.Relationship Nameblng__InvoicePlan__rRelationship TypeMaster-detailRefers Toblng__InvoicePlan__c (the master object) |
| blng__Percentage__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of total amount billed each installment. |
| blng__ProcessingOrder__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The process involved in fulfilling an order. |
| blng__ServicePeriodEnd__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if the end date of the service is mentioned on the invoice plan line. Valid values are:Create without DateOrder Product End Date |
| blng__ServicePeriodStart__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if the start date of the service is mentioned on the invoice plan line. Valid values are:Create without DateOrder Product ActivationOrder Product Creation |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of amount displayed in the invoice plan line. Valid values are:Flat AmountPercentRemainder |
