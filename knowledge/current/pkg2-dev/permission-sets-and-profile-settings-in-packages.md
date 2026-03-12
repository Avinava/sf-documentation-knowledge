---
title: "Permission Sets and Profile Settings in Packages"
domain: pkg2-dev
topic: permission-sets-and-profile-settings-in-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:26.128Z
estimatedTokens: 1673
keywords: [Permission, Profile, Settings, Packages, groups, ways, grant, permissions, access, package, setting, don’t, support, specific, instances]
---

# Permission Sets and Profile Settings in Packages

> Permission sets, permission set groups, and profile settings are all ways to grant
    permissions and other access settings to a package. Only use a profile setting if permission
    sets don’t support the specific access you need to grant. In all other instances, use permission
    sets or permission set groups.

# Permission Sets and Profile Settings in Packages

Permission sets, permission set groups, and profile settings are all ways to grant permissions and other access settings to a package. Only use a profile setting if permission sets don’t support the specific access you need to grant. In all other instances, use permission sets or permission set groups.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg2_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Available in: Enterprise, Performance, Unlimited, and Developer Editions |
| --- |
| Permission sets are available in: Contact Manager, Professional, Group, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| Behavior | Permission Sets | Profile Settings |
| --- | --- | --- |
| What permissions and settings are included? | Assigned custom appsCustom object permissionsExternal object permissionsCustom field permissionsCustom metadata types permissionsCustom permissionsCustom settings permissionsCustom tab visibility settingsApex class accessVisualforce page accessExternal data source accessRecord typesNoteAlthough permission sets include standard tab visibility settings, these settings can’t be packaged as permission set components.If a permission set includes an assigned custom app, it’s possible that a subscriber can delete the app. In that case, when the package is later upgraded, the assigned custom app is removed from the permission set. | Assigned custom appsAssigned connected appsTab settingsPage layout assignmentsRecord type assignmentsCustom field permissionsCustom metadata type permissionsCustom object permissionsCustom permissionsCustom settings permissionsExternal object permissionsApex class accessVisualforce page accessExternal data source access |
| Can they be upgraded in managed packages? | Yes. | Profile settings are applied to existing profiles in the subscriber’s org on install or upgrade. Only permissions related to new components created as part of the install or upgrade are applied. |
| Can subscribers edit them? | No. | Yes. |
| Can you clone or create them? | Yes. However, if a subscriber clones a permission set or creates one that’s based on a packaged permission set, it isn’t updated in subsequent upgrades. Only the permission sets included in a package are upgraded. | Yes. Subscribers can clone any profile that includes permissions and settings related to packaged components. |
| Do they include standard object permissions? | No. Also, you can’t include object permissions for a custom object in a master-detail relationship where the master is a standard object. | No. |
| Do they include user permissions? | No. | No. |
| Are they included in the installation wizard? | No. Subscribers must assign permission sets after installation. | Yes. Profile settings are applied to existing profiles in the subscriber’s org on install or upgrade. Only permissions related to new components created as part of the install or upgrade are applied. Affected components (listed with the developerName) can include new:Fields (CustomField)Objects (CustomObject),Tabs (CustomTab)Apps (CustomApplication)Apex classes (ApexClass)Apex pages (ApexPage)Layouts (Layout)Record types (RecordType)Custom permissions (CustomPermission)Custom settings (CustomSetting)Custom metadata types (CustomMetadata) |
| What are the user license requirements? | A permission set is only installed if the subscriber org has at least one user license that matches the permission set. For example, permission sets with the Salesforce Platform user license aren’t installed in an org that has no Salesforce Platform user licenses. If a subscriber later acquires a license, the subscriber must reinstall the package to get the permission sets associated with the newly acquired license.Permission sets with no user license are always installed. If you assign a permission set that doesn’t include a user license, the user’s existing license must allow its enabled settings and permissions. Otherwise, the assignment fails. | None. In a subscriber org, the installation overrides the profile settings, not their user licenses. |
| How are they assigned to users? | Subscribers must assign packaged permission sets after installing the package. | Profile settings are applied to existing profiles. |
| Can permission sets in an extension package grant access to objects installed in a base package? | A permission set in the extension package can't modify access permissions for either the parent objects in the base package or the associated child objects in the extension package. | Same behavior as for permission sets. |

## Best Practices

-   If users need access to apps, standard tabs, page layouts, and record types, don't use permission sets as the sole permission-granting model for your app.
-   Create packaged permission sets that grant access to the custom components in a package, but not standard Salesforce components.

-   **[Permission Set Groups](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_permission_set_groups.htm)**
    You can organize permission sets into groups and include them in first and second-generation managed packages. Permission set groups can be updated when you upgrade the package.
-   **[Custom Profile Settings](atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_creating_custom_profile.htm)**
    Create profiles to define how users access objects and data, and what they can do within your app. For example, profiles specify custom object permissions and the tab visibility for your app. When installing or upgrading your app, admins can associate your custom profiles with existing non-standard profiles. Permissions in your custom profile that are related to new components created as part of the install or upgrade are added to the existing profile. The security settings associated with standard objects and existing custom objects in an installer’s organization are unaffected.
-   **[How We Handle Profile Settings in Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_profiles.htm)**
    During package version creation for unlocked or second-generation managed packages, the build system inspects the contents of all profiles in the DX project directory, not just the directory specified in the path, and preserves only the profile settings that are directly related to the metadata in the package. The profile itself, and any profile settings unrelated to the package’s metadata are discarded from the package.

## Related Topics

- Permission Set Groups (atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_permission_set_groups.htm)
- Custom Profile Settings (atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_creating_custom_profile.htm)
- How We Handle Profile Settings in Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_profiles.htm)
