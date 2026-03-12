---
title: "Add a Limited Access User to Your Dev Hub Org"
domain: pkg2-dev
topic: add-a-limited-access-user-to-your-dev-hub-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.181Z
estimatedTokens: 357
keywords: [Add, Limited, Access, User, Dev, Hub, Org, Provide, developers, Salesforce, development, tools, adding, Free, license]
---

# Add a Limited Access User to Your Dev Hub Org

> Provide your developers access to the Dev Hub and Salesforce DX development tools by
  adding a user with Salesforce Limited Access - Free license and the Limited Access user profile in
  your Dev Hub org. Then create and assign them a permission set to the required Dev Hub
  objects.

# Add a Limited Access User to Your Dev Hub Org

Provide your developers access to the Dev Hub and Salesforce DX development tools by adding a user with Salesforce Limited Access - Free license and the Limited Access user profile in your Dev Hub org. Then create and assign them a permission set to the required Dev Hub objects.

The Salesforce Limited Access - Free is designed for users whose role is to build customizations or applications. This license provides access to the Dev Hub, development tools, and environments. In the production org, this license restricts access to standard and custom objects.

1.  Create a user in your Dev Hub org.
    1.  In Setup, enter Users in the Quick Find box, then select **Users**.
    2.  Click **New User**.
    3.  Fill out the form.
    4.  Select **Salesforce Limited Access - Free** for User License, and then **Limited Access User** for Profile.
    5.  After filling out the remaining information, click **Save**.
2.  Create a permission set that provides your developer users with access to the required Dev Hub objects. For details, see [Create and Assign a Permission Set for Developer Users](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm) or [Assign Second-Generation Managed Packaging User Permissions](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_user_permission.htm).
