---
title: "Package Versions in First-Generation Managed Packages"
domain: pkg1-dev
topic: package-versions-in-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.722Z
estimatedTokens: 797
keywords: [Package, Versions, First-Generation, Managed, Packages, version, number, identifies, components, uploaded, majorNumber.minorNumber.patchNumber, 2.1.3]
---

# Package Versions in First-Generation Managed Packages

> A package version is a number that identifies the set of components uploaded in a
    package. The version number has the format
      majorNumber.minorNumber.patchNumber (for example, 2.1.3).

# Package Versions in First-Generation Managed Packages

A package version is a number that identifies the set of components uploaded in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

Version numbers depend on the package release type, which identifies the way packages are distributed. There are two kinds:

Major Release

A major release denotes a Managed - Released package. During these releases, the major and minor numbers of a package version increase to a chosen value.

Patch Release

A patch release is only for patch versions of a package. During these releases, the patch number of a package version increments.

The following table shows a sequence of version numbers for a series of uploads:

| Upload Sequence | Type | Version Number | Notes |
| --- | --- | --- | --- |
| First upload | Managed - Beta | 1.0 | The firstManaged - Beta upload. |
| Second upload | Managed - Released | 1.0 | A Managed - Released upload. The version number doesn’t change. |
| Third upload | Managed - Released | 1.1 | Note the change of the minor release number for this Managed - Released upload. If you’re uploading a new patch version, you can't change the patch number. |
| Fourth upload | Managed - Beta | 2.0 | The first> Managed - Beta upload for version number 2.0. Note the major version number update. |
| Fifth upload | Managed - Released | 2.0 | A Managed - Released upload. The version number doesn’t change. |

When an existing subscriber installs a new package version, there’s still only one instance of each component in the package, but the components can emulate older versions. For example, a subscriber can use a managed package that contains an Apex class. If the publisher decides to deprecate a method in the Apex class and release a new package version, the subscriber still sees only one instance of the Apex class after installing the new version. However, this Apex class can still emulate the previous version for any code that references the deprecated method in the older version.

Package developers can use conditional logic in Apex classes and triggers to exhibit different behavior for different versions. Conditional logic lets the package developer support existing behavior in classes and triggers in previous package versions while evolving the code.

When you’re developing client applications using the API, you can specify the version of each package that you use in your integrations.
