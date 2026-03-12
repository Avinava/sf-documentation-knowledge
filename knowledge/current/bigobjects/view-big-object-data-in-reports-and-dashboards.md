---
title: "View Big Object Data in Reports and Dashboards"
domain: bigobjects
topic: view-big-object-data-in-reports-and-dashboards
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.861Z
estimatedTokens: 448
keywords: [View, Big, Data, Reports, Dashboards, working, billions, records, it’s, practical, build, directly, Instead, Bulk, API]
---

# View Big Object Data in Reports and Dashboards

> When working with big data and billions of records, it’s not practical to build reports
  or dashboards directly from that data. Instead, use Bulk API to write a query that extracts a
  smaller, representative subset of the data that you’re interested in. You can store this working
  dataset in a custom object and use it in reports, dashboards, or any other Lightning Platform
  feature.

# View Big Object Data in Reports and Dashboards

When working with big data and billions of records, it’s not practical to build reports or dashboards directly from that data. Instead, use Bulk API to write a query that extracts a smaller, representative subset of the data that you’re interested in. You can store this working dataset in a custom object and use it in reports, dashboards, or any other Lightning Platform feature.

1.  Identify the big object that contains the data for which you need a report. In this example, the Ride\_\_b big object contains the full dataset.
2.  Create a custom object. This object holds the working dataset for the big object data that you want to report on. In this example, we use the Bike\_Rental\_\_c custom object.
    1.  Under Optional Features for the custom object, click **Allow Reports**.
    2.  Add custom fields to the object that match the fields that you want to report on from the big object.
3.  Create an SOQL query that builds your working dataset by pulling the data from your big object into your custom object.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bigobjects)

    #### Tip

    To ensure that your working dataset is always up-to-date for accurate reporting, set this job to run nightly.

4.  Build a report using the working dataset you created.
    1.  From Setup, enter Report Types in the Quick Find box, then select **Report Types**.
    2.  Create a custom report type.
    3.  For the Primary Object, select the custom object from step 2, Bike\_Rental\_\_c.
    4.  Set the report to **Deployed**.
    5.  Run the report.

You can now use the information from your working dataset not only in your reports, but also in dashboards or any other Lightning Platform feature.
