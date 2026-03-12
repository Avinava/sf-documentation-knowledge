---
title: "RuleTerritory2Association"
domain: object-reference
topic: ruleterritory2association
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.421Z
estimatedTokens: 344
keywords: [RuleTerritory2Association, record-assignment, rule, association, Account, Sales, Territories, enabled, Calls, Special, Access, Rules]
---

# RuleTerritory2Association

> Represents a record-assignment rule and its association to an object,
            such as Account. Available if Sales Territories has been enabled.

# RuleTerritory2Association

Represents a record-assignment rule and its association to an object, such as Account. Available if Sales Territories has been enabled.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Standard users can access this object. If a territory model is in Active state, any standard user can view that model, including its territories and assignment rules. For territories in an active model, any standard user can view assigned records and assigned users subject to your Salesforce sharing settings. Users cannot view territory models in other states (such as Planning or Archived).

## Fields

| Field Name | Details |
| --- | --- |
| IsInherited | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the rule is an inherited rule (true) or a local rule (false). Rule inheritance flows from the parent territory where the rule is created to the rule’s descendent territories (if any) in the territory model hierarchy. A local rule is created within a single territory and affects that territory only. |
| RuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the rule. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the territory where the rule was created. |
