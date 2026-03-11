---
title: "setUtilityHighlighted() for Lightning Experience for
    Lightning Experience"
domain: service-cloud
topic: setutilityhighlighted-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.386Z
keywords: [setUtilityHighlighted, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Response]
---

# setUtilityHighlighted() for Lightning Experience for
    Lightning Experience

# setUtilityHighlighted() for Lightning Experience for Lightning Experience

Sets a utility as highlighted, giving it a badge and a more prominent background color. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updateUtility() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updateUtility.htm "Specifies a label and icon on the utility bar, and sets a utility as highlighted. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to highlight. Optional when called within a utility. |
| highlighted | boolean | Whether the utility is highlighted. Makes a utility more prominent by giving it a different background color. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets a utility as highlighted when the button is pressed.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.