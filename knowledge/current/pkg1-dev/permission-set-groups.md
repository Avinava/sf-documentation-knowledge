---
title: "Permission Set Groups"
domain: pkg1-dev
topic: permission-set-groups
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.587Z
estimatedTokens: 414
keywords: [Permission, Groups, organize, include, second-generation, managed, packages, updated, upgrade, package]
---

# Permission Set Groups

> You can organize permission sets into groups and include them in first and
  second-generation managed packages. Permission set groups can be updated when you upgrade the
  package.

# Permission Set Groups

You can organize permission sets into groups and include them in first and second-generation managed packages. Permission set groups can be updated when you upgrade the package.

Keep these considerations in mind when you organize permission sets into groups to include in your managed packages:

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg1_dev)

#### Important

You can't include object permissions for standard objects in managed packages. During package installation, all object permissions for standard objects are ignored, and aren't installed in the org.

Also:

-   You can’t add permission sets constrained by a permission set license to managed or unmanaged packages.
-   You can only package permissions for metadata that’s included in your package.
-   You can add or remove permission sets in permission set groups as part of a package upgrade. Subscribers can also modify the permission set groups by muting permissions or adding or removing local permissions sets. Subscribers can't remove included permission sets from the permission set groups in the managed package.

#### See Also

-   [*Salesforce Help*: Create a Permission Set Group](https://help.salesforce.com/s/articleView?id=platform.perm_set_groups_create.htm&type=5&language=en_US "Salesforce Help: Create a Permission Set Group - HTML (New Window)")

-   [*Salesforce Help*: Permission Set Groups Considerations](https://help.salesforce.com/s/articleView?id=platform.perm_set_groups_considerations.htm&type=5&language=en_US "Salesforce Help: Permission Set Groups Considerations - HTML (New Window)")
