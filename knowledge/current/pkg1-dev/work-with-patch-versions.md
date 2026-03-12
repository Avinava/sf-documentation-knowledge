---
title: "Work with Patch Versions"
domain: pkg1-dev
topic: work-with-patch-versions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.584Z
estimatedTokens: 850
keywords: [Work, Patch, Versions, version, developer, change, functionality, components, managed, package, Subscribers, experience, visible, changes, Patches]
---

# Work with Patch Versions

> A patch version
        enables a developer to change the functionality of existing
            components in a managed package. Subscribers experience no visible changes to the
            package. Patches are minor upgrades to a  Managed - Released package and only used for
            fixing bugs or other errors.

# Work with Patch Versions

A patch version enables a developer to change the functionality of existing components in a managed package. Subscribers experience no visible changes to the package. Patches are minor upgrades to a Managed - Released package and only used for fixing bugs or other errors.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

To enable patch versioning, contact [Salesforce Partner Support](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm "HTML (New Window)") and request patch versioning be enabled in the org where you created the namespace for the package. Patch versioning is available only to packages that have passed AppExchange security review.

Subscribers can install patch upgrades just like they would any other package version. However, you can also distribute a patch by using [push upgrades](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_push_about.htm).

When you create a patch, the patchNumber on a package's Version Number increments by one. For example, suppose that you release a package with the version number 2.0. When you release a patch, the number changes to 2.0.1. This value can't be changed manually.

## Patch Development Organizations

Every patch is developed in a patch development org, which is the org where patch versions are developed, maintained, and uploaded. To start developing a patch, create a package version. See [Create and Upload Patches in First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/patches_creating.htm#patches_creating). Patch development orgs are necessary to permit developers to change existing components without causing incompatibilities between existing subscriber installations.

A package development org can upload an unlimited number of patches. Only one patch development org can exist per major.minor release of your package. A patch development org for a package with a version number of 4.2 can only work on patches such as 4.2.1, 4.2.2, 4.2.3, and so on. It doesn’t work on version 4.1 or 4.3.

## Integrating Patch Development

The following diagram illustrates the workflow of creating a patch and integrating any work into future versions:After version 2.0 is released, the developer creates a patch. The package version number in the patch development org starts at 2.0.1. As the main development org moves towards a released version of 3.0, a second patch is created for 2.0.2. Finally, the developer merges the changes between the main development org, and the patch development org, and releases the package as version 3.0.

Patch Development Workflow ![Flow diagram of patch uploads](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fpatches_flow.png&folder=pkg1_dev)

Git source control is the best way to monitor your package versions. To learn about Git, complete the [Git and GitHub Basics](https://trailhead.salesforce.com/en/content/learn/modules/git-and-git-hub-basics) Trailhead module.

Version control is integrated into Visual Studio Code. See [Salesforce Extensions for Visual Studio Code](https://developer.salesforce.com/tools/vscode) and [Version Control in Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol) for details.
