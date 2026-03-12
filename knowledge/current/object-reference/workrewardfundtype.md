---
title: "WorkRewardFundType"
domain: object-reference
topic: workrewardfundtype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.836Z
estimatedTokens: 1264
keywords: [WorkRewardFundType, WorkRewardFund, Calls, Associated, Objects]
---

# WorkRewardFundType

> Represents the type of WorkRewardFund
   object.

# WorkRewardFundType

Represents the type of WorkRewardFund object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| CreditSystem | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe credit system that is used by the WorkRewardFundType object (gift codes or points). If points are selected, the reward message will not consider the CurrencyCode field. |
| CurrencyCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency code of the WorkRewardFundType |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the WorkRewardFundType is active and available in the UI |
| IsPredefined | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the WorkRewardFundType is predefined (true) or not (false) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this WorkRewardFundType. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this WorkRewardFundType. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the WorkRewardFundType |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the WorkRewardFundType owner |
| RedemptionDisclaimer | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe redemption disclaimer text for the WorkRewardFundType |
| RedemptionInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRedemption text for the WorkRewardFundType |
| RedemptionUrl | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe URL that’s linked to the redemption |
| UploadCodeColumn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe column where the reward code is contained in the CSV file. The upload uses the second value by default. |
| UploadValueColumn | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe column where the reward value is contained in the CSV file. The upload uses the third column by default. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkRewardFundTypeFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkRewardFundTypeHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkRewardFundTypeOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkRewardFundTypeShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkRewardFundTypeFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkRewardFundTypeHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkRewardFundTypeOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkRewardFundTypeShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
