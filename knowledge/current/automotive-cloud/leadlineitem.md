---
title: "LeadLineItem"
domain: automotive-cloud
topic: leadlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.353Z
estimatedTokens: 1082
keywords: [LeadLineItem, items, vehicles, accessories, parts, lead, interested, API, version, 56.0, later, Calls, Associated, Objects]
---

# LeadLineItem

> Represents items such as vehicles, accessories, and parts that a lead is
         interested in. This object is available in API version 56.0 and later.

# LeadLineItem

Represents items such as vehicles, accessories, and parts that a lead is interested in. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe approval status of the associated product.Possible values are:ApprovedIn ReviewOn HoldRejected |
| AssetIdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the associated product, such as a vehicle identification number or serial number of an accessory. |
| Classification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the classification type of the associated item such as new, used, or refurbished.Possible values are:NewRefurbishedUsed |
| Condition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the condition of the associated item, such as excellent, fair, or unknown.Possible values are:ExcellentFairGoodPoorUnknown |
| InterestType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the lead's interest type such as buying an item, selling an item, leasing an item, and so on.Possible values are:BuyLeaseSellTestDrive—Test DriveTradeIn—Trade-In |
| ItemType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of item that the lead is interested in, such as a vehicle, parts of a vehicle, other accessories, and so on.Possible values are:AccessoryPartServiceVehicle |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent Lead record that's associated with this line item.This field is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the lead line item. |
| PriceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of price, such as quote, offer, or appraisal, associated with the item.Possible values are:AppraisedCost— Appraised CostAskingPrice— Asking PriceInvoiceCost— Invoice CostMSRP— Manufacturer's Suggested Retail PriceOfferPrice— Offer PriceQuotePrice— Quote Price |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Product record associated with this line item.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of units of the item that the lead is interested in. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price per unit of the associated product. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LeadLineItemChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[LeadLineItemFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[LeadLineItemHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
