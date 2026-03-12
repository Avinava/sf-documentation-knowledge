---
title: "Upgrade a Version of an Unlocked Package"
domain: sfdx-dev
topic: upgrade-a-version-of-an-unlocked-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.797Z
estimatedTokens: 935
keywords: [Upgrade, Version, Unlocked, Package, occurs, install, new, org, previous, installed]
---

# Upgrade a Version of an Unlocked Package

> A package upgrade occurs when you install a new package version into an org that has a
    previous version of that package installed.

# Upgrade a Version of an Unlocked Package

A package upgrade occurs when you install a new package version into an org that has a previous version of that package installed.

To upgrade a package, use the package install CLI command

```

```

For more examples and details about this command, see [package install](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_install_unified) in the Salesforce CLI Command Reference.

When you perform a package upgrade, here’s what to expect for metadata changes.

When you upgrade to a new unlocked package version, you choose whether to require successful compilation of all Apex in the org and package (\--apex-compile all), or only the Apex in the package (\--apex-compile package).

-   Metadata introduced in the new version is installed as part of the upgrade.
-   If an upgraded component has the same API name as a component already in the target org, the component is overwritten with the changes.
-   If a component in the upgrade was deleted from the target org, the component is re-created during the upgrade.
-   Metadata that was removed in the new package version is also removed from the target org as part of the upgrade. Removed metadata is metadata not included in the current package version install, but present in the previous package version installed in the target org. If metadata is removed before the upgrade occurs, the upgrade proceeds normally. Some examples where metadata is deprecated and not deleted are:
    -   User-entered data in custom objects and fields are deprecated and not deleted. Admins can export such data if necessary.
    -   An object such as an Apex class is deprecated and not deleted if it’s referenced in a Lightning component that is part of the package.
-   In API version 45.0 and later (Salesforce CLI version 45.0.9 or later), you can specify what happens to removed metadata during package upgrade. Use the sf package install command’s \-t | \--upgrade-type parameter, specifying one of these values:
    -   Delete specifies to delete all removed components, except for custom objects and custom fields, that don’t have dependencies.
    -   DeprecateOnly specifies that all removed components must be marked deprecated. The removed metadata exists in the target org after package upgrade, but is shown in the UI as deprecated from the package. This option is useful when migrating metadata from one package to another.
    -   Mixed (the default) specifies that some removed components are deleted, and other components are marked deprecated. For more information on hard-deleted components, see [Hard-Deleted Components in Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_hard_deleted_components.htm "When these components are removed from an unlocked package, they're hard deleted from the target install org during the package upgrade.").

It's possible to install a lower package version on top of a higher package version, but seriously consider this scenario before attempting it. This is not the same as a rollback, which isn't possible.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

For package installs into production orgs, or any org that has [Apex Compile on Deploy enabled](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_deploying.htm), the platform compiles all Apex in the org after the package install or upgrade operation completes. This approach assures that package installs and upgrades don’t impact the performance of an org, and is done even if \--apex-compile package is specified.

## Code Examples

```
sf package install --package 04t... --target-org me@example.com
```

## Related Topics

- Hard-Deleted Components in Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_hard_deleted_components.htm)
