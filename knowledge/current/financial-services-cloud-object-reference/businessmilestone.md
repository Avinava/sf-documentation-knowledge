---
title: "BusinessMilestone"
domain: financial-services-cloud-object-reference
topic: businessmilestone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.657Z
estimatedTokens: 1170
keywords: [BusinessMilestone, milestones, business, acquisition, market, listing, expansion, API, version, 47.0, later, Calls, Associated, Objects]
---

# BusinessMilestone

> Represents the milestones of a business, such as acquisition, market
			listing, and expansion. This object is available in API version 47.0 and
		later.

# BusinessMilestone

Represents the milestones of a business, such as acquisition, market listing, and expansion. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the business milestone expired. |
| ExpirationDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason why the business milestone expired. |
| IsExpired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the business milestone has expired. The default value is False. |
| IsTentative | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the exact date of the business milestone is not known. The default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MilestoneDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date on which the business milestone occurred. |
| MilestoneDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the business milestone. |
| MilestoneSiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the business milestone occurred. For example, the location where a business deal was won. |
| MilestoneType | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionThe type of the business milestone.Possible values are:AwardBankruptcyExecutive ChangeExpansionIncorporationMarket ListingMerger & AcquisitionNew FundingNew PartnershipNew Product Launch |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionAn auto-generated number assigned to this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| PrimaryAccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe primary business account this business milestone is related to. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. This field is unique within your organization. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusinessMilestoneChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BusinessMilestoneFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BusinessMilestoneHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BusinessMilestoneChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- BusinessMilestoneFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- BusinessMilestoneHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
