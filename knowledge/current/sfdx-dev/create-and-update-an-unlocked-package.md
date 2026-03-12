---
title: "Create and Update an Unlocked Package"
domain: sfdx-dev
topic: create-and-update-an-unlocked-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.767Z
estimatedTokens: 347
keywords: [Unlocked, Package, you’re, ready, test, share, command, Metadata, Limits, Packages]
---

# Create and Update an Unlocked Package

> When you’re ready to test or share your package, use the sf package create command to create a package.

# Create and Update an Unlocked Package

When you’re ready to test or share your package, use the sf package create command to create a package.

If you are using a namespace, specify the package namespace in the sfdx-project.json file. To learn more, see [Understanding Namespaces](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_plan_namespaces.htm "A namespace is a 1-15 character alphanumeric identifier that distinguishes your package and its contents from other packages in your org.").

To create the package, change to the project directory. The name becomes the package alias, which is automatically added to the project file. You can choose to designate an active Dev Hub org user to receive email notifications for Apex gacks, and install, upgrade, or uninstall failures associated with your packages.

```

```

The output is similar to this example.

```

```

## Metadata Limits in Unlocked Packages

| Metadata in package | Limit |
| --- | --- |
| Number of Metadata Files | 10,000 files |
| Total Metadata File Size | 600 MB |

## Update the Package

To update the name, description, or the user to receive error notifications of an existing package, use this command.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

You can’t change the package namespace or package type after you create the package.

## Code Examples

```
sf package create --name "Expenser App" --package-type Unlocked --path  \
"expenser-main" --target-dev-hub my-hub --error-notification-username me@devhub.org
```

```
sfdx-project.json has been updated.
Successfully created a package. 0HoB00000004CzHKAU
=== Ids
NAME        VALUE
──────────  ──────────────────
Package Id  0HoB00000004CzHKAU
```

```
sf package update --package "Expense App" --name "Expense Manager App" \
--description "New Description" --error-notification-username me2@devhub.org
```

## Related Topics

- Understanding Namespaces (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_plan_namespaces.htm)
