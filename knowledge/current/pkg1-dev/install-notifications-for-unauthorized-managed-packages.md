---
title: "Install Notifications for Unauthorized Managed Packages"
domain: pkg1-dev
topic: install-notifications-for-unauthorized-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.561Z
estimatedTokens: 340
keywords: [Install, Notifications, Unauthorized, Managed, Packages, distribute, package, AppExchange, Partner, Program, hasn’t, authorized, notify, customers, installation]
---

# Install Notifications for Unauthorized Managed Packages

> When you distribute a managed package that AppExchange Partner Program hasn’t authorized,
    we notify customers during the installation process. The notification is removed after the
    package is approved.

# Install Notifications for Unauthorized Managed Packages

When you distribute a managed package that AppExchange Partner Program hasn’t authorized, we notify customers during the installation process. The notification is removed after the package is approved.

![A view of the unauthorized package notification and acknowledgement checkbox during the installation process.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fpackage_install_notification.png&folder=pkg1_dev)

The notification appears when customers configure the package installation settings (1). Before customers install the package, they must confirm that they understand that the package isn’t authorized for distribution (2).

The notification displays when a managed package:

-   Has never been through security review or is under review
-   Didn’t pass the security review
-   Isn’t authorized by AppExchange Partner Program for another reason

If the AppExchange Partner Program approves the package, it’s authorized for distribution, and the notification is removed. When you publish a new version of the package, it’s automatically authorized for distribution.

For information about the AppExchange Partner Program and its requirements, visit the [Salesforce Partner Community](https://partners.salesforce.com/s/education/general/Partner_Program).
