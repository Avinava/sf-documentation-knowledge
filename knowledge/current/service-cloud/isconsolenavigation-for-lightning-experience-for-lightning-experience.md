---
title: "isConsoleNavigation() for Lightning Experience for
                Lightning Experience"
domain: service-cloud
topic: isconsolenavigation-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.252Z
keywords: [isConsoleNavigation, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# isConsoleNavigation() for Lightning Experience for
                Lightning Experience

# isConsoleNavigation() for Lightning Experience for Lightning Experience

Determines whether the app it’s used within uses console navigation. This method isn’t supported for Lightning Web Components (LWC).

To determine if a component is using console navigation with LWC, see [IsConsoleNavigation context wire adapter](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_isConsoleNavigation.htm "Determines whether the app it’s used within uses console navigation. This wire adapter is available for Lightning Web Components (LWC) only.").

## Arguments

None.

## Aura Components Sample Code

This component has a button that, when pressed, prints whether the current app is using console navigation.

Component code:

```

```

Controller code:

```

```

## Response

If the current app uses console navigation, this method returns a promise that resolves to true when successful, or false otherwise.