---
title: "Assign a Permission Set"
domain: sfdx-dev
topic: assign-a-permission-set
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.005Z
estimatedTokens: 415
keywords: [Assign, Permission, creating, scratch, org, deploying, source, sometimes, give, users, access, application, especially, app, custom]
---

# Assign a Permission Set

> After creating your scratch org and deploying the source, you must sometimes give your
  users access to your application, especially if your app contains custom objects.

# Assign a Permission Set

After creating your scratch org and deploying the source, you must sometimes give your users access to your application, especially if your app contains custom objects.

1.  If needed, create the permission set in the scratch org.
    1.  Open the scratch org in your browser.

        ```

        ```

    2.  From Setup, enter Perm in the Quick Find box, then select **Permission Sets**.
    3.  Click **New**.
    4.  Enter a descriptive label for the permission set, then click **Save**.
    5.  Under Apps, click **Assigned Apps** | **Edit**.
    6.  Under Available Apps, select your app, then click **Add** to move it to Enabled Apps.
    7.  Click **Save**.
2.  Retrieve the permission set from the scratch org to your project.

    ```

    ```

3.  Assign the permission set to one or more users of the org that contains the app:

    ```

    ```

    The target username must have permission to assign a permission set. Use the \--on-behalf-of flag to assign a permission set to non-administrator users.

    ```

    ```


You can also assign permission set licenses to users using the org assign permsetlicense command. It works similarly to the org assign permset command.

#### See Also

-   [*Salesforce Help*: Permission Sets](https://help.salesforce.com/s/articleView?id=platform.perm_sets_overview.htm&type=5&language=en_US "Salesforce Help: Permission Sets - HTML (New Window)")

-   [*Salesforce Help*: Permission Set Licenses](https://help.salesforce.com/s/articleView?id=platform.users_permissionset_licenses_overview.htm&type=5&language=en_US "Salesforce Help: Permission Set Licenses - HTML (New Window)")

## Code Examples

```
sf org open --target-org <scratch org username/alias>
```

```
sf project retrieve start --target-org <scratch org username/alias>
```

```
sf org assign permset --name <permset_name> --target-org <username/alias>
```

```
sf org assign permset --name <permset_name> --target-org <admin-user> --on-behalf-of <non-admin-user>
```
