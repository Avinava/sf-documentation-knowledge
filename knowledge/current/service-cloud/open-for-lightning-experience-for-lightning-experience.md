---
title: "open() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: open-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.449Z
keywords: [open, Lightning, Experience, Arguments, LWC, Sample, Code, Response]
---

# open() for Lightning Experience for Lightning
            Experience

# open() for Lightning Experience for Lightning Experience

Opens a utility. If the utility is already open, this method has no effect. Only one utility can be open at a time. If another utility is already open, open() minimizes the utility. This method is available for Lightning Web Components (LWC) only.

## Arguments

Optional parameters are passed into an object as the last argument of the method.

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to open. |
| autoFocus | object | Optional. Specifies whether the utility item to open has focus. |

## LWC Sample Code

This component opens a utility using the enclosing utility ID.

```

```

To make your component available for use in a utility bar, specify the lightning\_\_UtilityBar target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-utility-bar.html).

## Response

Returns a promise that resolves to true if successful. The promise is rejected on error.