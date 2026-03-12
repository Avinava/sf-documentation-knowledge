---
title: "LookupFilter"
domain: tooling-api
topic: lookupfilter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.107Z
estimatedTokens: 1328
keywords: [LookupFilter, lookup, filter, restricts, dialog, results, master-detail, hierarchical, relationship, SOAP, Calls, REST, HTTP, Metadata, FilterItem]
---

# LookupFilter

> Represents a lookup filter, which restricts the valid values and lookup dialog
  results for lookup, master-detail, and hierarchical relationship fields.

# LookupFilter

Represents a lookup filter, which restricts the valid values and lookup dialog results for lookup, master-detail, and hierarchical relationship fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Available from Tooling API version 34.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

LookupFilter is not supported on the article type object.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Fields

| Field Name | Details |
| --- | --- |
| Active | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the lookup filter is active. |
| DeveloperName | TypestringPropertiesFilter, Group, Namefield, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| FullName | TypestringPropertiesFilter, Group, SortDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsOptional | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. If true, the lookup filter is optional. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | TypeLookupFilterPropertiesCreate, Nillable, UpdateDescriptionThe metadata for this lookup filter.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the custom field, which is sometimes different from the object’s namespace. |
| SourceFieldDefinition | TypestringPropertiesFilter, Group, SortDescriptionThe field that this filter applies to. |
| SourceFieldDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionDurable ID of the object specified in SourceFieldDefinition. |
| SourceObject | TypestringPropertiesFilter, Group, SortDescriptionThe object that contains the lookup field that uses this lookup filter. Null if the lookup filter doesn’t reference fields on the source object. |
| TargetEntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionThe entity definition for the source lookup field. |
| TargetEntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionID of the TargetEntityDefinition. |

## Example

The Owner field on Account represents a user with certain characteristics.

In this example, SourceFieldDefinition is Account.Owner and TargetEntityDefinition is User, because Owner is a lookup field to User.

## LookupFilter Metadata

Metadata about the lookup filter is returned in the Metadata field:

| Field | Type | Description |
| --- | --- | --- |
| active | boolean | Required. If true, the lookup filter is active. |
| booleanFilter | string | The filter logic, if any, applied to this filter using Boolean operators AND, OR, or NOT. |
| description | string | A description of the filter does. |
| errorMessage | string | If the lookup filter fails, the error m. |
| filterItems | FilterItem | Required. The set of filter conditions. Each lookup filter can have up to 10 FilterItems. |
| infoMessage | string | Information displayed on the page to help the user. For example, explaining why some items are excluded in the lookup filter. |
| isOptional | boolean | Required. If true, the lookup filter is optional. |

## FilterItem Metadata

Represents one entry in a set of filter criteria.

| Field | Type | Description |
| --- | --- | --- |
| field | string | Represents the field specified in the filter. |
| operation | FilterOperation, an enumeration of strings | Valid values:equalsnotEquallessThangreaterThanlessOrEqualgreaterOrEqualcontainsnotContainstartsWithincludesexcludeswithin (DISTANCE criteria only) |
| value | string | Represents the value of the filter item being operated upon. For example, if the filter is my_number_field__c > 1, the value of this field is 1. |
| valueField | string | Specifies if the final column in the filter contains a field or a field value.Approval processes don’t support this field in filter criteria. |
