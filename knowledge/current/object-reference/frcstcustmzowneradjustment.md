---
title: "FrcstCustmzOwnerAdjustment"
domain: object-reference
topic: frcstcustmzowneradjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.800Z
estimatedTokens: 1282
keywords: [FrcstCustmzOwnerAdjustment, individual, forecast, user’s, adjustment, their, own, consumption, API, version, 63.0, later, different, ForecastingOwnerAdjustment, users’]
---

# FrcstCustmzOwnerAdjustment

> Represents an individual forecast user’s adjustment of their own consumption
         forecast.  Available in API version 63.0 and later. This object is different from the
      ForecastingOwnerAdjustment object, which represents users’ adjustments of their pipeline
      forecasts.

# FrcstCustmzOwnerAdjustment

Represents an individual forecast user’s adjustment of their own consumption forecast. Available in API version 63.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents users’ adjustments of their pipeline forecasts.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue amount of an individual forecast item, after an adjustment. |
| AdjustedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity amount of an individual forecast item, after an adjustment. |
| AdjustmentNote | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA text note providing information about the adjustment. The maximum length is 255 characters.This field doesn’t appear in reports. |
| CustomDimension | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the additional dimension of the forecasting adjustment. For example, account ID, use case ID.Any data imported from an external source must be exactly 15 characters. |
| ForecastingCustomCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the forecasting custom category.This field is a relationship field.Relationship NameForecastingCustomCategoryRefers ToForecastingCustomCategory |
| ForecastingTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the related forecasting type.This field is a relationship field.Relationship NameForecastingTypeRefers ToForecastingType |
| IsAmount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a revenue amount. If false, IsQuantity must be set to true.The default value is false. |
| IsQuantity | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the adjustment is made in a quantity amount. If false, IsAmount must be set to true.The default value is false. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the forecast owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionPeriod ID for the adjustment.This field is a relationship field.Relationship NamePeriodRefers ToPeriod |
| Territory2Id | TypereferencePropertiesReserved for future use.DescriptionReserved for future use. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FrcstCustmzOwnerAdjustmentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FrcstCustmzOwnerAdjustmentFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FrcstCustmzOwnerAdjustmentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FrcstCustmzOwnerAdjustmentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FrcstCustmzOwnerAdjustmentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FrcstCustmzOwnerAdjustmentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- FrcstCustmzOwnerAdjustmentFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- FrcstCustmzOwnerAdjustmentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- FrcstCustmzOwnerAdjustmentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FrcstCustmzOwnerAdjustmentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
