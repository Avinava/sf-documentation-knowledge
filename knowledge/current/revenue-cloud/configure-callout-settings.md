---
title: "Configure Callout Settings"
domain: revenue-cloud
topic: configure-callout-settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:08.682Z
estimatedTokens: 422
keywords: [Configure, Callout, Settings, Before, set, callout, provider, configure, settings., settings, include, creation, named, credential, external, integration, definition, configuration, fulfillment, step]
---

# Configure Callout Settings

> Before you set up a callout provider, configure the callout settings. The settings
  include the creation of a named credential and an external credential, the creation of an
  integration definition, and the configuration of a fulfillment step definition.

# Configure Callout Settings

Before you set up a callout provider, configure the callout settings. The settings include the creation of a named credential and an external credential, the creation of an integration definition, and the configuration of a fulfillment step definition.

Meet these prerequisites before you configure the callout settings.

| Available in: Developer, Enterprise, and Unlimited Editions |
| --- |


| User Permissions Needed |
| --- |
| To create authenticated callouts: | External Credentials Principal Access Permission |

-   Configure named and external credentials to define access to an external system. Specify a named credential as the callout endpoint and an external credential to configure the authentication protocol.

    See [Create Named Credentials and External Credentials](https://help.salesforce.com/s/articleView?id=xcloud.nc_named_creds_and_ext_creds.htm&type=5&language=en_US "HTML (New Window)").

-   Create integration definitions to connect Salesforce with an external system. Integration definitions use APIs to perform operations in both Salesforce and the external system. You can create Apex Defined, External Services Defined, or Standard integration definitions.

    See [Create an Integration Definition](https://help.salesforce.com/s/articleView?id=ind.consumption_framework_integration_definitions.htm&type=5&language=en_US "HTML (New Window)").

-   Define a fulfillment step with Callout as the step type. Additionally, set the integration definition name and integration user.

    See [Callout Fulfillment Step](https://help.salesforce.com/s/articleView?id=ind.dro_callout.htm&type=5&language=en_US "HTML (New Window)").
