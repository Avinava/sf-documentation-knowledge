---
title: "CareProgramCampaign"
domain: health-cloud-object-reference
topic: careprogramcampaign
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.398Z
estimatedTokens: 833
keywords: [CareProgramCampaign, relationship, Care, Program, Campaign, junction, admins, associate, campaigns, Calls, Associated, Objects]
---

# CareProgramCampaign

> Represents a relationship between the Care Program object and the Campaign object. This junction object enables admins to associate one or more campaigns to a
		program.

# CareProgramCampaign

Represents a relationship between the Care Program object and the Campaign object. This junction object enables admins to associate one or more campaigns to a program.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(),  getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| CampaignId | TypeLookup(Campaign)PropertiesCreate, Filter, Group, SortDescriptionThe campaign associated to the care program. |
| CareProgram | TypeMaster-Detail(Care Program)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the care program. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionA short name for the care program campaign. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the care program campaign was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the record was sourced. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the care program campaign record. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CareProgramCampaignChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[CareProgramCampaignFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareProgramCampaignHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareProgramCampaignChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareProgramCampaignFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareProgramCampaignHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
