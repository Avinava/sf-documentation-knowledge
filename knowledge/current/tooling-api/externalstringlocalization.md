---
title: "ExternalStringLocalization"
domain: tooling-api
topic: externalstringlocalization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.911Z
keywords: [ExternalStringLocalization, Supported, SOAP, API, Calls, REST, HTTP, Methods, Special, Access, Rules, Limitations, Fields]
---

# ExternalStringLocalization

# ExternalStringLocalization

Represents the translation of custom labels for a UI component represented by the [ExternalString](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_externalstring.htm "Represents a custom label for a translatable UI component. Includes access to the associated label in the Metadata API. Available in API version 38.0 and later.") object. This object is available in API version 49.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

DELETE, GET, PATCH, POST

## Special Access Rules

-   Your organization must be using Professional, Enterprise, Performance, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission.

## Limitations

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| ExternalStringId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ExternalString associated with the custom label that is being translated. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language for this translated text.NoteYou can’t change the language of an existing ExternalString. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package of which the custom label is a part. |
| Value | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionThe translated string value, limited to 32,000 characters or 96,000 bytes of data, up to the length of the translated string. |