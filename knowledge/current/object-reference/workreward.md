---
title: "WorkReward"
domain: object-reference
topic: workreward
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.821Z
estimatedTokens: 926
keywords: [WorkReward, store, reward, codes, tied, Fund, Funds, least, record, Calls, Special, Access, Rules, Additional, Considerations]
---

# WorkReward

> Used to store reward codes tied to a Reward Fund. Reward Funds must
			have at least one WorkReward
		record.

# WorkReward

Used to store reward codes tied to a Reward Fund. Reward Funds must have at least one WorkReward record.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You must have the Reward permission enabled in order to use the Rewards feature, including WorkRewardFund and WorkReward.

## Additional Considerations and Related Objects

WorkReward is a lookup to WorkRewardFund. WorkRewardFund must have at least one WorkReward record to be available for use. Each WorkBadge record with a RewardId indicates a reward badge given to a Recipient.

## Fields

| Field Name | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents a singe reward code tied to a RewardFundId. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRepresents the User ID of Owner of WorkReward record |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce User ID for User associated with this WorkReward record. |
| RedemptionDisclaimer | TypetextareaPropertiesNillableDescriptionThe disclaimer information about the WorkReward. |
| RedemptionInfo | TypetextareaPropertiesNillableDescriptionThe instructions for redeeming the WorkReward. |
| RedemptionUrl | TypetextareaPropertiesNillableDescriptionThe URL for redeeming the WorkReward. |
| RewardFundId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSalesforce unique ID for WorkRewardFund record that is associated with WorkReward record. |
| RewardFundTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSalesforce unique ID of the WorkRewardFundType associated with the WorkReward. |
| Value | TypedoublePropertiesFilter, Nillable, SortDescriptionThe value of the WorkReward. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkRewardHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkRewardOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkRewardShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkRewardHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkRewardOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkRewardShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
