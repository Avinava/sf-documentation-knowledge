---
title: "Best Practices for Feature Management"
domain: pkg2-dev
topic: best-practices-for-feature-management
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:26.132Z
estimatedTokens: 310
keywords: [Best, Practices, Feature, Management, working]
---

# Best Practices for Feature Management

> Here are some best practices when working with feature parameters.

# Best Practices for Feature Management

Here are some best practices when working with feature parameters.

-   We recommend that you use this feature set in a test package and a test LMO before using it with your production package. Apply changes to your production package only after fully understanding the product’s behavior.
-   Create LMO-to-subscriber feature parameters to enable features from your LMO for individual subscriber orgs. Don’t use the Apex code in your managed package to modify LMO-to-subscriber feature parameters’ values in subscriber orgs. You can’t send the modified values back to your LMO, and your records will be out of sync.

    Use LMO-to-subscriber feature parameters as read-only fields to manage app behavior. For example, use LMO-to-subscriber feature parameters to track the maximum number of permitted e-signatures or to make enhanced reporting available.

-   Create subscriber-to-LMO feature parameters to manage activation metrics. Set these feature parameters’ values in subscriber orgs using the Apex code in your managed package. For example, use subscriber-to-LMO feature parameters to track the number of e-signatures consumed or to check whether a customer has activated enhanced reporting.
