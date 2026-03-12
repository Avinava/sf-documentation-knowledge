---
title: "GeneralLedgerAcctAsgntRule"
domain: revenue-cloud
topic: generalledgeracctasgntrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.546Z
estimatedTokens: 1178
keywords: [GeneralLedgerAcctAsgntRule, rule, general, ledger, accounts, assigned, transaction, journals, created, billing, transactions, API, version, 63.0, later]
---

# GeneralLedgerAcctAsgntRule

> Represents information about the rule based on which general ledger accounts are
         assigned to transaction journals that are created for billing transactions. This
      object is available in API version 63.0 and later.

# GeneralLedgerAcctAsgntRule

Represents information about the rule based on which general ledger accounts are assigned to transaction journals that are created for billing transactions. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need Revenue Cloud Billing license and the Accounts Receivables Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| CreditGeneralLedgerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe general ledger account for a credit transaction that's related to the general ledger account assignment rule.This field is a relationship field.Relationship NameCreditGeneralLedgerAccountRefers ToGeneralLedgerAccount |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency code of the general ledger account assignment rule for Salesforce orgs with multicurrency enabled.Valid values are:AUD—Australian DollarEUR—EuroSGD—Singapore DollarUSD—U.S. DollarThe default value is USD. |
| DebitGeneralLedgerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe general ledger account for a debit transaction that's related to the general ledger account assignment rule.This field is a relationship field.Relationship NameDebitGeneralLedgerAccountRefers ToGeneralLedgerAccount |
| FilterCriteria | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe filter criteria for the general ledger account assignment rule.Valid values are:AllAnyCustom |
| FilterLogic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe filter logic for the general ledger account assignment rule when the filter criteria is Custom. Transaction journals are created for the transactions of the selected type that meet the defined filter logic. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity that's related to the general ledger account assignment rule.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA user-defined name for the general ledger account assignment rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the general ledger account assignment rule record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the general ledger account assignment rule when there are multiple general ledger account assignment rules defined for a transaction type. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the general ledger account assignment rule.Valid values are:ActiveInactive |
| TransactionAmountField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe amount field on the transaction type that's used to record the credit or debit amount in the transaction journals that are generated for that specific transaction type. This field is available in API version 64.0 and later. |
| TransactionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe transaction type that's related to the general ledger account assignment rule.Valid values are:CreditMemoCreditMemoInvApplicationCreditMemoLineCreditMemoLineInvoiceLineCreditMemoLineTaxDebitMemoLine—Available in API version 65.0 and later.InvoiceInvoiceLineInvoiceLineTaxPayment—Available in API version 64.0 and later.PaymentLineInvoice—Available in API version 64.0 and later.PaymentLineInvoiceLine—Available in API version 64.0 and later.Refund—Available in API version 64.0 and later.RefundLinePayment—Available in API version 64.0 and later. |
