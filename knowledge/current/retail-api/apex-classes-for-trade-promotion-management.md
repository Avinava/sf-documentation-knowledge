---
title: "Apex Classes for Trade Promotion Management"
domain: retail-api
topic: apex-classes-for-trade-promotion-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.712Z
estimatedTokens: 2169
keywords: [Apex, Classes, Trade, Promotion, Management]
---

# Apex Classes for Trade Promotion Management

> This section lists the Apex classes related to Trade Promotion
        Management.

# Apex Classes for Trade Promotion Management

This section lists the Apex classes related to Trade Promotion Management.

-   **[Calendar Launchpad Customization](atlas.en-us.retail_api.meta/retail_api/tpm_calendar_launchpad.htm)**
    Customize the hover content and the buttons for a promotion on the TPM calendar launchpad UI by creating an Apex class as a customization hook.
-   **[DataCloudExportScheduler Class](atlas.en-us.retail_api.meta/retail_api/cg_tpm_apex_datacloudexportscheduler.htm)**
    This Class is used to trigger a data cloud process on the processing service.
-   **[Promotion and Tactic Transfer Customization](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_transfer.htm)**
    When you save a promotion in Trade Promotion Management (TPM), it triggers a transfer of the planned promotion to Retail Execution (RE). You can modify the saved promotion and its associated tactic or tactic product details before they get transferred by creating two different callable Apex classes as customization hooks.
-   **[Promotion Header LWCs](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_header.htm)**
    The TPM Promotion header LWCs provide access to the entire TPM promotion header and specific header slots.
-   **[PromotionPushRemoteActionExtension Class](atlas.en-us.retail_api.meta/retail_api/global_tpm_promotion_push_remote_action.htm)**
    This Apex class provides programmatic access to the TPM Push Promotion Process Remote Actions.
-   **[RTR Report Classes](atlas.en-us.retail_api.meta/retail_api/RTR_report_execution_classes_parent.htm)**
    The RTR report-related APEX classes provide programmatic access to the TPM Real Time Reporting (RTR) report data.
-   **[ScheduleTPMAccrualProcessChain Class](atlas.en-us.retail_api.meta/retail_api/global_tpm_accrual_process.htm)**
    This Apex class initiates TPM Accrual Process orchestrator after ensuring the accrual export configuration is successfully updated.
-   **[tpmGenericUtils Module](atlas.en-us.retail_api.meta/retail_api/tpmGenericUtils_Module_Reference.htm)**
    The tpmGenericUtils module provides replacements for accessing the @salesforce modules on components that have the cgcloud runtime namespace.
-   **[Account Plan LWC Reference](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_component_referance)**
    The tpm-account-plan LWC is a service component that loads a TPM account plan, exposing methods to update the account plan state, and events to keep all UI components of the account plan page in sync when the account plan state changes.
