---
title: "ServiceTerritoryDataTranslation"
domain: object-reference
topic: serviceterritorydatatranslation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.956Z
estimatedTokens: 580
keywords: [ServiceTerritoryDataTranslation, translated, data, stored, ServiceTerritory, record’s, API, version, 54.0, later, Calls, Special, Access, Rules, Usage]
---

# ServiceTerritoryDataTranslation

> Represents the translated values of the data stored within a ServiceTerritory record’s fields. This object is available in API version 54.0 and
    later.

# ServiceTerritoryDataTranslation

Represents the translated values of the data stored within a [ServiceTerritory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceterritory.htm "Represents a geographic or functional region in which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.") record’s fields. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Performance, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable,UpdateDescriptionThe translated value for the ServiceTerritory description. |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the translation is out-of-date (true) or current (false). A translation is out-of-date if the parent ServiceTerritory record is updated after the last translation was filed. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language for these translated values. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe translated value for the ServiceTerritory record name. This field is required to translate the text in other fields. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record ID of the ServiceTerritory associated with the data that is being translated. |

## Usage

Use this object to translate the data stored in a ServiceTerritory record into the different languages supported by Salesforce. If data translation is enabled for custom fields on the ServiceTerritory object, additional ServiceTerritoryDataTranslation fields exist for translating the data contained within those fields.

You can’t use a custom external id field in an upsert call for a ServiceTerritoryDataTranslation object.

## Related Topics

- ServiceTerritory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceterritory.htm)
