---
title: "Org Shape Permissions"
domain: sfdx-dev
topic: org-shape-permissions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.602Z
estimatedTokens: 372
keywords: [Org, Shape, Permissions, Salesforce, admin, Dev, Hub, assign, users, plan, shapes, scratch, orgs, already, permission]
---

# Org Shape Permissions

> A Salesforce admin for the Dev Hub org must assign permissions to users who plan to
  create org shapes, or create scratch orgs based on an org shape. If you already have a permission
  set for Salesforce DX users, you can update it to include access.

# Org Shape Permissions

A Salesforce admin for the Dev Hub org must assign permissions to users who plan to create org shapes, or create scratch orgs based on an org shape. If you already have a permission set for Salesforce DX users, you can update it to include access.

| Access | Permissions |
| --- | --- |
| Create an org shape | Object Settings > Shape Representation > Create, Edit |
| Delete an org shape | Object Settings > Shape Representation > Delete |
| Use an org shape to create a scratch org | No additional permissions are required besides the ones for creating scratch orgs. |

You don’t require the “Modify All Records” permission to delete shapes created by others because there can be only one active shape in the org at a time.

## Supported Licenses

In addition to providing users with appropriate permissions, be sure to assign the Salesforce license to Org Shape users. Other user licenses aren’t supported at this time.

#### See Also

-   [Add Salesforce DX Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm "System administrators can access the Dev Hub org by default. You can enable more users to access the Dev Hub org so that they can create scratch orgs and use other developer-specific features.")

-   [*SOAP API Developer Guide*: ShapeRepresentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_shaperepresentation.htm "SOAP API Developer Guide: ShapeRepresentation - HTML (New Window)")

## Related Topics

- Add Salesforce DX Users (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm)
