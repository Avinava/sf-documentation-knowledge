---
title: "Promotion"
domain: retail-api
topic: promotion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.138Z
estimatedTokens: 892
keywords: [Promotion, loadPromotionDefaults2, **setPromotionAnchor2**, **setPromotionDates2**, **applyPromotionDateHandling2**, **setPromotionCategories2**, **setPromotionSubAccounts2**, **setPromotionParticipatingCustomers2**, promotional, activities, either, part, campaign, isolated, targeted, promotions, run, retail, stores, API]
---

# Promotion

> Create promotional activities that are either part of a campaign or isolated
      targeted promotions to run at retail stores. This object is available in API version 47.0
    and later.

# Promotion

Create promotional activities that are either part of a campaign or isolated targeted promotions to run at retail stores. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBroad classification of promotions.Possible values are:AdvertisingPersonal SellingPublicitySales Promotion |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the promotion. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of the promotion. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the promotion is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Level | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel at which a promotion is applicable.Possible values are:ProductProduct Category |
| Methods | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMethod of executing a promotion.Possible values are:ContestsCouponsCredit FacilityDiscountsDisplay and ExhibitionExchange OfferFree ServicesGiftsSampling and DemonstrationTrade Show |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identifier for the promotion. |
| Objective | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBusiness objective of the promotion. For example, launching a new product, keeping customers satisfied, or clearing stock. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the promotion record owner. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionStart date of the promotion. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[PromotionChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[PromotionFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[PromotionHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[PromotionShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
DateFrom => Date_From__c
DateThru => Date_Thru__c
CommitDate => Commit_Date__c
PlacementDateFrom => Placement_Date_From__c
PlacementDateThru => Placement_Date_Thru__c
OrderDateFrom => Order_Date_From__c
OrderDateThru => Order_Date_Thru__c
DeliveryDateFrom => Delivery_Date_From__c
DeliveryDateThru => Delivery_Date_Thru__c
```

## Related Topics

- PromotionChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- PromotionFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- PromotionHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- PromotionShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
