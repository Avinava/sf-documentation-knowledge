---
title: "ObjectTerritory2AssignmentRuleItem"
domain: object-reference
topic: objectterritory2assignmentruleitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.374Z
estimatedTokens: 489
keywords: [ObjectTerritory2AssignmentRuleItem, row, selection, criteria, ObjectTerritory2AssignmentRule, created, deleted, BooleanFilter, corresponding, Sales, Territories, enabled, Calls, Special, Access]
---

# ObjectTerritory2AssignmentRuleItem

> A single row of selection criteria for an
            ObjectTerritory2AssignmentRule object. ObjectTerritory2AssignmentRuleItem can only be
            created or deleted if the BooleanFilter field on its corresponding
            ObjectTerritory2AssignmentRule object is a null value.
            Available if Sales Territories has been enabled.

# ObjectTerritory2AssignmentRuleItem

A single row of selection criteria for an ObjectTerritory2AssignmentRule object. ObjectTerritory2AssignmentRuleItem can only be created or deleted if the BooleanFilter field on its corresponding ObjectTerritory2AssignmentRule object is a null value. Available if Sales Territories has been enabled.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Standard users can access this object. If a territory model is in Active state, any standard user can view that model, including its territories and assignment rules. For territories in an active model, any standard user can view assigned records and assigned users subject to your Salesforce sharing settings. Users cannot view territory models in other states (such as Planning or Archived).

## Fields

| Field Name | Details |
| --- | --- |
| Field | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe standard or custom object field that the rule item will operate on. |
| Operation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe criterion to apply for the rule item. For example: equals, notContain, or startsWith. |
| RuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated ObjectTerritory2AssignmentRule. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order in which this row is evaluated in relation to other ObjectTerritoryAssignmentRuleItem objects for the given ObjectTerritoryAssignmentRule. This field is required for assignment rule items, which are used in the Boolean conditions in assignment rule formulas. |
| Value | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe field value or values to evaluate. For example: if the field is Billing ZIP/Postal Code, a value might be 94105. |
