---
title: "RecordAlertDataTranslation"
domain: psc-api
topic: recordalertdatatranslation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:34.352Z
estimatedTokens: 469
keywords: [RecordAlertDataTranslation, translated, data, stored, RecordAlert, record’s, API, version, 54.0, later, Calls, Special, Access, Rules, Usage]
---

# RecordAlertDataTranslation

> Represents the translated values of the data stored within a RecordAlert
      record’s fields. This object is available in API version 54.0 and later.

# RecordAlertDataTranslation

Represents the translated values of the data stored within a RecordAlert record’s fields. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Performance, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe translated value for the RecordAlert description. |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the translation is out-of-date (true) or current (false). A translation is out-of-date if the parent RecordAlert record is updated after the last translation was filed. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language for these translated values. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe translated value for the RecordAlert record name. This field is required to translate the text in other fields. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the RecordAlert associated with the data being translated. |

## Usage

Use this object to translate the data stored in a RecordAlert record into the different languages supported by Salesforce. If data translation is enabled for custom fields on the RecordAlert object, additional RecordAlertDataTranslation fields exist for translating the data contained within those fields.
