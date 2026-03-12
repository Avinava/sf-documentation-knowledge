---
title: "Assign Second-Generation Managed Packaging User Permissions"
domain: pkg2-dev
topic: assign-second-generation-managed-packaging-user-permissions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.193Z
estimatedTokens: 379
keywords: [Assign, Second-Generation, Managed, Packaging, User, Permissions, packages, scratch, orgs, developers, require, access, Dev, Hub, org]
---

# Assign Second-Generation Managed Packaging User Permissions

> To create second-generation managed packages and scratch orgs, developers require access
  to the Dev Hub org. We recommend enabling the Dev Hub in your Partner Business Org (PBO). A
  Salesforce admin can create a permission set to grant appropriate permissions to the required Dev
  Hub objects and system permission.

# Assign Second-Generation Managed Packaging User Permissions

To create second-generation managed packages and scratch orgs, developers require access to the Dev Hub org. We recommend enabling the Dev Hub in your Partner Business Org (PBO). A Salesforce admin can create a permission set to grant appropriate permissions to the required Dev Hub objects and system permission.

To give developers access to the Dev Hub org, create a permission set that contains these required permissions:

-   Object Settings > Scratch Org Info > Read, Create, and Delete
-   Object Settings > Active Scratch Org > Read and Delete
-   Object Settings > Namespace Registry > Read (to use a linked namespace in a scratch org)

To provide users with the ability to create second-generation managed packages and package versions, the permission set must also contain:

-   System Permissions > Create and Update Second-Generation Packages

This permission provides access to:

| Salesforce CLI Command | Tooling API Object (Create and Edit) |
| --- | --- |
| sf package create | Package2 |
| sf package version create | Package2VersionCreateRequest |
| sf package version update | Package2Version |

If you choose to test your package in a scratch org, the Create and Update Second-Generation Packages permission is also required when creating the scratch org if you specified an ancestor version in the sfdx-project.json file. Alternatively, use the \--noancestors flag with the sf org create command when you create the scratch org.
