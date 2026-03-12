---
title: "blng__GLAccount__c"
domain: blng-dev
topic: blngglaccountc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.286Z
estimatedTokens: 620
keywords: [blng__GLAccount__c, accounting, journal, entries, General, Ledger, account, define, credit, debit, endpoints, accounts, along, associated, records]
---

# blng__GLAccount__c

> Represents the accounting journal entries in a General Ledger (GL) account.
         You can define both a credit GL account and a debit GL account as endpoints for these
         entries. These GL accounts, along with all associated records, can later be exported to an
         external GL bookkeeping system.

# blng\_\_GLAccount\_\_c

Represents the accounting journal entries in a General Ledger (GL) account. You can define both a credit GL account and a debit GL account as endpoints for these entries. These GL accounts, along with all associated records, can later be exported to an external GL bookkeeping system.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the legacy entity when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a GL account record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a GL account record. If this value is null, it’s possible that the user only accessed the GL account record or a related list view (LastReferencedDate), but not viewed the GL account record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the GL account. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the GL account is active (true) or not (false). To deactivate the GL account, clear the Active checkbox. This setting won't affect past or existing transactions or assignments. The default value is true. |
| blng__GLAccountDescription__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe purpose and usage of a GL account. |
| blng__GLAccountNumber__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The number that's used to organize the details about the GL account. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the GL account. |
