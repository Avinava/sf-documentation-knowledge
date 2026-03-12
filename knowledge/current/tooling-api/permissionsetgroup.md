---
title: "PermissionSetGroup"
domain: tooling-api
topic: permissionsetgroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.521Z
estimatedTokens: 793
keywords: [PermissionSetGroup, group, permission, permissions, groups, organize, job, functions, tasks, package, needed, Tooling, API, version, 45.0]
---

# PermissionSetGroup

> Represents a group of permission sets and the permissions within
            them. Use permission set groups to organize permissions based on job functions or tasks.
            Then, you can package the groups as needed. Available in Tooling API version 45.0
        and later.

# PermissionSetGroup

Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed. Available in Tooling API version 45.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

Query, GET, POST, PATCH, DELETE

## Special Access Rules

As of Summer ’20 and later, to view this object, users must have one of these permissions:

-   View Setup and Configuration
-   Manage Session Permission Set Activations
-   Assign Permission Sets

To edit this object, users must have the Manage Profiles and Permission Sets permission.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, Query, Retrieve UpdateDescriptionThe permission set group description. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, NameField, Sort, UpdateDescriptionThe permission set group name used in the API.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| HasActivationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the permission set group requires an associated active session (true) or not (false). The default value is false.This field is available in API version 53.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe Permission Set Group language. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe permission set group label for the aggregated permissions. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe permission set group namespace prefix. |
| Status | TypestringPropertiesDefaultedOnCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates the permission set group recalculation status.Updated. The group is current.Outdated. The group requires recalculation.Updating. The group is in recalculation mode.Failed. The group recalculation failed. |

## Usage

Use the PermissionSetGroup object to query existing permission set groups and to find which aggregated permissions are included in the group.
