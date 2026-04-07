---
title: "Slots"
domain: mc-programmatic-content
topic: slots
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.033Z
estimatedTokens: 194
keywords: [Slots, Template, Language, containers, sections, gears, block, tags, impact, any, data, context, Output]
---

# Slots

> Use slots within Guide Template Language as containers for sections or gears. Slots use block tags and do not impact any data context.

# Slots

Use slots within Guide Template Language as containers for sections or gears. Slots use block tags and do not impact any data context.

Use slots within layouts define the structure for the for the rendered content. Each slot contains three different sections:

-   Meta - stores data about the slot used by other applications, including validation and compilation. Nothing in the meta tag affects rendering or impacts the final content.
-   Default - stores content to provide if the markup does not include content or provides an empty value. Content - stores markup to render.
-   A rendered slot provides only content unless the slot provides an empty value, when the slot provides the default content.

## Template

## Output

```
Hello.
Hello to you, too.
```
