---
title: "Modifiable Promotion and Tactic EARights"
domain: retail-api
topic: modifiable-promotion-and-tactic-earights
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.162Z
estimatedTokens: 1750
keywords: [Modifiable, Promotion, Tactic, EARights, Promotion-level]
---

# Modifiable Promotion and Tactic EARights

> This section provides all the modifiable promotion and tactic EARights.

# Modifiable Promotion and Tactic EARights

This section provides all the modifiable promotion and tactic EARights.

## Promotion-level EARights

You can modify these promotion-level EARights in your Apex customization hook.

| Name | Type | Visible | Editable | Description |
| --- | --- | --- | --- | --- |
| ADD_TACTIC_BUTTON | UI element | true if the promotion template has related tactic templates | true | Controls the visibility of the Add Tactic button on the header. |
| cg_cloud__Anchor_Account__c | Attribute | true if Anchor Type is Customer and the user has view access to the field | true if Anchor Type is Customer and the user has view access to the field | Controls view and edit access for the anchor customer field. |
| cg_cloud__Anchor_Account_Set__c | Attribute | true if Anchor Type is Customer Set and the user has view access to the field | true if Anchor Type is Customer Set and the user has view access to the field | Controls view and edit access for the anchor customer set field |
| cg_cloud__Commit_Date__c | Attribute | true if the user has view access to the field | true if the user has edit access to the field and the promotion template time frame determination policy isn’t Simple | Controls view and edit access for the commit date field. |
| cg_cloud__Date_From__c | Attribute | true if the user has view access to the field | true if the user has edit access to the field and the promotion template time frame determination policy isn’t Simple | Controls view and edit access for the date from field. |
| cg_cloud__Date_Thru__c | Attribute | true if the user has view access to the field | true if the user has edit access to the field and the promotion template time frame determination policy isn’t Simple | Controls view and edit access for the date thru field. |
| cgcloud__Promotion__c | Object | true if the sObject is visible | true if the sObject is editable | Controls global access to the promotion. All the fields in promotion cards are editable. |
| cg_cloud__Slogan__c | Attribute | true if the user has view access to the Slogan_Language_1__c field | true if the user has edit access to the Slogan_Language_1__c field | Controls view and edit access for the slogan field. |
| COSTS_KPI_CHART | UI element | true if the promotion template calculation mode is Writeback | true if the promotion template calculation mode is Writeback | Controls the visibility of the Costs promotion chart. |
| MANAGE_PRODUCTS_BUTTON | UI element | true | true | Controls the visibility and editability of the Manage Products button on the products card. |
| PARTICIPATION_CUSTOMER_GRID | UI element | true if the promotion template has the Is Pushable field set to true | true if the promotion template has the Is Pushable field set to true | Controls the visibility of the participating customers card for pushable promotions. |
| PROMOTION_ATTACHMENT_BUTTON | UI element | true | true | Controls the visibility of the display promotion attachments on the header. |
| PROMOTION_EDIT_BUTTON | UI element | true if the user has edit access on the promotion | true if the user has edit access, or the promotion isn’t:A child promotionA pushable promotion with a push in progressfrozen | Controls the visibility of the edit mode button. |
| PROMOTION_PLANNING_BUTTON | UI element | true | true | Controls the visibility of the display promotion planning page. |
| PROMOTION_PLANNING_GRID_BUTTON | UI element | true if the promotion template calculation mode is Writeback or AdHoc | true if the promotion template calculation mode is Writeback or AdHoc | Controls the visibility of the display PL button. |
| PL_GRID | UI element | true if the promotion template calculation mode is Writeback or AdHoc | true if the promotion template calculation mode is Writeback or AdHoc | Controls the visibility and editability of the promotion P&L Grid. |
| ROI_KPI_CHART | UI element | true if the promotion template calculation mode is Writeback | true if the promotion template calculation mode is Writeback | Controls the visibility of the ROI promotion chart. |
| SCENARIO_PLANNING_BUTTON | UI element | true if the promotion template has scenario planning enabled, and the promotion phase isn’t in the promotion cleaning phases of the template | true if the promotion template has scenario planning enabled, and the promotion phase isn’t in the promotion cleaning phases of the template | Controls the visibility of the scenario planning menu. |
| SUBACCOUNT_GRID | UI element | true if the promotion template has sub-accounts enabled | true if the promotion template has sub-accounts enabled | Controls the visibility of the sub-accounts card. |
| TACTIC_DUPLICATE_BUTTON | UI element | true | true | Controls the visibility of the duplicate tactic on the header, and the tactic navigation components. |
| TACTIC_DELETE_BUTTON | UI element | true | true | Controls the visibility of the duplicate tactic and tactic navigation components. |
| VOLUME_PLANNING_GRID | UI element | true if the promotion template has Display VPC | true if the promotion template has Display VPC | Controls the visibility of the VPC card. |
| All other Promotion SObject fields | Attribute | true if the user has view access to the field | true if the user has edit access to the field | Controls view and edit access for all other promotion fields based on FLS. |

## Tactic EARights

You can modify these tactic-level EARights in your Apex customization hook.

| Name | Type | Visible | Editable | Description |
| --- | --- | --- | --- | --- |
| cgcloud__Tactic__c | Object | true if the sObject is visible | true if the sObject is editable | Controls global access to the tactic. |
| COSTS_KPI_CHART | UI element | true if the promotion template calculation mode is Writeback | true if the promotion template calculation mode is Writeback | Controls the visibility of the Costs tactic chart. |
| ROI_KPI_CHART | UI element | true if the promotion template calculation mode is Writeback | true if the promotion template calculation mode is Writeback | Controls the visibility of the ROI tactic chart. |
| SPEND_PLANNING_CARD | UI element | true if the promotion template has Display SPC | true if the promotion template has Display SPC | Controls the visibility of the SPC card on the tactic. |
| SPEND_PLANNING_​CARD_CHECKBOX_COLUMN | UI element | true if the promotion template has Display SPC | true if the promotion template has Display SPC | Controls the visibility and editability of the SPC card checkbox column for inclusion and exclusion of products. |
| TACTIC_FUNDS_CARD | UI element | true if the promotion template has the Display Fund card | true if the promotion template has the Display Fund card | Controls the visibility of the Fund card on the tactic. |
| All other Tactic SObject fields | Attribute | true if the user has view access to the field | true if the user has edit access to the field | Controls view and edit access for all other tactic fields based on FLS. |
