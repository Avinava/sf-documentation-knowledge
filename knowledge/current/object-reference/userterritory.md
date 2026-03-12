---
title: "UserTerritory"
domain: object-reference
topic: userterritory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.037Z
estimatedTokens: 760
keywords: [UserTerritory, User, assigned, Territory, Calls, Special, Access, Rules, Usage]
---

# UserTerritory

> Represents a User who has been assigned to a
  Territory.

# UserTerritory

Represents a User who has been assigned to a Territory.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

-   Only available if territory management has been enabled for your organization.
-   As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this object, and only users with the Manage Territories permission can edit this object.

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the user is active in the given territory (true), or inactive in the given territory (false):Users who are active in a territory are explicitly assigned to the territory and can have open opportunities, closed opportunities, or no opportunities associated with that territory.Users who are inactive in a territory are not explicitly assigned to the territory, but own an open or closed opportunity that is associated with the territory. For example, a user may have been transferred out of a territory, but still own opportunities in his or her old territory.Until a user is deleted from a territory (not simply removed from the territory), the record is not returned in a getDeleted() call. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| TerritoryId | TypereferencePropertiesCreate, FilterDescriptionID of the Territory to which the user has been assigned. This field is required when creating a record in API version 20.0 and later. |
| UserId | TypereferencePropertiesCreate, FilterDescriptionID of the user. This field is required when creating a record. |

## Usage

If a user is inactive in a territory, and the opportunities they own that are associated with the territory are all closed, the user is not returned in the Territories related list on the User page in Setup. Regardless of whether the user is inactive or the opportunities are closed, the user is returned in the Quotas related list.

#### See Also

-   [Territory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory.htm "Represents a flexible collection of accounts and users where the users have at least read access to the accounts, regardless of who owns the accounts. Available if Sales Territories has been enabled.")

-   [AccountTerritoryAssignmentRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentrule.htm "An account assignment rule that assigns accounts to territories based on account fields. Available if Sales Territories has been enabled.")

-   [AccountTerritoryAssignmentRuleItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentruleitem.htm "A row of selection criteria for an AccountTerritoryAssignmentRule object. Available if Sales Territories has been enabled.")

## Related Topics

- Territory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_territory.htm)
- AccountTerritoryAssignmentRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentrule.htm)
- AccountTerritoryAssignmentRuleItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentruleitem.htm)
