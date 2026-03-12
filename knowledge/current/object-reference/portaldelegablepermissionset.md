---
title: "PortalDelegablePermissionSet"
domain: object-reference
topic: portaldelegablepermissionset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.943Z
estimatedTokens: 317
keywords: [PortalDelegablePermissionSet, base, platform, store, permission, assigned, delegated, portal, external, user, admin, DPUA, users, API, version]
---

# PortalDelegablePermissionSet

> PortalDelegablePermissionSet is a base platform object used to store permission
      sets that can be assigned by a delegated portal/external user admin (DPUA) to portal
      users. This object is available in API version 47.0 and later.

# PortalDelegablePermissionSet

PortalDelegablePermissionSet is a base platform object used to store permission sets that can be assigned by a delegated portal/external user admin (DPUA) to portal users. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique string used to identify the record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used in the org. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique string to identify the record. |
| PermissionSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique ID of the permission set the DPUA profile can assign to other portal users. |
| ProfileId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the DPUA profile. |
