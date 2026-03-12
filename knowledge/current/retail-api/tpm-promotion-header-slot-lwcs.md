---
title: "TPM Promotion Header Slot LWCs"
domain: retail-api
topic: tpm-promotion-header-slot-lwcs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.114Z
estimatedTokens: 1468
keywords: [TPM, Promotion, Slot, LWCs, slot-specific, provide, access, various, sections, LWC, layer]
---

# TPM Promotion Header Slot LWCs

> The slot-specific LWCs related to the promotion header provide access to various
        promotion header sections in the LWC layer.

# TPM Promotion Header Slot LWCs

The slot-specific LWCs related to the promotion header provide access to various promotion header sections in the LWC layer.

| Component Name | Description | LWC Properties |
| --- | --- | --- |
| tpm-promotion-header-icon | Displays the icon on the TPM promotion header. | use-sobject-icon: Boolean. Indicates whether the icon displayed on the promotion header is an SObject icon(true) or the default static image (false). |
| tpm-promotion-header-breadcrumbs | Displays the breadcrumbs on the TPM promotion header. | promotion-id: ID. Required. The record ID of the promotion to load.use-sobject-label: Boolean. Indicates whether the links targeting the promotion record list has the promotion SObject plural label (true) or the default custom label, PP_TIT_PROMOTION_LIST (false). |
| tpm-promotion-header-slogan | Displays the promotion slogan on the TPM promotion header. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-subtitle | Displays the promotion subtitle with the referenced account or account set name, date from and date through values. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-promotion-planning-button | Displays the promotion planning navigation button icon to be used in a lighting-button-group on the promotion header. | promotion-id: Id. Required. The record ID of the promotion to load.group-order: String. The rounded border on lightning-button-group. Possible values are first, middle, and last. |
| tpm-promotion-header-promotion-pl-button | Displays the promotion P&L navigation button icon to be used in a lighting-button-group on the promotion header. The promotion P&L navigation button is displayed if the visibility and editability of the EARight element, PROMOTION_PLANNING_GRID_BUTTON, is true. | promotion-id: Id. Required. The record ID of the promotion to load.group-order: String. The rounded border on lightning-button-group. Possible values are first, middle, and last. |
| tpm-promotion-header-edit-mode-button | Displays the promotion edit mode button when the promotion isn’t yet in the edit mode.For push promotions, you also see an icon, which is only visible when the push is in progress. When the push is in progress the edit button is disabled.The promotion edit mode button is displayed if the visibility and editability of the EARight element, PROMOTION_EDIT_BUTTON, is true. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-add-tactic-button | Displays the add tactic button when the promotion is in the edit mode.The add tactic button is displayed if the visibility and editability of the EARight element, ADD_TACTIC_BUTTON, is true. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-duplicate-tactic-button | Displays the duplicate tactic button when the promotion is in the edit mode, and a tactic is focused. It duplicates the selected tactic.The duplicate tactic button is displayed if the visibility and editability of the EARight element, TACTIC_DUPLICATE_BUTTON, is true. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-delete-tactic-button | Displays the delete tactic button when the promotion is in the edit mode, and a tactic is focused. It deletes the selected tactic.The delete tactic button is displayed if the visibility and editability of the EARight element, TACTIC_DELETE_BUTTON, is true. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-predict-uplift-button | Displays the predict uplift button when the promotion is in the edit mode, and the uplift prediction feature is enabled for the promotion and user. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-kpi-validations | Displays the KPI validations UI component when the promotion is calculated and validation KPIs emit errors. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-push-area | Displays the push promotion button when the promotion is pushable, and the promotion is displayed. It also displays a message indicating whether the promotion must be pushed.The push promotion button is displayed if the visibility and editability of the EARight element, PROMOTION_PUSH_BUTTON, is true. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-cancel-button | Displays the cancel button when the promotion is in the edit mode. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-save-and-refresh-button | Displays the save and refresh button when the promotion is in the edit mode. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-done-button | Displays the done button when the promotion is in the edit mode. | promotion-id: ID. Required. The record ID of the promotion to load. |
| tpm-promotion-header-pl-filter-button | Displays the promotion P&L filters button when the promotion is in P&L view. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-scenario-planning-button | Displays the scenario planning button on the toolbar.The scenario planning button is displayed if the visibility and editability of the EARight element, SCENARIO_PLANNING_BUTTON, is true. | promotion-id: Id. Required. The record ID of the promotion to load. |
| tpm-promotion-header-attachments-button | Displays the attachments button on the toolbar.The attachments button is displayed if the visibility and editability of the EARight element, PROMOTION_ATTACHMENT_BUTTON, is true. | promotion-id: Id. Required. The record ID of the promotion to load. |

