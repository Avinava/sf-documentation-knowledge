---
title: "Engagement Interactions"
domain: exp-cloud-lwr
topic: engagement-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.658Z
estimatedTokens: 196
keywords: [Engagement, Interactions, interaction, occurs, customer, engages, site, buttons, links, elements, Anchor, Click, Event, Button]
---

# Engagement Interactions

> An engagement interaction occurs when a customer engages with your site
			through buttons, links, or other page elements.

# Engagement Interactions

An engagement interaction occurs when a customer engages with your site through buttons, links, or other page elements.

| Interaction Name | Description |
| --- | --- |
| anchor-click | Captures any anchor click. |
| button-click | Captures any button click. |
| page-scroll-to-bottom | Captures when a user scrolls to the bottom of the page. |
| page-view | Captures the event when a user views a page. |

## Fields

| Field | Details |
| --- | --- |
| attributes | TypeobjectDescriptionA dictionary of values that you supply. |
| linkhref | TypestringDescriptionThe web address of the link to capture. |
| name | TypestringDescriptionRequired. The event name. |

## Anchor Click Interaction Event

```

```

## Button Click Interaction Event

```

```

## Code Examples

```
event.target.dispatchEvent(
    new CustomEvent('experience_interaction', {
        bubbles: true,
        composed: true,
        detail: {
            name: 'anchor-click',
            linkHref: 'https://expectedUrl'
            attributes: {
                buttonLabel: 'Click here'
            },
        },
    })
);
```

```
event.target.dispatchEvent(
    new CustomEvent('experience_interaction', {
        bubbles: true,
        composed: true,
        detail: {
            name: 'button-click',
            attributes: {
                buttonLabel: 'Click here'
            }
        },
    })
);
```
