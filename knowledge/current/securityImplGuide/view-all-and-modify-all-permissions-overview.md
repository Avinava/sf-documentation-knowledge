---
title: "“View All” and “Modify All” Permissions Overview"
domain: securityImplGuide
topic: view-all-and-modify-all-permissions-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:45.308Z
estimatedTokens: 906
keywords: [“View, All”, “Modify, Permissions, ignore, sharing, rules, settings, allowing, administrators, grant, access, records, associated, across]
---

# “View All” and “Modify All” Permissions Overview

> The “View All” and “Modify All” permissions ignore sharing rules and settings, allowing
    administrators to grant access to records associated with a given object across the
    organization. “View All” and “Modify All” can be better alternatives to the “View All Data” and
    “Modify All Data” permissions.

# “View All” and “Modify All” Permissions Overview

The “View All” and “Modify All” permissions ignore sharing rules and settings, allowing administrators to grant access to records associated with a given object across the organization. “View All” and “Modify All” can be better alternatives to the “View All Data” and “Modify All Data” permissions.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: All Editions |


Be aware of the following distinctions between the permission types.

| Permissions | Used for | Users who need them |
| --- | --- | --- |
| View AllModify All | Delegation of object permissions. | Delegated administrators who manage records for specific objects |
| View All DataModify All Data | Managing all data in an organization; for example, data cleansing, deduplication, mass deletion, mass transferring, and managing record approvals.Users with View All Data (or Modify All Data) permission can view (or modify) all apps and data, even if the apps and data aren’t shared with them. | Administrators of an entire organization.If a user requires access only to metadata for deployments, you can enable the Modify Metadata Through Metadata API Functions permission. This permission gives such users the access they need for deployments without providing access to org data. For details, see “Modify Metadata Through Metadata API Functions Permission” in Salesforce Help. |
| View All Users | Viewing all users in the organization. Grants Read access to all users, so that you can see their user record details, see them in searches, list views, and so on. | Users who need to see all users in the organization. Useful if the organization-wide default for the user object is Private. Administrators with the Manage Users permission are automatically granted the View All Users permission. |
| View All Lookup Record Names | Viewing record names in all lookup and system fields. | Administrators and users who need to see all information about a record, such as its related records and the Owner, Created By, and Last Modified By fields. This permission only applies to lookup record names in list views and record detail pages. |

## Considerations

-   View All Data, Modify All Data, and View All or Modify All for a given object don’t override field-level security. Users must still have field permissions to read or edit each field on an object.
-   If you have a large number of objects, enabling or disabling the View All Data or Modify All Data permissions in a profile or permission set can time out. To avoid performance issues, we recommend that you use the Metadata API instead of making these updates in Setup.
-   View All and Modify All are not available for ideas, price books, article types, and products.
-   View All and Modify All allow for delegation of object permissions only. To delegate user administration and custom object administration duties, define delegated administrators.

-   View All for a given object doesn't automatically give access to its standard detail objects and vice versa. Users must have Read access granted via sharing to see any associated standard child records to the parent record, or the parent record itself. However, View All for a given object does give access to its child custom object records without access being granted via sharing.
-   View All Users is available if your organization has User Sharing, which controls user visibility in the organization.
-   View All Data, Modify All Data, and View All or Modify All for a given object can't be assigned to external users.
