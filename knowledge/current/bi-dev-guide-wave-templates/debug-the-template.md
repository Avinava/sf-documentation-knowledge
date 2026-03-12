---
title: "Debug the Template"
domain: bi-dev-guide-wave-templates
topic: debug-the-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.481Z
estimatedTokens: 577
keywords: [Debug, Template, CRM, Analytics, logs, templated, apps, inspect, app, creation, lifecycle, give, visibility, asset, processing]
---

# Debug the Template

> CRM Analytics provides debug logs for templated apps to inspect the app creation
  lifecycle. These debug logs give you visibility into asset creation and the processing of any
  rules or Apex configuration modifier classes that you created. Use the debug logs during template
  testing when app creation isn’t working as expected.

# Debug the Template

CRM Analytics provides debug logs for templated apps to inspect the app creation lifecycle. These debug logs give you visibility into asset creation and the processing of any rules or Apex configuration modifier classes that you created. Use the debug logs during template testing when app creation isn’t working as expected.

These steps cover setting up your trace flag to create your debug logs, creating your app to generate debug logs, and viewing the generated debug logs.

1.  From Setup, in the **Quick Find** box, enter Debug Logs, then click **Debug Logs**.
2.  Click **New**.
3.  Select the entity to trace. For apps created in CRM Analytics Studio, the entity type must be User and the entity name must be your username. For apps created by the auto-install process, the entity type must be Automated Process.
4.  The default time period to collect logs is set for 30 minutes. If a different or longer time period is required, update the **Start Date** or the **Expiration Date** values.
5.  To create your debug level, click **New Debug Level**. Find the Wave debug log category and set it to Finest. Save your changes. You can reuse this debug level each time you create a trace flag.
6.  To activate your trace flag, click **Save**.
7.  From Analytics Studio, create an app from your template or kick off the automated process that creates the templated app. When app creation begins, debug logs are generated.
8.  On the Debug Logs page, all debug logs are listed. To see your generated debug logs, refresh the page. ![The Debug Logs table with log files](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_debug_logs.png&folder=bi_dev_guide_wave_templates)
9.  View the Analytics Templated App Poller log for details on the templated app creation process. Other logs listed from the templated app process include REST API calls to load the template wizard configuration and create the app folder and any Apex WaveTemplateConfigurationModifier output. If your template loads external data files, this process creates multiple Analytics Templated App Poller logs.

    Download any logs to save past the specified expiration date. Open your downloaded logs in a syslog viewer to allows filtering and easier reading.
