---
title: "Promotion and Tactic Transfer Customization"
domain: retail-api
topic: promotion-and-tactic-transfer-customization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.118Z
estimatedTokens: 398
keywords: [Promotion, Tactic, Transfer, Customization, save, Trade, Management, TPM, triggers, planned, Retail, Execution, modify, saved, associated]
---

# Promotion and Tactic Transfer Customization

> When you save a promotion in Trade Promotion Management (TPM), it triggers a transfer
    of the planned promotion to Retail Execution (RE). You can modify the saved promotion and its
    associated tactic or tactic product details before they get transferred by creating two
    different callable Apex classes as customization hooks.

# Promotion and Tactic Transfer Customization

When you save a promotion in Trade Promotion Management (TPM), it triggers a transfer of the planned promotion to Retail Execution (RE). You can modify the saved promotion and its associated tactic or tactic product details before they get transferred by creating two different callable Apex classes as customization hooks.

-   **[Customize the Promotion Transfer Process](atlas.en-us.retail_api.meta/retail_api/promotion_transfer_apex_setup.htm)**
    To modify the promotion details being transferred, create a callable Apex class as a customization hook.
-   **[Customize the Tactic Transfer Process](atlas.en-us.retail_api.meta/retail_api/tactic_transfer_apex_setup.htm)**
    To modify the tactic details related to the promotion being transferred, create a callable Apex class as a customization hook.
-   **[Promotion and Tactic Transfer Customization Use Cases](atlas.en-us.retail_api.meta/retail_api/tactic_transfer_apex_save_customization.htm)**
    This section provides different Apex customization use cases for the promotion and tactic transfer process.
-   **[RE\_PromotionTransfer Class](atlas.en-us.retail_api.meta/retail_api/RE_promotion_transfer_class.htm)**
    The RE\_PromotionTransfer Apex class provides programmatic access to the RE\_PromotionTransfer sObject and its related sObjects.
-   **[RE\_TacticTransfer Class](atlas.en-us.retail_api.meta/retail_api/RE_tactic_transfer_class.htm)**
    The RE\_TacticTransfer Apex class provides programmatic access to the RE\_TacticTransfer sObject and its related sObjects.

## Related Topics

- Customize the Promotion Transfer Process (atlas.en-us.retail_api.meta/retail_api/promotion_transfer_apex_setup.htm)
- Customize the Tactic Transfer Process (atlas.en-us.retail_api.meta/retail_api/tactic_transfer_apex_setup.htm)
- Promotion and Tactic Transfer Customization Use Cases (atlas.en-us.retail_api.meta/retail_api/tactic_transfer_apex_save_customization.htm)
- RE_PromotionTransfer Class (atlas.en-us.retail_api.meta/retail_api/RE_promotion_transfer_class.htm)
- RE_TacticTransfer Class (atlas.en-us.retail_api.meta/retail_api/RE_tactic_transfer_class.htm)
