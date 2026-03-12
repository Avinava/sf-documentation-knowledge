---
title: "WebStoreTemplate"
domain: tooling-api
topic: webstoretemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.187Z
estimatedTokens: 2603
keywords: [WebStoreTemplate, configuration, creating, commerce, stores, API, version, 49.0, later, SOAP, Calls, REST, Special, Access, Rules]
---

# WebStoreTemplate

> Represents a configuration for creating commerce stores. This object is
      available in API version 49.0 and later.

# WebStoreTemplate

Represents a configuration for creating commerce stores. This object is available in API version 49.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Supported REST API Methods

DELETE, GET, HEAD, POST, Query

## Special Access Rules

A B2B Commerce or D2C Commerce license and access to Commerce objects is required.

## Fields

| Field | Details |
| --- | --- |
| CheckoutTimeToLive | TypeintPropertiesFilter, Group, Nillable, SortDescriptionAmount of time in minutes that a checkout stays active and doesn’t expire. If you use a Null value, your checkout never expires. If you use a 0 value, checkout is disabled. This field is available in API version 50.0 and later. |
| CheckoutValidAfterDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionA timestamp in the default server timezone (GMT). All checkouts that start before this date are considered expired. A Null value means that all checkouts are valid. Example format: 2020-07-14T14:27:00.000Z. This field is available in API version 50.0 and later. |
| Country | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionTwo-digit ISO code of the store's country. Purchases can be shipped only to the country assigned to the store. Valid for only D2C stores. This field is available in API version 56.0 and later. |
| DefaultCurrency | TypestringPropertiesFilter, Group, SortDescriptionThe template’s default currency setting for new records. |
| DefaultLanguage | TypestringPropertiesFilter, Group, SortDescriptionRequired. The template’s default language setting for new records. |
| DefaultTaxLocaleType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The template’s default tax type for your webstore. Possible values include:GrossNetThis field is available in API version 55.0 and later. |
| Description | TypetextareaPropertiesNillableDescriptionThe description of the template. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated WebStoreTemplate in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| GuestCartTimeToLive | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe time that a guest cart is to remain valid before it expires. The default value is 168 hours (7 days), and the maximum value is 720 hours (30 days). This field is available in API version 52.0 and later. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe language of the WebStoreTemplate. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the WebStoreTemplate. |
| MaxValuesPerFacet | TypeintPropertiesFilter, Group, Nillable, SortDescriptionMaximum number of values that can be added to a facet. |
| Metadata | TypeWebStoreTemplatePropertiesCreate, Nillable, UpdateDescriptionThe metadata for the WebStoreTemplate. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| OptionsAutoFacetingEnabled | TypebooleanPropertiesFilterDescriptionIf enabled (True), the most relevant search facets are automatically returned, in addition to the configured search facets, in the product search results. If disabled (False), only the configured search facets are returned. The default is False. See Add Product Search Filters (Facets) for more information. This field is available in API version 50.0 or later. |
| OptionsCartAsyncProcessingEnabled | TypebooleanPropertiesFilterDescriptionIndicates whether add-to-cart requests are processed asynchronously (True) or not (False). The default value is True. This field is available in API version 59.0 or later. |
| OptionsCartCalculateEnabled | TypebooleanPropertiesFilterDescriptionIndicates whether the cart calculate extension is enabled (True) or not (False). The default value is False.This field is available in API version 59.0 or later. |
| OptionsCartToOrderAutoCustomFieldMapping | TypebooleanPropertiesFilterDescriptionIndicates whether custom field mapping for cart and order objects is enabled (True) or not (False). The default value is True.This field is available in API version 57.0 or later. |
| OptionsCommerceEinsteinActivitiesTracked | TypebooleanPropertiesFilterDescriptionIndicates whether Commerce Einstein activities tracking is enabled (true) or not (false). |
| OptionsCommerceEinsteinDeployed | TypebooleanPropertiesFilterDescriptionIndicates whether Commerce Einstein is deployed (true) or not (false). |
| OptionsDuplicateCartItemsEnabled | TypebooleanPropertiesFilterDescriptionIndicates whether a cart can include multiple items with the same product ID (True) or not (False). The default value is False. This field is available in API version 59.0 or later. |
| OptionsGuestBrowsingEnabled | TypebooleanPropertiesFilterDescriptionIndicates whether guest browsing is enabled for this store. Set the option to True to allow guest buyers access to products in the store. |
| OptionsGuestCartEnabled | TypebooleanPropertiesFilterDescriptionRequired. Indicates whether guest cart access is enabled for a store created with an LWR template. Set the option to True to allow guest buyers access to products in the store. This field is available in API version 58.0 and later. |
| OptionsGuestCheckoutEnabled | TypebooleanPropertiesFilterDescriptionRequired. Indicates whether guest checkout access is enabled for a store created with an LWR template. Set the option to True to allow guest buyers access to products in the store. This field is available in API version 58.0 and later. |
| OptionsPreserveGuestCartEnabled | TypebooleanPropertiesFilterDescriptionRequired. Indicates whether cart contents are preserved when a guest logs in to the store. Set the option to True to preserve guest carts. This field is available in API version 60.0 and later. |
| OptionsSkipAdditionalEntitlementCheckForSearch | TypebooleanPropertiesFilterDescriptionBy default, user entitlement checks are run as part of a search index rebuild and again when product search results are returned. Skips the second check to promote faster search performance. Set the option to True to skip additional entitlement checks on a search. This field is available in API version 52.0 and later. |
| OptionsSkuDetectionEnabled | TypebooleanPropertiesFilterDescriptionIndicates whether SKU detection is enabled (true) or not (false). |
| OptionsSplitShipmentEnabled | TypebooleanPropertiesFilterDescriptionRequired. Indicates whether split shipments are enabled (true) or not (false). |
| OrderActivationStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStatus of the order. Possible values include:ActivatedDraft |
| OrderLifeCycleType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe order life cycle type. Possible values include:MANAGEDUNMANAGED |
| PaginationSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of results displayed per search results page. |
| PricingStrategy | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The price selected to display to buyers. Possible values include:LowestPricePriorityThe default value is LowestPrice. |
| ProductGrouping | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionDetermines whether product variations are listed individually in search results or are represented by the parent product, which links to its children. Possible values are:NoGrouping—Variations are listed individually in search results.VariationParent—The parent product is returned in search results with a link to its children.The default value is VariationParent. This field is available in API version 52.0 and later. |
| SupportedCurrencies | TypetextareaPropertiesDescriptionCurrencies supported for store template. |
| SupportedLanguages | TypetextareaPropertiesDescriptionRequired. Languages supported for store template. |
| SupportedShipToCountries | TypetextareaPropertiesNillableDescriptionCountries that a store created from the template can ship to. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired.Possible values are:B2BB2CB2CEOMSThe default value is B2B. |
