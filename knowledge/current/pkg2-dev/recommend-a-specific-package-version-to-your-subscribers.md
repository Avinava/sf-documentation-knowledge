---
title: "Recommend a Specific Package Version to Your Subscribers"
domain: pkg2-dev
topic: recommend-a-specific-package-version-to-your-subscribers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.134Z
estimatedTokens: 586
keywords: [Recommend, Specific, Package, Version, Subscribers, choose, upgrade, released]
---

# Recommend a Specific Package Version to Your Subscribers

> You can choose to recommend that your subscribers upgrade to a specific, released
    version of your package.

# Recommend a Specific Package Version to Your Subscribers

You can choose to recommend that your subscribers upgrade to a specific, released version of your package.

When you set a package version as the recommended version, your subscribers see an **Upgrade to Recommended Version** option on the Installed Packages page in their org.

![The Upgrade to Recommended Version link on a subscriber's Installed Package page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fpkg2_recommended_version.png&folder=pkg2_dev)

To set a package’s recommended version, run the sf package update CLI command and specify the package version in the \--recommended-version-id flag. This example sets PackageA@1.0 as the recommended version.

```

```

Keep in mind these requirements and considerations for setting a recommended version:

-   You can set one recommended version per package.
-   Only released package versions can be set as the recommended version.
-   The recommended version is not required to be the latest, released version of a package.
-   When you update the recommended version, the new version that you set must be a descendant of the previous version in the [package ancestry](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_package_ancestor_intro.htm). If the package versions don’t share an ancestry tree, you’ll get an error when you try to update the package’s recommended version. To bypass this error, you can use the sf package update CLI command’s \--skip-ancestor-check flag.

#### See Also

-   [Release a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm "Each new second-generation managed package version is marked as beta when created. As you develop your package, you may create several package versions before you create a version that is ready to be released and distributed. Only released package versions can be listed on AppExchange and installed in customer orgs.")

-   [*Salesforce CLI Command Reference*: package update](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_update_unified "Salesforce CLI Command Reference: package update - HTML (New Window)")

## Code Examples

```
sf package update --package 0Ho.. --target-dev-hub devhub@example.com --recommended-version-id PackageA@1.0
```

## Related Topics

- Release a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm)
