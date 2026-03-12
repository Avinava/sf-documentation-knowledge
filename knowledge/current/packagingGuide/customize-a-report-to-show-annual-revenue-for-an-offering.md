---
title: "Customize a Report to Show Annual Revenue for an Offering"
domain: packagingGuide
topic: customize-a-report-to-show-annual-revenue-for-an-offering
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.580Z
estimatedTokens: 401
keywords: [Customize, Report, Show, Annual, Revenue, Offering, Checkout, Management, App, CMA, dashboard, doesn’t, box, try, modifying]
---

# Customize a Report to Show Annual Revenue for an Offering

> If the Checkout Management App (CMA) dashboard doesn’t show what you need out of the box,
        try modifying a report. This example steps you through how to display annual revenue for an
        offering instead of monthly revenue across all offerings.

# Customize a Report to Show Annual Revenue for an Offering

If the Checkout Management App (CMA) dashboard doesn’t show what you need out of the box, try modifying a report. This example steps you through how to display annual revenue for an offering instead of monthly revenue across all offerings.


| User Permissions Needed |
| --- |
| To customize CMA reports: | CMA Admin User |
| To create, edit, and delete reports: | Create and Customize ReportsANDReport Builder |

1.  Log in to the org where the CMA is installed.
2.  Open the App Launcher, and then click **Checkout Management App**.
3.  Click **Dashboards**, and then click **CMA Dashboard**.
4.  For the Revenue Per Month chart, click **View Report**.
5.  From the Edit dropdown list, select **Clone**.
6.  Specify field values as follows, and then click **Create**.

    | Field Name | Value |
    | --- | --- |
    | Name | Revenue Per YearTo keep your dashboard organized, include the name of your offering. For example, Revenue Per Year (Sample App). |
    | Folder | CMA Reports |

7.  Click **Edit**.
8.  Add a filter to display revenue for a specific offering.
    1.  From the Add dropdown list, select **Field Filter**.
    2.  Enter filter criteria. To display revenue only for listings named Sample App, create the filter Listing Name equals Sample App.
    3.  Click **OK**.
9.  In the Preview section, from the Activation Date dropdown list, select **Group Dates By** | **Calendar Year**.

    Now the report is set up to show annual revenue instead of revenue by month.

10.  Click **Save**, and then click **Run Report**.
