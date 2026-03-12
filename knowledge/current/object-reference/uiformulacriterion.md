---
title: "UiFormulaCriterion"
domain: object-reference
topic: uiformulacriterion
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.349Z
estimatedTokens: 304
keywords: [UiFormulaCriterion, filter, helps, define, component, visibility, Lightning, API, version, 47.0, later, Calls]
---

# UiFormulaCriterion

> Represents a filter that helps define component visibility on a
         Lightning page. This object is available in API version 47.0 and later.

# UiFormulaCriterion

Represents a filter that helps define component visibility on a Lightning page. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| LeftHandSide | TypestringPropertiesFilter, Group, SortDescriptionRepresents the field that the filter is based on. For example, AMOUNT. |
| OperatorId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the filter operator. Valid values are:CONTAINSEQUALGE—greater than or equalGT—greater thanLE—less than or equalLT—less thanNE—not equalThis is a relationship field.Relationship NameOperatorRelationship TypeLookupRefers Tonull |
| ParentKeyPrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the three-digit prefix of the parent ID. |
| RightHandSide | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the value used to evaluate the component’s visibility. For example, 1000000. |
| RuleId | TypereferencePropertiesFilter, Group, SortDescriptionRepresents the formula rule ID.This is a relationship field.Relationship NameRuleRelationship TypeLookupRefers ToUiFormulaRule |
