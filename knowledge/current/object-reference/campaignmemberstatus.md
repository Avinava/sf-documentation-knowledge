---
title: "CampaignMemberStatus"
domain: object-reference
topic: campaignmemberstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.061Z
estimatedTokens: 914
keywords: [CampaignMemberStatus, member, status, defined, campaign, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# CampaignMemberStatus

> One or more member status values defined for a
  campaign.

# CampaignMemberStatus

One or more member status values defined for a campaign.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

You can't delete a CampaignMemberStatus if that status is designated as the default status or if the status is currently used in a Campaign.

## Fields

| Field | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesFilter, Group, SortDescriptionID of the campaign associated with this member status. |
| HasResponded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this status is equivalent to “Responded” (true) or not (false). Beginning with API version 39.0, at least one CampaignMemberStatus on each campaign must have a hasResponded value of true. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this status is the default status (true) or not (false). Beginning with API version 39.0, there must be a default CampaignMemberStatus defined for every campaign. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| Label | TypestringPropertiesFilter, SortDescriptionLabel for the status in the picklist. Limited to 765 characters. |
| SortOrder | TypeintPropertiesFilter, Group, Sort, UpdateDescriptionUnique number order where this campaign member status appears in the picklist. |

## Usage

Use this object to create picklist items for the member status in a campaign.

This object is defined only for those organizations that have the marketing feature and valid marketing licenses. In addition, the object is accessible only to those users that are enabled as marketing users. If the organization does not have the marketing feature or valid marketing licenses, this object does not appear in a describeGlobal() call, and you can't use describeSObjects() or query() with the CampaignMember object.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CampaignMemberStatusChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 46.0)

Change events are available for the object.

#### See Also

-   [Campaign](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaign.htm "Represents and tracks a marketing campaign, such as a direct mail promotion, webinar, or trade show.")

-   [CampaignMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignmember.htm "The CampaignMember object represents the relationship between a campaign and either a lead or a contact. If the Accounts as Campaign Members setting is enabled in an org, CampaignMember can also represent the relationship between a campaign and an account.")

## Related Topics

- CampaignMemberStatusChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Campaign (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaign.htm)
- CampaignMember (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_campaignmember.htm)
