---
title: "Unless"
domain: mc-programmatic-content
topic: unless
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.440Z
estimatedTokens: 104
keywords: [Unless, block, helper, conditionally, renders, content, expression, empty, include, else, tag, needed]
---

> The unless block helper conditionally renders content based on the value of the expression. When the expression contains a false, null, undefined, or empty value (such as {} or []), the block helper renders the specified content. You can include an optional else tag as needed:

# Unless

The unless block helper conditionally renders content based on the value of the expression. When the expression contains a false, null, undefined, or empty value (such as {} or \[\]), the block helper renders the specified content. You can include an optional else tag as needed:

This example renders "Your order is ready" in applicable email messages and "Your order is not ready" for all email messages.
