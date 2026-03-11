---
title: "ExternalString"
domain: tooling-api
topic: externalstring
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.905Z
keywords: [ExternalString, Supported, SOAP, Calls, REST, HTTP, Methods, Limitations, Fields]
---

# ExternalString

# ExternalString

Represents a custom label for a translatable UI component. Includes access to the associated label in the Metadata API. Available in API version 38.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Limitations

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| Category | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText that categorizes the label, limited to 255 characters. Separate each category with a comma. This field can be used in filter criteria when creating custom label list views. |
| IsProtected | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the custom label is protected (true) or not (false). The default value is false . |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe language of the custom label.NoteYou can’t change the language of an existing custom label. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAn easily recognizable internal label to identify this custom label. This description is used in merge fields and is not translated. |
| Name | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe name used in Apex and Visualforce pages to reference the custom label. Names must contain only alphanumeric characters, start with a letter, contain no spaces or double underscores, and be unique from all other labels in your org. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package of which the custom label is a part. |
| Value | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionThe custom label value, limited to 1,000 characters. This value can be translated into any language that Salesforce supports. |