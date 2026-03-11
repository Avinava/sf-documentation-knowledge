---
title: "ResourceAbsence"
domain: field-service
topic: resourceabsence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.826Z
keywords: [ResourceAbsence, Supported, Calls, Special, Access, Rules, Fields, Usage, Tip, Associated, Objects]
---

# ResourceAbsence

# ResourceAbsence

Represents a time period in which a service resource is unavailable to work in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service or Workforce Engagement must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AbsenceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read only) An auto-generated number identifying the absence. |
| Address | TypeaddressPropertiesFilterDescriptionThe compound form of the address associated with the absence. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address associated with the absence. Maximum length is 40 characters. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address associated with the absence. Maximum length is 80 characters. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the absence. |
| End | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the absence ends. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. Usually provided by a geocoding service based on the address’s latitude and longitude coordinates.NoteThis field is available in the API only. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource absence was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource absence was last viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address associated with the absence. Acceptable values are numbers between –90 and 90 with up to 15 decimal places.NoteThis field is available in the API only. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address associated with the absence. Acceptable values are numbers between –180 and 180 with up to 15 decimal places.NoteThis field is available in the API only. |
| Postal Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address associated with the absence. Maximum length is 20 characters. |
| ResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe absent service resource.This is a relationship field.Relationship NameResourceRelationship TypeLookupRefers ToServiceResource |
| Start | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the absence begins. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address associated with the absence. Maximum length is 80 characters. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street number and name of the address associated with the absence. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe type of absence: Meeting, Training, Medical, or Vacation. The default value is Vacation. You can add custom values if needed, but the name Break is reserved for the Field Service managed package. |

## Usage

Resource absences you define periods of time when a service resource is unavailable to work. Unless you’re using the Field Service managed package, service resources can still be assigned to appointments that conflict with their absences.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=field_service_dev)

#### Tip

Create a trigger that sends an approval request to a supervisor when a service resource creates an absence.

If you’re not using the Field Service managed package, a calendar view isn’t available for individual service resources.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ResourceAbsenceChangeEvent (API version 48.0)

Change events are available for the object.

ResourceAbsenceFeed

Feed tracking is available for the object.

ResourceAbsenceHistory

History is available for tracked fields of the object.