---
title: "Customizing  Real Time Reporting (RTR) with APEX"
domain: cgcloud-rtr-dev-guide
topic: customizing-real-time-reporting-rtr-with-apex
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.468Z
estimatedTokens: 1249
keywords: [Customizing, Real, Time, Reporting, RTR, APEX, fund, report, custom, data, sources, integrate, KPI, obtained, Salesforce]
---

# Customizing  Real Time Reporting (RTR) with APEX

> You can create a fund report with custom APEX data sources to integrate KPI values that
    are obtained from other sources such as a Salesforce attribute. You can also create reports with
    custom APEX filters, along with the standard filters.

# Customizing Real Time Reporting (RTR) with APEX

You can create a fund report with custom APEX data sources to integrate KPI values that are obtained from other sources such as a Salesforce attribute. You can also create reports with custom APEX filters, along with the standard filters.

Although requirements vary across clients and markets, these general requirements apply for different processes:

-   **Strategic Planning:** Provides flexible views on business metrics (profit, profit margin, ROI, costs, revenue, and so on) on either a regional or national level (across many or all key accounts) to drive future recommendations for target volumes, target revenues, marketing initiatives, brand initiatives, and pricing.
-   **Fund Management:** Provides you with a hollistic view of the budgeting not only within but also across funds prior to, during, and after a financial year, so that you can control the financials on both an overall and granular level.
-   **Account Planning:** Provides you with flexible views on a single account to monitor business development within the full P&L (Profit and Loss) for the relevant brands and categories and on a detailed plan product level.
-   **Promotion Planning:** Provides overviews on key promotion metrics (profit, profit margin, ROI, costs, revenue, etc.) for a single account and time frame on both summary and detailed levels to conduct pre-event and post-event analysis.
-   **Promotion Execution:** Tracks claims against promotions or tactics in promotion-based reports and fund reporting to be always aware of missing claim information and outstanding deductions.
-   **Post-Event Analysis:** Evaluates the success of single promotional events, brand and marketing initiatives across accounts, and the overall success rate on account-related contracts and their impact on single accounts.

Real Time Reporting supports these requirements by providing a technical foundation to retrieve the important business metrics and allowing flexible configurations to design reports according to client requirements.

## Example

Consider this scenario:

During an iterative planning processes, John—the Key Account Manager (KAM), identifies gaps in promotion planning and makes the relevant changes. Real Time Reporting (RTR) helps him to view the impact on his account directly after releasing the changes, allowing him to create a more fruitful Account Plan for his retail partner. The immediate effect of changes that reflect in the report helps him to act instantly and adapt promotion planning on the fly. With RTR, John can view the impact on a summary level by either brand or category and on a detailed plan product level.

These are the five key functional benefits of RTR:

-   Supports the full TPM closed loop with real-time insights to drive the decision-making process.
-   Provides a consistent user experience for CG Cloud TPM users.
-   Builds the trust of users because the numbers that are shown in RTR and other application areas (for example, P&L sheets) are consistent.
-   Supports the export of data in MS-Excel format for all reports that allow users to work further on exported data.
-   Allows you to define user-specific views so that users can switch between reports instantly.

-   **[Create a Fund Report with Custom Apex Datasources](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_create_fund_report_with_custom_apex_datasource.htm)**
    The data that's required for the reports is available on a Hyperforce server and is interfaced via regular data sources such as AccountMonthlyMeasures or AccountWeeklyMeasures.
-   **[Use Case: Fund Amount](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_custom_datasource_fund_amount.htm)**
    The Fund object stores the fund amount in Salesforce. To show a fund amount for a particular category or brand, fetch it from the Salesforce database by using custom data sources.
-   **[Use Case: Fixed Funds](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_custom_datasource_fixed_fund.htm)**
    In this use case, the custom datasource is used to include a fixed fund KPI in Real Time Report (RTR). As a result, the fixed funds are aggregated on both category and brand levels. One visualization option is this report, in which a brand value is only available for one brand. However, this value is not summed up to the category level. For the calculation of category levels, the data that's stored on Salesforce and Processing Services is used.
-   **[Create Reports with Custom Apex Filter](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_create_report_custom_apex_filter.htm)**
    Along with standard filters, you can also define custom Apex filters that reference the attributes of the Promotion object.
-   **[Classes](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_classes.htm)**
    Detailed samples of the classes that are used in report configurations.

## Related Topics

- Create a Fund Report with Custom Apex Datasources (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_create_fund_report_with_custom_apex_datasource.htm)
- Use Case: Fund Amount (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_custom_datasource_fund_amount.htm)
- Use Case: Fixed Funds (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_custom_datasource_fixed_fund.htm)
- Create Reports with Custom Apex Filter (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_create_report_custom_apex_filter.htm)
- Classes (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_classes.htm)
