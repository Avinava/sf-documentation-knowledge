---
title: "PlanBenefitItem"
domain: health-cloud-object-reference
topic: planbenefititem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.849Z
estimatedTokens: 1768
keywords: [PlanBenefitItem, benefit, under, purchaser’s, plan, offered, their, members, Calls, Associated, Objects]
---

# PlanBenefitItem

> Represents the details of a benefit available under a purchaser’s
			plan that is offered to their members.

# PlanBenefitItem

Represents the details of a benefit available under a purchaser’s plan that is offered to their members.

## Supported Calls

create(),  delete(),  describeLayout(),  describeSObjects(),  getDeleted(),  getUpdated(),  query(),  retrieve(),  search(),  undelete(),  update(),  upsert()

## Fields

| Field Name | Details |
| --- | --- |
| BenefitCategory | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the benefit category this item belongs to. |
| CoverageLevel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the level of coverage provided. |
| FrequencyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency type of the plan benefit item associated with the home healthcare visit.Possible values are:DailyFortnightlyMonthlyQuarterlyWeeklyYearlyThis field is available in API version 66.0 and later with the Home Health add-on license. |
| InNetworkCoverage | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount available to contribute towards treatment costs for each treatment undertaken by the health plan’s preferred providers. |
| IsInPlanNetwork | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the benefit is only available in the plan network. |
| ItemCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the plan benefit item.This field is a polymorphic relationship field.This field is available in API version 64.0 and later.Relationship NameItemCodeRefers ToCodeSet, CodeSetBundle |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of this benefit item. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about this benefit item. |
| OutofNetworkCoverage | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount available to contribute towards treatment costs for each treatment undertaken by non-preferred providers. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PauthRequirementEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which preauthorization for the plan benefit item is required or not.This field is available in API version 64.0 and later. |
| PauthRequirementStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date for which preauthorization for the plan benefit item is required or not.This field is available in API version 64.0 and later. |
| PlanBenefitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the benefit this item belongs to. |
| PreauthorizationTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code which represents the type of preauthorization that the plan benefit item requires.This field is a relationship field.This field is available in API version 64.0 and later.Relationship NamePreauthorizationTypeCodeRefers ToCodeSet |
| ServiceType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of service this plan benefit item provides for. |
| ServiceTypeCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code for the type of service this plan benefit item provides for. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this benefits item record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this benefits item record on its source system. |
| SourceSystemModified | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this benefits item was last updated from the source system. |
| TimePeriod | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the period during which services under this plan benefit item are to be rendered or continued. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PlanBenefitItemChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[PlanBenefitItemFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PlanBenefitItemHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PlanBenefitItemOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PlanBenefitItemShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PlanBenefitItemChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PlanBenefitItemFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PlanBenefitItemHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PlanBenefitItemOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PlanBenefitItemShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
