---
title: "ServiceResourceDataTranslation"
domain: object-reference
topic: serviceresourcedatatranslation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.908Z
estimatedTokens: 574
keywords: [ServiceResourceDataTranslation, translated, data, stored, ServiceResource, record’s, API, version, 54.0, later, Calls, Special, Access, Rules, Usage]
---

# ServiceResourceDataTranslation

> Represents the translated values of the data stored within a ServiceResource record’s fields. This object is available in API version 54.0 and
    later.

# ServiceResourceDataTranslation

Represents the translated values of the data stored within a [ServiceResource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresource.htm "Represents a service technician or service crew in Field Service and Salesforce Scheduler, or an agent in Workforce Engagement. This object is available in API version 38.0 and later.") record’s fields. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Performance, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe translated value for the ServiceResource description. |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the translation is out-of-date (true) or current (false). A translation is out-of-date if the parent ServiceResource record is updated after the last translation was filed. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language for these translated values. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe translated value for the ServiceResource record name. This field is required to translate the text in other fields. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record ID of the ServiceResource associated with the data that is being translated. |

## Usage

Use this object to translate the data stored in a ServiceResource record into the different languages supported by Salesforce. If data translation is enabled for custom fields on the ServiceResource object, additional ServiceResourceDataTranslation fields exist for translating the data contained within those fields.

You can’t use a custom external id field in an upsert call for a ServiceResourceDataTranslation object.

## Related Topics

- ServiceResource (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_serviceresource.htm)
