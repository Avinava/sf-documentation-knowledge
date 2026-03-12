---
title: "CreditMemoLineTax"
domain: revenue-cloud
topic: creditmemolinetax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.264Z
estimatedTokens: 1898
keywords: [CreditMemoLineTax, tax, credit, memo, line, API, version, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# CreditMemoLineTax

> Represents tax information of a credit memo line of type Tax. This object is available in API version 62.0 and
      later.

# CreditMemoLineTax

Represents tax information of a credit memo line of type Tax. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

You need the Tax Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe billing address of the parent credit memo line.This field is a relationship field.Relationship NameBillingAddressRefers ToCreditMemoAddressGroup |
| CalculationStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the tax calculation.Valid values are:CompleteErrorNoneThe default value is None. |
| CorpCrcyCnvTaxAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe total tax amount of the credit memo line tax in corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the credit memo line tax amounts are converted to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the credit memo line tax amounts to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe currency ISO code of the corporate currency. Available in API version 63.0 and later. |
| CreditMemoLineId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the parent charge or adjustment credit memo line record that a credit memo line tax is related to.This field is a relationship field.Relationship NameCreditMemoLineRelationship TypeMaster-detailRefers ToCreditMemoLine (the master object) |
| CreditMemoLineTaxNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An auto-generated number identifying a credit memo line tax. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the credit memo line tax. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe end date of a credit memo line tax. |
| FuncCrcyCnvTaxAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe tax amount value in functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the tax amount value is converted into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the tax amount value into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ISO code of the functional currency. Available in API version 66.0 and later. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the legal entity accounting period record that's related to a credit memo line tax.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity record that's related to a credit memo line tax.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product or service being credited in the parent credit memo line. Available in API version 62.0 only.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| ReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe invoice line tax corresponding to a credit memo line tax.This field is a relationship field.Relationship NameReferenceEntityItemRefers ToInvoiceLineTax |
| ShipFromAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ship from address specified in the parent credit memo line. Available in API version 64.0 and later.This field is a relationship field.Relationship NameShipFromAddressRefers ToCreditMemoAddressGroup |
| ShippingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe shipping address of the parent credit memo line.This field is a relationship field.Relationship NameShippingAddressRefers ToCreditMemoAddressGroup |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe start date of a credit memo line tax. |
| TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of a credit memo line tax. |
| TaxCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe code that's used to calculate the tax rate for the parent credit memo line. |
| TaxDocumentNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe document number that's used to calculate the tax rate for the parent credit memo line. |
| TaxEffectiveDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date used to calculate the tax amount. |
| TaxName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user-defined name for a credit memo line tax. |
| TaxRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage that's used to calculate tax. |
| TaxTransactionNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe number of the transaction in the external tax engine that calculated tax for the parent credit memo line. |
| TaxTreatmentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the tax treatment record that's related to a credit memo line tax.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CreditMemoLineTaxFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CreditMemoLineTaxHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CreditMemoLineTaxFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- CreditMemoLineTaxHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
