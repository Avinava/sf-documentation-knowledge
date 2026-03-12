---
title: "CreditMemoLine"
domain: revenue-cloud
topic: creditmemoline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.050Z
estimatedTokens: 2006
keywords: [CreditMemoLine, Represents, product, service, adjustment, tax, line, items, included, credit, memo., API, version, 62.0, later., Important, Supported, Calls, Special, Access]
---

# CreditMemoLine

> Represents the product, service, adjustment, or tax line items
         included in a credit memo. This object is available in API version 62.0 and
      later.

# CreditMemoLine

Represents the product, service, adjustment, or tax line items included in a credit memo. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

You need the Credit Memo Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe amount of this credit memo line item if its type is Adjustment. |
| AdjustmentAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the adjustment amount and the adjustment tax amount. Available in API versions 62.0 and 63.0. |
| AdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the tax related to the adjustment amount. Available in API versions 62.0 and 63.0. |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the credit memo line available for allocation. |
| BillingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the billing address related to this credit memo line.This field is a relationship field.Relationship NameBillingAddressRefers ToCreditMemoAddressGroup |
| ChargeAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe amount of this credit memo line item if its type is Charge. |
| ChargeAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the charge amount and the charge tax amount. Available in API versions 62.0 and 63.0. |
| ChargeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the tax related to the charge amount. Available in API versions 62.0 and 63.0. |
| CorpCurrencyCnvChargeAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe amount of the credit memo line item if its type is Charge in corporate currency. Available in API version 63.0 and later. |
| CorpCurrencyCnvTotalTaxAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe sum of the total amount with the tax on the credit memo line in corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the credit memo line amounts are converted to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the credit memo line amounts to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe currency ISO code of the corporate currency. Available in API version 63.0 and later. |
| CreditMemoId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the parent credit memo.This field is a relationship field.Relationship NameCreditMemoRelationship TypeMaster-detailRefers ToCreditMemo (the master object) |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the credit memo line. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe description of the credit memo line. |
| FuncCrcyCnvTotalTaxAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe total tax amount value in functional currency. Available in API version 66.0 and later. |
| FuncCurrencyCnvChargeAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe charge amount value in functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the credit memo line amounts are converted into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert credit memo line amounts into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ISO code of the functional currency. Available in API version 66.0 and later. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity accounting period record of the credit memo line.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity record related to the credit memo line.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| LineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the credit memo line.This field is a calculated field. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the credit memo line. |
| NetCreditsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount applied to invoice lines from the credit memo. This amount is calculated by subtracting the total unapplied credit amount from the total applied credit amount.This field is a calculated field. |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product or service being credited in the credit memo line.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| ReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe order product or invoice line corresponding to this credit memo line.This field is a polymorphic relationship field.Relationship NameReferenceEntityItemRefers ToInvoiceLine, OrderItem |
| ReferenceEntityItemType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of transaction that generated the credit memo line.Valid values are:Delivery ChargeFeeOrder Product |
| ReferenceEntityItemTypeCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of object that generated the credit memo line.Valid values are:ChargeProduct |
| ShipFromAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe address from which the product in the credit memo line is shipped. Available in API version 64.0 and later.This field is a relationship field.Relationship NameShipFromAddressRefers ToCreditMemoAddressGroup |
| ShippingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the shipping address.This field is a relationship field.Relationship NameShippingAddressRefers ToCreditMemoAddressGroup |
| StartDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe first date of the billing for the service for credit memo lines generated from a time-based service. |
| Status | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status of the credit memo line. This field is inherited from the credit memo. |
| TaxAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe total tax amount for the credit memo. |
| TaxTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the tax treatment record for the credit memo line.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |
