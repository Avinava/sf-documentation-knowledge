---
title: "PermissionSetAssignment"
domain: tooling-api
topic: permissionsetassignment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.479Z
keywords: [PermissionSetAssignment, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# PermissionSetAssignment

# PermissionSetAssignment

Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this object:

-   View Setup and Configuration
-   Assign Permission Sets
-   Manage User

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user that is assigned the permission set indicated in PermissionSetId or the permission set group indicated in PermissionSetGroupId.This field is a relationship field.Relationship NameAssigneeRelationship TypeLookupRefers ToUser |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the assignment of the permission set or permission set group expires for the specified user. This field is available in API version 52.0 and later. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the assignment is active (true) or not (false). This field is available in API version 52.0 and later.The default value is false. |
| IsRevoked (Beta) | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the assignment was revoked (true) or not (false). This field is available in API version 57.0 and later.NoteThis feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms.The default value is false. |
| LastCreatedByChangeId (Beta) | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user access change record related to this permission set or permission set group assignment. This field is available in API version 57.0 and later.This field is a relationship field.Relationship NameLastCreatedByChangeRelationship TypeLookupRefers ToUserAccessChangeNoteThis feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms. |
| LastDeletedByChangeId (Beta) | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user access change record related to this permission set or permission set group assignment being revoked. This field is available in API version 57.0 and later.This field is a relationship field.Relationship NameLastCreatedByChangeRelationship TypeLookupRefers ToUserAccessChangeNoteThis feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms. |
| PermissionSetGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the permission set group assigned to the user specified in AssigneeId. This field is available in API version 45.0 and later.This field is a relationship field.Relationship NamePermissionSetGroupRelationship TypeLookupRefers ToPermissionSetGroup |
| PermissionSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the permission set assigned to the user specified in AssigneeId.This field is a relationship field.Relationship NamePermissionSetRelationship TypeLookupRefers ToPermissionSet |