---
title: "Install the License Management App"
domain: pkg1-dev
topic: install-the-license-management-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.409Z
estimatedTokens: 500
keywords: [Install, License, Management, App, LMA, managed, package, installed, partner, business, orgs, org, LMO]
---

# Install the License Management App

> The License Management App (LMA) is a managed package that is installed in all partner
    business orgs. The org that the LMA is installed in is called the License Management Org
    (LMO).

# Install the License Management App

The License Management App (LMA) is a managed package that is installed in all partner business orgs. The org that the LMA is installed in is called the License Management Org (LMO).


| User Permissions Needed |
| --- |
| To install packages: | Download AppExchange Packages |

We strongly recommend that you use your partner business org (PBO) as your LMO. However, you can choose to install the LMA in another production org. Consider installing the LMA in an org that your company is already using to manage sales, billing, and marketing.

Commercial use of the LMA is prohibited in Developer and Partner Developer Edition orgs. Installing the LMA in a Developer Edition org is allowed only if you’re building integrations with the LMA and need an environment only for development and testing purposes. You can install the LMA in Enterprise, Unlimited, or Performance Edition production orgs.

It’s not possible to have Slack or the Declarative Lookup Rollup Summary (DLRS) package installed in the same org as the LMA. If the org in which you plan to install the LMA has either Slack or the DLRS package installed, uninstall them before you install the LMA. Alternatively, install the LMA in a different org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

To confirm whether your PBO already has the LMA installed, skip to step 4.

1.  To install the LMA in an org other than your PBO, log a case in the [Partner Community](https://partners.salesforce.com "HTML (New Window)"). After we review the case, you receive an email with an installation URL.
2.  Log in to the org where you want to install the LMA, and then go to the installation URL included in the email.
3.  Choose which users can access the LMA, and then click **Install**.
4.  To confirm that the LMA is installed, open the App Launcher. If the installation was successful, the License Management App appears in the list of available apps.
