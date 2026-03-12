---
title: "AccountUserTerritory2View"
domain: object-reference
topic: accountuserterritory2view
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.751Z
estimatedTokens: 311
keywords: [AccountUserTerritory2View, view, Users, Assigned, Territories, Lightning, Experience, Sales, API, version, 42.0, later, Calls, Special, Access]
---

# AccountUserTerritory2View

> Represents the view of the Users in Assigned Territories related list
			in Lightning Experience for Sales Territories. Available in API version 42.0 and
		later.

# AccountUserTerritory2View

Represents the view of the Users in Assigned Territories related list in Lightning Experience for Sales Territories. Available in API version 42.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Standard and partner users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the account associated with the Users in Assigned Territories related list. |
| RoleInTerritory2 | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe role of each user in the Users in Assigned Territories related list. |
| Territory2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for each territory in the Users in Assigned Territories related list. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for each user in the Users in Assigned Territories related list. |

## Usage

Use this object to show the users who are assigned to the territories assigned to an account.

A filter criterion with one AccountId is required when you execute a SOQL query on this object.
