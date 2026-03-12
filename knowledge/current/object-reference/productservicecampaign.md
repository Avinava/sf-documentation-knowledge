---
title: "ProductServiceCampaign"
domain: object-reference
topic: productservicecampaign
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.472Z
estimatedTokens: 1356
keywords: [ProductServiceCampaign, activities, performed, product, service, campaign, asset, recall, safety, issues, defects, API, version, 51.0, later]
---

# ProductServiceCampaign

> Represents a set of activities to be performed on a product service campaign
      asset, such as a product recall for safety issues or product defects. This object is
    available in API version 51.0 and later.

# ProductServiceCampaign

Represents a set of activities to be performed on a product service campaign asset, such as a product recall for safety issues or product defects. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the product service campaign. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the product service campaign ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the asset was last modified. The UI label is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the asset was last viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe product service campaign’s owner. By default, the product service campaign owner is the user who created the product service campaign record. The UI label is Product Service Campaign Owner. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the product service campaign.Possible values are:CriticalHighLowMedium |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Product2 associated with this campaign. The UI label is Product. |
| ProductServiceCampaignName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the product service campaign. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the product service campaign starts. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status of the product service campaign. The picklist includes the following values, which can be customized:New—Product service campaign created, but there hasn’t yet been any activity.In Progress—Product service campaign has begun.On Hold—Work is paused.Completed—Work is complete.Cannot Complete—Work couldn’t be completed.Closed—All work and associated activity is complete.Canceled—Work is canceled, typically before any work began. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category that each Status value falls into. The StatusCategory field has eight default values: seven values that are identical to the default Status values, and None for statuses without a status category.If you create custom Status values, you must indicate which category it belongs to. For example, if you create a Waiting for Response value, add it the On Hold category. To learn which processes reference StatusCategory, see How are Status Categories Used? |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of the product service campaign. The picklist includes the following values, which can be customized:Modification—The asset requires an on-site alteration.Recall—The asset must be returned to the manufacturer for modification or upgrade.Service—The asset needs to be serviced.Upgrade—The asset needs updating. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type associated with the product service campaign. A customer uses this field as a guide when setting work type for work orders for the product service campaign. Duration, Duration Type, and required skills. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ProductServiceCampaignFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductServiceCampaignHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductServiceCampaignOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProductServiceCampaignShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductServiceCampaignFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProductServiceCampaignHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ProductServiceCampaignOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProductServiceCampaignShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
