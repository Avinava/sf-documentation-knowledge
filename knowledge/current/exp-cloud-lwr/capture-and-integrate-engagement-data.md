---
title: "Capture and Integrate Engagement Data"
domain: exp-cloud-lwr
topic: capture-and-integrate-engagement-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.612Z
estimatedTokens: 622
keywords: [Capture, Integrate, Engagement, Data, Experience, Tag, Manager, JavaScript, library, captures, user-interaction, events, Cloud, layer, combines]
---

# Capture and Integrate Engagement Data

> Experience Tag Manager is a JavaScript library that captures user-interaction events from
  the Experience Cloud data layer and combines them with site data to generate web events. These
  events are sent to other applications, such as Data Cloud or Google Analytics. Tag Manager is
  installed automatically when you connect your enhanced LWR sites to Data Cloud with the built-in
  Data Cloud integration. You can then use information you gather with Tag Manager  to build
  behavior profiles for web visitors, audience segmentation, site personalization, or Salesforce
  integrations.

# Capture and Integrate Engagement Data

Experience Tag Manager is a JavaScript library that captures user-interaction events from the Experience Cloud data layer and combines them with site data to generate web events. These events are sent to other applications, such as Data Cloud or Google Analytics. Tag Manager is installed automatically when you connect your enhanced LWR sites to Data Cloud with the built-in Data Cloud integration. You can then use information you gather with Tag Manager to build behavior profiles for web visitors, audience segmentation, site personalization, or Salesforce integrations.

Experience interaction events are triggered when a user performs an action on a site page. Examples include scrolling, clicking, and viewing. Events can take place on Lightning web components or the page itself. When they occur, they’re sent to the event queue, which notifies the Experience Tag Manager to process the events.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=exp_cloud_lwr)

#### Important

In the Summer '24 release, when Data Cloud and Google Analytics integrations are enabled in an LWR site, the transfer of site metadata to a different org via the DigitalExperienceBundle Metadata API encounters component failures. For more information, see [DigitalExperienceBundle has component failures with Data Cloud and Google Analtyics integrations.](https://issues.salesforce.com/issue/a028c00000yyzdy/digitalexperiencebundle-has-component-failures-with-data-cloud-and-google-analytics-integrations)

-   **[Configure the Consent Opt-In Default](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_cloud_consent_management.htm)**
    To start capturing events to send to Data Cloud, configure your user consent options. By default, Tag Manager doesn’t send data to its destination until the user explicitly opts in. Choose how to present consent options to the site visitor and whether to update the default behavior.
-   **[Track User Interactions to Send to Data Cloud](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_cloud_user_interactions.htm)**
    Your Data Cloud integration comes with a set of interaction events that are turned on and mapped to the Website Engagement DMO by default. Interactions are either all mapped, or not mapped at all, but you can update event names to customize your integration. An interaction event has a named identifier, required values, and tracked values that you define.

## Related Topics

- Configure the Consent Opt-In Default (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_cloud_consent_management.htm)
- Track User Interactions to Send to Data Cloud (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/data_cloud_user_interactions.htm)
