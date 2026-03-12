---
title: "Create and Assign a Permission Set to Developer Users"
domain: sfdx-dev
topic: create-and-assign-a-permission-set-to-developer-users
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.013Z
estimatedTokens: 487
keywords: [Assign, Permission, Developer, Users, give, full, access, Dev, Hub, org, custom, grants, objects, license, Standard]
---

# Create and Assign a Permission Set to Developer Users

> To give full access to the Dev Hub org, create and assign a custom permission set that
  grants access to required Dev Hub objects. Or if you have the Developer license, assign the
  Developer permission set.

# Create and Assign a Permission Set to Developer Users

To give full access to the Dev Hub org, create and assign a custom permission set that grants access to required Dev Hub objects. Or if you have the Developer license, assign the Developer permission set.

## Standard Developer Permission Set

If you're providing access to the Dev Hub org using the standard Developer license, it also includes a built-in Developer permission set. This permission set provides the required permissions for scratch orgs, and unlocked and second-generation managed packaging. You can use the provided Developer permission set or create your own.

## Create a Permission Set

Follow the steps to [create a permission set](https://help.salesforce.com/s/articleView?id=platform.perm_sets_create.htm&language=en_US), then add the required scratch org and packaging permissions.

## Required Permissions for Scratch Orgs

-   Object Settings > Scratch Org Infos > Read, Create, Edit, and Delete
-   Object Settings > Active Scratch Orgs > Read, Edit, and Delete

## Required Permissions for Unlocked Packaging and Second-Generation Managed Packaging

To work with unlocked or second-generation managed packages in the Dev Hub org, the permission set must contain the scratch org permissions and:

-   Object Settings > Namespace Registries > Read
-   System Permissions > Create and Update Second-Generation Packages

The system permission provides access to:

| Salesforce CLI Command | Tooling API Object (Create and Edit) |
| --- | --- |
| package create | Package2 |
| package version create | Package2VersionCreateRequest |
| package version update | Package2Version |

## Assign Permission Set to Users

To assign one or more users to a permission set, or to remove a user from a permission set, see [Manage Permission Set Assignments](https://help.salesforce.com/s/articleView?id=platform.perm_sets_manage_assignments.htm&language=en_US) in Salesforce Help.
