---
title: "Configure Salesforce CPQ to Use the External Configurator"
domain: cpq-dev-api
topic: configure-salesforce-cpq-to-use-the-external-configurator
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.842Z
estimatedTokens: 461
keywords: [Configure, Salesforce, CPQ, External, Configurator, package, launch, custom, quote, line, editor, Indicate, products, configured, externally]
---

# Configure Salesforce CPQ to Use the External Configurator

> Configure the Salesforce CPQ package to launch your custom configurator from the quote
  line editor. Indicate which products are configured externally by setting the product’s
   Externally Configurable field to true.

# Configure Salesforce CPQ to Use the External Configurator

Configure the Salesforce CPQ package to launch your custom configurator from the quote line editor. Indicate which products are configured externally by setting the product’s **Externally Configurable** field to true.

| Available in: Salesforce CPQ Winter ’18 and later |
| --- |


1.  From Setup, in the Quick Find box, Installed Packages, and then select **Installed Packages**.
2.  Find the Salesforce CPQ package and click **Configure**.
3.  Select the **Additional Settings** tab.
4.  In the External Configurator URL field, enter the URL for your external configurator.

    To get the URL of a Visualforce page, click preview. You can use either an absolute or a relative URL. To use the custom configurator with Experience Cloud, you must use a relative URL, because the URL format of Salesforce Lightning and externally-hosted web applications are different.

5.  Optional: On the Additional Settings page, you can also select the **Third Party Configurator** field. When active, Salesforce CPQ launches the external configurator so it takes up your entire screen. Any action that closes the external configurator, such as clicking cancel or save, redirects to the page that launched the external configurator.
6.  Find the products to configure with the external configurator.
    1.  Select the **Externally Configurable** field on each product record.
    2.  Make sure each product’s **Configuration Type** field is set to Required.

        The external configurator launches when a user clicks the wrench next to a configurable bundle, or when the user adds a product where a configuration event is required. If you set the configuration type to Allowed, the external configurator launches only when a sales rep selects the wrench icon next to a configurable bundle.
