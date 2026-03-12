---
title: "TPM_Promotion.Tactic"
domain: retail-api
topic: tpmpromotiontactic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.052Z
estimatedTokens: 160
keywords: [TPM_Promotion.Tactic, promotion, template, products, copied, components, Filter, Criteria, empty, rule, filters, Product, removing, longer, period]
---

# TPM_Promotion.Tactic

> If promotion template does not have products as copied components, the Filter Criteria is empty. This rule filters the Product Filter Criteria by removing products that are no longer
    valid for the promotion period.

# TPM\_Promotion.Tactic

## resetTactic2

-   Description: Resets the Tactic structure in order to be inserted as a new one.
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Method: resetTactic

## manageTacticProductFilterCopy2

-   Description: Removes the product filter products that are no longer valid for the period.
-   Classname: Promotion2BoApiCopyCoreWorkflowSteps
-   Method: manageTacticProductFilterCopy

If promotion template does not have products as copied components, the Filter Criteria is empty. This rule filters the Product Filter Criteria by removing products that are no longer valid for the promotion period.
