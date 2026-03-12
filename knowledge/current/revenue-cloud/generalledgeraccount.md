---
title: "GeneralLedgerAccount"
domain: revenue-cloud
topic: generalledgeraccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.536Z
estimatedTokens: 711
keywords: [GeneralLedgerAccount, accounting, codes, store, organize, financial, transactions, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# GeneralLedgerAccount

> Represents information about the accounting codes, types, and names that are used
         to store and organize financial transactions. This object is available in API version
      63.0 and later.

# GeneralLedgerAccount

Represents information about the accounting codes, types, and names that are used to store and organize financial transactions. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need Revenue Cloud Billing license and the Accounts Receivables Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountingCode | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe code that's used to organize information about the general ledger account. |
| AccountingName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user-specified name for the general ledger account. |
| AccountingType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe accounting type for the general ledger account. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the general ledger account. |
| FinancialStatement | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial statement that's created by using the information from the general ledger account. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity that's related to the general ledger account.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionAn auto-generated name identifying the general ledger account, which is a combination of the accounting code and the account name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this object or ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the accounting type for the general ledger account. This field is available in API version 65.0 and later.Valid values are:AssetLiabilityEquityRevenueExpenseOthers |
