---
title: "View Details about Your Converted 2GP Package"
domain: pkg1-dev
topic: view-details-about-your-converted-2gp-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.502Z
estimatedTokens: 380
keywords: [View, Converted, 2GP, Package, you’ve, 1GP, two, Salesforce, CLI, commands, retrieve, packages]
---

# View Details about Your Converted 2GP Package

> So you’ve converted your 1GP package to a 2GP package. You can use one of two Salesforce
  CLI commands to retrieve details about your 2GP packages.

# View Details about Your Converted 2GP Package

So you’ve converted your 1GP package to a 2GP package. You can use one of two Salesforce CLI commands to retrieve details about your 2GP packages.

To see details about the new managed 2GP package, run:

```

```

In the verbose command output, there's a column labeled Converted From Package Id. When that field is populated it indicates that the package was originally created using 1GP, and has been converted to 2GP. The 033 ID that displays in that column maps to the original 1GP package.

To see details about the new managed 2GP package version, run:

```

```

If the value in the Released column of the command output is false, this indicates that the package is a beta package version, and you must promote the package to the managed-released state before you migrate the package. See [Get Ready to Promote and Release a Second-Generation Managed Package Version](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_get_ready_promote.htm).

The package convert command creates a new managed 2GP package, and a new managed 2GP package version, and both are now associated with your Dev Hub org. The association between the Dev Hub org and your package can’t be changed. And you can't associate the package with a second, separate Dev Hub org. This means any subsequent package conversions you initiate for this package, must be associated with the Dev Hub org you specified the first time you converted a particular package.

## Code Examples

```
sf package list --verbose
```

```
sf package version list
```
