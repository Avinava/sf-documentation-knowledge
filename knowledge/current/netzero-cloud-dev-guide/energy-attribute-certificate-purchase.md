---
title: "Energy Attribute Certificate Purchase"
domain: netzero-cloud-dev-guide
topic: energy-attribute-certificate-purchase
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.956Z
estimatedTokens: 168
keywords: [Energy, Attribute, Certificate, Purchase, certificates, clean, project, supplier]
---

# Energy Attribute Certificate Purchase

> The Energy Attribute Certificate Purchase object represents information about the
    purchase of energy attribute certificates from the clean energy project supplier.

# Energy Attribute Certificate Purchase

The Energy Attribute Certificate Purchase object represents information about the purchase of energy attribute certificates from the clean energy project supplier.

Here are the calculated fields:

-   **Total Energy Attribute Credits Available (MWh) (TotEnrgyAttrCrAvlMwh)**

    **Input Fields**

    -   Total Energy Attribute Credits Allocated (MWh) (TotEnrgyAttrCrAllocMwh)
    -   Total Energy Attribute Credits Purchased (MWh) (TotEnrgyAttrCrPurchMwh)

    **Calculations**

    Total Energy Attribute Credits Available (MWh)= Total Energy Attribute Credits Purchased (MWh) - Total Energy Attribute Credits Allocated (MWh)
