---
title: "AccountTerritoryAssignmentRule"
domain: object-reference
topic: accountterritoryassignmentrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.733Z
estimatedTokens: 668
keywords: [AccountTerritoryAssignmentRule, account, assignment, rule, assigns, accounts, territories, Sales, enabled, Calls, Special, Access, Rules, Usage]
---

# AccountTerritoryAssignmentRule

> An account assignment rule that assigns accounts to territories based
      on account fields. Available if Sales Territories has been enabled.

# AccountTerritoryAssignmentRule

An account assignment rule that assigns accounts to territories based on account fields. Available if Sales Territories has been enabled.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Users with the View Setup and Configuration permission can access this object. Users with the Manage Territories permission can edit this object.

## Fields

| Field | Details |
| --- | --- |
| BooleanFilter | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionAdvanced filter conditions that were specified for the rule in the online application. For example, “(1 AND 2) OR 3.” |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, UpdateDescriptionIndicates whether the rule is active (true) or inactive (false). Via the API, active rules run automatically when new accounts are created and existing accounts are edited. The exception is when the IsExcludedFromRealign field on an account is true, which prevents account assignment rules from evaluating that account. |
| IsInherited | TypebooleanPropertiesCreate, Defaulted on create, Filter, UpdateDescriptionIndicates whether the rule is an inherited rule (true) or a local rule (false). An inherited rule also acts upon territories below it in the territory hierarchy. A local rule is created at the immediate territory and only impacts the immediate territory. |
| Name | TypestringPropertiesCreate, Filter, UpdateDescriptionA name for the rule. Limit is 80 characters. |
| TerritoryId | TypereferencePropertiesCreate, Filter, UpdateDescriptionID of the territory where accounts that satisfy this rule are assigned. |

## Usage

A territory will not have any accounts (with the exception of manually assigned accounts) unless at least one account assignment rule is active for the territory.

#### See Also

-   [AccountTerritoryAssignmentRuleItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentruleitem.htm "A row of selection criteria for an AccountTerritoryAssignmentRule object. Available if Sales Territories has been enabled.")

-   [Territory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory.htm "Represents a flexible collection of accounts and users where the users have at least read access to the accounts, regardless of who owns the accounts. Available if Sales Territories has been enabled.")

-   [UserTerritory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm "Represents a User who has been assigned to a Territory.")

## Related Topics

- AccountTerritoryAssignmentRuleItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentruleitem.htm)
- Territory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory.htm)
- UserTerritory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm)
