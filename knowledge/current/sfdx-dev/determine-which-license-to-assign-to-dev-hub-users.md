---
title: "Determine Which License to Assign to Dev Hub Users"
domain: sfdx-dev
topic: determine-which-license-to-assign-to-dev-hub-users
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.000Z
estimatedTokens: 1023
keywords: [Determine, License, Assign, Dev, Hub, Users, developer, depends, how, much, access, they, require, org, full]
---

# Determine Which License to Assign to Dev Hub Users

> Which license type you assign to developer users depends on how much access they require
      in the Dev Hub org. If they require full administrative access, you can assign the Salesforce
      or Salesforce Platform standard user license. If you want to limit access to only specific
      features, Salesforce provides two developer license options

# Determine Which License to Assign to Dev Hub Users

Which license type you assign to developer users depends on how much access they require in the Dev Hub org. If they require full administrative access, you can assign the Salesforce or Salesforce Platform standard user license. If you want to limit access to only specific features, Salesforce provides two developer license options

## Salesforce or Salesforce Platform License

The Salesforce license is for users who require full access to standard CRM and AppExchange apps. Users with this user license are entitled to access any standard or custom app.

The Salesforce Platform license is designed for users who need access to custom apps but not to standard CRM functionality. Users with this user license are entitled to use custom apps developed in your organization or installed from AppExchange.

## Developer License

The Developer license is designed for users whose role is to build customizations or applications. This license provides access to development tools and environments. It comes with one Developer sandbox, one scratch org, and access to the Dev Hub. In the production org, this license restricts access to standard and custom objects. For example, users can’t access the Account object within the Sales app. And because of the restriction to custom objects, users can’t be assigned access to custom apps or AppExchange apps.

The development environments provide access to Salesforce features. With a Developer sandbox, you can use all the features that exist in the production org. The org administrator can create the Developer sandbox that was provisioned with the Developer license. A scratch org, which can be configured to your specifications using a scratch org definition file, gives you access to features on a trial basis. For example, you can use a scratch org to work with Financial Services Cloud or to play with Sales Cloud Einstein features. The Developer license provides access to the Dev Hub, enabling users to create scratch orgs on a self-service basis.

## Free Limited Access License

The Salesforce Limited Access - Free license provides accounts to non-admin users in your production org, when these users require access to only a specific app, feature, or setting. Standard Salesforce objects such as Accounts, Contacts, and Opportunities aren’t accessible with this license. The Salesforce Limited Access - Free license isn’t available in Developer Edition orgs.

The edition of the Dev Hub org determines the maximum number of the Limited Access licenses you can request.

-   Enterprise Edition orgs can request up to 20 licenses.
-   Unlimited Edition orgs can request up to 50 licenses.

To request this license, contact your Salesforce account executive. A Salesforce admin can upgrade a Salesforce Limited Access - Free license to a standard Salesforce license at any time.

The Salesforce Limited Access - Free license doesn’t support certain features.

-   To provide the ability to create and manage org shapes, assign the Salesforce user license. The Salesforce Limited Access - Free license isn’t supported at this time.
-   Users with the Salesforce Limited Access - Free license and View All Records permissions can create scratch orgs using an existing org shape.
-   Users with the Salesforce Limited Access - Free license and View All Records permissions can view scratch org snapshots created by users other than themselves.
-   The Salesforce Limited Access - Free license doesn’t provide access to some Salesforce CLI commands, such as sf limits api display.
-   Contact your Salesforce admin for API limits information.

#### See Also

-   [*Add Salesforce DX Users*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm "Add Salesforce DX Users - HTML (New Window)")

-   [*Permission Set for Salesforce DX Users*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm#sfdx_setup_permission_set.xml "Permission Set for Salesforce DX Users - HTML (New Window)")
