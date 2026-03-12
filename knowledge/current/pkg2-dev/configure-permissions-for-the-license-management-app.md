---
title: "Configure Permissions for the License Management App"
domain: pkg2-dev
topic: configure-permissions-for-the-license-management-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.174Z
estimatedTokens: 464
keywords: [Configure, Permissions, License, Management, App, Determine, needs, access, LMA, Consider, permission, assign, user]
---

# Configure Permissions for the License Management App

> Determine who needs access to the License Management App (LMA), and set object
  permissions. Consider using a permission set to assign user permissions.

# Configure Permissions for the License Management App

Determine who needs access to the License Management App (LMA), and set object permissions. Consider using a permission set to assign user permissions.

Ensure that you:

-   Install the LMA.
-   Connect your packaging org (for 1GP) or your Dev Hub org (for 2GP) to the AppExchange Partner Console.
-   Associate your package with the LMA.

1.  Set object permissions for the license, package, and package version custom objects.

    | Custom Object | Object Permissions |
    | --- | --- |
    | License | To view license records:Assign READ permissionsTo modify license records:Assign READ and EDIT permissions |
    | Package | To view package records:Assign READ permissionsTo modify package records:Assign READ and EDIT permissions |
    | Package Version | To view package version records:Assign READ permissionsWe recommend leaving all package version records as read-only. |

2.  Set field-level security in user profiles or permission sets.

    | Custom Object | Field-Level Permissions |
    | --- | --- |
    | License | Make all fields read-only. |
    | Package | Make all fields read-only. |
    | Package Version | Make all fields read-only. |

3.  Add related lists to page layouts.

    | To enable... | Add the Licenses related list to the... |
    | --- | --- |
    | License managers to view the licenses associated with a particular lead | Lead page layout |
    | LMA users to view the licenses associated with a particular account | Account page layout |
    | LMA users to view the licenses associated with a particular contact | Contact page layout |


-   **[Assign Permissions to the Subscriber Support Console](atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_subscriber_org_permissions.htm)**
    Create a permission set to provide users access to the Subscriber Support Console.

## Related Topics

- Assign Permissions to the Subscriber Support Console (atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_subscriber_org_permissions.htm)
