---
title: "QuoteItemTaxItem"
domain: revenue-cloud
topic: quoteitemtaxitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:44.045Z
estimatedTokens: 504
keywords: [QuoteItemTaxItem, tax, applied, quote, line, item, API, 55.0]
---

> The tax that is applied to a quote line item. This object is available
      in API version 55.0 and later.

# QuoteItemTaxItem

The tax that is applied to a quote line item. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Subscription Management is enabled in your org. This object is also available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe tax amount for the quote line item. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the org.Possible values are:BHD—Bahraini DinarEUR—EuroJPY—Japanese YenUSD—U.S. DollarThe default value is 'USD'. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUser-defined description of the tax. For example, state sales tax or value-added tax (VAT). |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the tax. |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the related quote line item.This is a relationship field.Relationship NameQuoteLineItemRelationship TypeLookupRefers ToQuoteLineItem |
| Rate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIf the tax is a percentage tax, then this field contains the percent value. If the tax is a fixed amount, then this field is null. |
| TaxEffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date used to calculate the tax rate. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionWhether the tax is estimated or calculated by the tax provider.Possible values are:ActualEstimated |
