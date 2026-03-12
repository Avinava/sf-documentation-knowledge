---
title: "New Promotion Wizard Invocable Actions"
domain: retail-api
topic: new-promotion-wizard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.173Z
estimatedTokens: 516
keywords: [New, Promotion, Wizard, Invocable, Actions, support, Data, Source, providers, NewPromotion]
---

# New Promotion Wizard Invocable Actions

> This class contains support for Data Source providers used in the NewPromotion
  wizard.

# New Promotion Wizard Invocable Actions

This class contains support for Data Source providers used in the NewPromotion wizard.

-   **[getAccounts](atlas.en-us.retail_api.meta/retail_api/getAccounts.htm)**
    This method returns the list of accounts valid for the period defined by the input date from and the date through.
-   **[getAccountSets](atlas.en-us.retail_api.meta/retail_api/getAccountSets.htm)**
    This method returns the list of account sets valid for the period defined by the input date from and date through.
-   **[getPromotionTemplates](atlas.en-us.retail_api.meta/retail_api/getPromotionTemplates.htm)**
    This method returns the list of promotion templates along with additional information. The method will search for promotion templates where the "Display\_In\_MetadataWizard\_\_c" field is set to true unless the "all" parameter is set to true.
-   **[getProducts](atlas.en-us.retail_api.meta/retail_api/getProducts.htm)**
    This method returns the list of tactic templates related to the input promotion template.
-   **[getPromotionKPIs](atlas.en-us.retail_api.meta/retail_api/getPromotionKPIs.htm)**
    This method returns the list of editable and editable calculated KPIs on promotion level for the input promotion template
-   **[getTacticCompensationModels](atlas.en-us.retail_api.meta/retail_api/getTacticCompensationModels.htm)**
    This method returns the list of valid compensation model values for a tactic template based on the tactic template defined tactic record type.
-   **[getTacticKPIs](atlas.en-us.retail_api.meta/retail_api/getTacticKPIs.htm)**
    This method returns the list of editable and editable calculated KPI's on tactic level for the input ppromotion template and tactic template. It returns all the possible KPI's that are part of the tactic template defined KPI subset in the order defined by the sort field.
-   **[getTacticTemplates](atlas.en-us.retail_api.meta/retail_api/getTacticTemplates.htm)**
    This method returns the list of tactic templates related to the input promotion template.

## Related Topics

- getAccounts (atlas.en-us.retail_api.meta/retail_api/getAccounts.htm)
- getAccountSets (atlas.en-us.retail_api.meta/retail_api/getAccountSets.htm)
- getPromotionTemplates (atlas.en-us.retail_api.meta/retail_api/getPromotionTemplates.htm)
- getProducts (atlas.en-us.retail_api.meta/retail_api/getProducts.htm)
- getPromotionKPIs (atlas.en-us.retail_api.meta/retail_api/getPromotionKPIs.htm)
- getTacticCompensationModels (atlas.en-us.retail_api.meta/retail_api/getTacticCompensationModels.htm)
- getTacticKPIs (atlas.en-us.retail_api.meta/retail_api/getTacticKPIs.htm)
- getTacticTemplates (atlas.en-us.retail_api.meta/retail_api/getTacticTemplates.htm)
