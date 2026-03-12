---
title: "Consent Interactions"
domain: exp-cloud-lwr
topic: consent-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.651Z
estimatedTokens: 120
keywords: [Consent, Interactions, capture, whether, user, opts, tracking, cookies, Opt-in, Event, Opt-out]
---

# Consent Interactions

> Consent interactions capture whether a user opts into or out of
			tracking cookies.

# Consent Interactions

Consent interactions capture whether a user opts into or out of tracking cookies.

| Interaction Name | Description |
| --- | --- |
| set-consent | Captures the user-consent value. |

## Fields

| Field | Details |
| --- | --- |
| name | TypestringDescriptionRequired. The event name. |
| value | TypestringDescriptionIndicates whether the user opts in to cookie tracking (true) or opts out (false). |

## Opt-in Event

```

```

## Opt-out Event

```

```

## Code Examples

```
event.target.dispatchEvent(
    new CustomEvent('experience_interaction', {
       bubbles: true,
       composed: true,
       detail: {
          name: 'set-consent',
          value: true,
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
          name: 'set-consent',
          value: false,
       },
    })
);
```
