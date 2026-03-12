---
title: "Plan the Release of First-Generation Managed Packages"
domain: pkg1-dev
topic: plan-the-release-of-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.704Z
estimatedTokens: 790
keywords: [Plan, Release, First-Generation, Managed, Packages, Releasing, package, similar, any, program, software, development]
---

# Plan the Release of First-Generation Managed Packages

> Releasing a managed package is similar to releasing any other program in software
  development.

# Plan the Release of First-Generation Managed Packages

Releasing a managed package is similar to releasing any other program in software development.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

After you release a package by publishing it on AppExchange, anyone can install it. So, plan your release carefully. Review the states defined in the following table to familiarize yourself with the release process. Salesforce automatically applies the appropriate state to your package and components depending on the upload settings you choose and where it is in the release process.

| State | Description |
| --- | --- |
| Managed - Beta | The package or component was created in the current Salesforce org and is managed, but it isn’t released because of one of these reasons:It hasn’t been uploaded.It has been uploaded with Managed - Beta option selected. This option prevents it from being published, publicly available on AppExchange. The developer can still edit any component but the installer isn’t able to depending on which components were packaged.Don’t install a Managed - Beta package over a Managed - Released package. If you do, the package is no longer upgradeable and your only option is to uninstall and reinstall it. |
| Managed - Released | The package or component was created in the current Salesforce org and is managed. It’s also uploaded with the Managed - Released option selected, indicating that it can be published on AppExchange and is publicly available. After you’ve moved a package to this state, some properties of the components can’t be editable.This type of release is considered a major release. |
| Patch | If you must provide a minor upgrade to a managed package, consider creating a patch instead of a new major release. A patch enables a developer to change the functionality of existing components in a managed package. Subscribers experience no visible changes to the package.This type of release is considered a patch release. |
| Managed - Installed | The package or component was installed from another Salesforce org but is managed. |
| Unmanaged (Legacy) | The package hasn’t been converted into a managed package. |

A developer can refine the functionality in a managed package over time, uploading and releasing new versions as the requirements evolve. Updates can involve redesigning some of the components in the managed package. Developers can delete some, but not all, types of components in a Managed - Released package when upgrading it.
