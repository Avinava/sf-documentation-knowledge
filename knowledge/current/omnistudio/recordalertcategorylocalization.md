---
title: "RecordAlertCategoryLocalization"
domain: omnistudio
topic: recordalertcategorylocalization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:54.233Z
estimatedTokens: 313
keywords: [RecordAlertCategoryLocalization, Represents, translated, label, RecordAlertCategory, metadata, type., API, version, 54.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# RecordAlertCategoryLocalization

> Represents the translated label of a RecordAlertCategory metadata type.
      This object is available in API version 54.0 and later.

# RecordAlertCategoryLocalization

Represents the translated label of a RecordAlertCategory metadata type. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Performance, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission.

## Fields

| Field | Details |
| --- | --- |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language the RecordAlertCategory label is translated to. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix of the RecordAlertCategory. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the RecordAlertCategory.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToRecordAlertCategory |
| Value | TypetextareaPropertiesCreate, Filter, Sort, UpdateDescriptionThe translated label of the RecordAlertCategory. |
