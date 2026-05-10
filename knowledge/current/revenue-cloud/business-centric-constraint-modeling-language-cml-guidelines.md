---
title: "Business-Centric Constraint Modeling Language (CML) Guidelines"
domain: revenue-cloud
topic: business-centric-constraint-modeling-language-cml-guidelines
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-05-10T00:39:02.423Z
estimatedTokens: 365
keywords: [Business-Centric, Constraint, Modeling, Language, CML, Guidelines, accurately, calculate, total, sum, aggregate, specific, attributes, quantity, userCount, across, child, especially, complex, configurations, requiring, group-level, aggregation, User, Workflow]
---

> Constraint Modeling Language (CML) must accurately calculate the total sum or aggregate
    of specific attributes like quantity or userCount across child components, especially in complex
    configurations requiring group-level aggregation

# Business-Centric Constraint Modeling Language (CML) Guidelines

Constraint Modeling Language (CML) must accurately calculate the total sum or aggregate of specific attributes like quantity or userCount across child components, especially in complex configurations requiring group-level aggregation

The main modeling obstacles when performing aggregation in CML involve:

-   Initialization Errors: Preventing runtime errors, such as NullPointerException, which can occur if derived aggregate attributes lack explicit domains.
-   Circular Dependencies: Avoiding calculation loops where the parent and children mutually rely on aggregated totals, often involving the total() function. If these loops are not broken, the aggregated variable becomes "not bound", which causes the solution to fail.

## User Workflow

As a sales representative, when I am configuring a bundle product in the Configurator window, I modify the quantities or specific attributes of the individual child components. I expect the constraint engine to immediately and accurately calculate the overall aggregated totals for the parent product, such as the totalItemCount or sumOfUsers.

-   **[Business-Centric CML Examples](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_business_centric_cml_examples.htm)**
    These Constraint Modeling Language (CML) structures implement quantity aggregation and resolve calculation dependencies.

## Related Topics

- Business-Centric CML Examples (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_business_centric_cml_examples.htm)
