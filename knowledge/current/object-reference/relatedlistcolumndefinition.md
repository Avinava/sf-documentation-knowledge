---
title: "RelatedListColumnDefinition"
domain: object-reference
topic: relatedlistcolumndefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.167Z
estimatedTokens: 571
keywords: [RelatedListColumnDefinition, column, records, specific, criteria, API, version, 55.0, later, Calls, Special, Access, Rules, Usage]
---

# RelatedListColumnDefinition

> Represents information about a column in a related list. A related list
         specifies a set of records for a related object, based on specific criteria. This
      object is available in API version 55.0 and later.

# RelatedListColumnDefinition

Represents information about a column in a related list. A related list specifies a set of records for a related object, based on specific criteria. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Alias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique alias of the column in the related list. |
| ColumnSoql | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe SOQL query string used in a SELECT clause for the column. |
| DataType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe field type of the column. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier for the related list. Always retrieve this value before using it, as the value can change from one release to the next. Simplify queries by using this field instead of making multiple queries. |
| FieldDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the FieldDefinition associated with the column, if applicable.This is a relationship field.Relationship NameFieldDefinitionRelationship TypeLookupRefers ToFieldDefinition |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the column appears on the related list by default (true) or not (false).The default value is false. |
| IsDescribable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the related list can appear in describeLayout call results (true) or not (false).The default value is false. |
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
