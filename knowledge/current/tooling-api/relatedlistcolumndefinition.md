---
title: "RelatedListColumnDefinition"
domain: tooling-api
topic: relatedlistcolumndefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.640Z
estimatedTokens: 589
keywords: [RelatedListColumnDefinition, Represents, information, column, related, list., list, specifies, set, records, based, specific, criteria., API, version, 55.0, later., Supported, SOAP, Calls]
---

# RelatedListColumnDefinition

> Represents information about a column in a related list. A related list
         specifies a set of records for a related object, based on specific criteria. This
      object is available in API version 55.0 and later.

# RelatedListColumnDefinition

Represents information about a column in a related list. A related list specifies a set of records for a related object, based on specific criteria. This object is available in API version 55.0 and later.

## Supported SOAP API Calls

describeSObjects(), query()

## Supported REST API Methods

Query

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Alias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique alias of the column in the related list. |
| ColumnSoql | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe SOQL query string used in a SELECT clause for the column. |
| DataType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe field type of the column. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier for the column. Always retrieve this value before using it, as the value can change from one release to the next. Simplify queries by using this field instead of making multiple queries. |
| FieldDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the FieldDefinition associated with the column, if applicable.This is a relationship field.Relationship NameFieldDefinitionRelationship TypeLookupRefers ToFieldDefinition |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the column appears on the related list by default (true) or not (false).The default value is false. |
| IsDescribable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the column can appear in the results of a describeLayout call containing the related list (true) or not (false).The default value is false. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for the column. |
| LookupId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe lookup ID for the column. |
| RelatedListDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the RelatedListDefinition that contains the column.This is a relationship field.Relationship NameRelatedListDefinitionRelationship TypeLookupRefers ToRelatedListDefinition |

## Usage

Find all available columns on a related list definition.

```

```

## Code Examples

```
SELECT Alias, ColumnSoql, DurableId FROM RelatedListColumnDefinition WHERE RelatedListDefinitionId = 'Account.Opportunities'
```
