---
title: "What Are Beta Versions of Managed Packages?"
domain: pkg1-dev
topic: what-are-beta-versions-of-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.517Z
estimatedTokens: 422
keywords: [Beta, Versions, Managed, Packages, package, early, version, purpose, allow, developer, test, their, application, different, Salesforce]
---

# What Are Beta Versions of Managed Packages?

> A beta package is an early version of a managed package. The purpose of a beta
      package is to allow the developer to test their application in different Salesforce orgs and
      to share the app with a pilot set of users for evaluation and feedback.

# What Are Beta Versions of Managed Packages?

A beta package is an early version of a managed package. The purpose of a beta package is to allow the developer to test their application in different Salesforce orgs and to share the app with a pilot set of users for evaluation and feedback.

Before installing a beta version of a managed package, review the following notes:

-   Beta packages can be installed in scratch, sandbox, or Developer Edition orgs, or test orgs furnished through the Environment Hub only.
-   The components of a beta package are editable in the packaging org until a Managed - Released package is uploaded.
-   Beta versions aren't considered major releases, so the package version number doesn't change.
-   Beta packages aren’t upgradeable. Because developers can still edit the components of a beta package, the Managed - Released version might not be compatible with the beta package installed. To install a new beta package or released version, first, uninstall the beta package. For more information, see [Uninstall a Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_uninstall.htm "You can uninstall a first-generation managed package from an org using the Setup UI. When you uninstall a first-generation managed package, all components in the package, including any deprecated components that were previously associated with the package, are deleted from the org.") and [Install a Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_install.htm "During the development and testing cycle, you might need to periodically install and uninstall packages before you install the next beta. Follow these steps to install a package.").

## Related Topics

- Uninstall a Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_uninstall.htm)
- Install a Managed
        Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_install.htm)
