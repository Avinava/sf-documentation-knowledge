---
title: "PermissionSetGroup"
domain: object-reference
topic: permissionsetgroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.777Z
estimatedTokens: 683
keywords: [PermissionSetGroup, group, permission, permissions, groups, organize, job, functions, tasks, package, needed, API, version, 45.0, later]
---

# PermissionSetGroup

> Represents a group of permission sets and the permissions within them.
      Use permission set groups to organize permissions based on job functions or tasks. Then, you
      can package the groups as needed. This object is available in API version 45.0 and
    later.

# PermissionSetGroup

Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeObject(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, to view this object, users must have one of these permissions:

-   View Setup and Configuration
-   Manage Session Permission Set Activations
-   Assign Permission Sets

To edit this object, users must have the Manage Profiles and Permission Sets permission.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Permission Set Group description. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe permission set group name used in the API. |
| HasActivationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the permission set group requires an associated active session (true) or not (false). The default value is false. This field is available in API version 53.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe Permission Set Group language.Possible values are:da (Danish)de (German)en_US (English)es (Spanish)es_MX (Spanish - Mexican)fi (Finnish)fr (French)it (Italian)ja (Japanese)ko (Korean)nl_NL (Dutch)no (Norwegian)pt_BR (Portuguese - Brazilian)ru (Russian)sv (Swedish)th (Thai)zh_CN (Chinese - Simplified)zh_TW (Chinese - Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe permission set group label for the aggregated permissions. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe permission set group namespace prefix. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionIndicates permission set group recalculation status.Updated. The group is current.Outdated. The group requires recalculation.Updating. The group is in recalculation mode.Failed. The group recalculation failed. |

## Usage

Use the PermissionSetGroup object to query existing permission set groups and to find which aggregated permissions are included in the group.

For example, to search for all object permissions in a permission set group named StandardAccountingUsers:

```

```

To create a permission set group using REST API, you can submit a POST request.

```

```

## Code Examples

```
SELECT SObjectType
FROM ObjectPermissions
WHERE Parent.PermissionSetGroup.DeveloperName = 'StandardAccountingUsers'
```

```
POST
/services/data/v45.0/tooling/sobjects/PermissionSetGroup/

{
    "DeveloperName":"Sales", "MasterLabel": "sales_label"
}
```
