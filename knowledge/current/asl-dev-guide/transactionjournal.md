---
title: "TransactionJournal"
domain: asl-dev-guide
topic: transactionjournal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.658Z
estimatedTokens: 927
keywords: [TransactionJournal, journal, records, API, version, 57.0, later, Calls]
---

# TransactionJournal

> Represents information about journal records. This object is available
      in API version 57.0 and later.

# TransactionJournal

Represents information about journal records. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountingModelConfigName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the accounting set. |
| Comment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the transaction journal record. |
| CreditAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that is credited. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of currency. Possible values are your personal (if set) or your corporate currency.The default value is your corporate currency. |
| DebitAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that is debited. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the transaction is due. |
| FundAccountRecordIdValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the fund account record identifier. |
| FundAccountValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the fund account. |
| GeneralLedgerCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the associated general ledger. |
| IsAccrualJournalEntry | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the record is an accrual journal entry (true) or not (false).The default value is false. |
| IsAdjustmentJournalEntry | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the record is an adjustment journal entry (true) or not (false).The default value is false. |
| IsHistoricalJournalEntry | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the record is a historical journal entry (true) or not (false).The default value is false. |
| IsRelatedJournalEntry | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the record is a related journal entry (true) or not (false).The default value is false. |
| IsWriteOffJournalEntry | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the record is a write-off journal entry (true) or not (false).The default value is false. |
| JournalReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason for the journal record.Possible values are:CreditDebit |
| PaymentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the payment. |
| PrimaryRecordIdValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the primary record identifier. |
| SecondaryRecordIdValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the secondary record identifier. |
| TransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount in the transaction. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of usage.Possible values are:AccountingSubledger—Accounting SubledgerLoyaltyRebates |
