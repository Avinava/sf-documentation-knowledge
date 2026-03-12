---
title: "BusinessMilestone"
domain: psc-api
topic: businessmilestone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.704Z
estimatedTokens: 1111
keywords: [BusinessMilestone, milestones, business, acquisition, market, listing, expansion, Calls, Associated, Objects]
---

# BusinessMilestone

> Represents the milestones of a business, such as acquisition, market
			listing, and expansion.

# BusinessMilestone

Represents the milestones of a business, such as acquisition, market listing, and expansion.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), , getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the business milestone expired. |
| ExpirationDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason why the business milestone expired. |
| IsExpired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the business milestone has expired. The default value is False. |
| IsTentative | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the exact date of the business milestone is not known. The default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MilestoneDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date on which the business milestone occurred. |
| MilestoneDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the business milestone. |
| MilestoneSiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the business milestone occurred. For example, the location where a business deal was won. |
| MilestoneType | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionRequired. The type of the business milestone.Possible values are:AwardBankruptcyExecutive ChangeExpansionIncorporationMarket ListingMerger & AcquisitionNew FundingNew PartnershipNew Product Launch |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. An auto-generated number assigned to this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| PrimaryAccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The primary business account this business milestone is related to. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. This field is unique within your organization. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusinessMilestoneFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BusinessMilestoneHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BusinessMilestoneOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BusinessMilestoneShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BusinessMilestoneFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BusinessMilestoneHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BusinessMilestoneOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BusinessMilestoneShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
