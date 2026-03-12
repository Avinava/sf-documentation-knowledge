---
title: "Delete an Unlocked Package or Package Version"
domain: sfdx-dev
topic: delete-an-unlocked-package-or-package-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.726Z
estimatedTokens: 304
keywords: [Unlocked, Package, Version, packages, versions, longer]
---

# Delete an Unlocked Package or Package Version

> Use the sf package version delete and sf package delete to delete packages and package versions that
    you no longer need.

# Delete an Unlocked Package or Package Version

Use the sf package version delete and sf package delete to delete packages and package versions that you no longer need.

To delete a package or package version, users need the Delete Second-Generation Packages user permission. Before you delete a package, first delete all associated package versions.

| Package Type | Can I delete beta packages and package versions? | Can I delete released packages and package versions? |
| --- | --- | --- |
| Second-Generation Managed Packages | Yes | No |
| Unlocked Packages | Yes | Yes |

**Considerations for Deleting a Package or Package Version**

-   Deletion is permanent.
-   Attempts to install a deleted package version will fail.
-   Before deleting, ensure that the package or package version isn’t referenced as a dependency.

**Examples:**

```

```

```

```

```

```

```

```

These CLI commands can’t be used with first-generation managed packages or package versions. To delete a first-generation managed package, see [View Package Details](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/isv_viewing_package_details.htm) in the First-Generation Managed Packaging Developer Guide.

## Code Examples

```
$ sf package delete -p "Your Package Alias"
```

```
$ sf package delete -p 0Ho...
```

```
$ sf package version delete -p "Your Package Version Alias"
```

```
$ sf package version delete -p 04t...
```
