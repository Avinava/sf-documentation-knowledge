---
title: "Setting Up External Client App Access (REST-Based APIs)"
domain: salesforce-developer-environment-dotnet-tipsheet
topic: setting-up-external-client-app-access-rest-based-apis
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.258Z
estimatedTokens: 289
keywords: [Setting, External, Client, App, Access, REST-Based, APIs, Because, Salesforce, REST, OAuth, authentication, integrate, application]
---

# Setting Up External Client App Access (REST-Based APIs)

> Because Salesforce REST APIs use OAuth authentication, create an external client app to
        integrate your application with Salesforce.

# Setting Up External Client App Access (REST-Based APIs)

Because Salesforce REST APIs use OAuth authentication, create an external client app to integrate your application with Salesforce.

An external client app integrates an application with Salesforce using APIs. External client apps use standard SAML and OAuth protocols to authenticate, provide single sign-on, and provide tokens for use with Salesforce APIs. In addition to standard OAuth capabilities, exernal client apps allow Salesforce admins to set various security policies and have explicit control over who can use the corresponding apps.

Specify basic information about your app. See [Configure Basic Connected App Settings](https://help.salesforce.com/articleView?id=connected_app_create_basics.htm&language=en_US) in Salesforce Help.

Next, provide OAuth settings. See [Enable OAuth Settings for API Integration](https://help.salesforce.com/s/articleView?id=xcloud.external_integrations.htm&language=en_US) in Salesforce Help.

For more information, see [Create a Connected App](https://help.salesforce.com/articleView?id=connected_app_create.htm&language=en_US) in Salesforce Help.
