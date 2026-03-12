---
title: "ProductPriceHistoryLog"
domain: revenue-cloud
topic: productpricehistorylog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.176Z
estimatedTokens: 816
keywords: [ProductPriceHistoryLog, Stores, historical, pricing, data, product's, price, range, API, version, 62.0, later, Calls, Associated, Objects]
---

# ProductPriceHistoryLog

> Stores historical pricing data based on the product's price
         range. This object is available in API version 62.0 and later.

# ProductPriceHistoryLog

Stores historical pricing data based on the product's price range. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code for any currency allowed by the organization. Available only for organizations with the multicurrency feature enabled.Valid values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| Date | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the product price history log record is created. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates whether the product price history log has been archived (true) or not (false). This field is read-only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the product price history log. |
| ProductPriceRangeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product price range associated with this product price history log record.This field is a relationship field.Relationship NameProductPriceRangeRelationship TypeMaster-detailRefers ToProductPriceRange (the master object) |
| TrackedPrice | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe price for a product recorded for a particular date. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductPriceHistoryLogFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductPriceHistoryLogHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProductPriceHistoryLogFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductPriceHistoryLogHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
