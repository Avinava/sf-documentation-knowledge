---
title: "Set Up an External Configurator to Launch from a Custom Action"
domain: cpq-dev-api
topic: set-up-an-external-configurator-to-launch-from-a-custom-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.781Z
estimatedTokens: 272
keywords: [External, Configurator, Launch, Custom, Action, launches, non-Salesforce, CPQ]
---

# Set Up an External Configurator to Launch from a Custom Action

> Create a custom action that launches a non-Salesforce CPQ configurator.

# Set Up an External Configurator to Launch from a Custom Action

Create a custom action that launches a non-Salesforce CPQ configurator.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


You may have to add the following layouts and values.

-   Add the Page and URL Target fields to the custom action page layout.
-   Add the Popup value to the custom action’s URL Target field.
-   Add a label that represents your external configurator’s name to the custom action’s Label field.

1.  From your Custom Actions tab, click **New**.
2.  From the Label field, choose GIS.
3.  From the Page field, choose Product Configurator.
4.  From the URL Target field, choose Popup.
5.  In the URL field, add a URL for a custom website that uses a secure https protocol.
6.  Save your changes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=cpq_dev_api)

#### Important

We strongly recommend that you choose Dialog Window for the value of URL Target. Replace Window causes users to lose all their work when the external configurator loads.