## Example

```

```

## Code Examples

```
<!-- MyHeader.html -->
<template>
  <cgcloud-tpm-promotion-header-component promotion-id={recordId}>
    <!-- Icon Slot -->
    <cgcloud-tpm-promotion-header-icon slot="icon"></cgcloud-tpm-promotion-header-icon>

    <!-- Breadcrumbs -->
    <div slot="breadcrumbs" style="display: flex">
      <cgcloud-tpm-promotion-header-breadcrumbs
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-breadcrumbs>
    </div>

    <!-- Title -->
    <div slot="title" style="display: flex">
      <cgcloud-tpm-promotion-header-slogan
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-slogan>
    </div>

    <!-- Subtitle -->
    <div slot="subtitle" style="display: flex">
      <cgcloud-tpm-promotion-header-subtitle
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-subtitle>
    </div>

    <!-- Navigation -->
    <lightning-button-group slot="navigation">
      <cgcloud-tpm-promotion-header-promotion-planning-button
        promotion-id={recordId}
        group-order="first"
      ></cgcloud-tpm-promotion-header-promotion-planning-button>
      <cgcloud-tpm-promotion-header-promotion-pl-button
        promotion-id={recordId}
        group-order="last"
      ></cgcloud-tpm-promotion-header-promotion-pl-button>
    </lightning-button-group>

    <!-- Left anchor buttons -->
    <div slot="left-buttons" style="display: flex">
      <cgcloud-tpm-promotion-header-edit-mode-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-edit-mode-button>
      <cgcloud-tpm-promotion-header-add-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-add-tactic-button>
      <cgcloud-tpm-promotion-header-duplicate-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-duplicate-tactic-button>
      <cgcloud-tpm-promotion-header-delete-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-delete-tactic-button>
      <cgcloud-tpm-promotion-header-predict-uplift-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-predict-uplift-button>
    </div>

    <!-- Right anchor buttons -->
    <div slot="right-buttons">
      <cgcloud-tpm-promotion-header-kpi-validations
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-kpi-validations>
      <cgcloud-tpm-promotion-header-push-area
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-push-area>
      <cgcloud-tpm-promotion-header-cancel-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-cancel-button>
      <cgcloud-tpm-promotion-header-save-and-refresh-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-save-and-refresh-button>
      <cgcloud-tpm-promotion-header-done-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-done-button>
      <cgcloud-tpm-promotion-header-pl-filter-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-pl-filter-button>
    </div>

    <!-- Full Height buttons -->
    <div slot="fullheight-buttons">
      <cgcloud-tpm-promotion-header-scenario-planning-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-scenario-planning-button>
      <cgcloud-tpm-promotion-header-attachments-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-attachments-button>
    </div>
  </cgcloud-tpm-promotion-header-component>
</template>

<!-- MyHeader.js -->
import { LightningElement, api } from 'lwc';

export default class SamplePromotionHeaderCustom extends LightningElement {
    @api recordId;
}

<!-- MyHeader.js-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>59.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>SAMPLE: Custom Promotion Header Component</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage">
            <objects>
                <object>cgcloud__Promotion__c</object>
            </objects>
        </targetConfig>
    </targetConfigs>
    <!-- This property is required if LWS is Disabled -->
    <runtimeNamespace>cgcloud</runtimeNamespace>
</LightningComponentBundle>
```
