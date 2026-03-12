---
title: "AccountTerritoryAssignmentRuleItem"
domain: object-reference
topic: accountterritoryassignmentruleitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.738Z
estimatedTokens: 625
keywords: [AccountTerritoryAssignmentRuleItem, row, selection, criteria, AccountTerritoryAssignmentRule, Sales, Territories, enabled, Calls, Special, Access, Rules, Usage]
---

# AccountTerritoryAssignmentRuleItem

> A row of selection criteria for an AccountTerritoryAssignmentRule
   object. Available if Sales Territories has been enabled.

# AccountTerritoryAssignmentRuleItem

A row of selection criteria for an AccountTerritoryAssignmentRule object. Available if Sales Territories has been enabled.

AccountTerritoryAssignmentRuleItem can be created or deleted if the BooleanFilter field on its corresponding AccountTerritoryAssignmentRule object is a null value.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Users with the View Setup and Configuration permission can access this object. Users with the Manage Territories permission can edit this object.

## Fields

| Field | Details |
| --- | --- |
| Field | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe standard or custom account field to use as a criteria. |
| Operation | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe criteria to apply, such as “equals” or “starts with.” |
| RuleID | TypereferencePropertiesCreate, Filter, UpdateDescriptionID of the associated AccountTerritoryAssignmentRule. |
| SortOrder | TypeintPropertiesCreate, Filter, UpdateDescriptionThe order in which this row is evaluated compared to other AccountTerritoryAssignmentRuleItem objects for the given AccountTerritoryAssignmentRule. |
| Value | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionThe field value(s) to evaluate, such as 94105 if the Field is Billing Zip/Postal Code. |

## Usage

-   Both standard and custom account fields can be used as criteria for account assignment rules.
-   A territory will not have any accounts (with the exception of manually assigned accounts) unless at least one account assignment rule is active for the territory.

#### See Also

-   [AccountTerritoryAssignmentRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentrule.htm "An account assignment rule that assigns accounts to territories based on account fields. Available if Sales Territories has been enabled.")

-   [Territory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory.htm "Represents a flexible collection of accounts and users where the users have at least read access to the accounts, regardless of who owns the accounts. Available if Sales Territories has been enabled.")

-   [UserTerritory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm "Represents a User who has been assigned to a Territory.")

## Related Topics

- AccountTerritoryAssignmentRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentrule.htm)
- Territory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory.htm)
- UserTerritory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm)
