---
title: "UserAccessPolicyAction"
domain: tooling-api
topic: useraccesspolicyaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.093Z
estimatedTokens: 301
keywords: [UserAccessPolicyAction, action, applied, user, access, policy, API, version, 57.0, later, SOAP, Calls, REST, Special, Rules]
---

# UserAccessPolicyAction

> Represents an action applied by the user access policy. This object is
      available in API version 57.0 and later.

# UserAccessPolicyAction

Represents an action applied by the user access policy. This object is available in API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update() , upsert()

## Supported REST API Methods

GET, POST, PATCH, DELETE, HEAD, Query

## Special Access Rules

To create or modify user access policies, users must have the Manage User Access Policies permission.

## Fields

| Field | Details |
| --- | --- |
| Action | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates whether the user access policy grants access to or removes access from the target access mechanism.Possible values are:GrantRevoke |
| TargetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the access mechanism that the user access policy applies.This field is a polymorphic relationship field.Relationship NameTargetRelationship TypeLookupRefers ToGroup, Queue, PermissionSet, PermissionSetGroup |

## Usage

For more information, see [User Access Policies](https://help.salesforce.com/s/articleView?id=platform.perm_user_access_policies.htm&type=5&language=en_US) in Salesforce Help.
