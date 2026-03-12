---
title: "TPM_RTRFixedFunds_AMS (The Logic Class)"
domain: cgcloud-rtr-dev-guide
topic: tpmrtrfixedfundsams-the-logic-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.432Z
estimatedTokens: 263
keywords: [TPM_RTRFixedFunds_AMS, Logic, actual, defined, benefit, routing, separate, third, code, runs, needed, TPM, _RTRFixedFunds, _AMS]
---

# TPM_RTRFixedFunds_AMS (The Logic Class)

> The actual logic is defined in this class. The benefit of routing to a separate third
    class is that the code runs only when needed.

# TPM\_RTRFixedFunds\_AMS (The Logic Class)

The actual logic is defined in this class. The benefit of routing to a separate third class is that the code runs only when needed.

For example, the Apex classes run only when the report contains the custom datasource and any of the KPIs defined in the custom metadata. If the report contains fixed funds KPIs only on the brand level, then only that particular method is run while the method that's related to categories is skipped. Also if the report contains fixed funds on brand level for only one particular template, then only this particular KPI is aggregated, calculated, and returned.

It’s important to see how to write back values to the report. For the fixed funds logic, grouping, aggregations, and calculations are performed. And when that logic is performed, the values are written back to the report. This is done by adding the values to the output list and then returning it.

The OutputRecord method in the wrapper class creates the output list and contains product, KPI, time, and value.
