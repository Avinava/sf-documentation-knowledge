---
title: "Set the Notification Email Address"
domain: pkg1-dev
topic: set-the-notification-email-address
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.579Z
estimatedTokens: 271
keywords: [Notification, Email, Address, Specify, package, installation, upgrade, uninstallation, fails]
---

# Set the Notification Email Address

> Specify which address to email when a package installation, upgrade, or
        uninstallation fails.

# Set the Notification Email Address

Specify which address to email when a package installation, upgrade, or uninstallation fails.

Notifications are sent only for package versions that are uploaded after the address is added. For example, if you upload package version 1.0 and then set the notification address, notifications aren’t sent for failures related to version 1.0. Notifications start when version 2.0 is uploaded.

Also, you can’t change or remove the notification email address for the package after it’s been uploaded.

1.  To enable this feature, contact your Salesforce representative.
2.  From Setup, enter Packages in the Quick Find box, then select **Packages**.
3.  Click the package name, and then click **Edit** on the package detail page.
4.  Enter the email address to send notifications to, and click **Save**.

    Notifications for Package Errors Configured in a Partner Org ![Notification Setting in a Partner Org](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fisvforce_partner_notifications_email.png&folder=pkg1_dev)
