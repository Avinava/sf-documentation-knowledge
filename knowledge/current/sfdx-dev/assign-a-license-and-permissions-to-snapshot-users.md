---
title: "Assign a License and Permissions to Snapshot Users"
domain: sfdx-dev
topic: assign-a-license-and-permissions-to-snapshot-users
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.610Z
estimatedTokens: 437
keywords: [Assign, License, Permissions, Snapshot, Users, Provide, non-admin, Scratch, Org, Snapshots, access, objects, Dev, Hub, production]
---

# Assign a License and Permissions to Snapshot Users

> Provide all non-admin Scratch Org Snapshots users with a supported license and access to
  the required scratch org and snapshot objects. Dev Hub (production org) admins can create and
  manage snapshots by default.

# Assign a License and Permissions to Snapshot Users

Provide all non-admin Scratch Org Snapshots users with a supported license and access to the required scratch org and snapshot objects. Dev Hub (production org) admins can create and manage snapshots by default.

1.  Log in to your Dev Hub org as the admin user.
2.  Assign to each snapshot user a Salesforce, Salesforce Platform, or Salesforce Limited Access license.
3.  In Setup, create a permission set or select an existing one.
4.  From the permission set’s Object Settings, select **Org Snapshots**, then click **Edit**.

    1.  Under Object Permissions, select **Read**, **Create**, and **Delete**.
    2.  (Optional) Add these object permissions to the permission set.

    -   To allow users to see snapshots that other users create, select **View All Records**.
    -   To allow users to delete snapshots that other users create, select **Modify All Records** (Salesforce license only).
5.  If snapshot users don’t already have access to the required scratch org objects (Scratch Org Info and Active Scratch Orgs) through another permission set, include access to them in this permission set.

    See Required Permissions for Scratch Orgs in [Create and Assign a Permission Set to Developer Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm "To give full access to the Dev Hub org, create and assign a custom permission set that grants access to required Dev Hub objects. Or if you have the Developer license, assign the Developer permission set.") for details.

6.  Save your changes.
7.  Click **Manage Assignments**, then **Add Assignment**.
8.  Select the users, click **Next**, and optionally set an expiration date.
9.  Click **Assign**, then **Done**.

## Related Topics

- Create and Assign a Permission Set to Developer Users (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm)
