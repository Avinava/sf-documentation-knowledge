---
title: "GeneralLedgerAcctAsgntRule"
domain: sfFieldRef
topic: generalledgeracctasgntrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.278Z
estimatedTokens: 459
keywords: [GeneralLedgerAcctAsgntRule, rule, general, ledger, accounts, assigned, transaction, journals, created, billing, transactions, API, version, 63.0, later]
---

# GeneralLedgerAcctAsgntRule

> Represents information about the rule based on which general ledger accounts are
         assigned to transaction journals that are created for billing transactions. This
      object is available in API version 63.0 and later.

# GeneralLedgerAcctAsgntRule

Represents information about the rule based on which general ledger accounts are assigned to transaction journals that are created for billing transactions. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GeneralLedgerAcctAsgntRule in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditGeneralLedgerAccountId | General Ledger Account ID | reference |  | 18 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DebitGeneralLedgerAccountId | General Ledger Account ID | reference |  | 18 |  |  |
| FilterCriteria | Filter Criteria | picklist |  | 255 |  |  |
| FilterLogic | Filter Logic | string |  | 255 |  |  |
| Id | General Ledger Account Assignment Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | int | 9 |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransactionAmountField | Transaction Amount Field | string |  | 40 |  |  |
| TransactionType | Transaction Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
