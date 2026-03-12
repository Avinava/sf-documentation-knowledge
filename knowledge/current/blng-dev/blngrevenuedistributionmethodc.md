---
title: "blng__RevenueDistributionMethod__c"
domain: blng-dev
topic: blngrevenuedistributionmethodc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.657Z
estimatedTokens: 1193
keywords: [blng__RevenueDistributionMethod__c, how, revenue, company, spread, over, specific, period, blng, _RevenueDistributionMethod, Calls]
---

# blng__RevenueDistributionMethod__c

> Represents how the revenue of a company is spread over a specific
         period.

# blng\_\_RevenueDistributionMethod\_\_c

Represents how the revenue of a company is spread over a specific period.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the revenue distribution method when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a revenue distribution method record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a revenue distribution method record. If this value is null, it’s possible that the user only accessed the revenue distribution method record or a related list view (LastReferencedDate), but not viewed the revenue distribution method record rule itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the revenue distribution method. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the legal entity is active (true) or not (false). To deactivate the legal entity, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__DistributionMethod__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The revenue amount is prorated based on the distribution method. Valid values are:DailyFull RecognitionMonthly |
| blng__FullRecognitionDate__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies when revenue is recognized in full. Valid values are:Credit Note DateCredit Note Line End DateCredit Note Line Start DateDebit Note DateDebit Note Line End DateDebit Note Line Start DateInvoice Line End DateInvoice Line Start DateManualOrder Product End DateOrder Product Start DateOther |
| blng__MonthlyRecognitionProration__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. If your revenue transaction covers a partial period (for example, 15 days in a monthly distribution method), the transaction amount is prorated based on this value. Currently, proration is only possible based on the number of days in the partial period. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the revenue distribution method. |
| blng__RevenueScheduleTermEndDate__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe end date of the revenue schedule term. These dates can be sourced from the order product, invoice line, credit note, or debit note. If set to Manual, the user-defined code is referenced to determine the revenue distribution. Valid values are:Credit Note Line End DateDebit Note Line End DateInvoice Line End DateManualOrder Product End DateOther |
| blng__RevenueScheduleTermStartDate__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe start date of the revenue schedule term. These dates can be sourced from the order product, invoice line, credit note, or debit note. If set to Manual, the user-defined code is referenced to determine the revenue distribution. Valid values are:Credit Note Line Start DateDebit Note Line Start DateInvoice Line Start DateManualOrder Product Start DateOther |
| blng__RevenueTransactionCreationProcess__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether a revenue schedule and transaction are automatically created based on the value defined in the Type field.Valid values are:AutomaticManualThe default value is Automatic. |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of revenue transaction used in the revenue distribution method.Valid values are:Credit NoteDebit NoteInvoiceOrderOther |
