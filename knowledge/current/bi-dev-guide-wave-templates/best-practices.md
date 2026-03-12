---
title: "Best Practices"
domain: bi-dev-guide-wave-templates
topic: best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:07.484Z
estimatedTokens: 119
keywords: [Best, Practices, creating, template, dependencies, follow, guidelines]
---

# Best Practices

> When creating template dependencies, follow these guidelines.

# Best Practices

When creating template dependencies, follow these guidelines.

1.  Make the templateVersion as broad as possible.
2.  Always include namespace.
3.  For ease of maintenance, keep your template dependencies simple. There’s no technical limitation to the number of dependencies you can create. But in practice, it’s best to avoid creating multiple dependencies from one template to others. Also, avoid making supporting templates dependent on other templates.
