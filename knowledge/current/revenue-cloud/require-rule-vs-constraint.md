---
title: "Require Rule vs Constraint"
domain: revenue-cloud
topic: require-rule-vs-constraint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:02.701Z
estimatedTokens: 158
keywords: [Require, Rule, Constraint, Modeling, Language, CML, enforce, behavior, they, operate, differently, focuses, logical, consistency, physical, presence, products]
---

> In Constraint Modeling Language (CML), constraint() and require() can both enforce
    behavior, but they operate differently: constraint focuses on logical consistency, require
    focuses on physical presence of products.

# Require Rule vs Constraint

In Constraint Modeling Language (CML), constraint() and require() can both enforce behavior, but they operate differently: constraint focuses on logical consistency, require focuses on physical presence of products.

Here's a comparison between constraint() and require().

| Feature | constraint() | require() |
| --- | --- | --- |
| Primary goal | Validates if a condition is met (LHS) and operates on the result (RHS). | Forces a product to be present. |
| Engine action | Resolves the constraint or displays an error if there are no options to resolve. | Adds the required product to the quote. |
