---
title: "blng__PaymentScheduler__c"
domain: blng-dev
topic: blngpaymentschedulerc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.551Z
estimatedTokens: 1023
keywords: [blng__PaymentScheduler__c, automating, payment, runs, creating, schedulers, process, recurring, basis, blng, _PaymentScheduler, Calls]
---

# blng__PaymentScheduler__c

> Represents automating payment runs by creating payment schedulers,
         which process the payment runs on a recurring basis.

# blng\_\_PaymentScheduler\_\_c

Represents automating payment runs by creating payment schedulers, which process the payment runs on a recurring basis.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment scheduler when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the account. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a payment scheduler record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a payment scheduler record. If this value is null, it’s possible that the user only accessed the payment scheduler record or a related list view (LastReferencedDate), but not viewed the payment scheduler record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionDescriptionThe name of the payment scheduler. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| blng__ApexJobId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier of an Apex job associated with the payment scheduler. |
| blng__IncludeAllCurrencies__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether to include all currencies in the payment run (true) or not (false).The default value is false. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the payment scheduler. |
| blng__PaymentBatches__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionA collection of several payments combined for processing. |
| blng__PaymentGateway__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Salesforce Billing payment gateway record used to establish communication with the external payment gateway.This field is a relationship field.Relationship Nameblng__PaymentGateway__rRelationship TypeLookupRefers Toblng__PaymentGateway__c |
| blng__PaymentType__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionThe type of payment in the payment schedule.Valid values are:ACHCredit Card |
| blng__Startdateandtime__c | TypedateTimePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the payment scheduler. |
| blng__TargetDate__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The target date for the payment run. Billing schedules having the next billing date before this date is picked up for invoicing. |
| blng__TargetDayOfMonth__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIn a monthly schedule, the designated day of the month for the payment run. |
| blng__TargetDayofWeek__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIn a weekly schedule, the designated day of the week for the payment run. |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of payment schedule.Valid values are:DailyMonthlyOnceWeekly |
