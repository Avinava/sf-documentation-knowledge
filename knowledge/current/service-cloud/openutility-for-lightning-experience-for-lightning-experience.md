---
title: "openUtility() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: openutility-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.304Z
keywords: [openUtility, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# openUtility() for Lightning Experience for Lightning
            Experience

# openUtility() for Lightning Experience for Lightning Experience

Opens a utility. If the utility is already open, this method has no effect. Only one utility can be open at a time. If another utility is already open, openUtility() minimizes the utility. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [open()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_open.htm "Opens a utility. If the utility is already open, this method has no effect. Only one utility can be open at a time. If another utility is already open, open() minimizes the utility. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to open. Optional when called within a utility. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, opens the utility when the button is pressed.

Component code:

```

```

Controller code:

```

```

This example opens a utility from outside of the utility, using the utilityId field.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.