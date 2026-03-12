---
title: "Error Report Interactions"
domain: exp-cloud-lwr
topic: error-report-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.661Z
estimatedTokens: 123
keywords: [Error, Report, Interactions, capture, occurs, site, Event]
---

# Error Report Interactions

> Error interactions capture when an error occurs on your
		site.

# Error Report Interactions

Error interactions capture when an error occurs on your site.

| Interaction Name | Description |
| --- | --- |
| error | Captures errors that occur on your site. |

## Fields

| Field | Details |
| --- | --- |
| attributes | TypeobjectDescriptionA dictionary of values that you supply. |
| id | TypestringDescriptionRequired. A unique ID representing the error type. |
| name | TypestringDescriptionRequired. The event name. |

## Error Report Event

```

```

## Code Examples

```
event.target.dispatchEvent(
    new CustomEvent('experience_interaction', {
       bubbles: true,
       composed: true,
       detail: {
          name: 'error',
          id: 'error-id-1',
          attributes: {
             type: "api-error",
             message: "503: service not available"
          },
       },
    })
);
```
