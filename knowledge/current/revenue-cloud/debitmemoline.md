---
title: "DebitMemoLine"
domain: revenue-cloud
topic: debitmemoline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.136Z
estimatedTokens: 1832
keywords: [DebitMemoLine, Represents, additional, charge, amount, buyer, must, pay, product, service, debit, memo, line, tax, that’s, related, memo., API, version, 65.0]
---

# DebitMemoLine

> Represents the additional charge amount that the buyer must pay for
         the product, service, or debit memo line tax that’s related to the debit memo. This
      object is available in API version 65.0 and later.

# DebitMemoLine

Represents the additional charge amount that the buyer must pay for the product, service, or debit memo line tax that’s related to the debit memo. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

You need Revenue Cloud Billing license and one of these permission sets to access this object.

-   Billing Admin permission set
-   Billing Operations User permission set
-   Payments Admin permission set
-   Payments Operation User permission set
-   Credit Memo Operations User permission set

## Fields

| Field | Details |
| --- | --- |
| BillingAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing address record that’s related to the debit memo line.This field is a relationship field.Relationship NameBillingAddressRefers ToDebitMemoAddress |
| ChargeAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount of the debit memo line item. |
| CorpCurrencyCnvChargeAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe charge amount of the debit memo line in corporate currency. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the debit memo line amounts are converted into corporate currency. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that’s used to convert debit memo line amounts into corporate currency. |
| CorporateCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe currency ISO code of the corporate currency. |
| DebitMemoId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent debit memo record that’s related to the debit memo line record.This field is a relationship field.Relationship NameDebitMemoRelationship TypeMaster-detailRefers ToDebitMemo (the master object) |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the debit memo line. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the debit memo line that determines which billing cycle it must be associated with. |
| FuncCrcyCnvTotalTaxAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe total tax amount value in functional currency. Available in API version 66.0 and later. |
| FuncCrcyCnvChargeAmount | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe charge amount value in functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the debit memo line amounts is converted into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the debit memo line amounts into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ISO code of the functional currency. Available in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a debit memo address record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a debit memo address record. If this value is null, it’s possible that the user only accessed the debit memo address record or a related list view (LastReferencedDate), but not viewed the debit memo address record itself. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity accounting period record that’s related to the debit memo line.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity record that’s related to the debit memo line.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionAn auto-generated name assigned to the debit memo line. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product or service being debited in the debit memo line.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID associated with the debit memo line record. The record ID is an asset, invoice line, contract, or refund record.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToAsset, Contract, InvoiceLine, Refund, Credit Memo Line |
| ShippingAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe shipping address record that’s related to the debit memo line.This field is a relationship field.Relationship NameShippingAddressRefers ToDebitMemoAddress |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the debit memo line that determines which billing cycle it must be associated with. |
| TaxTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the tax treatment record that’s related to the debit memo line.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DebitMemoLineFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DebitMemoLineHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- DebitMemoLineFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- DebitMemoLineHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
