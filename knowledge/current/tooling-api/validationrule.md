---
title: "ValidationRule"
domain: tooling-api
topic: validationrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.136Z
estimatedTokens: 1083
keywords: [ValidationRule, validation, rule, workflow, formula, condition, met, API, version, 34.0, later, SOAP, Calls, REST, HTTP]
---

# ValidationRule

> Represents a validation rule or workflow rule which specifies the
      formula for when a condition is met.  Available from API version 34.0 or
    later.

# ValidationRule

Represents a validation rule or workflow rule which specifies the formula for when a condition is met. Available from API version 34.0 or later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

Query, GET, POST, PATCH

## Fields

| Field Name | Details |
| --- | --- |
| Active | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort.DescriptionRequired. Indicates whether this validation rule is active, (true), or not active (false). |
| Description | TypestringPropertiesFilter, Nillable, Sort.DescriptionA description of the validation rule. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, Sort.DescriptionRequired. The entity definition for the object associated with the validation rule. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Sort.DescriptionRequired. ID of the record in EntityDefinition. |
| ErrorDisplayField | TypestringPropertiesFilter, Group, Nillable, Sort.DescriptionThe fully specified name of a field in the application. If a value is supplied, the error message appears next to the specified field. If you do not specify a value or the field isn’t visible on the page layout, the value changes automatically to Top of Page. |
| ErrorMessage | TypestringPropertiesFilter, Group, Nillable, Sort .DescriptionRequired. The message that appears if the validation rule fails. The message must be 255 characters or less. |
| FullName | TypestringPropertiesCreate, Group, Nillable.DescriptionThe internal name of the object. White spaces and special characters are escaped for validity. The name must:Contain characters, letters, or the underscore (_) characterMust start with a letterCan’t end with an underscoreCan't contain two consecutive underscore characters.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Id | TypeIdPropertiesDefaulted on create, Filter, Group, idLookup, Sort.DescriptionThe unique system ID for this record. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | TypeValidationRule MetadataPropertiesCreate, Nillable, Update.DescriptionValidation rule metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, Sort.DescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| ValidationName | TypestringPropertiesFilter, Group, Namefield, Sort.DescriptionThe name or ID of the object that this rule is associated with. |

## ValidationRule Metadata

active, description, errorDisplayField, and errorMessage are described in the previous table.

| Field Name | Details |
| --- | --- |
| errorConditionFormula | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. The formula defined in the validation rule. If the formula returns a value of true, an error message is displayed. |

## Related Topics

- EntityDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm)