-   **[Manual Inputs Class](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#TPM_ManualInputs)**
    This APEX class provides programmatic access to the TPM Promotion Manual Inputs for Calculation Overrides. This class is used also for Scenario Manual Inputs on Promotion.
-   **[tpm-promotion Component](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#tpm_promotion_component_referance)**
    The tpm-promotion LWC is a service component that loads a TPM promotion, exposing methods to update the promotion state, and events to keep all UI components of the promotion page in sync when the promotion state changes. This component is provided as part of the released managed package.
-   **[ParticipatingCustomers Class](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#TPM_ParticipatingCustomers)**
    This APEX class provides programmatic access to the TPM Promotion Participating Customers List used in the Promotion Push process.
-   **[ParticipatingCustomers.ParticipatingCustomer Class](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm#TPM_ParticipatingCustomer_2)**
    This APEX class provides programmatic access to a Participating Customer associated to an instance of TPM\_ParticipatingCustomers.
-   **[ProductFilter Class](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#TPM_ProductFilter_class)**
    This APEX class provides programmatic access to the TPM Promotion Product Filter used in the Promotion. This Product Filter defines the Products that are included in the Promotion.
-   **[ProductFilter.ManualProduct Class](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm#TPM_ProductFilter)**
    This APEX class provides programmatic access to a Manual Products associated to an instance of TPM\_ProductFilter.
-   **[Promotion Class](atlas.en-us.retail_api.meta/retail_api/TPM_Promotion.htm#TPM_Promotion_class)**
    This APEX class provides programmatic access to the TPM Promotion SObject and it’s related SObjects.
-   **[Promotion.DoWork Class](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.do.work.htm#tpm_promotion_do_work)**
    This APEX interface provides the capability to perform additional work once a promotion is completed and the related records are committed to the database. The transaction will be rolled back if there any any errors reported during the doWork execution.
-   **[Promotion.Record](atlas.en-us.retail_api.meta/retail_api/tpm_promotion.record.htm#tpm_promotion_record)**
    This APEX class provides a wrapper to Promotion SObject Records. Each instance wraps an SObject Record related to the parent TPM\_Promotion and provide methods to manipulate them in order to flag them for insertion or deletion. It also provides methods to extract the underlying SObject records so updates can be made.
-   **[Promotion.TacticRecord](atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm#TPM_PromotionTacticRecord)**
    This APEX class provides a wrapper to Promotion Tactic SObject Records. Each instance wraps an SObject Record related to the parent TPM\_Promotion and provide methods to manipulate them in order to flag them for insertion or deletion. It also provides methods to extract the underlying SObject records so updates can be made.
-   **[SubAccounts](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#TPM_SubAccounts)**
    Creates an empty sub accounts structure.
-   **[SubAccounts.SubAccount](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm#TPM_SubAccountsSubAccount)**
    This APEX class provides programmatic access to a single Sub Account information contained in a TPM\_SubAccounts instance.
-   **[Scenarios Class](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#TPM_Scenarios_class)**
    This APEX class provides programmatic access to the TPM Promotion Scenario information used in the Promotion. Scenarios define selectable sets of Promotion Level Manual Inputs overrides to simulate different combinations of active/inactive tactics and KPI overrides in a TPM Promotion. A TPM\_Scenarios structure can contain up to five scenarios information.
-   **[Scenarios.ScenarioParameter Class](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm#TPM_Scenarios)**
    This APEX class provides programmatic access to a single scenario parameter information contained in a TPM\_Scenarios instance.
-   **[User Interface Customization](atlas.en-us.retail_api.meta/retail_api/tpm_ui_customization.htm)**
    This section provides information on how to customize the TPM user interface.
-   **[UI Edit Access Rights Customization](atlas.en-us.retail_api.meta/retail_api/tpm_ui_edit_access.htm)**
    Edit Access Rights (EARights) is a mechanism used by the TPM UI application to selectively enable or disable certain functionality, or UI elements, depending on the business logic.
-   **[Trade Promotion Management Service APIs](atlas.en-us.retail_api.meta/retail_api/cgcloud_tpm_service_introduction.htm)**
    Trade Promotion Management (TPM) is the process of planning, budgeting, presenting, and running incentive programs between consumer goods manufacturers and retailers.
-   **[Trade Promotion Management Transformation Engine Workflows](atlas.en-us.retail_api.meta/retail_api/SP9-Workflow_Steps_Design.htm)**
    The workflow comprises APEX callable class to apply the transformations from the input JSON into the output structure.
-   **[Promotion Creation Workflow](atlas.en-us.retail_api.meta/retail_api/promotion_creation_workflow.htm)**
    This section describes the list of workflow step rules that must be provided from core.
-   **[Promotion Copy Workflow](atlas.en-us.retail_api.meta/retail_api/promotion_copy_workflow.htm)**
    This section describes the list of workflow step rules that must be provided from core.
-   **[Scheduling Jobs](atlas.en-us.retail_api.meta/retail_api/cgtpm_scheduling_jobs.htm)**
    Most of the scheduling job endpoints use the Job Chain Process Flow.

## Related Topics

- Calendar Launchpad Customization (atlas.en-us.retail_api.meta/retail_api/tpm_calendar_launchpad.htm)
- DataCloudExportScheduler Class (atlas.en-us.retail_api.meta/retail_api/cg_tpm_apex_datacloudexportscheduler.htm)
- Promotion and Tactic Transfer Customization (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_transfer.htm)
- Promotion Header LWCs (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_header.htm)
- PromotionPushRemoteActionExtension Class (atlas.en-us.retail_api.meta/retail_api/global_tpm_promotion_push_remote_action.htm)
- RTR Report Classes (atlas.en-us.retail_api.meta/retail_api/RTR_report_execution_classes_parent.htm)
- ScheduleTPMAccrualProcessChain Class (atlas.en-us.retail_api.meta/retail_api/global_tpm_accrual_process.htm)
- tpmGenericUtils Module (atlas.en-us.retail_api.meta/retail_api/tpmGenericUtils_Module_Reference.htm)
- Account Plan LWC Reference (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- Manual Inputs Class (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
