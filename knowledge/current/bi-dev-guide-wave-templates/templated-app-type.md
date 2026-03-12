---
title: "Templated App Type"
domain: bi-dev-guide-wave-templates
topic: templated-app-type
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:07.425Z
estimatedTokens: 1041
keywords: [Templated, App, you’re, creating, template, standard, users, install, configuration, wizard, CRM, Analytics, Studio, embedded, automatically]
---

# Templated App Type

> The app you’re creating a template for can be a standard app that users install using the
    configuration wizard in CRM Analytics Studio. Or it can be an embedded app that is automatically
    installed for users and doesn’t require customization or access to Analytics Studio. You can
    also create data templates that users install in the Data Manager. Data templates only create
    data assets.

# Templated App Type

The app you’re creating a template for can be a standard app that users install using the configuration wizard in CRM Analytics Studio. Or it can be an embedded app that is automatically installed for users and doesn’t require customization or access to Analytics Studio. You can also create data templates that users install in the Data Manager. Data templates only create data assets.

In this guide, all template types follow the same steps for creation, iterative development, and testing the template. The main difference between the templates types is how the app or data assets are created in the user org from your template.

## Standard App Templates

A standard app template has a templateType of app. A standard app template is listed in the Analytics Studio in the **Create→App** menu. You can design a custom creation experience for CRM Analytics users by creating a configuration wizard. Users can customize the app assets after creation, reconfigure the templated app, and upgrade the app, all in Analytics Studio.

## Embedded App Templates

An embedded app template has a templateType of embeddedapp. An embedded app doesn’t require users to have access to Analytics Studio. The embedded app is created when a managed package containing the template and other supporting assets is installed in a Salesforce org. An embedded template uses the auto-install framework to install the app in an org without user interaction.

## Embedded App Considerations

Embedded apps are designed for users who don’t have the full CRM Analytics experience. As a result, the following restrictions apply for embedded apps:

-   Only one embedded app instance per template can be created in a Salesforce org. Multiple embedded app templates can be present in a org.
-   Dashboards can’t contain Apex or SOQL steps.
-   Bulk actions aren’t allowed.
-   App assets can’t be customized by users after the app is created.

Embedded app templates aren’t visible in Analytics Studio, nor are they returned in the Rest GET call to the wave/templates endpoint.

To create a successful embedded app template, you must include the folder.json and the auto-install.json files. The folder.json file specifies the name and label for the templated app along with setting sharing rules for the app. The embedded app can’t be shared with other users and groups in Analytics Studio. The auto-install.json file specifies the configuration of the auto-install framework hook and the app installation.

After an embedded app is created, the app dashboards must be surfaced for users using the CRM Analytics Dashboard Lightning component.

## Data Templates

A data template has a templateType of data. A data template only creates data assets, like recipes and datasets. A data template is listed in the Data Manager using the **New Data App** button. You can design a custom creation experience for Data Manager users by creating a configuration wizard. Users can customize and schedule the data assets after creation.

## Data Template Considerations

Data templates are designed for users who want to load and transform data in Salesforce. As a result, the following limitations apply for data templates:

-   In the template-info.json:
    -   Use data for templateType.
    -   Only the first entry in templatePreviews is shown to the user in the wizard.
    -   customProperties aren’t shown to the user in the wizard.
-   A data template can only contain datasetFiles, externalFiles, and recipes assets.
-   The following aren’t currently supported in the Data Manager wizard:
    -   In template-info.json:
        -   templateDependencies
    -   In ui.json:
        -   displayMessages
        -   helpUrl
        -   vfPage
-   The following are supported for data templates, but not app templates:
    -   In ui.json:
        -   DatasetAnyFieldType and ArrayTypes of DatasetAnyFieldType variables can be added to pages

For more information on the user experience for templated data apps, see [Get Started Faster with Data Templates (Beta)](https://help.salesforce.com/s/articleView?id=analytics.bi_data_templates_overview.htm&type=5&language=en_US).
