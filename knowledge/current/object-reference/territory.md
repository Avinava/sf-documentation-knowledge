---
title: "Territory"
domain: object-reference
topic: territory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.126Z
estimatedTokens: 1154
keywords: [Territory, flexible, collection, accounts, users, least, access, regardless, owns, Sales, Territories, enabled, Calls, Special, Rules]
---

# Territory

> Represents a flexible collection of accounts and users where the users
      have at least read access to the accounts, regardless of who owns the accounts. Available
    if Sales Territories has been enabled.

# Territory

Represents a flexible collection of accounts and users where the users have at least read access to the accounts, regardless of who owns the accounts. Available if Sales Territories has been enabled.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Standard and partner users can access this object. Users assigned to the Manage Territories permission set can edit this object.

## Fields

| Field | Details |
| --- | --- |
| AccountAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAccount access level granted to users assigned to this territory. |
| CaseAccessLevel | TypepicklistPropertiesCreate, Filter, Nillable, Group, Sort, UpdateDescriptionCase access level granted to users assigned to this territory. |
| ContactAccessLevel | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionA value that represents the type of access granted to the target Group, UserRole, or User for any associated contacts. The possible values are:NoneReadEditNoteWhen DefaultContactAccess is set to “Controlled by Parent,” you can’t create or update this field. |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the territory that is 1,000 characters or less. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Territory Name in the user interface.This field is available in API version 24.0 and later.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| ForecastUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Forecast Manager, who is the user to whom forecasts from this territory’s child territories roll up. |
| MayForecastManagerShare | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the forecast manager can manually share their own forecast. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA name for the territory. Limit is 80 characters. Corresponds to Label on the user interface. |
| OpportunityAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionOpportunity access level granted to users assigned to this territory. |
| ParentTerritoryID | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionTerritory immediately above this territory in the territory hierarchy. Label is Parent Territory ID. |
| RestrictOppTransfer | TypebooleanPropertiesCreate, Defaulted on create, Filter, UpdateDescriptionIndicates whether the opportunities associated with this territory are kept within the bounds of this territory and this territory’s children when account assignment rules are run (true), or if opportunities associated with this territory can be assigned to other nodes of the territory hierarchy when account assignment rules are run (false). Label is Confine Opportunity Assignment. |

## Usage

Use the Territory object to query your organization’s territory hierarchy. Use it to obtain valid territory IDs when querying or modifying records associated with territories.

#### See Also

-   [AccountTerritoryAssignmentRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentrule.htm "An account assignment rule that assigns accounts to territories based on account fields. Available if Sales Territories has been enabled.")

-   [AccountTerritoryAssignmentRuleItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentruleitem.htm "A row of selection criteria for an AccountTerritoryAssignmentRule object. Available if Sales Territories has been enabled.")

-   [UserTerritory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm "Represents a User who has been assigned to a Territory.")

## Related Topics

- AccountTerritoryAssignmentRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentrule.htm)
- AccountTerritoryAssignmentRuleItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountterritoryassignmentruleitem.htm)
- UserTerritory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userterritory.htm)
