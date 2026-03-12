---
title: "blng__BillingSchedule__c"
domain: blng-dev
topic: blngbillingschedulec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.029Z
estimatedTokens: 1105
keywords: [blng__BillingSchedule__c, order, product, that's, invoiced, invoice, plan, billing, frequency, blng, _BillingSchedule, Calls]
---

# blng__BillingSchedule__c

> Represents information about the order product that's invoiced based on the
         invoice plan billing frequency.

# blng\_\_BillingSchedule\_\_c

Represents information about the order product that's invoiced based on the invoice plan billing frequency.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the billing schedule's order product when multiple currencies are enabled.The default value is USD. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the billing schedule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the billing schedule.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount that has been invoiced for the order product, excluding tax. |
| blng__BilledAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount that has been billed for the order product related to the billing schedule, based on the order product's invoice plan lines.This field is a calculated field. |
| blng__InvoicePlan__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice plan associated with the billing schedule.This field is a relationship field.Relationship Nameblng__InvoicePlan__rRelationship TypeLookupRefers Toblng__InvoicePlan__c |
| blng__NumberOfBilledBillingTransactions__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of billing transactions that are associated with the billing schedule with the status as Billed.This field is a calculated field. |
| blng__NumberOfBillingTransactions__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of billing transactions that are associated with the billing schedule.This field is a calculated field. |
| blng__NumberOfCanceledBillingTransactions__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of billing transactions associated with the billing schedule with the status as Canceled.This field is a calculated field. |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the billing schedule.This field is a relationship field.Relationship Nameblng__OrderProduct__rRelationship TypeLookupRefers ToOrderItem |
| blng__Source__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source of the billing schedule.Valid values are:ExternalStandard |
| blng__Status__c | TypestringPropertiesFilter, Nillable, SortDescriptionThe status of the billing schedule. The formula for calculating the status isIF(blng__BilledAmount__c == blng__Amount__c, "Billed",    IF((blng__NumberOfBillingTransactions__c != 0 && blng__NumberOfBillingTransactions__c = blng__NumberOfCanceledBillingTransactions__c), "Cancelled", "Pending") ) .This field is a calculated field. |
| blng__TaxCity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address that Salesforce Billing uses to calculate tax for the billing schedule's order product. |
| blng__TaxCountry__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address that Salesforce Billing uses to calculate tax for the billing schedule's order product. |
| blng__TaxState__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address that Salesforce Billing uses to calculate tax for the billing schedule's order product. |
| blng__TaxStreet__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the billing schedule's order product. |
| blng__TaxZipCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address that Salesforce Billing uses to calculate tax for the billing schedule's order product. |
