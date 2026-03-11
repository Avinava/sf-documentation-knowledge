---
title: "toggleModalMode() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: togglemodalmode-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.400Z
keywords: [toggleModalMode, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# toggleModalMode() for Lightning Experience for Lightning Experience

# toggleModalMode() for Lightning Experience for Lightning Experience

Toggles modal mode for a utility. While in modal mode, an overlay blocks users from using the console while the utility panel is visible. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [enableModal()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enableModal.htm "Toggles modal mode for a utility. While in modal mode, an overlay blocks users from using the console while the utility panel is visible. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to open. Optional when called within a utility. |
| enableModalMode | boolean | Whether to enable modal mode. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, has a button that, when pressed, toggles modal mode.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.