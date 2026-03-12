---
title: "Defer Sharing Calculation"
domain: salesforce-large-data-volumes-bp
topic: defer-sharing-calculation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:42.027Z
estimatedTokens: 232
keywords: [Defer, Sharing, Calculation, circumstances, appropriate, feature, users, processing, rules, until, new, content, loaded]
---

# Defer Sharing Calculation

> In some circumstances, it might be appropriate to use a feature
called defer sharing calculation, which allows users to defer
the processing of sharing rules until after new users, rules, and
other content have been loaded.

# Defer Sharing Calculation

In some circumstances, it might be appropriate to use a feature called *defer sharing calculation*, which allows users to defer the processing of sharing rules until after new users, rules, and other content have been loaded.

An organization’s administrator can use a defer sharing calculation permission to suspend and resume sharing calculations, and to manage two processes: group membership calculation and sharing rule calculation. The administrator can suspend these calculations when performing a large number of configuration changes, which might lead to very long sharing rule evaluations or timeouts, and resume calculations during an organization’s maintenance period. This deferral can help users process a large number of sharing-related configuration changes quickly during working hours, and then let the recalculation process run overnight between business days or over a weekend.
