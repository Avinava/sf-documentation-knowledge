---
title: "Service Cloud Voice Lightning Web Component (LWC) Toolkit
    API"
domain: voice-developer-guide
topic: service-cloud-voice-lightning-web-component-lwc-toolkit-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.723Z
estimatedTokens: 385
keywords: [Service, Cloud, Voice, Lightning, Web, Component, LWC, Toolkit, API, build, components, access, features]
---

# Service Cloud Voice Lightning Web Component (LWC) Toolkit
    API

> The Service Cloud Voice Toolkit API allows you to build Lightning web components that
    have access to Service Cloud Voice features.

# Service Cloud Voice Lightning Web Component (LWC) Toolkit API

The Service Cloud Voice Toolkit API allows you to build Lightning web components that have access to Service Cloud Voice features.

This component is supported in Lightning Experience. It requires API version 52.0 or later.

To use the Service Cloud Voice Toolkit API in your component:

1.  Add the lightning\_\_ServiceCloudVoiceToolkitApi component to your component’s HTML template file.

    ```

    ```

2.  Include the lightning\_\_ServiceCloudVoiceToolkitApi target in your component’s configuration file.

    ```

    ```


For more information about configuration files, see [XML Configuration File Elements](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_configuration_tags).

-   **[Service Cloud Voice LWC Toolkit API Telephony Events](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_telephony_lwc.htm)**
    Make your LWC components context-aware by listening to events that take place during phone calls.
-   **[Service Cloud Voice LWC Toolkit API Telephony Actions](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_lwc_telephony_actions.htm)**
    Make your components context-aware by listening to and raising events during phone calls.
-   **[Service Cloud Voice LWC Toolkit Next Best Action](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_nba_lwc.htm)**
    Give your reps recommendations in real time with Next Best Action.

## Code Examples

```
// yourComponent.html
      
<template>
  <lightning-service-cloud-voice-toolkit-api>
  </lightning-service-cloud-voice-toolkit-api>
  ...
</template>
```

```
// yourComponent.js-meta.xml

<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
  <apiVersion>52.0</apiVersion>
  <isExposed>true</isExposed>
  <capabilities>
    <capability>lightning__ServiceCloudVoiceToolkitApi</capability>
  </capabilities>
</LightningComponentBundle>
```

## Related Topics

- Service Cloud Voice LWC Toolkit API Telephony Events (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_telephony_lwc.htm)
- Service Cloud Voice LWC Toolkit API Telephony Actions (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_lwc_telephony_actions.htm)
- Service Cloud Voice LWC Toolkit Next Best Action (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_nba_lwc.htm)
