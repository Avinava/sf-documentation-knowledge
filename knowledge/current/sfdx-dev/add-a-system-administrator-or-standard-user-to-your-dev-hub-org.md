---
title: "Add a System Administrator or Standard User to Your Dev Hub Org"
domain: sfdx-dev
topic: add-a-system-administrator-or-standard-user-to-your-dev-hub-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.989Z
estimatedTokens: 523
keywords: [Add, System, Administrator, Standard, User, Dev, Hub, Org, users, their, work, requires, level, authority, Otherwise]
---

# Add a System Administrator or Standard User to Your Dev Hub Org

> Add system administrator users only if their work requires that level of authority.
		Otherwise, add standard users and create a permission set with the required Salesforce DX
		permissions.

# Add a System Administrator or Standard User to Your Dev Hub Org

Add system administrator users only if their work requires that level of authority. Otherwise, add standard users and create a permission set with the required Salesforce DX permissions.

1.  Create a user in your Dev Hub org, if necessary.

    1.  In Setup, enter Users in the Quick Find box, then select **Users**.
    2.  Click **New User**.
    3.  Fill out the form, and assign the System Administrator or Standard User profile.
    4.  Click **Save**.

    If you’re adding a System Administrator user, you can stop here.

2.  If you’re adding a Standard User, create a permission set for Salesforce DX users if you don’t have one.
    1.  From Setup, enter Permission Sets in the Quick Find box, then select **Permission Sets**.
    2.  Click **New**.
    3.  Enter a label, API name, and description. The API name is a unique name used by the API and managed packages.
    4.  Select a user license option. If you plan to assign this permission set to multiple users with different licenses, select **None**.
    5.  Click **Save**. The permission set overview page appears. From here, you can navigate to the permissions you want to add or change for Salesforce DX. For the required permissions, see [Create and Assign a Permission Set to Developer Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm "To give full access to the Dev Hub org, create and assign a custom permission set that grants access to required Dev Hub objects. Or if you have the Developer license, assign the Developer permission set.").
3.  Apply the Salesforce DX permission set to the Standard User.
    1.  From Setup, enter Permission Sets in the Quick Find box, then select **Permission Sets**.
    2.  Select the Salesforce DX permission set.
    3.  In the permission set toolbar, click **Manage Assignments**.
    4.  Click **Add Assignments**.
    5.  Select the user to assign the permission set to.
    6.  Click **Assign**.
    7.  Click **Done**.

You can limit a user’s access by modifying the permissions.

## Related Topics

- Create and Assign a Permission Set to Developer Users (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm)
