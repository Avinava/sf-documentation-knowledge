---
title: "GeneralLedgerJrnlEntryRule"
domain: revenue-cloud
topic: generalledgerjrnlentryrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.552Z
estimatedTokens: 591
keywords: [GeneralLedgerJrnlEntryRule, transaction, journal, entry, rule, journals, created, selected, credit, debit, general, ledger, accounts, amount, percentage]
---

# GeneralLedgerJrnlEntryRule

> Represents information about the transaction journal entry rule, based on
         which transaction journals are created for the selected credit and debit general ledger
         accounts, transaction amount field, and percentage. This object is available in API
      version 65.0 and later.

# GeneralLedgerJrnlEntryRule

Represents information about the transaction journal entry rule, based on which transaction journals are created for the selected credit and debit general ledger accounts, transaction amount field, and percentage. This object is available in API version 65.0 and later.

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
| CreditGeneralLedgerAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe general ledger account for a credit transaction.This field is a relationship field.Relationship NameCreditGeneralLedgerAccountRefers ToGeneralLedgerAccount |
| DebitGeneralLedgerAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe general ledger account for a debit transaction.This field is a relationship field.Relationship NameDebitGeneralLedgerAccountRefers ToGeneralLedgerAccount |
| GeneralLedgerAcctAsgntRuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe general ledger account assignment rule that’s related to the general ledger journal entry rule.This field is a relationship field.Relationship NameGeneralLedgerAcctAsgntRuleRelationship TypeMaster-detailRefers ToGeneralLedgerAcctAsgntRule (the master object) |
| Percentage | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionThe percentage of the amount field value that’s used to record the credit or debit amount in the transaction journals generated for the general ledger journal entry rule. |
| TransactionAmountField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe amount field on the transaction type that’s used to record the credit or debit amount in the transaction journals generated for that specific transaction type. |
