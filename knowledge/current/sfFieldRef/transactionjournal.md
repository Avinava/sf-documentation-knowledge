---
title: "TransactionJournal"
domain: sfFieldRef
topic: transactionjournal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.506Z
estimatedTokens: 593
keywords: [TransactionJournal, journal, records, API, version, 57.0, later]
---

# TransactionJournal

> Represents information about journal records. This object is available
      in API version 57.0 and later.

# TransactionJournal

Represents information about journal records. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see TransactionJournal in the Accounting Subledger Developer Guide, Automotive Cloud Developer Guide, Loyalty Management Developer Guide, Public Sector Solutions Developer Guide, Rebate Management Developer Guide, Referral Marketing Developer Guide, and Usage Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivityDate | Activity Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Credit | Credit | currency |  |  | 18 | 2 |
| CreditGeneralLedgerAccountId | General Ledger Account ID | reference |  | 18 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Debit | Debit | currency |  |  | 18 | 2 |
| DebitGeneralLedgerAccountId | General Ledger Account ID | reference |  | 18 |  |  |
| GeneralLedgerAcctAsgntRuleId | General Ledger Account Assignment Rule ID | reference |  | 18 |  |  |
| Id | Transaction Journal ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| LegalEntyAccountingPeriodId | Legal Entity Accounting Period ID | reference |  | 18 |  |  |
| Name | Name | string |  | 30 |  |  |
| ReferenceRecordId | Reference Record ID | reference |  | 18 |  |  |
| ReferenceTransactionRecordId | Reference Transaction Record ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransactionType | Transaction Type | picklist |  | 40 |  |  |
| UniqueIdentifier | Unique Identifier | string |  | 80 |  |  |
| UsageResourceId | Usage Resource ID | reference |  | 18 |  |  |
| UsageType | Usage Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
