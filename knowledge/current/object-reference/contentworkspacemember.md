---
title: "ContentWorkspaceMember"
domain: object-reference
topic: contentworkspacemember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.256Z
estimatedTokens: 377
keywords: [ContentWorkspaceMember, member, content, library, API, version, 40.0, later, Calls, Special, Access, Rules, Usage]
---

# ContentWorkspaceMember

> Represents a member of a content library. This object is
      available in API version 40.0 and later.

# ContentWorkspaceMember

Represents a member of a content library. This object is available in API version 40.0 and later.

Manage library membership from the API.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

A user can create/update/delete memberships if they have the Manage Salesforce CRM Content admin perm or the Manage Library permission for the library concerned.

## Fields

| Field | Details |
| --- | --- |
| ContentWorkspaceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the library.This is a relationship field.Relationship NameContentWorkspaceRelationship TypeLookupRefers ToContentWorkspace |
| ContentWorkspacePermissionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe id of the library permission or role.This is a relationship field.Relationship NameContentWorkspacePermissionRelationship TypeLookupRefers ToContentWorkspacePermission |
| MemberId | TypereferencePropertiesCreate, Filter, Group,Namepointing, SortDescriptionID of the library member (the member is either a user or a group).This is a polymorphic relationship field.Relationship NameMemberRelationship TypeLookupRefers ToGroup, User |
| MemberType | TypepicklistPropertiesFilter, Group, Nillable,Restricted picklist, SortDescriptionThe type of library member. Valid values are:G - GroupU - User |

## Usage

Use this object to create, update, or delete members from a library.
