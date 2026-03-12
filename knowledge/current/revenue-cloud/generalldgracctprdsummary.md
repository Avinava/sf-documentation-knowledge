---
title: "GeneralLdgrAcctPrdSummary"
domain: revenue-cloud
topic: generalldgracctprdsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.529Z
estimatedTokens: 837
keywords: [GeneralLdgrAcctPrdSummary, junction, general, ledger, account, legal, entity, accounting, period, Stores, total, credit, amount, debit, opening]
---

# GeneralLdgrAcctPrdSummary

> Represents a junction between a general ledger account and a legal
         entity accounting period. Stores information about the total credit amount, total debit
         amount, opening balance, and closing balance of a general ledger account for a specific
         legal entity accounting period. This object is available in API version 65.0 and
      later.

# GeneralLdgrAcctPrdSummary

Represents a junction between a general ledger account and a legal entity accounting period. Stores information about the total credit amount, total debit amount, opening balance, and closing balance of a general ledger account for a specific legal entity accounting period. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need Revenue Cloud Billing license and the Accounts Receivables Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| ClosingBalanceAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe closing balance amount for a general ledger accounting period summary is calculated based on the general ledger account's type. For asset and expense type general ledger accounts, it’s the opening balance amount plus total debit amount minus total credit amount. For liability, equity, and revenue type general ledger accounts, it’s the opening balance amount plus total credit amount minus total debit amount. |
| GeneralLedgerAccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe general ledger account that’s related to the general ledger accounting period summary.This field is a relationship field.Relationship NameGeneralLedgerAccountRelationship TypeMaster-detailRefers ToGeneralLedgerAccount (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed general ledger accounting period summary record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed general ledger accounting period summary record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe legal entity accounting period that’s related to the general ledger account.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| OpeningBalanceAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe opening balance is the same as the closing balance of the previous general ledger account period summary. |
| TotalCreditAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe sum of the credit fields from all transaction journals of the general ledger account for a specific legal entity accounting period. |
| TotalDebitAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe sum of the debit fields from all transaction journals of the general ledger account for a specific legal entity accounting period. |
