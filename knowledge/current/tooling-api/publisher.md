---
title: "Publisher"
domain: tooling-api
topic: publisher
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.633Z
estimatedTokens: 1037
keywords: [Publisher, objects, Salesforce, standard, organization, custom, package, installed, packages, Tooling, API, version, 34.0, later, SOAP]
---

# Publisher

> Represents the publisher of objects and fields. For example, Salesforce is the
        publisher for standard objects, the organization is the publisher for custom objects, and
        the package is the publisher for installed packages. Available in Tooling API version 34.0
        and later.

# Publisher

Represents the publisher of objects and fields. For example, Salesforce is the publisher for standard objects, the organization is the publisher for custom objects, and the package is the publisher for installed packages. Available in Tooling API version 34.0 and later.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Special Access Rules

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| IsSalesforce | TypebooleanPropertiesFilter, Group, Nillable, SortDescriptionIndicates whether Salesforce provided the associated objects or fields (true). |
| MajorVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe first number in a package version number. A complete version number combines the values of the MajorVersion and MinorVersion fields into either an x.y format or an x.y.z format. The x represents the major version, y the minor version, and z the patch version. (The patch version can’t be specified; it’s automatically assigned when a managed beta package is uploaded.) |
| MinorVersion | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe second number in a package version number. A complete version number combines the values of the MajorVersion and MinorVersion fields into either an x.y format or an x.y.z format. The x represents the major version, y the minor version, and z the patch version. (The patch version can’t be specified; it’s automatically assigned when a managed beta package is uploaded.)If MinorVersion isn’t specified, the default value is 1 more than the minor version of the currently released package (0 if not released). |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe presentation-friendly name of the publisher. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.NamespacePrefix is null if the publisher is Salesforce. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Publisher fields are exposed in SOAP API version 46.0 and later. You can use Tooling API to query for Publisher fields in guest user mode in API version 45.0 and earlier. In API version 46.0 and later, use SOAP API to get this data in guest user mode. Publisher is still exposed in Tooling API to User Profiles with the ViewSetup permission.

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
