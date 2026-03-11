---
title: "disableUtilityPopOut() for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: disableutilitypopout-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.177Z
keywords: [disableUtilityPopOut, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# disableUtilityPopOut() for Lightning Experience for
            Lightning Experience

# disableUtilityPopOut() for Lightning Experience for Lightning Experience

Disables pop-out for a utility. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [enablePopout()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enablePopout.htm "Toggles pop-out mode on a utility. Enabling pop-out mode on a utility displays the utility in a separate child window. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to disable pop-out for. Optional when called within a utility. |
| disabled | boolean | If true, disables pop-out and removes the pop-out icon for a utility that isn’t popped out. If the utility is already popped out, the pop-out icon is disabled.If disabledText is provided, the pop-out icon isn’t removed, but it’s disabled. |
| disabledText | string | Hover text for the pop-out and pop-in icons if disabled is set to true. Optional. |

## Aura Components Sample Code

This component has a button that, when pressed, disables utility pop-out.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.