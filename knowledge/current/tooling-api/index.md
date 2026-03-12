---
title: "Index"
domain: tooling-api
topic: index
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.029Z
estimatedTokens: 606
keywords: [Index, defined, custom, big, Tooling, API, version, 41.0, later, SOAP, Calls, REST, HTTP, Limitations, Usage]
---

# Index

> Represents the index defined within a custom big
            object. Available in Tooling API version 41.0 and later.

# Index

Represents the index defined within a custom big object. Available in Tooling API version 41.0 and later.

## Supported SOAP Calls

query(), retrieve()

## Supported REST HTTP Methods

Query, GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the record in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis name is used to refer to the big object in the user interface. Available API version 41.0 and later. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for the Index. This internal label doesn’t get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique string to distinguish this type from any others. |
| SobjectType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of standard object that this record type is derived from. In this case, the parent big object. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of index. Valid values are PRIMARY or SECONDARY. |

## Usage

REST GET

```

```

## Code Examples

```
{
  "attributes" : {
    "type" : "Index",
    "url" : "/services/data/v41.0/tooling/sobjects/Index/0c0D000000000GUIAY"
  },
  "Id" : "0c0D000000000GUIAY",
  "SobjectType" : "01ID0000000AwIcMAK",
  "DeveloperName" : "BigObject_PK",
  "MasterLabel" : "BigOBject_PK",
  ...
  "Type" : "PRIMARY"
}
```

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
