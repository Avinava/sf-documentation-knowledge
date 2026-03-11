---
title: "generateConsoleUrl() for Lightning Experience for
                Lightning Experience"
domain: service-cloud
topic: generateconsoleurl-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.196Z
keywords: [generateConsoleUrl, Lightning, Experience, Arguments, Sample, Code, Response]
---

# generateConsoleUrl() for Lightning Experience for
                Lightning Experience

# generateConsoleUrl() for Lightning Experience for Lightning Experience

Generates a URL for a workspace tab and its subtabs. This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| pageReferences | pageReference[] | An array of page references. The first page reference is the workspace tab. Any following page references are subtabs. The last page reference is the focused subtab. |

## Sample Code

This component has a button that, when pressed, uses the generateConsoleUrl() method to create a URL for the provided page references.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves with the generated URL.

| Name | Type | Description |
| --- | --- | --- |
| url | string | A console URL that represents the array of URLs passed into Salesforce. |