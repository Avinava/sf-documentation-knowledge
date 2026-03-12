---
title: "Tax Integration Core Classes"
domain: blng-dev
topic: tax-integration-core-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.979Z
estimatedTokens: 281
keywords: [Tax, Integration, Core, Classes, engine, references, manage, Salesforce, Billing, They, can't, modified]
---

# Tax Integration Core Classes

> Your tax engine references these classes to manage tax information with Salesforce
  Billing. They can't be modified.

# Tax Integration Core Classes

Your tax engine references these classes to manage tax information with Salesforce Billing. They can't be modified.

The following are the blng namespace classes required for integrating Salesforce Billing with an external tax engine.

-   **[TaxParameters Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_class_blng_TaxParameters)**
    Contains a list of setters to populate the data needed for a tax calculation. The data is passed in the tax callout.
-   **[TaxResults Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_class_blng_TaxResults)**
    Contains a list of setter methods to populate the data returned from a tax callout. The data is passed back to Salesforce Billing from the tax connector.
-   **[TaxEngines Interface](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm#apex_interface_blng_TaxEngines)**
    Your tax engine implements this interface. It contains methods for calculating tax, clearing in-memory entities from the previous call, and clearing legal references from the previous call.

## Related Topics

- TaxParameters Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- TaxResults Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- TaxEngines Interface (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm)
