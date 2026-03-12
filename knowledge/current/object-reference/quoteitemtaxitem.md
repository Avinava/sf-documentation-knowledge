---
title: "QuoteItemTaxItem"
domain: object-reference
topic: quoteitemtaxitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.887Z
estimatedTokens: 441
keywords: [QuoteItemTaxItem, tax, applied, quote, line, item, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# QuoteItemTaxItem

> The tax that is applied to a quote line item. This object is available
      in API version 55.0 and later.

# QuoteItemTaxItem

The tax that is applied to a quote line item. This object is available in API version 55.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available if Subscription Management is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, SortDescriptionThe tax amount for the quote line item. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the org.Possible values are:BHD—Bahraini DinarEUR—EuroJPY—Japanese YenUSD—U.S. DollarThe default value is 'USD'. |
| Description | TypetextareaPropertiesNillableDescriptionUser-defined description of the tax. For example, state sales tax or value-added tax (VAT). |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the tax. |
| QuoteLineItemId | TypereferencePropertiesFilter, Group, SortDescriptionID of the related quote line item.This is a relationship field.Relationship NameQuoteLineItemRelationship TypeLookupRefers ToQuoteLineItem |
| Rate | TypepercentPropertiesFilter, Nillable, SortDescriptionIf the tax is a percentage tax, then this field contains the percent value. If the tax is a fixed amount, then this field is null. |
| TaxEffectiveDate | TypedatePropertiesFilter, Group, SortDescriptionThe date used to calculate the tax rate. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionWhether the tax is estimated or calculated by the tax provider.Possible values are:ActualEstimated |
