---
title: "Manage Licensing for Installed Packages"
domain: mc-app-development
topic: manage-licensing-for-installed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.166Z
estimatedTokens: 666
keywords: [Manage, Licensing, Installed, Packages, license, parent, business, units, across, enterprise, Enhanced, Legacy]
---

# Manage Licensing for Installed Packages

> You can license packages installed from parent business units to other business units across your enterprise.

# Manage Licensing for Installed Packages

You can license packages installed from parent business units to other business units across your enterprise.

## Licensing for Enhanced Packages

![Installed Packages in Marketing Cloud](/docs/resources/img/en-us/noversion?doc_id=images%2Finstalled_packages_enhanced.png&folder=mc-app-development)

1.  From the detailed view for any package, click the **Access** tab to manage user licensing.
2.  Search for a business unit to grant or restrict licensing for the package. If you have only one business unit, the search field and tree is hidden.
3.  License specific users in the selected business unit. When users are added, add licensing for those users here.
4.  For server-to-server integrations only: To assign licenses to users or to make API requests on behalf of this business unit, enable the package’s server-to-server integration for that business unit. You can assign licenses only if the package contains another component in addition to the server-to-server API integration, which isn’t licensable. Enable Business Units isn’t shown for other integration types.
5.  License all current and future users in the business unit.
6.  For server-to-server integrations only: Enable the package's server-to-server integration for all business units in your account. You can assign licenses to users in all business accounts and make API requests on behalf of all business units in your account. This option isn’t shown for other integration types.
7.  License all current and future users for all business units in your account. If this option isn’t shown, you don’t have permission to administer installed packages in all business units in your account. To gain access, work with your account administrator.

## Licensing for Legacy Packages

![Installed Packages in Marketing Cloud](/docs/resources/img/en-us/noversion?doc_id=images%2Finstalled_packages.png&folder=mc-app-development)

1.  From the detailed view for any package, click the **Licenses** tab to manage user licensing.
2.  Search for a business unit to grant or restrict licensing for the package to that business unit only. If you have only one business unit, the search field and tree is hidden.
3.  License all current and future users in the selected business unit.
4.  License specific users in the selected business unit. When users are added, add licensing for those users here.
5.  License all current and future users for all business units in your account. If this option isn’t shown, you don’t have permission to administer installed packages in all business units in your account. To gain access, work with your account administrator.
