---
title: "UiFormulaRule"
domain: object-reference
topic: uiformularule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.355Z
estimatedTokens: 396
keywords: [UiFormulaRule, filters, define, conditions, under, component, displays, Lightning, API, version, 47.0, later, Calls]
---

# UiFormulaRule

> Represents a set of one or more filters that define the conditions under which
      a component displays on a Lightning page. This object is available in API version 47.0
    and later.

# UiFormulaRule

Represents a set of one or more filters that define the conditions under which a component displays on a Lightning page. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AssociatedElementId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRepresents a parent component that UiFormulaRule is associated with, such as PromptVersion.This is a relationship field.Relationship NameAssociatedElementRelationship TypeLookupRefers ToPromptVersion |
| BooleanFilter | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the filter logic applied to UiFormulaRule. References the UI formula rule stored by UiFormulaCriterion based on the sortIndex, such as ((1 && 3) \|\| 2). |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRepresents the API name of the UiFormulaRule.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Formula | TypetextareaPropertiesNillableDescriptionRepresents the formula source string of UiFormulaRule. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRepresents the language of the UiFormulaRule. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. Represents the label of the UiFormulaRule. |
| ParentKeyPrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the three-digit prefix for AssociatedElementId. |
