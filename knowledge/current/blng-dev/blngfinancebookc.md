---
title: "blng__FinanceBook__c"
domain: blng-dev
topic: blngfinancebookc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.270Z
estimatedTokens: 610
keywords: [blng__FinanceBook__c, storage, financial, transactions, reporting, recordkeeping, blng, _FinanceBook, Calls]
---

# blng__FinanceBook__c

> Represents the storage of financial transactions for reporting and
         recordkeeping.

# blng\_\_FinanceBook\_\_c

Represents the storage of financial transactions for reporting and recordkeeping.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the finance book record when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a finance book record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a finance book record. If this value is null, it’s possible that the user only accessed the finance book record or a related list view (LastReferencedDate), but not viewed the finance book record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the finance book. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the finance book is active (true) or not (false). To deactivate the finance book, clear the Active checkbox. This setting won't affect past or existing transactions or assignments.The default value is true. |
| blng__FinancePeriodDuration__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The duration of the finance period date range.Valid values are:CustomMonthlyThe default value is Monthly. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the finance book. |
| blng__PeriodType__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of finance book.Valid values are:AccountingRevenue |
