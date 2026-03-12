---
title: "Connected Apps"
domain: securityImplGuide
topic: connected-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.606Z
estimatedTokens: 713
keywords: [Connected, Apps, app, framework, external, application, integrate, Salesforce, APIs, standard, protocols, SAML, OAuth, OpenID, Connect]
---

# Connected Apps

> A connected app is a framework that enables an external application to integrate with
    Salesforce using APIs and standard protocols, such as SAML, OAuth, and OpenID Connect. Connected
    apps use these protocols to authenticate, authorize, and provide single sign-on (SSO) for
    external apps. The external apps that are integrated with Salesforce can run on the customer
    success platform, other platforms, devices, or SaaS subscriptions. For example, when you log in
    to your Salesforce mobile app and see your data from your Salesforce org, you’re using a
    connected app.

# Connected Apps

A connected app is a framework that enables an external application to integrate with Salesforce using APIs and standard protocols, such as SAML, OAuth, and OpenID Connect. Connected apps use these protocols to authenticate, authorize, and provide single sign-on (SSO) for external apps. The external apps that are integrated with Salesforce can run on the customer success platform, other platforms, devices, or SaaS subscriptions. For example, when you log in to your Salesforce mobile app and see your data from your Salesforce org, you’re using a connected app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Connected apps creation is restricted as of Spring ‘26. You can continue to use existing connected apps during and after Spring ‘26. However, we recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) instead. If you must continue creating connected apps, contact Salesforce Support. See [New connected apps can no longer be created in Spring ‘26](https://help.salesforce.com/s/articleView?id=005228017&type=1&language=en_US) for more details.

By capturing metadata about an external app, a connected app tells Salesforce which authentication protocol—SAML, OAuth, and OpenID Connect—the external app uses, and where the external app runs. Salesforce can then grant the external app access to its data, and attach policies that define access restrictions, such as when the app’s access expires. Salesforce can also audit connected app usage.

To learn more about how to use, configure, and manage connected apps, see the following topics in *Salesforce Help*:

-   [Connected App Use Cases](https://help.salesforce.com/articleView?id=connected_app_about.htm&language=en_US "HTML (New Window)")
-   [Create a Connected App](https://help.salesforce.com/articleView?id=connected_app_create.htm&language=en_US "HTML (New Window)")
-   [Edit a Connected App](https://help.salesforce.com/articleView?id=connected_app_edit_parent.htm&language=en_US "HTML (New Window)")
-   [Manage Access to a Connected App](https://help.salesforce.com/articleView?id=connected_app_manage.htm&language=en_US "HTML (New Window)")

## More Resources

Here are some additional resources to help you navigate connected apps:

-   *Salesforce Help*: [Connected Apps](https://help.salesforce.com/articleView?id=connected_app_overview.htm&language=en_US "HTML (New Window)")
-   *Salesforce Help*: [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)")
-   *Trailhead*: [Build Integrations Using Connected Apps](https://trailhead.salesforce.com/en/content/learn/trails/build-integrations-using-connected-apps "HTML (New Window)")
