---
title: "OrgEmailAddressSecurity"
domain: object-reference
topic: orgemailaddresssecurity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.146Z
estimatedTokens: 337
keywords: [OrgEmailAddressSecurity, assignment, user, profile, org-wide, email, address, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# OrgEmailAddressSecurity

> Defines the assignment of a user profile to an org-wide email address.
      This object is available in API version 58.0 and later.

# OrgEmailAddressSecurity

Defines the assignment of a user profile to an org-wide email address. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Only authenticated users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| OrgWideEmailAddressId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of an organization-wide email address.This field is a relationship field.Relationship NameOrgWideEmailAddressRelationship TypeLookupRefers ToOrgWideEmailAddress |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe profile ID that’s allowed to use an organization-wide email address.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToProfile |

## Usage

You can use this object with OrgWideEmailAddress and Profile objects to retrieve user profiles that have access to a specific org-wide email address. To find specific users, use the ProfileId field on the User object.

You can also retrieve the org-wide email addresses that a specific user can access. Note that any users assigned to those org-wide email addresses via permission set aren’t returned.
