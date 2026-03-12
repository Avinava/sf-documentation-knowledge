---
title: "Billing Fields on TransactionJournal"
domain: revenue-cloud
topic: billing-fields-on-transactionjournal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.499Z
estimatedTokens: 1249
keywords: [Billing, TransactionJournal, Standard, extend, represent, general, ledger, accounts, transactions, API, version, 63.0, later, Calls, Special]
---

# Billing Fields on TransactionJournal

> Standard fields extend the TransactionJournal object for use in
         Billing to represent information about the general ledger accounts for billing
         transactions. This object is available in API version 63.0 and later.

# Billing Fields on TransactionJournal

Standard fields extend the TransactionJournal object for use in Billing to represent information about the general ledger accounts for billing transactions. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license and the Accounts Receivables Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when a billing transaction record is posted or processed. |
| Credit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction record amount when a credit general ledger account is specified. |
| CreditGeneralLedgerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the general ledger account for a debit transaction that's related to the transaction journal.This field is a relationship field.Relationship NameCreditGeneralLedgerAccountRefers ToGeneralLedgerAccount |
| Debit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction record amount when a debit general ledger account is specified. |
| DebitGeneralLedgerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the General Ledger (GL) Treatment based on which transaction journals must be generated for the billing transaction.This field is a relationship field.Relationship NameDebitGeneralLedgerAccountRefers ToGeneralLedgerAccount |
| ForeignExchangeGainOrLossType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of foreign exchange gain or loss for the transaction journal. This field is available in API version 65.0 and later.Valid values are:RealizedUnrealizedUnrealizedReversal |
| GeneralLedgerAcctAsgntRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe general ledger account assignment rule used to assign general ledger accounts to transaction journals that’s created for billing transactions.This field is a relationship field.Relationship NameGeneralLedgerAcctAsgntRuleRefers ToGeneralLedgerAcctAsgntRule |
| GenlLdgrJournalEntryRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe general ledger journal entry rule used to assign general ledger accounts to transaction journals created for billing transactions. This field is available in API version 65.0 and later.This field is a relationship field.Relationship NameGenlLdgrJournalEntryRuleRefers ToGeneralLedgerJrnlEntryRule |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity that's related to the transaction journal.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| ReferenceTransactionRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction record for which the transaction journal is created.This field is a polymorphic relationship field.Relationship NameReferenceTransactionRecordRefers ToCreditMemo, CreditMemoInvApplication, CreditMemoLine, CreditMemoLineInvoiceLine, CreditMemoLineTax, Invoice, InvoiceLine, InvoiceLineTax, Payment, PaymentLineInvoice, PaymentLineInvoiceLine, Refund |
| TransactionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe transaction type that's related to the transaction journal.Valid values are:CreditMemoCreditMemoInvApplicationCreditMemoLineCreditMemoLineTaxCreditMemoLineInvoiceLineDebitMemoLine—Available in API version 65.0 and later.InvoiceInvoiceLineInvoiceLineTaxPayment—Available in API version 64.0 and later.PaymentLineInvoice—Available in API version 64.0 and later.PaymentLineInvoiceLine—Available in API version 64.0 and later.Refund—Available in API version 64.0 and later.RefundLine—Available in API version 64.0 and later. |
| UniqueIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn auto-generated identifier for the transaction journal when the usage type is Billing. The identifier is a combination of the reference transaction record ID, the general ledger account assignment rule ID, and other internal-only fields. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of usage.Valid value is:Billing |

#### See Also

-   [*Loyalty Management Developer Guide*: TransactionJournal](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_objects_transactionjournal.htm "Loyalty Management Developer Guide: TransactionJournal - HTML (New Window)")
