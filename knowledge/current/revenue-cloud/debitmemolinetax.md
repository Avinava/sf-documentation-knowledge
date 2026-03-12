---
title: "DebitMemoLineTax"
domain: revenue-cloud
topic: debitmemolinetax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.150Z
estimatedTokens: 1051
keywords: [DebitMemoLineTax, Represents, tax, information, debit, memo, line., API, version, 66.0, later., Important, Supported, Calls, Special, Access, Rules, Fields]
---

# DebitMemoLineTax

> Represents the tax information for a debit memo line. This
      object is available in API version 66.0 and later.

# DebitMemoLineTax

Represents the tax information for a debit memo line. This object is available in API version 66.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

You need Revenue Cloud Billing license and the Tax Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe billing address specified in the parent debit memo line.This field is a relationship field.Relationship NameBillingAddressRefers ToDebitMemoAddress |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The currency ISO code of the corporate currency. |
| DebitMemoLineId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The parent debit memo line that the debit memo tax line is related to.This field is a relationship field.Relationship NameDebitMemoLineRelationship TypeMaster-detailRefers ToDebitMemoLine (the master object) |
| DebitMemoLineTaxNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An auto-generated number that identifies a debit memo line tax. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the debit memo line tax. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe end date of the debit memo line tax that determines which billing cycle it's associated with. |
| JurisdictionTaxCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe code of the jurisdiction that's used to calculate the tax rate for the parent debit memo line. |
| JurisdictionTaxName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user-defined name for the debit memo line tax. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a debit memo line tax record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a debit memo line tax record. If this value is null, it’s possible that the user only accessed the debit memo line tax record or a related list view (LastReferencedDate), but not viewed the debit memo line tax record itself. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe legal entity accounting period record associated with the debit memo line.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe legal entity record associated with the debit memo line.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| ShipFromAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe shipping address specified in the parent debit memo line.This field is a relationship field.Relationship NameShipFromAddressRefers ToDebitMemoAddress |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe start date of the debit memo line tax that determines which billing cycle it's associated with. |
| TaxAmount | TypecurrencyPropertiesFilter, SortDescriptionRequired. The total amount of the debit memo line tax. |
| TaxRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage that's used to calculate tax amount based on the charge amount. |
| TaxTransactionNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe transaction number in the external tax engine that calculated the tax for the parent debit memo line. |
