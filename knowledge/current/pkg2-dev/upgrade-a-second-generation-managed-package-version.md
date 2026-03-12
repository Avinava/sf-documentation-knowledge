---
title: "Upgrade a Second-Generation Managed Package Version"
domain: pkg2-dev
topic: upgrade-a-second-generation-managed-package-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.075Z
estimatedTokens: 498
keywords: [Upgrade, Second-Generation, Managed, Package, Version, occurs, install, new, org, previous, installed]
---

# Upgrade a Second-Generation Managed Package Version

> A package upgrade occurs when you install a new package version into an org that has a
    previous version of that package installed.

# Upgrade a Second-Generation Managed Package Version

A package upgrade occurs when you install a new package version into an org that has a previous version of that package installed.

When you perform a package upgrade, here’s what to expect for metadata changes.

-   Metadata introduced in the new version is installed as part of the upgrade.
-   Metadata modified in the new version is updated as part of the upgrade.
-   Metadata removed in the new version is either deprecated or deleted as part of the upgrade.

To upgrade a package, use the package install CLI command

```

```

For more examples and details about this command, see [package install](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_install_unified) in the Salesforce CLI Command Reference.

Beta packages aren’t upgradeable. To install a new beta package or released version, first uninstall the beta package.

To upgrade a package version, the new version must be a direct descendent of the package version installed in your org. See [Specify a Package Ancestor in the Project File for a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_ancestors.htm "When you create a second-generation managed package version you specify a package ancestor in your sfdx-project.json file. We require that the package ancestor you specify is the highest promoted package version number for that package. You can either update the ancestor version number each time you create a package version, or you can use a keyword.") for more information.

#### See Also

-   [*Salesforce CLI Command Reference* package install](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_install_unified "Salesforce CLI Command Reference package install - HTML (New Window)")

## Code Examples

```
sf package install --package 04t... --target-org me@example.com
```

## Related Topics

- Specify a Package Ancestor in the Project File for a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_ancestors.htm)
