---
title: "Authorization Through External Client Apps or Connected Apps and OAuth 2.0"
domain: rest-api
topic: authorization-through-external-client-apps-or-connected-apps-and-oauth-20
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:44:25.077Z
keywords: [Authorization, Through, External, Client, Apps, Connected, OAuth, 2.0, Important, Configure, App, Apply, Flow, Resources]
---

# Authorization Through External Client Apps or Connected Apps and OAuth 2.0

# Authorization Through External Client Apps or Connected Apps and OAuth 2.0

For a client application to access REST API resources, it must be authorized as a safe visitor. To implement this authorization, use either an external client app or a connected app and an OAuth 2.0 authorization flow.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_rest)

#### Important

Creating connected apps is restricted as of Spring ‘26. You can continue to use existing connected apps during and after Spring ‘26. However, we recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) instead. If you must continue creating connected apps, contact Salesforce Support.

See [New connected apps can no longer be created in Spring ‘26](https://help.salesforce.com/s/articleView?id=005228017&type=1&language=en_US) for more details.

## Configure an External Client App or a Connected App

Both external client apps and connected apps request access to REST API resources on behalf of the client application. For an external client app or connected app to request access, it must be integrated with your org’s REST API using the OAuth 2.0 protocol. OAuth 2.0 is an open protocol that authorizes secure data sharing between applications through the exchange of tokens.

For instructions to configure an external client app, see [Create an External Client App](https://help.salesforce.com/s/articleView?id=xcloud.create_a_local_external_client_app.htm&language=en_US "HTML (New Window)") or [Enable OAuth Settings for API Integration](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&language=en_US "HTML (New Window)") in *Salesforce Help*. For more information about connected apps, see [Connected Apps](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_overview.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.

## Apply an OAuth Authorization Flow

OAuth authorization flows grant a client app restricted access to REST API resources on a resource server. Each OAuth flow offers a different process for approving access to a client application, but in general the flows consist of three main steps.

1.  To initiate an authorization flow, a connected app on behalf of a client app requests access to a REST API resource.
2.  In response, an authorizing server grants access tokens to the external client app or connected app.
3.  A resource server validates these access tokens and approves access to the protected REST API resource.

After reviewing and selecting an OAuth authorization flow, apply it to your external client app or connected app. For details about each supported flow, see [OAuth Authorization Flows](https://help.salesforce.com/articleView?id=remoteaccess_oauth_flows.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.

## More Resources

Salesforce offers the following resources to help you navigate connected apps and OAuth:

-   *Salesforce Help*: [External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US "HTML (New Window)")
-   *Salesforce Help*: [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)")
-   *Salesforce Help*: [OpenID Connect Token Introspection](https://help.salesforce.com/articleView?id=remoteaccess_oidc_token_introspection_endpoint.htm&language=en_US "HTML (New Window)")
-   *Trailhead*: [Build Integrations Using External Client Apps](https://trailhead.salesforce.com/content/learn/projects/build-integrations-with-external-client-apps "HTML (New Window)")