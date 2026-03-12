---
title: "InvoiceLineTax"
domain: revenue-cloud
topic: invoicelinetax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.603Z
estimatedTokens: 2392
keywords: [InvoiceLineTax, Represents, tax, information, invoice, line, Tax., API, version, 62.0, later., Important, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# InvoiceLineTax

> Represents tax information of an invoice line of type Tax. This object is available in API version 62.0 and
      later.

# InvoiceLineTax

Represents tax information of an invoice line of type Tax. This object is available in API version 62.0 and later.

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
| BillingAddressId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe billing address of the parent invoice line. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice.This field is a relationship field.Relationship NameBillingAddressRefers ToInvoiceAddressGroup |
| ConvertedNegAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe amount from the parent invoice line that's converted to credit. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. |
| CorpCrcyCnvTaxAmount | TypedoublePropertiesFilter, Group, Nillable, SortDescriptionThe total tax amount of the invoice line tax in corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date on which the invoice line tax amounts are converted to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, SortDescriptionThe exchange rate that's used to convert the invoice line tax amounts to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe currency ISO code of the corporate currency. Available in API version 63.0 and later. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the invoice line tax. |
| EndDate | TypedatePropertiesFilter, Group, Sort, UpdateDescriptionRequired. The end date of an invoice line tax. |
| FuncCrcyCnvTaxAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe tax amount value in functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the tax amount value is converted into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the tax amount value into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ISO code of the functional currency. Available in API version 66.0 and later. |
| InvoiceLineId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the parent charge or adjustment invoice line record that an invoice line tax is related to.This field is a relationship field.Relationship NameInvoiceLineRelationship TypeMaster-detailRefers ToInvoiceLine (the master object) |
| InvoiceLineTaxNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An auto-generated number identifying an invoice line tax. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity accounting period record that's related to an invoice line tax.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity that's related to an invoice line tax.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe product that was charged or ordered to create the parent invoice line. Available in API version 62.0 only.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| Quantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe number of units of the order product that created the parent invoice line. Available in API version 62.0 only. |
| ShipFromAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ship from address specified in the parent invoice line. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. Available in API version 64.0 and later.This field is a relationship field.Relationship NameShipFromAddressRefers ToInvoiceAddressGroup |
| ShippingAddressId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the shipping address record of the parent invoice line. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice.This field is a relationship field.Relationship NameShippingAddressRefers ToInvoiceAddressGroup |
| StartDate | TypedatePropertiesFilter, Group, Sort, UpdateDescriptionRequired. The start date of an invoice line tax. |
| TaxAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe total amount of an invoice line tax. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. Available in API version 65.0 and later. |
| TaxCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe code that's used to calculate the tax rate for the parent invoice line. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. |
| TaxDocumentNumber | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe number of the latest record in the external tax engine in which the parent invoice line is included. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. |
| TaxEffectiveDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date used to calculate the tax amount. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. |
| TaxExemptAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe amount that's exempted from tax. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. |
| TaxName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe user-defined name for an invoice line tax. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. |
| TaxProcessingStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe processing status of the invoice line tax.Valid values are:EstimatedPendingPosted |
| TaxRate | TypepercentPropertiesFilter, Nillable, Sort, UpdateDescriptionThe percentage of the order product price that's used to calculate tax. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice. |
| TaxTransactionNumber | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe number of the transaction in the external tax engine that calculated tax for the parent invoice line. |
| TaxTreatmentId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the tax treatment record that's related to an invoice line tax. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |
| UnitPrice | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe price per unit of the order product that's related to an invoice line tax. Available in API version 62.0 only. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvoiceLineTaxFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InvoiceLineTaxHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InvoiceLineTaxFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- InvoiceLineTaxHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
