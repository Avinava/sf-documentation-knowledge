---
title: "PermissionSetGroupComponent"
domain: object-reference
topic: permissionsetgroupcomponent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.781Z
estimatedTokens: 325
keywords: [PermissionSetGroupComponent, junction, relates, PermissionSetGroup, PermissionSet, objects, via, their, respective, IDs, permission, group, recalculation, determine, aggregated]
---

# PermissionSetGroupComponent

> A junction object that relates the PermissionSetGroup and
      PermissionSet objects via their respective IDs; enables permission set group recalculation to
      determine the aggregated permissions for the group. This object is available in API
    version 45.0 and later.

# PermissionSetGroupComponent

A junction object that relates the PermissionSetGroup and PermissionSet objects via their respective IDs; enables permission set group recalculation to determine the aggregated permissions for the group. This object is available in API version 45.0 and later.

PermissionSetGroupComponent is a child object of PermissionSet and PermissionSetGroup.

## Supported Calls

create(), delete(), describeSObject(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only users with the "View Setup and Configuration" permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| PermissionSetGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique permission set group ID.This is a relationship field.Relationship NamePermissionSetGroupRelationship TypeLookupRefers ToPermissionSetGroup |
| PermissionSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique permission set ID of a permission set in a permission set group.This is a relationship field.Relationship NamePermissionSetRelationship TypeLookupRefers ToPermissionSet |

## Usage

Use the PermissionSetGroupComponent object to add members to or delete members from a permission set group, or to query for group members.
