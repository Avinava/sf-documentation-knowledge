---
title: "Install Unlocked Packages from a URL"
domain: sfdx-dev
topic: install-unlocked-packages-from-a-url
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.792Z
estimatedTokens: 349
keywords: [Install, Unlocked, Packages, URL, CLI, browser, similar, how, managed]
---

# Install Unlocked Packages from a URL

> Install unlocked packages from the CLI or from a browser, similar to how you install
  managed packages.

# Install Unlocked Packages from a URL

Install unlocked packages from the CLI or from a browser, similar to how you install managed packages.

If you create packages from the CLI, you can derive an installation URL for the package by adding the subscriber package ID to your Dev Hub URL. You can use this URL to test different deployment or installation scenarios.

For example, if the package version has the subscriber package ID, 04tB00000009oZ3JBI, add the ID as the value of apvId.

https://MyDomainName.lightning.force.com/packagingSetupUI/ipLanding.app?apvId=04tB00000009oZ3JBI

Anyone with the URL and a valid login to a Salesforce org can install the package.

To install the package:

1.  In a browser, enter the installation URL.
2.  Enter your username and password for the Salesforce org in which you want to install the package, and then click **Login**.
3.  If the package is protected by an installation key, enter the installation key.
4.  For a default installation, click **Install**.

    A message describes the progress. You receive a confirmation message when the installation is complete.


#### See Also

-   [*Salesforce Help:* Determine Which Users Can Access a Package](https://help.salesforce.com/s/articleView?id=xcloud.pkg_subscriber_determine_access.htm&type=5&language=en_US "Salesforce Help:  Determine Which Users Can Access a Package
    - HTML (New Window)")
