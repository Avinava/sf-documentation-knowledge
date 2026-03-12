---
title: "WebStore"
domain: object-reference
topic: webstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.437Z
estimatedTokens: 2871
keywords: [WebStore, B2B, D2C, store, API, version, 49.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# WebStore

> Represents a B2B or D2C store. This object is available in API
		version 49.0 and later.

# WebStore

Represents a B2B or D2C store. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You must:

-   Have CRUD read permission to access this object
-   Be a Salesforce admin with CRUD create permission to create a new record in this object

## Fields

| Field | Details |
| --- | --- |
| CheckoutTimeToLive | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionAmount of time in minutes that a B2B checkout stays active and doesn’t expire. If you use a Null value, your checkout never expires. If you use a 0 value, checkout is disabled. This field is available in API version 50.0 and later. |
| CheckoutValidAfterDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA timestamp in the default server timezone (GMT). All B2B checkouts that start before this date are considered expired. A Null value means that all checkouts are valid. Example format: 2020-07-14T14:27:00.000Z. This field is available in API version 50.0 and later. |
| Country | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionTwo-digit ISO code of the store's country. Purchases can be shipped only to the country assigned to the store. This field is available in API version 55.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe default value is USD. Possible values are:USD—U.S. Dollar |
| DefaultLanguage | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe primary supported language for your store.Possible values include:da— Danishde— Germanen_US— Englishes— Spanishen_MX— Spanish (Mexico)fi— Finnishfr— Frenchit— Italianja— Japaneseko— Koreannl_NL— Dutchno— Norwegianpt_BR— Portuguese (Brazil)ru— Russiansv— Swedishth— Thaizh_CN— Chinese (Simplified)zh_TW— Chinese (Traditional) |
| DefaultTaxLocaleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionTax type of the store. This field is available in API version 55.0 and later.Possible values include:Gross— Prices include taxNet— Prices don't include tax |
| DefaultTaxPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default tax policy for the store. This field is a relationship field. This field is available in API version 56.0 and later.Relationship NameDefaultTaxPolicyRelationship TypeLookupRefers ToTaxPolicy |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the store. |
| ExternalReference | TypetextareaPropertiesNillableDescriptionIdentifies the instance of B2C Commerce. Format is <<SiteId>>@<<InstanceId>>. This field is available in API version 54.0 and later. |
| GuestBuyerProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the GuestBuyerProfile associated with the store. GuestBuyerProfile determines what buyer groups are part of the profile. The guest buyer groups then determine the entitlements and pricing of products for the guest buyer. |
| GuestCartTimeToLive | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe time that a guest cart is to remain valid before it expires. The default value is 168 hours (7 days), and the maximum value is 720 hours (30 days). This field is available in API version 52.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced and not viewed directly. |
| LocationId | TypereferencePropertiesFilter, Group, Nillible, SortDescriptionThe location associated with the address. |
| MaxValuesPerFacet | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of values that can be added to a facet. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the catalog. |
| OptionsAutoFacetingEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf enabled (True), the most relevant search facets are automatically returned, in addition to the configured search facets, in the product search results. If disabled (False), only the configured search facets are returned. The default is False.See Add Product Search Filters (Facets).for more information. This field is available in API version 50.0 or later. |
| OptionsCartAsyncProcessingEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether add-to-cart requests are processed asynchronously (True) or not (False). The default value is True. This field is available in API version 59.0 or later. |
| OptionsCartCalculateEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the cart calculate extension is enabled (True) or not (False). The default value is False.This field is available in API version 59.0 or later. |
| OptionsCartToOrderAutoCustomFieldMapping | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether custom field mapping for cart and order objects is enabled (True) or not (False). The default value is True.This field is available in API version 57.0 or later. |
| OptionsDuplicateCartItemsEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether a cart can include multiple items with the same product ID (True) or not (False). The default value is False.This field is available in API version 59.0 or later. |
| OptionsGuestBrowsingEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether guest browsing is enabled for this store. Set the option to True to allow guest buyers access to products in the store. |
| OptionsGuestCartEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether guest cart access is enabled for a store created with an LWR template. Set the option to True to allow guest buyers access to products in the store.This field is available in API version 58.0 and later. |
| OptionsGuestCheckoutEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether guest checkout access is enabled for a store created with an LWR template. Set the option to True to allow guest buyers access to products in the store.This field is available in API version 58.0 and later. |
| OptionsPreserveGuestCartEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether cart contents are preserved when a guest logs in to the store. Set the option to True to preserve guest carts.This field is available in API version 60.0 and later. |
| OptionsSkipAdditionalEntitlementCheckForSearch | TypebooleanPropertiesCreate, Filter, UpdateDescriptionBy default, user entitlement checks are run as part of a search index rebuild and again when product search results are returned. Skips the second check to promote faster search performance. Set the option to True to skip additional entitlement checks on a search. This field is available in API version 52.0 and later. |
| OrderActivationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the order. This field is available in API version 55.0 and later.Possible values are:ActivatedDraft |
| OrderLifeCycleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether order summaries are processed with Order Management features:Managed—Unmanaged—This field is available in API version 55.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the owner of the store. This field is available in API 53.0 or later.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaginationSize | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDimensions of the page. |
| PricingStrategy | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:LowestPrice— Best PricePriority— Priority Price.The default value is LowestPrice. |
| ProductGrouping | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines whether product variations are listed individually in search results or are represented by the parent product, which links to its children. Possible values are:NoGrouping—Variations are listed individually in search results.VariationParent—The parent product is returned in search results with a link to its children.The default value is VariationParent.This field is available in API version 52.0 and later. |
| SortByPriceBookId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the price book used for the sorting rule. This field is available in API version 55.0 and later.This is a relationship field.Relationship NameSortByPriceBookRelationship TypeLookupRefers ToPricebook2 |
| StrikethroughPricebookId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the strikethrough price book. |
| SupportedCurrencies | TypetextareaPropertiesCreate, Defaulted on create, Nillable, UpdateDescriptionCurrencies supported in the store. |
| SupportedLanguages | TypetextareaPropertiesCreate, Defaulted on create, Nillable, UpdateDescriptionLanguages supported in the store. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionType of store that can be created.Possible values are:B2BB2CB2CEOMSThe default value is B2B. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WebStoreEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

#### See Also

-   [WebStoreNetwork](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorenetwork.htm "Represents the relationship between a web store and an experience site. This object is available in API version 49.0 and later.")

## Related Topics

- WebStoreEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WebStoreNetwork (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorenetwork.htm)
