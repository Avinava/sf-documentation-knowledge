---
title: "Add Salesforce DX Users"
domain: sfdx-dev
topic: add-salesforce-dx-users
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.982Z
estimatedTokens: 784
keywords: [Add, Salesforce, Users, System, administrators, access, Dev, Hub, org, enable, they, scratch, orgs, developer-specific, features]
---

# Add Salesforce DX Users

> System administrators can access the Dev Hub org by default. You can enable more users
    to access the Dev Hub org so that they can create scratch orgs and use other developer-specific
    features.

# Add Salesforce DX Users

System administrators can access the Dev Hub org by default. You can enable more users to access the Dev Hub org so that they can create scratch orgs and use other developer-specific features.

Your developer users can use Salesforce DX with the Salesforce, and Salesforce Platform standard user license, or you can assign them the Developer license, or the Salesforce Limited Access - Free license instead.

If your org has Developer licenses, you can add users with the Developer profile and assign them the provided Developer permission set. Alternatively, you can add users with the Standard User or System Administrator profiles. For a standard user, you must create a permission set with the required Dev Hub permissions. We recommend that you avoid adding users as system administrators unless their work requires that level of authority and not just Dev Hub org access.

-   **[Determine Which License to Assign to Dev Hub Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/dev_hub_license.htm)**
    Which license type you assign to developer users depends on how much access they require in the Dev Hub org. If they require full administrative access, you can assign the Salesforce or Salesforce Platform standard user license. If you want to limit access to only specific features, Salesforce provides two developer license options
-   **[Add a System Administrator or Standard User to Your Dev Hub Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users_standard.htm)**
    Add system administrator users only if their work requires that level of authority. Otherwise, add standard users and create a permission set with the required Salesforce DX permissions.
-   **[Add a Developer User to Your Dev Hub Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users_developer.htm)**
    Using a Developer license, add a user with the Developer profile and assign them the Developer permission set.
-   **[Add a Limited Access User to Your Dev Hub Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_free_license_users.htm)**
    If your users only require access to the Dev Hub, the Salesforce Limited Access - Free license is a good approach. The Salesforce Limited Access - Free license is available by request. After this license is provisioned add a user with this license and the Limited Access user profile, and then create and assign them a permission set to the required Dev Hub objects.
-   **[Create and Assign a Permission Set to Developer Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm)**
    To give full access to the Dev Hub org, create and assign a custom permission set that grants access to required Dev Hub objects. Or if you have the Developer license, assign the Developer permission set.

#### See Also

-   [Org Shape Permissions](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_permissions.htm "A Salesforce admin for the Dev Hub org must assign permissions to users who plan to create org shapes, or create scratch orgs based on an org shape. If you already have a permission set for Salesforce DX users, you can update it to include access.")

## Related Topics

- Determine Which License to Assign to Dev Hub Users (atlas.en-us.sfdx_dev.meta/sfdx_dev/dev_hub_license.htm)
- Add a System Administrator or Standard User to Your Dev Hub Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users_standard.htm)
- Add a Developer User to Your Dev Hub Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users_developer.htm)
- Add a Limited Access User to Your Dev Hub Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_free_license_users.htm)
- Create and Assign a Permission Set to Developer Users (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_permission_set.htm)
- Org Shape Permissions (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_permissions.htm)
