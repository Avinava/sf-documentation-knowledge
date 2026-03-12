---
title: "RelatedListDefinition"
domain: object-reference
topic: relatedlistdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.174Z
estimatedTokens: 600
keywords: [RelatedListDefinition, records, specific, criteria, API, version, 55.0, later, Calls, Special, Access, Rules, Usage]
---

# RelatedListDefinition

> Represents information about a related list. A related list specifies a set
         of records for a related object, based on specific criteria. This object is available
      in API version 55.0 and later.

# RelatedListDefinition

Represents information about a related list. A related list specifies a set of records for a related object, based on specific criteria. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| DefaultSort | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe default sort string for the related list. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier for the related list. Always retrieve this value before using it, as the value can change from one release to the next. Simplify queries by using this field instead of making multiple queries. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the entity containing the related list.This is a relationship field.Relationship NameEntityDefinitionRelationship TypeLookupRefers ToEntityDefinition |
| IsCustomizable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether columns on the related list can be customized (true) or not (false).The default value is false. |
| IsDescribable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the related list can appear in describeLayout call results (true) or not (false).The default value is false. |
| IsLayoutable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the related list can be assigned to a layout (true) or not (false).The default value is false. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for the related list. |
| ParentEntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ParentEntityDefinition that’s associated with the rows in the related list.This is a relationship field.Relationship NameParentEntityDefinitionRelationship TypeLookupRefers ToEntityDefinition |
| RelatedListId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related list. |
| RelatedListName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the related list in the API. |

## Usage

Find all available related lists for a given entity, for example, an Account record.

```

```

## Code Examples

```
SELECT DurableId, Label, RelatedListName FROM RelatedListDefinition WHERE ParentEntityDefinitionId = 'Account'
```
