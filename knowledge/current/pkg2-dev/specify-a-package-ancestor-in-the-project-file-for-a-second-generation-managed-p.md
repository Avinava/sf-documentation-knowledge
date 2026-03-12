---
title: "Specify a Package Ancestor in the Project File for a Second-Generation
      Managed Package"
domain: pkg2-dev
topic: specify-a-package-ancestor-in-the-project-file-for-a-second-generation-managed-p
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.995Z
estimatedTokens: 883
keywords: [Specify, Package, Ancestor, Project, File, Second-Generation, Managed, version, sfdx-project.json, require, highest, promoted, number, either, time]
---

# Specify a Package Ancestor in the Project File for a Second-Generation
      Managed Package

> When you create a second-generation managed package version you specify a package
    ancestor in your sfdx-project.json file. We require that the package
    ancestor you specify is the highest promoted package version number for that package. You can
    either update the ancestor version number each time you create a package version, or you can use
    a keyword.

# Specify a Package Ancestor in the Project File for a Second-Generation Managed Package

When you create a second-generation managed package version you specify a package ancestor in your sfdx-project.json file. We require that the package ancestor you specify is the highest promoted package version number for that package. You can either update the ancestor version number each time you create a package version, or you can use a keyword.

Here are three different ways to set the package ancestor.

## Use the HIGHEST Keyword (Recommended)

Use the keyword HIGHEST with either the ancestorId or ancestorVersion attribute in the sfdx-project.json file. This keyword automatically sets the ancestor to the highest promoted package version number.

```

```

This keyword makes it easy to set your package ancestor to use linear versioning, until you have a reason to break from linear versioning.

## Use the Ancestor Version Attribute

Set the ancestorVersion attribute in the sfdx-project.json file to the package version’s major.minor.patch number. This approach requires you to update the ancestor version number every time the major, minor, or patch value changes.

```

```

## Use the Ancestor ID Attribute

Set the ancestorId attribute in the sfdx-project.json file to either the 04t ID or the package version’s alias. This approach requires you to update the ancestor version number every time you create a package version.

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Only package versions that have been promoted to managed-released state, can be listed as an ancestor.

## Override Linear Package Ancestry Behavior

To break from linear package versioning, specify a package ancestor that isn’t the highest promoted package version and use the Salesforce CLI parameter \--skip-ancestor-check when you create a package version.

```

```

The CLI parameter indicates that you’re intentionally choosing to specify a package version that isn’t the highest promoted package version.

You can choose to not specify a package ancestor by using the keyword, NONE, with either the ancestorId or ancestorVersion attribute in the sfdx-project.json file.

```

```

Because package ancestors determine package upgrade paths, existing customers can’t upgrade to a package version that is created without a specified ancestor. Use NONE if you don’t plan to promote the package version you’re creating.

If you’ve already promoted a previous package version, and you set the ancestor to NONE on a new package version associated with the same package, include \--skip-ancestor-check when you create that package version. When you create your first package version, you can also set the ancestor to NONE and specify \--skip-ancestor-check.

## What to Remember about Package Ancestry

-   Package ancestry determines whether existing packages can be upgraded to newer package versions. If you’re breaking from linear versioning, or plan to abandon a package version that is installed in customer orgs, consider how your existing customers will be impacted, and whether an upgrade path is available to them.
-   If you abandon a package version, delete the version using the Salesforce CLI command sf package version delete.

    If you aren’t able to delete the package version, then update the package version’s installation key so the abandoned package version can’t be inadvertently installed. Use sf package version update to update the installation key.

## Code Examples

```
"packageDirectories": [
{
"path": "util",
"package": "Expense Manager - Util",
"versionNumber": "4.7.0.NEXT",
"ancestorVersion": "HIGHEST"
},
```

```
"packageDirectories": [
{
"path": "util",
"package": "Expense Manager - Util",
"versionNumber": "4.7.0.NEXT",
"ancestorVersion": “4.6.0”
},
```

```
"packageDirectories": [
{
"path": "util",
"package": "Expense Manager - Util",
"versionNumber": "4.7.0.NEXT",
"ancestorId": "04tB0000000cWwnIAE"
},
```

```
"packageDirectories": [
{
"path": "util",
"package": "Expense Manager - Util",
"versionNumber": "4.7.0.NEXT",
"ancestorId": "expense-manager@4.6.0.1"
},
```

```
sf package version create --package "Expenser App" --skip-ancestor-check
```
