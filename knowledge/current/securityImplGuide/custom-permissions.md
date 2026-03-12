---
title: "Custom Permissions"
domain: securityImplGuide
topic: custom-permissions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.628Z
estimatedTokens: 528
keywords: [Custom, Permissions, give, users, access, processes, apps]
---

# Custom Permissions

> Use custom permissions to give users access to custom processes or apps.

# Custom Permissions

Use custom permissions to give users access to custom processes or apps.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Group, Professional, Enterprise, Performance, Unlimited, and Developer EditionsIn Group and Professional Edition organizations, you can’t create or edit custom permissions, but you can install them as part of a managed package. |


In Salesforce, many features require access checks that specify which users can access certain functions. Permission set and profiles settings include built-in access settings for many entities, like objects, fields, tabs, and Visualforce pages. However, permission sets and profiles don’t include access for some custom processes and apps. For example, in a time-off manager app, users might need to submit time-off requests, but only a small set of users approves time-off requests. You can use custom permissions for these types of controls.

Custom permissions let you define access checks that can be assigned to users via permission sets or profiles, similar to how you assign user permissions and other access settings. For example, you can define access checks in Apex that make a button on a Visualforce page available only if a user has the appropriate custom permission.

You can query custom permissions in these ways.

-   To determine which users have access to a specific custom permission, use Apex and do something like the following.

    ```

    ```

-   To determine what custom permissions users have when they authenticate in a connected app, reference the user's Identity URL, which Salesforce provides along with the access token for the connected app.

-   **[Create Custom Permissions](atlas.en-us.securityImplGuide.meta/securityImplGuide/custom_perms_create.htm)**
    Create custom permissions to give users access to custom processes or apps.
-   **[Edit Custom Permissions](atlas.en-us.securityImplGuide.meta/securityImplGuide/custom_perms_edit.htm)**
    Edit custom permissions that give users access to custom processes or apps.

## Code Examples

```
Boolean hasCustomPermission = FeatureManagement.checkPermission('your_custom_permission_api_name');
```

## Related Topics

- Create Custom Permissions (atlas.en-us.securityImplGuide.meta/securityImplGuide/custom_perms_create.htm)
- Edit Custom Permissions (atlas.en-us.securityImplGuide.meta/securityImplGuide/custom_perms_edit.htm)
