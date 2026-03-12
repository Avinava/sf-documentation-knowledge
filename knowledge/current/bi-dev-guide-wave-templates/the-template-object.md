---
title: "The Template Object"
domain: bi-dev-guide-wave-templates
topic: the-template-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.689Z
estimatedTokens: 1925
keywords: [Template, Turning, source, app, creates, waveTemplates, JSON, files, define, app’s, user, experience, assets, provide, instructions]
---

# The Template Object

> Turning the source app into a template creates a waveTemplates object. The object contains JSON files that define an app’s user
    experience assets and provide instructions to create the app.

# The Template Object

Turning the source app into a template creates a waveTemplates object. The object contains JSON files that define an app’s user experience assets and provide instructions to create the app.

Template objects—called waveTemplates—contain two types of JSON files:

-   CRM Analytics app asset JSON files: Files that define the assets you create when you develop a CRM Analytics app using the tools available through CRM Analytics Studio: dashboards, lenses, datasets, recipes, dataflows, and components. Users also interact with these elements. Each app must have at least one dashboard and dataset. Dataflows and recipes are optional, but common for anything but the simplest template. Each asset has a corresponding JSON file.
-   CRM Analytics template JSON files: Files with instructions used by CRM Analytics to create app assets from the template. You edit these files to give users the ability to customize their version of the app.

waveTemplates objects contain the following files.

| File type | File name | Description |
| --- | --- | --- |
| App asset JSON | dashboard_name.json | One JSON file for each dashboard in the source app, with the same name as its corresponding dashboard. |
| App asset JSON | lens_name.json | One JSON file for each lens in the source app, with the same name as its corresponding lens. |
| App asset JSON | dataset filesinternal datasetsinternal dataset filesuser xmd.jsonexternal datasetsdataset.csvdataset_schema.jsonuser xmd.json | Most templates include datasets to provide meaningful content, but a template doesn’t require a dataset. Apps without datasets can include a dashboard that’s a shell with layout only, or one that uses a query to supply data. Dataset files can be internal or external. The template includes internal datasets defined by User XMD.External dataset files refer to CSV datasets such as dataset.csv, but they also include dataset_schema.json and extended metadata (user XMD) files, such as xmd.json.You must have one CSV file for every external dataset in the source app. Without it, there are no external files in the template.The dataset_schema.json and user xmd.json files are optional. |
| App asset JSON | dataflow files | Dataflows are one method to create internal datasets for your app, extracting and processing useful data. Templates support apps with multiple dataflows. Order the files carefully: The last dataflow can reference datasets inside the first, but the first dataflow can’t reference the last. |
| App asset JSON | recipe files | Recipes are another method to create internal datasets for your app, extracting and processing useful data. Templates support apps with multiple recipes. Order the files carefully: recipes are created in listed order. If dataflows are present, they’re executed before the recipes. For more information on adding recipes to a template, see Add a Recipe to a CRM Analytic Template. |
| App asset JSON | dashboard component files | Dashboard components are a type of dashboard widget that can contain other widgets and pages. These components are used to manage and reuse groups of charts, tables, filters, text, and more in multiple dashboards in your app. Each app created from your template creates a unique instance of the component. The app dashboards reference these components by the unique name to ensure the component functionality is correct. |
| App asset JSON | data transform files | Data transforms create internal datasets from Data 360 data model objects. In Winter ‘24, data transforms can only be added to a template manually. |
| Template JSON | image files (JSON) | Include if images are used in dashboards in the source app or referred to in template-info.json for display in configuration wizard pages, such as the template picker or template detail page. One image file for each image. Images must be stored as Salesforce static resources. If an org is namespaced, set the static resources namespace attribute in the template-info.json entry for the image. |
| Template JSON | template-info.json | Defines the template metadata referencing all elements of your template, including all the app asset and template asset JSON files defined in this table. |
| Template JSON | folder.json | Lists the order in which dashboards (featuredAssets) appear. If not set, dashboards appear in alphabetical order. |
| Template JSON | releasenotes.html | Defines the text describing the features and benefits of the template. Update to describe enhancements to a new template version. |
| Template JSON | variables.json | Defines the variables used by the template JSON files. Includes text for configuration wizard questions and specifications for the answers |
| Template JSON | ui.json | Manages the configuration wizard. It defines the number of wizard pages, the order of wizard questions, and any messages you want the user to see as the make wizard selections. Configuration settings can determine if a wizard page or question is hidden based on selections made in answer to other wizard questions. |
| Template JSON | org-readiness.json | Defines the validations that check if the org can create an app from the template successfully. Some validations run when the template is loaded, before the configuration wizard loads, and others run during app creation. Validation success and error messages can be defined and passed to the user. |
| Template JSON | template-to-app-rules.json | Defines the rules the template follows when creating the app, including changes made to app assets in response to user selections in answer to wizard questions. For example, a rule can determine that if an org doesn’t contain data in Salesforce objects, app dashboards don’t refer to those objects and the objects are excluded from the dataflow. Rules also determine how the template handles variables. For example, if the wizard asks which fields to include in filters, template-to-app-rules.json determines how that choice is reflected in dashboards. Rules are applied when a user creates an app from the template. Typically, a template uses multiple rules files, which must be ordered intentionally. Rules are applied in the order in which you list them. Rules listed later can reference rules listed earlier, but the first rule can’t reference any rules listed after it. |
| Template JSON | app_to_template_rules.json | Defines rules for changing template files after editing the source app. If you make a change that impacts many parts of the app, edit this file. For example, a template creates a waterfall chart based on a dataset selected by the user in the wizard. The sections of the waterfall show a series of measures, also selected using the wizard. To enable the selections to be represented as variables, tokenize a field in the dashboard when updating the template. When the app is created, the value of a variable is replaced. To replace the hard-coded value with a token, add a rule to app_to_template_rules.json, like this:{      "action":"<action_name>",    "key":""<field_name>"",    "value":""${Variables.phoo.fieldName}"" } |
| Template JSON | auto-install.json | Optional template file to mark the template for automatic installation. Defines the auto-install hook and app configuration settings for the auto-install framework. Templates with this file present must be of template type app or embeddedapp. This file isn’t generated on template creation, you must create it. Templates created for the auto-install framework must be part of a managed package and installed into customer orgs. On package installation, an auto-install request is generated from this file configuration and the templated app is created automatically. |

## Code Examples

```
{  
   "action":"<action_name>",
   "key":""<field_name>"",
   "value":""${Variables.phoo.fieldName}""
}
```

## Related Topics

- Add a Recipe to a CRM Analytic
                Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_recipe.htm)
