---
title: "CatalogRatesPreferenceEnum Enum"
domain: revenue-cloud
topic: catalogratespreferenceenum-enum
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:05.191Z
estimatedTokens: 193
keywords: [CatalogRatesPreferenceEnum, Specifies, rate, card, entries, defined, catalog, must, fetched, quote, line, items, usage-based, selling, during, place, sales, transaction, process., Usage]
---

# CatalogRatesPreferenceEnum Enum

> Specifies the rate card entries defined in the catalog that must be fetched for quote
    line items, with usage-based selling during the place sales transaction process.

# CatalogRatesPreferenceEnum Enum

Specifies the rate card entries defined in the catalog that must be fetched for quote line items, with usage-based selling during the place sales transaction process.

## Usage

This enum is available when [Usage Selling](https://help.salesforce.com/s/articleView?id=ind.qocal_set_up_usage_sellling.htm&language=en_US "HTML (New Window)") is enabled.

## Enum Values

The RevSalesTrxn.CatalogRatesPreferenceEnum enum includes these values.

| Value | Description |
| --- | --- |
| Fetch | Retrieves the rate card entries defined in the catalog for quote line items during the quote creation process. |
| Skip | Skips the retrieval of rate card entries for quote line items during the quote creation process. The default value is Skip. |
