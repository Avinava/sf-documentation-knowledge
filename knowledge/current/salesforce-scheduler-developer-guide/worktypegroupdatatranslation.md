---
title: "WorkTypeGroupDataTranslation"
domain: salesforce-scheduler-developer-guide
topic: worktypegroupdatatranslation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.925Z
estimatedTokens: 646
keywords: [WorkTypeGroupDataTranslation, translated, data, stored, WorkTypeGroup, record’s, API, version, 54.0, later, Calls, Special, Access, Rules, Usage]
---

# WorkTypeGroupDataTranslation

> Represents the translated values of the data stored within a WorkTypeGroup record’s fields. This object is available in API version 54.0 and
    later.

# WorkTypeGroupDataTranslation

Represents the translated values of the data stored within a [WorkTypeGroup](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_worktypegroup.htm "Represents a grouping of work types used to categorize types of appointments available in Salesforce Scheduler. This object is available in API version 45.0 and later.") record’s fields. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Performance, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable,UpdateDescriptionThe translated value for the WorkTypeGroup description. |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the translation is out-of-date (true) or current (false). A translation is out-of-date if the parent WorkTypeGroup record is updated after the last translation was filed. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language for these translated values. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe translated value for the WorkTypeGroup record name. This field is required to translate the text in other fields. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record ID of the WorkTypeGroup associated with the data that is being translated.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToWorkTypeGroup |

## Usage

Use this object to translate the data stored in a WorkTypeGroup record into the different languages supported by Salesforce. If data translation is enabled for custom fields on the WorkTypeGroup object, additional WorkTypeGroupDataTranslation fields exist for translating the data contained within those fields.

You can’t use a custom external id field in an upsert call for a WorkTypeGroupDataTranslation object.

#### See Also

-   [*Salesforce Help*: Manage Objects’ Data Translations](https://help.salesforce.com/s/articleView?id=platform.ls_manage_data_translations.htm&type=5&language=en_US)

## Related Topics

- WorkTypeGroup (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_worktypegroup.htm)
