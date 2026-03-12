---
title: "blng__UsageSummary__c"
domain: blng-dev
topic: blngusagesummaryc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.842Z
estimatedTokens: 3093
keywords: [blng__UsageSummary__c, total, quantity, usages, date, ranges, including, usage, records, blng, _UsageSummary, Calls]
---

# blng__UsageSummary__c

> Represents the total quantity and value of related usages, and the date
         ranges for including usage records.

# blng\_\_UsageSummary\_\_c

Represents the total quantity and value of related usages, and the date ranges for including usage records.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the usage summary record when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the usage summary record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a usage summary record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a usage summary record. If this value is null, it’s possible that the user only accessed the usage summary record or a related list view (LastReferencedDate), but not viewed the usage summary record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the usage summary record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the customer who consumed the service.This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__AppliedUnitPrice__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReserved for internal use. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the payment in the base currency of the organization. It’s used to standardize the amount across different currencies. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the Foreign Exchange (FX) rate is applied to convert an amount into the base currency. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe FX rate used to convert an amount from a foreign currency to the base currency. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary currency in which the financial transactions are recorded and reported. |
| blng__BilledQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of this summary’s usage that Salesforce Billing has billed. The billed quantity can contain usage from one or more usage records. |
| blng__BilledRevenue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReserved for internal use. |
| blng__GroupedQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of usage records that are grouped together for a specific order product. |
| blng__IncludedUnbilledUsage__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed only when the order product charge type is usage. Not used when a usage summary has an order product consumption schedule. |
| blng__IncludedUsageExhausted__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUsed only when the order product charge type is usage. Not used when a usage summary has an order product consumption schedule.The default value is false. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice line that represents invoiced billings from this usage summary.This field is a relationship field.Relationship Nameblng__InvoiceLine__rRefers Toblng__InvoiceLine__c |
| blng__InvoiceRunProcessingStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe order product status as evaluated by the invoice run.Valid values are:CompletedErrorIn ProgressPending BillingWill Not Invoice |
| blng__InvoiceRunStartDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the invoice run associated with the usage summary record. |
| blng__InvoiceRunStatusIndex__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe text string that mirrors the value of the invoice run processing status. Users must not edit this system field. |
| blng__InvoiceRun__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice run associated with the usage summary record.This field is a relationship field.Relationship Nameblng__InvoiceRun__rRefers Toblng__InvoiceRun__c |
| blng__Invoice__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice that contains an invoice line for this usage summary.This field is a relationship field.Relationship Nameblng__Invoice__rRefers Toblng__Invoice__c |
| blng__MatchingAttribute__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPopulated from the consumption schedule. Usages are rated against usage summaries where the matching ID, matching attribute, and unit of measure match. When charge type is usage, legacy usage pricing ignores this field. |
| blng__MatchingId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionSalesforce Billing uploads usage only to usage summaries with matching IDs. Create a workflow rule that populates your usages and usage summaries based on certain criteria. |
| blng__NextBillingDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that this usage summary is due for billing. The target date on an invoice run must be after this date for the usage summary to be invoiced. When you use bill now, the effective target date must be after this date. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information or comments related to the usage summary record. |
| blng__OrderItemConsumptionSchedule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the order item consumption schedule for pricing. Populated only for products with consumption schedules.This field is a relationship field.Relationship Nameblng__OrderItemConsumptionSchedule__rRefers ToSBQQ__OrderItemConsumptionSchedule__c |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the usage summary record. This association helps in tracking the usage of a product that’s ordered, which is essential for billing and invoicing purposes.This field is a relationship field.Relationship Nameblng__OrderProduct__rRefers ToOrderItem |
| blng__Order__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the usage summary record. This field is used to manage and track billing-related information for orders.This field is a relationship field.Relationship Nameblng__Order__rRefers ToOrder |
| blng__OverrideStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionWhen the status is set to Canceled, the usage summary does not load any additional usage, and the unique IDis cleared. Despite this, the usage summary can still be invoiced, as invoicing isn’t blocked. |
| blng__OverrideSummaryEndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce Billing automatically calculates your summary’s start and end dates based on your order product’s next billing date and billing frequency. However, you can enter a date in this field to override the default summary end date. |
| blng__OverrideSummaryStartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce Billing automatically calculates your summary’s start and end dates based on your order product’s next billing date and billing frequency. However, you can enter a date in this field to override the default summary start date. |
| blng__PreratedAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount value of prerated usage across all of this summary’s usage records. When users enter a prerated amount on a usage record, Salesforce Billing uses that value for the usage’s total rather than the standard calculation. |
| blng__PreratedQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity value of prerated usage across all of this summary’s usage records. When users enter a prerated amount on a usage record, Salesforce Billing uses that value for the usage’s total rather than the standard calculation. |
| blng__Source__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source of the usage summary.Valid values are:ExternalStandard |
| blng__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the usage summary.Valid values are:CancelledNewProcessedQueued For Group CalculationQueued For InvoiceQueued For Subtotal Calculation |
| blng__Subtotal__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe subtotal amount for a usage summary record. |
| blng__SummaryEndDate__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Salesforce Billing includes usage in a usage summary if the records have matching IDs and the usage’s processing date falls within the summary’s start and end dates. |
| blng__SummaryStartDate__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Salesforce Billing includes usage in a usage summary if the records have matching IDs and the usage’s processing date falls within the summary’s start and end dates. |
| blng__TotalQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of the summary’s usage that’s consumed. |
| blng__TotalRevenue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReserved for internal use. |
| blng__UnbilledQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the summary’s usage that isn’t invoiced. |
| blng__UnbilledRevenue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReserved for internal use. |
| blng__UniqueId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique identification number associated with the usage summary record. This field is unique within your organization. |
| blng__UnitOfMeasure__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPopulated from the consumption schedule. Usages are rated against usage summaries where the matching ID, matching attribute, and unit of measure fields match. When charge type is usage, legacy usage pricing ignores this field.Valid values are:HoursNone |
| blng__UnitPrice__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA usage summary’s unit price is based on where the summary’s total quantity falls within the price schedule. When you use volume price schedules, your usage records and usage summary have the same unit price. But for tiered price schedules, your usages could have different unit prices than the usage summary based on how their quantity ranges fall in each price tier. |
| blng__UsageCount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of usage records rated against this usage summary. The number doesn’t change when a rated usage record is deleted. |
