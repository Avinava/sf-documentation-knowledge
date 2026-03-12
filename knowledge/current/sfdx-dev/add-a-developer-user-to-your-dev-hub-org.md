---
title: "Add a Developer User to Your Dev Hub Org"
domain: sfdx-dev
topic: add-a-developer-user-to-your-dev-hub-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.985Z
estimatedTokens: 387
keywords: [Add, Developer, User, Dev, Hub, Org, license, profile, assign, permission]
---

# Add a Developer User to Your Dev Hub Org

> Using a Developer license, add a user with the Developer profile and assign them the
		Developer permission set.

# Add a Developer User to Your Dev Hub Org

Using a Developer license, add a user with the Developer profile and assign them the Developer permission set.

The Developer license is a paid license that is designed for users whose role is to build customizations or applications. This license provides access to development tools and environments. It comes with one Developer sandbox, one scratch org, and access to the Dev Hub. In the production org, this license restricts access to standard and custom objects.

1.  Create a user in your Dev Hub org.
    1.  In Setup, enter Users in the Quick Find box, then select **Users**.
    2.  Click **New User**.
    3.  Fill out the form.
    4.  Select **Developer** for User License, and then **Developer** for Profile.
    5.  After filling out the remaining information, click **Save**.
2.  Assign the built-in Developer permission set to the user.
    1.  On the user's detail page, in the Permission Set Assignments related list, click **Edit Assignments**.
    2.  In the Available Permission Sets, add the Developer permission set and click **Save**.

The Developer permission set grants access to Dev Hub features and second-generation packages. For details, see [Create and Assign a Permission Set to Developer Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm "To give full access to the Dev Hub org, create and assign a custom permission set that grants access to required Dev Hub objects. Or if you have the Developer license, assign the Developer permission set.").

## Related Topics

- Create and Assign a Permission Set to Developer Users (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm)
