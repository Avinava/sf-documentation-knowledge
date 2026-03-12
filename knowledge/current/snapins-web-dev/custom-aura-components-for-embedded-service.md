---
title: "Custom Aura Components for Embedded Service"
domain: snapins-web-dev
topic: custom-aura-components-for-embedded-service
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.361Z
estimatedTokens: 781
keywords: [Custom, Aura, Components, Embedded, Service, adapt, user, original, don’t, offer, flexibility, ease, compared, Lightning, Web]
---

# Custom Aura Components for Embedded Service

> Use Aura components to adapt the user interface for your embedded components.
                Aura components are the original components and don’t offer the same flexibility and
                ease of use compared to Lightning Web Components.

# Custom Aura Components for Embedded Service

Use Aura components to adapt the user interface for your embedded components. Aura components are the original components and don’t offer the same flexibility and ease of use compared to Lightning Web Components.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

Use Lightning Web Components (LWC) instead of Aura components. All new Embedded Service features will only work with LWC and support for Aura components may deprecate in the future.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

Embedded Service web components aren’t supported on the login page of Experience sites.

To create an Aura component, go to the Developer Console and click **File** | **New** | **Lightning Component**.

-   **[Customize the Pre-Chat Page UI with Aura Components](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_prechat.htm)**
    Customize the fields, layout, buttons, images, validation, or any other part of the user interface for pre-chat using a custom Aura component.
-   **[Custom Pre-Chat Component Code Samples](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_prechat_samples.htm)**
    You can use Aura or plain JavaScript to create your pre-chat components.
-   **[Customize the Minimized Embedded Service UI with Aura Components](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_minimized.htm)**
    Customize the user interface for the embedded component when it’s minimized on your web page using a custom Aura component.
-   **[Custom Minimized Component Code Samples](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_minimized_samples.htm)**
    The following code sample contains examples of the component, controller, and helper code for a custom minimized embedded component using Aura.
-   **[Get Settings from the Embedded Service Code Snippet](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_settings.htm)**
    Get settings for use with your Embedded Service Aura components. You can get the Chat button ID or deployment ID assigned to your Embedded Service deployment and the agent and chatbot avatar image URLs.

## Related Topics

- Customize the Pre-Chat Page UI with Aura Components (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_prechat.htm)
- Custom Pre-Chat Component Code Samples (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_prechat_samples.htm)
- Customize the Minimized Embedded Service UI with Aura Components (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_minimized.htm)
- Custom Minimized Component Code Samples (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_minimized_samples.htm)
- Get Settings from the Embedded Service Code Snippet (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_lightning_components_settings.htm)
