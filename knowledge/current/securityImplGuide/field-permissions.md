---
title: "Field Permissions"
domain: securityImplGuide
topic: field-permissions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.284Z
estimatedTokens: 1028
keywords: [Permissions, field-level, security, lets, specify, whether, users, view, edit]
---

# Field Permissions

> Field permissions, or field-level security, lets you specify whether users can view or
    edit each field for an object.

# Field Permissions

Field permissions, or field-level security, lets you specify whether users can view or edit each field for an object.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


Your Salesforce org contains lots of data, but you probably don’t want every field accessible to everyone. For example, your payroll manager probably wants to keep salary fields accessible only to select employees. By setting field permissions, you can restrict user access in:

-   Detail and edit pages
-   Related lists
-   List views
-   Reports
-   Connect Offline
-   Email and mail merge templates
-   Custom links
-   Experience Cloud sites and portals
-   Synchronized data
-   Imported data
-   Salesforce APIs

We recommend that you use permission sets and permission set groups to manage your users’ permissions. Because you can reuse smaller permission set building blocks, you can avoid creating dozens or even hundreds of profiles for each user and job function.

In permission sets and the enhanced profile user interface, the setting labels differ from those in the original profile user interface and in field-level security pages for customizing fields.

| Access Level | Enabled Settings in Permission Sets and Enhanced Profile User Interface | Enabled Settings in Original Profile and Field-Level Security Interfaces |
| --- | --- | --- |
| Users can read and edit the field. | Read and Edit | Visible |
| Users can read but not edit the field. | Read | Visible and Read-Only |
| Users can't read or edit the field. | None | None |

To further customize field access, you can

-   Organize the fields on detail and edit pages by creating page layouts. Page layouts and field-level security settings together determine which fields a user sees. The most restrictive field access settings of the two always applies. For example, you can have a field that’s required in a page layout but is read-only in the field-level security settings. The field-level security overrides the page layout, so the field remains read-only.

    Use field-level security to restrict users' access to fields, and then use page layouts to organize detail and edit pages within tabs. This approach reduces the number of page layouts for you to maintain.

-   Customize search layouts to set the fields that appear in search results, in lookup dialog search results, and in the key lists on tab home pages. To hide a field that's not protected by field-level security, omit it from the layout.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Roll-up summary and formula fields are read-only on detail pages and not available on edit pages. They can also be visible to users even though they reference fields that your users can’t see. Einstein Insights can also be visible to the user even though the insight references fields that your users can’t see. Universally required fields appear on edit pages regardless of field-level security.

The relationship group wizard allows you to create and edit relationship groups regardless of field-level security.

-   **[Set Field Permissions in Permission Sets and Profiles](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_fls.htm)**
    Field permissions specify the access level for each field in an object.
-   **[Set Field-Level Security for a Field on All Permission Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_fields_fls_permsets.htm)**
    Set field-level security for a field on permission sets. This option is an alternative to setting field-level security for a field on profiles.
-   **[Classic Encryption for Custom Fields](atlas.en-us.securityImplGuide.meta/securityImplGuide/fields_about_encrypted_fields.htm)**
    Restrict other Salesforce users from seeing custom text fields that you want to keep private. Only users with the View Encrypted Data permission can see data in encrypted custom text fields.

## Related Topics

- Set Field Permissions in Permission Sets and Profiles (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_fls.htm)
- Set Field-Level Security for a Field on All Permission Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_fields_fls_permsets.htm)
- Classic Encryption for Custom Fields (atlas.en-us.securityImplGuide.meta/securityImplGuide/fields_about_encrypted_fields.htm)
