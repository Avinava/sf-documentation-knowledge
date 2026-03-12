---
title: "Create a Second-Generation Managed Package"
domain: pkg2-dev
topic: create-a-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.025Z
estimatedTokens: 543
keywords: [Second-Generation, Managed, Package, top-level, container, holds, app, associated, you’re, ready, test, share, Salesforce, CLI, command]
---

# Create a Second-Generation Managed Package

> A package is a top-level container that holds important details about the app or
        package: the package name, description, and associated namespace. When you’re ready to test
        or share your package, use the sf package create
        Salesforce CLI command to create a package.

# Create a Second-Generation Managed Package

A package is a top-level container that holds important details about the app or package: the package name, description, and associated namespace. When you’re ready to test or share your package, use the sf package create Salesforce CLI command to create a package.

To create a package, change to the project directory in the CLI. The package name you enter becomes the package alias, and is automatically added to the project file. You can choose to designate an active Dev Hub org user to receive email notifications for Apex gacks, and install, upgrade, or uninstall failures associated with your packages. For definitions of each parameter shown here, see [sf package create](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_create_unified) in the Salesforce CLI Reference Guide.

```

```

The package details you supply when you create a package are automatically added to your sfdx-project.json [project configuration file](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm "HTML (New Window)").

## Metadata Limits in Second-Generation Managed Packages

| Metadata in package | Limit |
| --- | --- |
| Number of Metadata Files | 10,000 files |
| Total Metadata File Size | 600 MB |

## Update Details about a Package

To update the name or description of an existing package, use this command.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

You can’t change the package namespace or package type after you create the package.

After you promote at least one package version to the released state, you can also use the sf package update CLI command to recommend a specific version of the package to your subscribers. See [Recommend a Specific Package Version to Your Subscribers](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_recommended_version.htm "You can choose to recommend that your subscribers upgrade to a specific, released version of your package.") for more information.

## Code Examples

```
sf package create --name "Expenser App" --package-type Managed \
--path "expenser-main" --target-dev-hub my-hub --error-notification-username \
me@devhub.org
```

```
sf package update --package "Expense App" --name "Expense Manager App" \
--description "The Winter ’21 release is packed with an exciting set of features." \
--error-notification-username me2@devhub.org
```

## Related Topics

- Recommend a Specific Package Version to Your Subscribers (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_recommended_version.htm)
