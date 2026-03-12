---
title: "ResourceAbsence"
domain: salesforce-scheduler-developer-guide
topic: resourceabsence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.720Z
estimatedTokens: 674
keywords: [ResourceAbsence, time, period, service, resource, unavailable, work, Salesforce, Scheduler, API, version, 38.0, later, Calls, Special]
---

# ResourceAbsence

> Represents a time period in which a service resource is unavailable to
			work in Salesforce Scheduler. This object is available in API version 38.0 and
		later.

# ResourceAbsence

Represents a time period in which a service resource is unavailable to work in Salesforce Scheduler. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AbsenceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read only) An auto-generated number identifying the absence. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the absence. |
| End | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the absence ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource absence was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource absence was last viewed. |
| ResourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe absent service resource.This is a relationship field.Relationship NameResourceRelationship TypeLookupRefers ToServiceResource |
| Start | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the absence begins. |

## Usage

Resource absences you define periods of time when a service resource is unavailable to work.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_scheduler_developer_guide)

#### Tip

Create a trigger that sends an approval request to a supervisor when a service resource creates an absence.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ResourceAbsenceChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 48.0)

Change events are available for the object.

[ResourceAbsenceFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ResourceAbsenceHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
