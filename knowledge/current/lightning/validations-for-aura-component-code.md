---
title: "Validations for Aura Component Code"
domain: lightning
topic: validations-for-aura-component-code
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.981Z
estimatedTokens: 404
keywords: [Validations, Aura, Component, Code, Validate, ensure, compatibility, APIs, best, practices, avoidance, anti-patterns, There, several, ways]
---

# Validations for Aura Component Code

> Validate your Aura component code to ensure compatibility with Aura component APIs, best
  practices, and avoidance of anti-patterns. There are several ways to validate your code. Minimal save-time validations catch the most
   significant issues only, while Salesforce DX tools provide more comprehensive static code
   analysis.

# Validations for Aura Component Code

Validate your Aura component code to ensure compatibility with Aura component APIs, best practices, and avoidance of anti-patterns. There are several ways to validate your code. Minimal save-time validations catch the most significant issues only, while Salesforce DX tools provide more comprehensive static code analysis.

-   **[Validation When You Save Code Changes](atlas.en-us.lightning.meta/lightning/validation_on_save.htm)**
    Aura component JavaScript code is validated when you save it. Validation ensures that your components are written using best practices and avoid common pitfalls that can make them incompatible with Lightning Locker. Validation happens automatically when you save Aura component resources in the Developer Console, in your favorite IDE, and via API.
-   **[Validation During Development Using ESLint](atlas.en-us.lightning.meta/lightning/validation_with_sfdx.htm)**
    Use ESLint to scan and improve your code during development. A linting tool doesn’t just help you avoid Lightning Locker conflicts and anti-patterns. It’s a terrific practice for improving your code quality and consistency, and to uncover subtle bugs before you commit them to your codebase.
-   **[Aura Component Validation Rules](atlas.en-us.lightning.meta/lightning/cli_rules.htm)**
    Rules built into Aura component code validations cover restrictions under Lightning Locker, correct use of Lightning APIs, and a number of best practices for writing Aura component code. Each rule, when triggered by your code, points to an area where your code might have an issue.

## Related Topics

- Validation When You Save Code Changes (atlas.en-us.lightning.meta/lightning/validation_on_save.htm)
- Validation During Development Using ESLint (atlas.en-us.lightning.meta/lightning/validation_with_sfdx.htm)
- Aura Component Validation Rules (atlas.en-us.lightning.meta/lightning/cli_rules.htm)
