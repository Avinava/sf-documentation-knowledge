---
title: "blng__Usage__c"
domain: blng-dev
topic: blngusagec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.819Z
estimatedTokens: 1866
keywords: [blng__Usage__c, amount, service, consumed, over, period, time, blng, _Usage, Calls]
---

# blng__Usage__c

> Represents the amount of service consumed over a period of
      time.

# blng\_\_Usage\_\_c

Represents the amount of service consumed over a period of time.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the usage record when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the usage record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a usage record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a usage record. If this value is null, it’s possible that the user only accessed the usage record or a related list view (LastReferencedDate), but not viewed the usage record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the usage record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the customer who consumed the service.This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the payment in the base currency of the organization. It’s used to standardize the amount across different currencies. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the Foreign Exchange (FX) rate is applied to convert an amount into the base currency. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe FX rate used to convert an amount from a foreign currency to the base currency. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary currency in which the financial transactions are recorded and reported. |
| blng__EndDateTime__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The end date and time of a particular usage record. |
| blng__ErrorMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf Salesforce Billing can’t calculate a value on this usage record, it shows a message with the reason for the error. |
| blng__MatchingAttribute__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is filled in based on the consumption schedule. Usages are evaluated against usage summaries where the matching ID, matching attribute, and unit of measure fields align. When the charge type is usage, legacy usage pricing does not consider this field. |
| blng__MatchingId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. A usage and a usage summary are linked through a lookup relationship. For the usage to be included in the usage summary, both records must have the same matching ID. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information or comments related to the usage record. |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the usage record. This association helps in tracking the usage of a product that’s ordered, which is essential for billing and invoicing purposes.This field is a relationship field.Relationship Nameblng__OrderProduct__rRefers ToOrderItem |
| blng__Order__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the usage record. This field is used to manage and track billing-related information for orders.This field is a relationship field.Relationship Nameblng__Order__rRefers ToOrder |
| blng__PreratedAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWhen users enter a prerated amount on a usage record, Salesforce Billing uses that value for the usage’s total rather than the standard calculation of usage. |
| blng__PreratedQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of prerated times an end customer used this service during the usage record’s start and end dates. |
| blng__ProcessingDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when a particular usage record is processed. |
| blng__Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of times an end customer used this service during the usage record’s start and end dates. |
| blng__ReferenceId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionReference to source for which the usage record is created. |
| blng__SourceId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe source associated with the usage record. |
| blng__StartDateTime__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The start date and time of a usage event. |
| blng__StatusCode__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis field handles and sets all HTTP response codes. |
| blng__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the usage record.Valid values are:ErrorNewProcessedQueued for subtotal calculationWarning - Unrated |
| blng__Subtotal__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe subtotal amount for a usage record. |
| blng__UnitOfMeasure__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPopulated from the consumption schedule. Usages are rated against usage summaries where the matching ID, matching attribute, and unit of measure fields match. When the charge type is usage, legacy usage pricing ignores this field.Valid values are:HoursNone |
| blng__UnitPrice__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA usage summary’s unit price is based on where the summary’s total quantity falls within the price schedule. When you use volume price schedules, your usage records and usage summary all have the same unit price. But for tiered price schedules, your usages could have different unit prices than the usage summary based on how their quantity ranges fall in each price tier. |
| blng__UsageSummary__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage summary associated with the usage record.This field is a relationship field.Relationship Nameblng__UsageSummary__rRefers Toblng__UsageSummary__c |
