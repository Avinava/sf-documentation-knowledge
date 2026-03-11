---
title: "WebStoreTemplate"
domain: metadata-api
topic: webstoretemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.368Z
keywords: [WebStoreTemplate, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# WebStoreTemplate

# WebStoreTemplate

Represents a configuration for creating commerce stores.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

WebStoreTemplate components have the suffix .webstoretemplate and are stored in the webstoretemplate folder.

## Version

WebStoreTemplate components are available in API version 49.0 and later.

## Special Access Rules

A B2B Commerce or D2C Commerce license and access to Commerce objects is required.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| autoFacetingEnabled | boolean | Indicates whether auto faceting is enabled (true) or not (false). If enabled (True), the most relevant search facets are automatically returned, in addition to the configured search facets, in the product search results. If disabled (False), only the configured search facets are returned. The default is False. See Add Product Search Filters (Facets) for more information. This field is available in API version 50.0 or later. |
| cartAsyncProcessingEnabled | boolean | Indicates whether add-to-cart requests are processed asynchronously (True) or not (False). The default value is True. This field is available in API version 59.0 or later. |
| cartCalculateEnabled | boolean | Indicates whether the cart calculate extension is enabled (True) or not (False). The default value is False. This field is available in API version 59.0 or later. |
| cartToOrderAutoCustomFieldMapping | boolean | Indicates whether custom field mapping for cart and order objects is enabled (True) or not (False). The default value is True. This field is available in API version 57.0 or later. |
| checkoutTimeToLive | int | Amount of time in minutes that a checkout stays active and doesn’t expire. This field is available in API version 52.0 and later. |
| checkoutValidAfterDate | dateTime | A timestamp in the default server timezone (GMT). All checkouts that start before this date are considered expired. This field is available in API version 52.0 and later. |
| commerceEinsteinActivitiesTracked | boolean | Indicates whether Commerce Einstein activities tracking is enabled (true) or not (false). |
| commerceEinsteinDeployed | boolean | Indicates whether Commerce Einstein is deployed (true) or not (false). |
| country | string | Two-digit ISO code of the store's country. Purchases can be shipped only to the country assigned to the store. Valid for only D2C stores. This field is available in API version 56.0 and later. |
| defaultCurrency | string | The template’s default currency setting for new records. |
| defaultLanguage | string | Required. The template’s default language setting for new records. |
| defaultTaxLocaleType | TaxLocaleType​ (enumeration of type string) | Required. The template’s default tax type for your webstore. Possible values include:AutomaticGrossNet |
| description | string | The description of the template. |
| duplicateCartItemsEnabled | boolean | Indicates whether a cart can include multiple items with the same product ID (True) or not (False). The default value is False. This field is available in API version 59.0 or later. |
| guestBrowsingEnabled | boolean | Indicates whether guest browsing is enabled for this store. Set the option to True to allow guest buyers access to products in the store. |
| guestCartEnabled | boolean | Required. Indicates whether guest cart access is enabled for a store created with an LWR template. Set the option to True to allow guest buyers access to products in the store.This field is available in API version 58.0 and later. |
| guestCheckoutEnabled | boolean | Required. Indicates whether guest checkout access is enabled for a store created with an LWR template. Set the option to True to allow guest buyers access to products in the store.This field is available in API version 58.0 and later. |
| masterLabel | string | Required. The original (untranslated) name of a label. Each translated label is paired with its original untranslated version. |
| maxValuesPerFacet | int | Maximum number of values that can be added to a facet. |
| orderActivationStatus | string | Status of the order. Possible values include:ActivatedDraftThis field is available in API version 55.0 and later. |
| orderLifeCycleType | OrderLifeCycleType​ (enumeration of type string) | The order life cycle type. Possible values include:MANAGEDUNMANAGEDThis field is available in API version 55.0 and later. |
| paginationSize | int | Number of results displayed per search results page. |
| preserveGuestCartEnabled | boolean | Required. Indicates whether cart contents are preserved when a guest logs in to the store. Set the option to True to preserve guest carts.This field is available in API version 60.0 and later. |
| pricingStrategy | PricingStrategy​ (enumeration of type string) | Required. The price selected to display to buyers. Possible values include:LowestPricePriorityThe default value is LowestPrice. |
| productGrouping | ProductGrouping ​ (enumeration of type string) | Determines whether product variations are listed individually in search results or are represented by the parent product, which links to its children. Possible values are:NoGrouping—Variations are listed individually in search results.VariationParent—The parent product is returned in search results with a link to its children.The default value is VariationParent. This field is available in API version 52.0 and later. |
| skipAdditionalEntitlementCheckForSearch | boolean | By default, user entitlement checks are run as part of a search index rebuild and again when product search results are returned. Skips the second check to promote faster search performance. Set the option to True to skip additional entitlement checks on a search. This field is available in API version 52.0 and later. |
| skuDetectionEnabled | boolean | Indicates whether SKU detection is enabled (true) or not (false). |
| splitShipmentEnabled | boolean | Required. Indicates whether split shipments are enabled (true) or not (false). |
| supportedCurrencies | string | Currencies supported for store template. |
| supportedLanguages | string | Required. Languages supported for store template. |
| supportedShipToCountries | string | Countries that a store created from the template can ship to. |
| type | WebStoreType​ (enumeration of type string) | Required. The type of store configuration, B2C, B2B, or B2CE. Default is B2B. |

## Declarative Metadata Sample Definition

The following is an example of a web store template component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").