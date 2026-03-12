---
title: "Manual Inputs"
domain: retail-api
topic: manual-inputs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.058Z
estimatedTokens: 188
keywords: [Manual, Inputs, handleManualInputs2]
---

# Manual Inputs

> This section provides information about manual inputs.

# Manual Inputs

This section provides information about manual inputs.

## handleManualInputs2

-   Description: Handles the list of manual inputs provided.
-   Classname: Promotion2BoApiCoreWorkflowSteps
-   Method: handleManualInputs

| Property | Description | Required or Optional |
| --- | --- | --- |
| .KPI | Strings with 80 characters. Specifies the KPI Name to set. | Required |
| .Value | Numeric value. Value to set to the KPI. | Required |
| .Product | Product ID to set the KPI Value to. If not set, the KPI value is set as total for the promotion or tactic. The product ID can be specified as an SFDC ID or an external ID. | Required |

Workflow to set manual inputs on product, tactic, and promotion level.

**Sample Request**

```

```

## Code Examples

```
{
    // Promotion information
    Id: "Promo1ExternalId",
    // .. rest of Promotion input attributes
    ManualInputs: [
        {
            KPI: "ProPlanSpend",                // Name of the KPI
            Product: "HiChoc",                  // Product to apply the KPI, external id of the product level
            Value: 1234                         // Value of the KPI
        }
    ],
    Tactics: [
        {
            // Tactic Information
            Id: "Tactic1ExternalId",
            // .. rest of Tactic input attributes
            ManualInputs: [
                {
                    KPI: "ProPlanSpend",
                    Product: "HiChoc",
                    Value: 1234
                }
            ]
        }
    ]
}
```
