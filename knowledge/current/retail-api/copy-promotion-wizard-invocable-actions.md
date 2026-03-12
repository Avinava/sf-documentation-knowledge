---
title: "Copy Promotion Wizard Invocable Actions"
domain: retail-api
topic: copy-promotion-wizard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.169Z
estimatedTokens: 334
keywords: [Copy, Promotion, Wizard, Invocable, Actions, support, Data, Source, providers, CopyPromotion]
---

# Copy Promotion Wizard Invocable Actions

> This class contains support for Data Source providers used in the CopyPromotion
  wizard.

# Copy Promotion Wizard Invocable Actions

This class contains support for Data Source providers used in the CopyPromotion wizard.

-   **[getPromotion](atlas.en-us.retail_api.meta/retail_api/copy_promotion_getpromotions.htm)**
    This method returns the requested fields for the given promotion ID.
-   **[getAccounts](atlas.en-us.retail_api.meta/retail_api/copy_promotion_getaccounts.htm)**
    This method returns the list of accounts valid for the target promotion. Target promotion timeframe is calculated by the difference in days between the original promotion date and the new date.
-   **[getAccountSets](atlas.en-us.retail_api.meta/retail_api/copy_promotion_getaccountsets.htm)**
    This method returns the list of account sets valid for the target promotion. Target promotion timeframe is calculated by the difference in days between the original promotion date and the new date.
-   **[IsPromotionTemplateCopyable](atlas.en-us.retail_api.meta/retail_api/copy_promotion_is_promotion_template_copy.htm)**
    This method validates the given promotion has a promotion template that can be copied.
-   **[isPromotionAndUserSameSalesOrg](atlas.en-us.retail_api.meta/retail_api/copy_promotion_is_promotion_and_user_same.htm)**
    This method validates if the given promotion belongs to the same Salesorg where the user exists.

## Related Topics

- getPromotion (atlas.en-us.retail_api.meta/retail_api/copy_promotion_getpromotions.htm)
- getAccounts (atlas.en-us.retail_api.meta/retail_api/copy_promotion_getaccounts.htm)
- getAccountSets (atlas.en-us.retail_api.meta/retail_api/copy_promotion_getaccountsets.htm)
- IsPromotionTemplateCopyable (atlas.en-us.retail_api.meta/retail_api/copy_promotion_is_promotion_template_copy.htm)
- isPromotionAndUserSameSalesOrg (atlas.en-us.retail_api.meta/retail_api/copy_promotion_is_promotion_and_user_same.htm)
