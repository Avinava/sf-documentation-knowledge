---
title: "Commerce: Web Store Mapping"
domain: data-cloud
topic: commerce-web-store-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.308Z
estimatedTokens: 257
keywords: [Commerce, Web, Store, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud., represents, Direct-to-Consumer]
---

# Commerce: Web Store Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Web Store data represents a Direct-to-Consumer
         (D2C) commerce store selling products to the public.

# Commerce: Web Store Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Web Store data represents a Direct-to-Consumer (D2C) commerce store selling products to the public.

## DLO to DMO Mapping

These data mappings relate to the WebStore object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | Webstore | id |
| Name | String | Webstore | Name |
| CurrencylsoCode | picklist | Webstore | CurrencyId |
| Description | textarea | Webstore | Description |
| Type | Picklist | Webstore | WebStoreTypeId |
| DefaultLanguage | Picklist | Webstore | DefaultLanguageId |
| SupportedLanguages | textarea | Webstore | SupportedLanguagesText |
| SupportedCurrencies | textarea | Webstore | SupportedCurrenciesText |
| OptionsGuestBrowsingEnabled | boolean | Webstore | IsGuestBrowsingEnabled |
