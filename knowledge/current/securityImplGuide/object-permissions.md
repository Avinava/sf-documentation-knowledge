---
title: "Object Permissions"
domain: securityImplGuide
topic: object-permissions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.294Z
estimatedTokens: 796
keywords: [Permissions, specify, base-level, access, users, edit, records]
---

# Object Permissions

> Object permissions specify the base-level access users have to create, read, edit, and
    delete records for each object.

# Object Permissions

Object permissions specify the base-level access users have to create, read, edit, and delete records for each object.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


We recommend that you use permission sets and permission set groups to manage your users’ permissions. Because you can reuse smaller permission set building blocks, you can avoid creating dozens or even hundreds of profiles for each user and job function.

Object permissions either respect or override sharing rules and settings. The following permissions specify the access that users have to objects.

| Permission | Description | Respects or Overrides Sharing? |
| --- | --- | --- |
| Read | Users can only view records of this type. | Respects sharing |
| Create | Users can read and create records. | Respects sharing |
| Edit | Users can read and update records. | Respects sharing |
| Delete | Users can read, edit, and delete records. | Respects sharing |
| View All | Users can view all records associated with this object, regardless of sharing settings. | Overrides sharing |
| Modify All | Users can read, edit, delete, transfer, and approve all records associated with this object, regardless of sharing settings.“Modify All” on documents allows access to all shared and public folders, but not the ability to edit folder properties or create folders. To edit folder properties and create folders, users must have the “Manage Public Documents” permission. | Overrides sharing |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

A profile or a permission set can have an object, such as Account, with a master-detail relationship. A broken permission dependency exists if the child object has permissions that the parent must have. Salesforce updates the parent object for a broken permission dependency on the first save action for the profile or permission set.

| If the child object has these permissions | These permissions are enabled on the parent object |
| --- | --- |
| Modify All OR View All | View All |
| View All OR Read | Read |

You can see which permission sets, permission set groups, and profiles grant access to an object in Object Manager. Select an object, and then click **Object Access** for details on where its object permissions are enabled.

-   **[“View All” and “Modify All” Permissions Overview](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_view_all_mod_all.htm)**
    The “View All” and “Modify All” permissions ignore sharing rules and settings, allowing administrators to grant access to records associated with a given object across the organization. “View All” and “Modify All” can be better alternatives to the “View All Data” and “Modify All Data” permissions.
-   **[Comparing Security Models](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_sharing_vs_obj_level_perms.htm)**
    To manage your users’ access to data, you can configure sharing settings, permissions, and other features.

## Related Topics

- “View All” and “Modify All” Permissions Overview (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_view_all_mod_all.htm)
- Comparing Security Models (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_sharing_vs_obj_level_perms.htm)
