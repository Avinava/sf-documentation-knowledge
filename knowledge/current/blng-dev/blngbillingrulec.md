---
title: "blng__BillingRule__c"
domain: blng-dev
topic: blngbillingrulec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.263Z
estimatedTokens: 997
keywords: [blng__BillingRule__c, how, billing, occur, products, services, blng, _BillingRule, Calls]
---

# blng__BillingRule__c

> Represents how and when billing must occur for products and services.

# blng\_\_BillingRule\_\_c

Represents how and when billing must occur for products and services.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | Typehow and when billing should occur for products and services.picklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the billing rule record when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the billing rule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a billing rule record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a billing rule record. If this value is null, it’s possible that the user only accessed the billing rule record or a related list view (LastReferencedDate), but not viewed the billing rule record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the billing rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the billing rule is active (true) or not (false). To deactivate the billing rule, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__AmendmentBillCycleDateAlignment__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how the bill cycle date must be aligned when an amendment is made.Valid values are:Align to original Order ProductDo not align amended Order ProductThe default value is Do not align amended Order Product. |
| blng__GenerateInvoices__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies if the billing rule creates invoices.Valid values are:NoYes |
| blng__InitialBillingTrigger__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the occurrence whose date is used to calculate the initial billing trigger date.Valid value is:Order Product Activation Date |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the billing rule. |
| blng__PartialPeriodTreatment__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The process for generating bills for recurring order products that begin billing on a different day than their start date.Valid values are:CombineSeparateThe default value is Separate. |
| blng__PeriodTreatmentForBTDO__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis field is relevant only if an order product has a Bill Through Date Override (BTDO) value within a billing cycle. This field specifies the option to merge a partial billing period with the previous full period when generating an invoice line, or to keep the partial period as a separate invoice line.Valid values are:CombineExclude Billing Day of MonthSeparateThe default value is Exclude Billing Day of Month. |
