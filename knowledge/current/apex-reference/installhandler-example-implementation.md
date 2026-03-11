---
title: "InstallHandler Example Implementation"
domain: apex-reference
topic: installhandler-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.579Z
keywords: [InstallHandler, Example, Implementation]
---

# InstallHandler Example Implementation

## InstallHandler Example Implementation

The following sample post install script performs these actions on package install/upgrade.

-   If the previous version is null, that is, the package is being installed for the first time, the script:
    
    -   Creates a new Account called Newco and verifies that it was created.
    -   Creates a new instance of the custom object Survey, called Client Satisfaction Survey.
    -   Sends an email message to the subscriber confirming installation of the package.
-   If the previous version is 1.0, the script creates a new instance of Survey called ”Upgrading from Version 1.0”.
-   If the package is an upgrade, the script creates a new instance of Survey called ”Sample Survey during Upgrade”.
-   If the upgrade is being pushed, the script creates a new instance of Survey called ”Sample Survey during Push”.

```

```

You can test a post install script using the new testInstall method of the Test class. This method takes the following arguments.

-   A class that implements the InstallHandler interface.
-   A Version object that specifies the version number of the existing package.
-   An optional Boolean value that is true if the installation is a push. The default is false.

This sample shows how to test a post install script implemented in the PostInstallClass Apex class.

```

```