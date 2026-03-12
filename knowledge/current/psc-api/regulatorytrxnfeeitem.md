---
title: "RegulatoryTrxnFeeItem"
domain: psc-api
topic: regulatorytrxnfeeitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.498Z
estimatedTokens: 559
keywords: [RegulatoryTrxnFeeItem, storage, specific, fee, items, associated, regulatory, transaction, fees, API, version, 51.0, later, Calls, Objects]
---

# RegulatoryTrxnFeeItem

> Represents the storage of specific fee items associated with your regulatory
      transaction fees. This object is available in API version 51.0 and later.

# RegulatoryTrxnFeeItem

Represents the storage of specific fee items associated with your regulatory transaction fees. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalculationInfo | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe basis for calculating the fee for a line item. For example, when an extra fee is charged, this field provides reasons for the charge. |
| Comments | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe additional details about a line item. |
| FeeAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe fee to be paid for a line item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date that a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date that a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the line item such as an inspection fee or an extra fee. |
| RegulatoryTrxnFeeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe regulatory transaction fee associated with the line item. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[RegulatoryTrxnFeeItemFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[RegulatoryTrxnFeeItemHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- RegulatoryTrxnFeeItemFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RegulatoryTrxnFeeItemHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
