---
title: "PermissionSetGroupComponent"
domain: tooling-api
topic: permissionsetgroupcomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.414Z
estimatedTokens: 326
keywords: [PermissionSetGroupComponent, junction, relates, PermissionSetGroup, PermissionSet, objects, via, their, respective, IDs, enables, permission, set, group, recalculation, determine, aggregated, permissions, group., Tooling]
---

# PermissionSetGroupComponent

> A junction object that relates the PermissionSetGroup and
            PermissionSet objects via their respective IDs; enables permission set group
            recalculation to determine the aggregated permissions for the group. Available in
        Tooling API version 45.0 and later.

# PermissionSetGroupComponent

A junction object that relates the PermissionSetGroup and PermissionSet objects via their respective IDs; enables permission set group recalculation to determine the aggregated permissions for the group. Available in Tooling API version 45.0 and later.

## Supported Calls

create(), delete(), describeSObject() , query(), retrieve()

## Supported REST HTTP Methods

Query, GET, POST, PATCH, DELETE

## Special Access Rules

As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| PermissionSet | TypesObjectPropertiesCreate, Filter, Group, SortDescriptionThe permission set containing the permission set component. |
| PermissionSetGroup | TypePermissionSetGroupPropertiesCreate, Filter, Group, SortDescriptionThe name of the permission set group. |
| PermissionSetGroupId | TypeIDPropertiesCreate, Filter, Group, SortDescriptionThe ID of the permission set group containing the permission set component. |
| PermissionSetId | TypeIDPropertiesCreate, Filter, Group, SortDescriptionThe ID of the permission set. |

## Usage

Use the PermissionSetGroupComponent object to add members to or delete members from a permission set group, or to query for group members.
