---
title: "The Configuration Wizard"
domain: bi-dev-guide-wave-templates
topic: the-configuration-wizard
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.734Z
estimatedTokens: 670
keywords: [Configuration, Wizard, CRM, Analytics, template, include, made, pages, questions, answers, users, customize, apps, they, potentially]
---

# The Configuration Wizard

> A CRM Analytics template can include a configuration wizard, made up of one or more
  pages with questions and answers, that allows users to customize the apps they create from the
  template. The configuration wizard is an optional but potentially powerful part of a
  template.

# The Configuration Wizard

A CRM Analytics template can include a configuration wizard, made up of one or more pages with questions and answers, that allows users to customize the apps they create from the template. The configuration wizard is an optional but potentially powerful part of a template.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_wave_templates)

#### Important

If your template is templateType of embeddedapp, the configuration wizard isn’t available for users. Embedded apps aren’t visible or installable in CRM Analytics Studio. Instead, they use the auto-install framework to install without user interaction.

The configuration wizard guides users through creation of an app from the template. Users make selections that determine how the app they create from your template modifies the original. Most CRM Analytics templates developed by Salesforce include wizards. It’s likely that every customer creates a different version of an app from the template. But every customer starts with the same app template.

A wizard can include questions about the data used to populate app dashboards. For example, it can ask about which Salesforce objects are used and which fields are used to store specific elements, such as user IDs, geographic location, product information, and revenue. A wizard can also ask about how to display data in the app and whether the user wants to include or exclude dashboards. Also, it can let users set elements of the UI, such as labels to identify KPIs or dashboard colors.

Wizards can also include conditional questions. For example, one question can ask if a user wants to display customer satisfaction key performance indicators about service agents. If the user answers yes, the wizard can then display more questions asking about how the user wants dashboards to consume and display customer service data.

Further, the wizard can contain an org data check. App datasets and dashboards usually depend on the Salesforce org where it’s created to contain specific data— certain objects, or fields in objects—to render effective visualizations. The data check reviews the org for the required data. If it’s in the org, app creation continues. If not, the wizard can display a message telling the user what requires fixing.

To create the configuration wizard, you modify the template JSON files that contain the instructions the CRM Analytics platform uses to create the app. When a user creates an app from a template, CRM Analytics looks at the template JSON files’ contents, including your wizard selections. It follows instructions in the JSON to create the app.
