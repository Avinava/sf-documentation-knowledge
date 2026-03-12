---
title: "blng__SubInvoiceLine__c"
domain: blng-dev
topic: blngsubinvoicelinec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.761Z
estimatedTokens: 837
keywords: [blng__SubInvoiceLine__c, detailed, line, item, invoice, breaks, down, provided, charges, services, blng, _SubInvoiceLine, Calls]
---

# blng__SubInvoiceLine__c

> Represents a detailed line item within an invoice that breaks down the
         provided charges or services.

# blng\_\_SubInvoiceLine\_\_c

Represents a detailed line item within an invoice that breaks down the provided charges or services.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the sub invoice line record when multiple currencies are enabled. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the sub invoice line. |
| blng__BillingTransaction__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing transaction associated with the sub invoice line.This field is a relationship field.Relationship Nameblng__BillingTransaction__rRefers Toblng__BillingTransaction__c |
| blng__ChargeDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction date of the sub invoice line. |
| blng__EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the billed period for this sub invoice line. This value can impact the revenue. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The invoice line associated with the sub invoice line.This field is a relationship field.Relationship Nameblng__InvoiceLine__rRelationship TypeMaster-detailRefers Toblng__InvoiceLine__c (the master object) |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the sub invoice line. |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product that generated the sub invoice line.This field is a relationship field.Relationship Nameblng__OrderProduct__rRefers ToOrderItem |
| blng__Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity invoiced from the order product. |
| blng__StartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the billed period for this sub invoice line. This value can impact the revenue. |
| blng__Subtotal__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount to settle on this sub invoice line, excluding tax. |
| blng__TaxAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total tax owed on this sub invoice line. |
| blng__UniqueId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identification number associated with the sub invoice line record. This field is unique within your organization. |
| blng__UnitPrice__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the order product. |
