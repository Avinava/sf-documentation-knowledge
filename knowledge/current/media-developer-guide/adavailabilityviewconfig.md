---
title: "AdAvailabilityViewConfig"
domain: media-developer-guide
topic: adavailabilityviewconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.362Z
estimatedTokens: 857
keywords: [AdAvailabilityViewConfig, configuration, decides, how, Media, Cloud-specific, pages, org, API, version, 59.0, later, Calls, Special, Access]
---

# AdAvailabilityViewConfig

> Represents a configuration that decides how and what type of
         information is displayed on Media Cloud-specific pages in the org. This object is
      available in API version 59.0 and later.

# AdAvailabilityViewConfig

Represents a configuration that decides how and what type of information is displayed on Media Cloud-specific pages in the org. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Media Cloud license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ConfigurationKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe key to the configuration that's used to map the advertisement availability slot in the view. |
| ConfigurationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of configuration that's saved for the availability view.Possible values are:Colour SchemeFilterGeneral Configuration |
| ConfigurationValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value that's used to map the advertisement availability slot in the view. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the configuration is active (true) or not (false) in the availability view.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
|  |  |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of media that's shown in the availability view.Possible values are:DigitalOtherOutdoorPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of ad availability view configuration. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PivotOn | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pivot for the calendar availability view.Possible values are:Ad Space SpecificationMedia Content TitleProduct |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe usage type of the calendar availability.Possible values are:Pricing |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdAvailabilityViewConfigFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdAvailabilityViewConfigHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdAvailabilityViewConfigShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
