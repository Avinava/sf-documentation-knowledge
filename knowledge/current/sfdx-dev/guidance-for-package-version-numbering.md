---
title: "Guidance for Package Version Numbering"
domain: sfdx-dev
topic: guidance-for-package-version-numbering
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:17.994Z
estimatedTokens: 932
keywords: [Guidance, Package, Version, Numbering, versions, evolve, managed, release, subsequent, breaking, users, Every, fixed, snapshot, contents]
---

# Guidance for Package Version Numbering

> Use package versions to evolve your managed package, and release subsequent package
  versions without breaking existing package users. Every package version is a fixed snapshot of the
  package contents and related metadata.

# Guidance for Package Version Numbering

Use package versions to evolve your managed package, and release subsequent package versions without breaking existing package users. Every package version is a fixed snapshot of the package contents and related metadata.

While the format for package version number is predetermined, how you determine a version number, and whether you enforce uniqueness on package version numbers is left to package developers. The format for package version numbers is MAJOR.MINOR.PATCH.BUILD. Every package version has both a version number that you determine (for example, 2.2.0.1), and a unique [subscriber package version ID](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_plan_pkg_types_pkg_ids.htm) (starts with 04t) that is auto-assigned when you create the package version.

Before you promote a particular MAJOR.MINOR.PATCH package version, it’s possible to create multiple package versions that have unique 04t IDs, but all share the same version number, for example 2.2.0.1. There are a few approaches you can take to ensure each package version number is unique. Keep reading to learn more, but let’s start by learning how to specify a package version number.

## How Do I Specify the Package Version Number?

The versionNumber attribute in your sfdx-project.json [project configuration file](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm) determines the version number that is assigned the next time you create a managed 2GP version. Before creating a new package version, you must manually increment this attribute in the project file. If you don't increment the versionNumber, then you can wind up with multiple package versions with the same version number, but unique subscriber package version IDs (starts with 04t).

```

```

## Use the Keyword NEXT to Enforce Unique Build Numbers

As best practice, don’t create multiple package versions that have the same MAJOR.MINOR.PATCH.BUILD version number. An easy way to ensure the build portion of your version number is unique is to use the keyword NEXT when you set the version number in your sfdx-project.json file. This way, you don’t have to manually increment the version number when you want to create a new package version.

```

```

## Use the CLI Flag to Override a Package Version Number

You can also override the version number listed in your project file, by using the \--version-number flag when you create a new package version.

```

```

By using the keyword NEXT with the \--version-number flag in the CLI, you ensure the build portion of the version number is unique.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Keep in mind, the \--version-number flag doesn't update your sfdx-project.json. To keep the VersionNumber in the project file current, update it manually.

## What Happens to Version Numbering After You Promote a Package Version?

After you promote a package version with a specific MAJOR.MINOR.PATCH version you can’t continue to create package versions that use that same MAJOR.MINOR.PATCH version number. If you attempt to do so, you receive an error message.

## How Do I Determine Whether to Use a New Major, Minor, or Patch Version?

While there are restrictions on what changes are allowed in a [patch version](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_patch_version.htm), determining what qualifies as a major or minor change is largely up to you. When introducing major changes, increase the major version number, and increase the minor version number when making smaller improvements.

## Code Examples

```
{
   "namespace": "exp-mgr",
   "sfdcLoginUrl": "https://login.salesforce.com",
   "sourceApiVersion": "61.0",
   "packageDirectories": [
      {
         "path": "util",
         "default": true,
         "package": "Expense Manager - Util",
         "versionName": "Summer ‘24",
         "versionDescription": "Summer 2024 Expense Manager Util Package",
         "versionNumber": "2.2.0.1",
         "definitionFile": "config/scratch-org-def.json"
      },
```

```
{
   "namespace": "exp-mgr",
   "sfdcLoginUrl": "https://login.salesforce.com",
   "sourceApiVersion": "61.0",
   "packageDirectories": [
      {
         "path": "util",
         "default": true,
         "package": "Expense Manager - Util",
         "versionName": "Summer ‘24",
         "versionDescription": "Summer 2024 Expense Manager Util Package",
         "versionNumber": "2.2.0.NEXT",
         "definitionFile": "config/scratch-org-def.json"
      },
```

```
sf package version create -p "my2gp" -–version-number 2.2.0.NEXT <rest of command syntax>
```
