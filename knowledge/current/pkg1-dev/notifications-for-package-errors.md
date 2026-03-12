---
title: "Notifications for Package Errors"
domain: pkg1-dev
topic: notifications-for-package-errors
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.577Z
estimatedTokens: 328
keywords: [Notifications, Package, Errors, Accurately, track, failed, installations, upgrades, uninstallations, subscriber, orgs, feature, Proactively, address, issues]
---

# Notifications for Package Errors

> Accurately track failed package installations, upgrades, and uninstallations in
    subscriber orgs with the Notifications for Package Errors feature. Proactively address issues
    with managed and unmanaged packages and provide support to subscribers so that they can
    successfully install and upgrade your apps.

# Notifications for Package Errors

Accurately track failed package installations, upgrades, and uninstallations in subscriber orgs with the Notifications for Package Errors feature. Proactively address issues with managed and unmanaged packages and provide support to subscribers so that they can successfully install and upgrade your apps.

You can choose to send a notification to an email address in your org when a subscriber’s attempt to install, upgrade, or uninstall a packaged app fails. To enable this feature, contact your Salesforce representative.

Errors can happen with these package operations:

-   Installation
-   Upgrade
-   Push upgrade
-   Uninstallation

When an installation fails, an email is sent to the specified address with the following details:

-   Reason for the failure
-   Subscriber org information
-   Metadata of the package that wasn’t installed properly
-   Who attempted to install the package

This example email is for a package installation that failed because the base package wasn’t installed before the subscriber tried to install an extension.

```

```

-   **[Set the Notification Email Address](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_notification_set.htm)**
    Specify which address to email when a package installation, upgrade, or uninstallation fails.

## Code Examples

```
On Mon, Jul 13, 2022 at 11:51 AM, NO REPLY <no-reply@salesforce.com> wrote:
The install of your package failed. Here are the details:

Error Message: 00DD00000007uJp: VALIDATION_FAILED [DB 0710 DE1 Pkg1 1.2: A required package is missing: Package "DB 0710 DE1 Pkg1", Version 1.2 or later must be installed first.]
Date/Time of Occurrence = Mon Jul 13 18:51:20 GMT 2015

Subscriber Org Name = DB 071015 EE 1
Subscriber Org ID = 00DD00000007uJp
Subscriber Org Status = TRIAL
Subscriber Org Edition = Enterprise Edition

Package Name = DB 0710 DE2 Pkg1
Package ID = 033D000000060EE
Package Namespace = DB_0710_DE2
Package Type = MANAGED
Package Version Name = 1.2
Package Version Number = 1.2
Package Version Id = 04tD00000006QoF

Installer Name = Admin User
Installer Email Address = db@salesforce.com
```

## Related Topics

- Set the Notification Email Address (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_notification_set.htm)
