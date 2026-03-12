---
title: "Step 7: Create New (Downstream) Apps from the Template"
domain: bi-dev-guide-wave-templates
topic: step-7-create-new-downstream-apps-from-the-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.465Z
estimatedTokens: 326
keywords: [Step, New, Downstream, Apps, Template, Users, now, follows]
---

# Step 7: Create New (Downstream) Apps from the Template

> Users can now create apps using your template as follows:

# Step 7: Create New (Downstream) Apps from the Template

Users can now create apps using your template as follows:

1.  Create a Standard App
    1.  In CRM Analytics Studio, select **Create-->App**.
    2.  Select the template you shared in the template picker.
    3.  Follow the configuration wizard!

        If there were changes made to the template since the downstream app's last use, the user receives a prompt to upgrade the app anytime they open the app. It's important to accept this prompt to keep their downstream apps on the upgrade path and in sync with the source app and the template.

2.  Create an Embedded App
    1.  Install your managed package in a customer org.
    2.  Verify the embedded app installed in the customer org using the Auto-Installed Apps setup page. Reference details in the [Monitor, Update, and Delete Auto-Installed Apps](https://help.salesforce.com/articleView?id=bi_auto_install_overview.htm&type=5&language=en_US) help.
    3.  To give users access to the embedded apps dashboard(s), use the Lightning App Builder and CRM Analytics Dashboard component to embed the dashboards(s) inside Salesforce. For details, see [Embed CRM Analytics Dashboards in Lightning Pages](https://help.salesforce.com/articleView?id=bi_embed_lightning.htm&type=5&language=en_US).
