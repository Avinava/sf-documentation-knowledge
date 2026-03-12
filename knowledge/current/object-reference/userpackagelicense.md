---
title: "UserPackageLicense"
domain: object-reference
topic: userpackagelicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.867Z
estimatedTokens: 467
keywords: [UserPackageLicense, license, installed, managed, package, assigned, specific, user, API, version, 31.0, later, Calls, Usage]
---

# UserPackageLicense

> Represents a license for an installed managed package, assigned to a specific user. This object is available in API version 31.0 and later.

# UserPackageLicense

Represents a license for an installed managed package, assigned to a specific user. This object is available in API version 31.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve() update()

## Fields

| Field Name | Details |
| --- | --- |
| IsRevoked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for internal use. This field is available in API version 58.0 and later. |
| LastCreatedByChangeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user access change record related to this managed package license assignment. This field is available only if user access policies are enabled. This field is available in API version 58.0 and later.This field is a relationship field.Relationship NameLastCreatedByChangeRelationship TypeLookupRefers ToUserAccessChange |
| LastDeletedByChangeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user access change record related to this managed package license assignment being revoked. This field is available only if user access policies are enabled. This field is available in API version 58.0 and later.This field is a relationship field.Relationship NameLastCreatedByChangeRelationship TypeLookupRefers ToUserAccessChange |
| PackageLicenseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe 18-character Globally Unique ID (GUID) that identifies the package licenseThis is a relationship field.Relationship NamePackageLicenseRelationship TypeLookupRefers ToPackageLicense |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe User ID of the user licensed to use this package |

## Usage

Use this object, in conjunction with PackageLicense, to provide users access to a managed package installed in your organization.
