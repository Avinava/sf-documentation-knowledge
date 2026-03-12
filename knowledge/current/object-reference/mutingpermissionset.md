---
title: "MutingPermissionSet"
domain: object-reference
topic: mutingpermissionset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.039Z
estimatedTokens: 765
keywords: [MutingPermissionSet, disabled, permissions, conjunction, PermissionSetGroup, API, version, 46.0, later, Calls, Special, Access, Rules, Usage]
---

# MutingPermissionSet

> Represents a set of disabled permissions and is used in conjunction
			with PermissionSetGroup. This object is available in API
			version 46.0 and later.

# MutingPermissionSet

Represents a set of disabled permissions and is used in conjunction with PermissionSetGroup. This object is available in API version 46.0 and later.

Use a muting permission set with a permission set group to mute certain permissions. For instance, you have a subscriber org using a managed package that contains a permission set group. To use the existing permission set group, the subscriber org can disable specific permissions with a muting permission set. Or, perhaps you have a permission set group that contains several permission sets managed by different departments. Use a muting permission set to disable specific permissions based on your organization's needs.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this object:

-   View Setup and Configuration
-   Manage Session Permission Set Activations
-   Assign Permission Sets

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance can slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the muting permission set.Possible values are:da (Danish)de (German)en_US (English)es (Spanish)es_MX (Spanish - Mexican)fi (Finnish)fr (French)it (Italian)ja (Japanese)ko (Korean)nl_NL (Dutch)no (Norwegian)pt_BR (Portuguese - Brazilian)ru (Russian)sv (Swedish)th (Thai)zh_CN (Chinese - Simplified)zh_TW (Chinese - Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe muting permission set label for the aggregated, disabled permissions. |
| PermissionsPermissionName | TypebooleanPropertiesCreate, Filter, UpdateDescriptionOne field for each permission. If true, the permission is disabled in the related permission set group. The number of fields varies depending on the permissions for the organization and license type.To get a list of available permissions, use describeSObjects(). |

## Usage

Use MutingPermissionSet to disable specified permissions within a permission set group.
