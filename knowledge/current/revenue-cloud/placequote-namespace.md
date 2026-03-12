---
title: "PlaceQuote Namespace"
domain: revenue-cloud
topic: placequote-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.317Z
estimatedTokens: 966
namespace: PlaceQuote
keywords: [PlaceQuote, provides, classes, create, update, quotes, pricing, preferences, configuration, options., Note]
---

# PlaceQuote Namespace

> The PlaceQuote namespace provides classes and methods
    to create or update quotes with pricing preferences and configuration options.

**Namespace:** `PlaceQuote`

# PlaceQuote Namespace

The PlaceQuote namespace provides classes and methods to create or update quotes with pricing preferences and configuration options.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

This namespace has been deprecated as of API version 63.0. In API version 63.0 and later, use the new [RevSalesTrxn](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSalesTrxn.htm "HTML (New Window)") namespace.

The PlaceQuote namespace includes these classes.

-   **[CatalogRatesPreferenceEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_placequote_CatalogRatesPreferenceEnum.htm)**
    Specifies the rate card entries defined in the catalog that must be fetched for quote line items, with usage-based selling during the quote creation process.
-   **[ConfigurationInputEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_placequote_ConfigurationInputEnum.htm)**
    Specifies the configuration input for the request to place a quote.
-   **[ConfigurationOptionsInput Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_ConfigurationOptionsInput.htm#apex_class_placequote_ConfigurationOptionsInput)**
    Contains methods and properties to set the configuration options for the input to the product configurator.
-   **[GraphRequest Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_GraphRequest.htm#apex_class_placequote_GraphRequest)**
    Contains constructors and properties to set the graph ID and a list of records to be ingested. The list of records is specified in a key-value map format that contains the field values of an order.
-   **[PlaceQuoteException Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteException.htm#apex_class_placequote_PlaceQuoteException)**
    Contains methods to hold the exception details for the place quote request.
-   **[PlaceQuoteResponse Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm#apex_class_placequote_PlaceQuoteResponse)**
    Contains properties to hold the response to the place quote request.
-   **[PlaceQuoteRLMApexProcessor Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteRLMApexProcessor.htm#apex_class_placequote_PlaceQuoteRLMApexProcessor)**
    Contains methods to place a quote with details of the graph request, pricing preferences, and configuration options.
-   **[PricingPreferenceEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_placequote_PricingPreferenceEnum.htm)**
    Specifies the pricing preference during the create quote process.
-   **[RecordResource Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordResource.htm#apex_class_placequote_RecordResource)**
    Contains constructors and properties to create a record object from the field values of a quote.
-   **[RecordWithReferenceRequest Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordWithReferenceRequest.htm#apex_class_placequote_RecordWithReferenceRequest)**
    Contains constructors and properties to associate a record object with a reference identifier.

## Related Topics

- CatalogRatesPreferenceEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_placequote_CatalogRatesPreferenceEnum.htm)
- ConfigurationInputEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_placequote_ConfigurationInputEnum.htm)
- ConfigurationOptionsInput Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_ConfigurationOptionsInput.htm)
- GraphRequest Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_GraphRequest.htm)
- PlaceQuoteException Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteException.htm)
- PlaceQuoteResponse Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm)
- PlaceQuoteRLMApexProcessor Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteRLMApexProcessor.htm)
- PricingPreferenceEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_placequote_PricingPreferenceEnum.htm)
- RecordResource Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordResource.htm)
- RecordWithReferenceRequest Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordWithReferenceRequest.htm)
