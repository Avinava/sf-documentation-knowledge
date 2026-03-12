---
title: "WorkRewardFund"
domain: object-reference
topic: workrewardfund
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.827Z
estimatedTokens: 1174
keywords: [WorkRewardFund, Reward, Fund, attributes, Calls, Special, Access, Rules, Additional, Considerations, Objects, Associated]
---

# WorkRewardFund

> Represents a Reward Fund and describes the Reward Fund
			attributes.

# WorkRewardFund

Represents a Reward Fund and describes the Reward Fund attributes.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To use the Rewards feature, including WorkRewardFund and WorkReward, you must have the Reward permission enabled. To create Rewards, the user must have Create on WorkRewardFund, which is not a standard permission.

## Additional Considerations and Related Objects

WorkReward is a lookup to WorkRewardFund. WorkRewardFund must have at least one WorkReward record available. Each WorkBadgeDefinition with a RewardFundId is a “Reward Badge.”

## Fields

| Field Name | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the WorkRewardFund is active (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this WorkRewardFund. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this WorkRewardFund. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the Reward Fund. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSalesforce unique ID of User who is the Owner of the WorkRewardFund record. |
| RewardFundTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSalesforce unique ID of the WorkRewardFundType that is associated with the WorkRewardFund. |
| TotalCodeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal reward codes that are available in the WorkRewardFund. Derived from WorkReward records that are associated with the WorkRewardFund. |
| Type | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRewardType of the WorkRewardFund. Default is Amazon.com. |
| UsedCodeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal reward codes that are used in the WorkRewardFund. Derived from the total assigned WorkReward records that are associated with the WorkRewardFund. |
| Value | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionValue of each of the reward codes in the WorkRewardFund. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkRewardFundFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkRewardFundHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkRewardFundOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkRewardFundShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkRewardFundFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkRewardFundHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkRewardFundOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkRewardFundShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
