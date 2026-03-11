---
title: "Supported Editions and Required Permissions"
domain: rest-api
topic: supported-editions-and-required-permissions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:44:25.090Z
keywords: [Supported, Editions, Required, Permissions, API, Access, User, See]
---

# Supported Editions and Required Permissions

# Supported Editions and Required Permissions

To access your Salesforce org and data using the Salesforce API, you need both an org and a user with API access enabled. There’s more than one Salesforce Edition that supports API access and multiple ways to grant API permission to a user.

## Supported Editions for API Access

API access is enabled by default in Enterprise, Performance, Unlimited, and Developer Edition orgs. Professional Edition orgs can add API access as an add-on. For more information, visit *[Salesforce Help: Add Products and Licenses with the Your Account App](https://help.salesforce.com/s/articleView?id=users_add_products_subscription_management.htm&language=en_US)* or contact a Salesforce account executive.

If you send an API request to an org without API access, Salesforce returns a API\_DISABLED\_FOR\_ORG error.

To protect the configuration and live data in your production org, we recommend using an isolated environment for active development and testing, such as aDeveloper Edition org, sandbox, or scratch org. When ready, you can move successful changes into your production org.

## API User Permissions

To make any API call, a user must have the API Enabled permission turned on in the user profile they’re assigned. This permission is enabled by default on some profiles, including many profiles available in Developer Edition orgs. In supported editions, you can also use the Salesforce Integration user license to grant system-to-system integration users full org access while limiting them to API-only operations. For more information, see Salesforce Help: [Give Integration Users API Only Access](https://help.salesforce.com/s/articleView?id=platform.integration_user.htm&type=5&language=en_US)

#### See Also

-   [Get your very own Developer Edition](https://developer.salesforce.com/signup "Get your very own Developer Edition - HTML (New Window)")
    
-   [Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm "Scratch Orgs - HTML (New Window)")
    
-   [Sandboxes](https://help.salesforce.com/articleView?id=platform.deploy_sandboxes_parent.htm&type=5&language=en_US "Sandboxes - HTML (New Window)")
    
-   [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm "Salesforce DX Developer Guide - HTML (New Window)")