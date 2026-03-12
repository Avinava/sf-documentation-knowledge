---
title: "Scheduling Jobs"
domain: retail-api
topic: scheduling-jobs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.890Z
estimatedTokens: 831
keywords: [Scheduling, Jobs, job, endpoints, Chain, Process, Flow]
---

# Scheduling Jobs

> Most of the scheduling job endpoints use the Job Chain Process
      Flow.

# Scheduling Jobs

Most of the scheduling job endpoints use the Job Chain Process Flow.

The Job Chain Process Flow provides a solution for the execution of several workers (jobs) that have dependencies between them. For example, one job requires the completion of another job before beginning its execution.

-   **[Begin Job Scheduling Transaction](atlas.en-us.retail_api.meta/retail_api/cgtpm_begin_job_sch_transaction.htm)**
    Begin a scheduling transaction for a job in a job chain. The job either starts an open transaction (if the number of job items is not announced) that must be explicitly committed to, or communicates the expected number of job items to the off-platform system.
-   **[Commit Job Scheduling Transaction](atlas.en-us.retail_api.meta/retail_api/cgtpm_commit_job_sch_transaction.htm)**
    Explicitly commit an open scheduling transaction for a job in a job chain.
-   **[Schedule Account Plan Calculation](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_account_plan_calculation.htm)**
    Schedule calculation for account plans for the given account plan IDs, category IDs, and time range for a given KPI collection.
-   **[Schedule Account Plan Calculation V2](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_account_plan_calculation_v2.htm)**
    Schedules the calculation of account plans. Batch chains support editable account plans. It can schedule up to 500 account plan IDs for calculation.
-   **[Schedule Account Plan Category Calculation](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_account_plan_category_calc.htm)**
    Schedules one or multiple account plan categories for batch calculation. It accepts up to 1000 account plan categories and schedules them for calculation.
-   **[Schedule Adhoc Promotion Calculation](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_adhoc_promotion_calc.htm)**
    Schedules one promotion for off-platform calculation in an ad-hoc transaction.
-   **[Schedule Fund Calculation](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_fund_calc.htm)**
    Enqueues a given list of funds for batch calculation. The calculation result is transferred back to Salesforce via the KPI Upload once the calculation is finished.
-   **[Schedule Global Account Product List](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_global_account_prod_list.htm)**
    Schedules a job to update the global account product list.
-   **[Schedule Promotion Calculation](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_promotion_calc.htm)**
    Enqueues promotion jobs for batch calculation based on the promotion IDs.
-   **[Schedule Rate Based Funding Calculation](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_rate_based_funding_calc.htm)**
    Schedules a collection of Rate Based Funding (RBF) Objects for calculation.
-   **[Schedule Reorganization](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_reorganization.htm)**
    Performs off-platform data cleanup and reorganization. Promotions in Salesforce that are deleted, inactive, or cancelled are removed from off-platform data. Additionally, softly deleted measure data is hard deleted.
-   **[Schedule SF Data Sync](atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_sfdata_sync.htm)**
    Schedules a data sync from Salesforce to the off-platform database.

## Related Topics

- Begin Job Scheduling Transaction (atlas.en-us.retail_api.meta/retail_api/cgtpm_begin_job_sch_transaction.htm)
- Commit Job Scheduling Transaction (atlas.en-us.retail_api.meta/retail_api/cgtpm_commit_job_sch_transaction.htm)
- Schedule Account Plan Calculation (atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_account_plan_calculation.htm)
- Schedule Account Plan Calculation V2 (atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_account_plan_calculation_v2.htm)
- Schedule Account Plan Category Calculation (atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_account_plan_category_calc.htm)
- Schedule Adhoc Promotion Calculation (atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_adhoc_promotion_calc.htm)
- Schedule Fund Calculation (atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_fund_calc.htm)
- Schedule Global Account Product List (atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_global_account_prod_list.htm)
- Schedule Promotion Calculation (atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_promotion_calc.htm)
- Schedule Rate Based Funding Calculation (atlas.en-us.retail_api.meta/retail_api/cgtpm_schedule_rate_based_funding_calc.htm)
