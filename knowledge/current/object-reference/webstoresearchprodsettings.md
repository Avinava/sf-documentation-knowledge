---
title: "WebStoreSearchProdSettings"
domain: object-reference
topic: webstoresearchprodsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.479Z
estimatedTokens: 603
keywords: [WebStoreSearchProdSettings, Search, settings, WebStore, product, API, version, 47.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# WebStoreSearchProdSettings

> Search settings for a WebStore product search. This object is available
      in API version 47.0 and later.

# WebStoreSearchProdSettings

Search settings for a WebStore product search. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You must have a B2B Commerce or D2C Commerce commerce license to create a web store.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code for the store’s currency.The default value is USD. Possible values are:USD—U.S. DollarThe default value is USD. |
| IsExcludedFromSearch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the product is excluded from searches.The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the search settings for the WebStore product search. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the product to search.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| WebStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Webstore to search.This field is a relationship field.Relationship NameWebStoreRelationship TypeLookupRefers ToWebStore |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WebStoreSearchProdSettingsChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- WebStoreSearchProdSettingsChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
