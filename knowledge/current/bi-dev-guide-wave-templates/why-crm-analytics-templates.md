---
title: "Why CRM Analytics Templates?"
domain: bi-dev-guide-wave-templates
topic: why-crm-analytics-templates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.571Z
estimatedTokens: 845
keywords: [Why, CRM, Analytics, Templates, bring, investment, app, development, life]
---

# Why CRM Analytics Templates?

> Templates can bring the investment you make in CRM Analytics app development to
  life.

# Why CRM Analytics Templates?

Templates can bring the investment you make in CRM Analytics app development to life.

When you build an app using CRM Analytics Studio, you load data into CRM Analytics, transform it, create visualizations from the data, and design dashboards in a development or scratch org. Then, you store all the assets in a CRM Analytics app, which is actually a folder used to contain all an app’s assets.

Instead of having to do all that work, other organizations can use your template to create their own version of your app built around their own data. After you develop your app in CRM Analytics Studio, turn it into a template with clicks in Analytics Studio, a simple command in Visual Studio Code, or the Salesforce command line interface (CLI). Then distribute it to customers, partners, and other teams within your company. They can deploy the template to their own Salesforce orgs and, with CRM Analytics Studio, use it to create a custom version of the app using their own data—either from Salesforce or another environment.

You can edit the template files to include features that let users customize the version of the app that they create from the template via a configuration wizard. When they create the app, they can customize the app’s appearance, how it consumes and displays data, which dashboards and charts to display, and other aspects of the app’s functionality. You can also design your template to create apps that require no customization or user interaction, but are automatically installed into an organization using a managed package. CRM Analytics embedded dashboards surface your templated app into orgs without requiring users to have access to CRM Analytics Studio.

-   **[The Source App](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_master_app.htm)**
    For the purposes of CRM Analytics Templates, the app you create in CRM Analytics Analytics Studio is called the *source app*. It’s a collection of CRM Analytics assets—datasets, dataflows, recipes, lenses, and dashboards— stored together in a folder.
-   **[Templated App Type](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_app_type.htm)**
    The app you’re creating a template for can be a standard app that users install using the configuration wizard in CRM Analytics Studio. Or it can be an embedded app that is automatically installed for users and doesn’t require customization or access to Analytics Studio. You can also create data templates that users install in the Data Manager. Data templates only create data assets.
-   **[The Configuration Wizard](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_wizard.htm)**
    A CRM Analytics template can include a configuration wizard, made up of one or more pages with questions and answers, that allows users to customize the apps they create from the template. The configuration wizard is an optional but potentially powerful part of a template.
-   **[The Template Object](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template_object.htm)**
    Turning the source app into a template creates a waveTemplates object. The object contains JSON files that define an app’s user experience assets and provide instructions to create the app.

## Related Topics

- The Source App (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_master_app.htm)
- Templated App Type (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_app_type.htm)
- The Configuration Wizard (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_wizard.htm)
- The Template Object (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template_object.htm)
