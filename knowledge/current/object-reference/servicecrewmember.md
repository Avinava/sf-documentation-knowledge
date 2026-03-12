---
title: "ServiceCrewMember"
domain: object-reference
topic: servicecrewmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.831Z
estimatedTokens: 868
keywords: [ServiceCrewMember, technician, service, resource, belongs, crew, Calls, Special, Access, Rules, Associated, Objects]
---

# ServiceCrewMember

> Represents a technician service resource that belongs to a service
			crew.

# ServiceCrewMember

Represents a technician service resource that belongs to a service crew.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last day that the service resource belongs to the crew. You can use this field to track employment dates for contractors. |
| IsLeader | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the member is the crew leader. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service crew member was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service crew member was last viewed. |
| ServiceCrewId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe crew that the service resource belongs to. |
| ServiceCrewMemberNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number identifying the service crew member. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource that belongs to the crew. Only service resources whose resource type is Technician can be added to service crews. |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The day the service resource joins the crew. Service resources can belong to multiple crews as long as their start and end dates don’t overlap. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceCrewMemberChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[ServiceCrewMemberFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ServiceCrewMemberHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ServiceCrewMemberChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ServiceCrewMemberFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ServiceCrewMemberHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
