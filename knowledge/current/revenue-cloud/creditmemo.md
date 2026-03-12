---
title: "CreditMemo"
domain: revenue-cloud
topic: creditmemo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.206Z
estimatedTokens: 2319
keywords: [CreditMemo, document, that’s, reduce, amount, buyer, owes, seller, under, terms, earlier, invoice, API, version, 62.0]
---

# CreditMemo

> Represents a document that’s used to reduce the amount that a buyer
         owes a seller under the terms of an earlier invoice. This object is available in API
      version 62.0 and later.

# CreditMemo

Represents a document that’s used to reduce the amount that a buyer owes a seller under the terms of an earlier invoice. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

You need the Credit Memo Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the credit memo that's available for allocation. |
| BillToContactId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThis field is inherited from the account’s Bill to Account field.This field is a relationship field.Relationship NameBillToContactRefers ToContact |
| BillingAccountId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionRequired. The ID of the customer account associated with this credit memo.This field is a relationship field.Relationship NameBillingAccountRefers ToAccount |
| Category | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the credit memo is created due to writing off an invoice, converting negative invoice lines, or referencing an existing record.Valid values are:InvoiceWriteOffReferencedStandaloneThis field is available in API version 64.0 and later. |
| CorpCrcyCnvTotAmtWithTax | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of the total amount with tax on the credit memo in corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date on which the credit memo amounts are converted to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, SortDescriptionThe exchange rate that's used to convert credit memo amounts to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe currency ISO code of the corporate currency. Available in API version 63.0 and later. |
| CreationMode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the credit memo originated in Salesforce or an external system.Valid values are:ExternalSalesforce |
| CreditDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the credit memo was posted. |
| CreditMemoNumber | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe number of the credit memo. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the credit memo. |
| DocumentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the credit memo. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe effective date of the credit memo. If this field is empty, the credit date is used. For reporting purposes only; this field drives no other logic. |
| ExternalReference | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionAn external system’s ID for the credit memo. |
| ExternalReferenceDataSource | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that also contains the credit memo. |
| FuncCrcyCnvTotAmtWithTax | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe total amount with tax value in functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the total amount with tax value is converted into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the total amount with tax value into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ISO code of the functional currency. Available in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a credit memo record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a credit memo record. If this value is null, it’s possible that the user only accessed the credit memo record or a related list view (LastReferencedDate), but not viewed the credit memo record itself. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity accounting period record that’s related to the credit memo. This field is available in API version 65.0 and later.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity related to the credit memo. This field is available in API version 65.0 and later.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| NetCreditsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total difference between the credit applied to and credit unapplied from the invoice.This field is a calculated field. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionRequired. The ID of the user who owns a credit memo record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReasonCode | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe reason code for the credit memo's category. For example, BD can be the reason code when the credit memo's category is InvoiceWriteOff and the reason for the invoice write-off is bad debt. This field is available in API version 64.0 and later. |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record that this credit memo was generated from. For example, the order, order summary, or invoice.This field is a polymorphic relationship field.Relationship NameReferenceEntityRefers ToInvoice, Order |
| SettlementLevel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the credit memo amount was applied to an invoice or an invoice line. |
| SourceAction | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies which Salesforce API created the credit memo.Valid values are:InvoiceNegativeInvoiceLineConversionStandaloneVoidPostedInvoiceWriteOffPostedInvoice—Available in API version 64.0 and later. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the credit memo.Valid values are:CanceledDraftErrorPendingPostedVoid In Progress—Available in API version 64.0 and later.Voided |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the TotalAmount field values for the credit memo’s adjustment lines.This field is a calculated field. |
| TotalAdjustmentAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the credit memo’s adjustment line amounts, including tax. Available in API versions 62.0 and 63.0. |
| TotalAdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the credit memo’s adjustment line tax. Adjustment line balances are excluded. Available in API versions 62.0 and 63.0. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the credit memo’s TotalLineAmount and TotalAdjustmentAmount field values.This field is a calculated field. |
| TotalAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total credit memo amount, with tax included.This field is a calculated field. |
| TotalChargeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the TotalAmount field values for the credit memo’s charge lines.This field is a calculated field. |
| TotalChargeAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the credit memo’s charge line amounts, including tax. Available in API versions 62.0 and 63.0. |
| TotalChargeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the credit memo’s charge tax amount. Available in API versions 62.0 and 63.0. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the TotalAmount field values for the credit memo’s tax lines.This field is a calculated field. |
| TotalTaxesCapturedAtHeader | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total tax calculated at the transaction header level. Available in API version 66.0 and later. |
