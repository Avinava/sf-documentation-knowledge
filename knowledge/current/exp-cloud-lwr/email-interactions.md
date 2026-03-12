---
title: "Email Interactions"
domain: exp-cloud-lwr
topic: email-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.654Z
estimatedTokens: 101
keywords: [Email, Interactions, interaction, occurs, user, updates, adds, site, Event]
---

# Email Interactions

> An email interaction occurs when a user updates or adds an email in
			your site.

# Email Interactions

An email interaction occurs when a user updates or adds an email in your site.

| Interaction Name | Description |
| --- | --- |
| email-update | Captures the email of the site visitor. |

## Fields

| Field | Details |
| --- | --- |
| email | TypestringDescriptionThe email of the site visitor. |
| name | TypestringDescriptionRequired. The event name. |

## Email Event

```

```

## Code Examples

```
event.target.dispatchEvent(
    new CustomEvent('experience_interaction', {
       bubbles: true,
       composed: true,
       detail: {
          name: 'email-update',
          email: 'genie@example.com'
       },
    })
);
```
