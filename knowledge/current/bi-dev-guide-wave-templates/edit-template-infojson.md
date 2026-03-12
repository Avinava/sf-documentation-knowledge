---
title: "Edit template-info.json"
domain: bi-dev-guide-wave-templates
topic: edit-template-infojson
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.514Z
estimatedTokens: 3014
keywords: [Edit, template-info.json, template, references, app]
---

# Edit template-info.json

> template-info.json describes the template. It
    references all the information required to create an app from the template.

# Edit template-info.json

template-info.json describes the template. It references all the information required to create an app from the template.

template-info.json can also contain conditions. For example, a source app can have a dashboard with charts. You can include conditions in the template-info.json file to remove specific charts when the user creates the app. Conditions can include overrides that enable the addition or exclusion of assets and data from the app. The override is defined in variables.json. See [Complex variables.json Variable Types](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_complex_var_types_variables_json.htm "Complex variable types are unique to Salesforce, for example, sobject, sobjectField. Use them to query the org for access to data from Salesforce objects. Scroll to the right to view example values. Examples for each type appear below the chart.").

The template-info.json file has multiple parts:

-   Metadata information for the template: Name, description, icons, tags, and custom attributes.

    ```

    ```

    -   label contains the user’s name for the app. Analytics Studio displays in the app creation wizard, such as in the template picker and template details page.![The Analytics Studio template picker showing display of text from icons, description, and label template-info.JSON file](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_templatepicker_example.png&folder=bi_dev_guide_wave_templates)
    -   The name attribute is the unique developer ID for the template ID. Changing it generates a new template.
    -   description specifies the description of the template. The template picker displays the contents of description, as shown in the previous image.
    -   assetVersion specifies the version for the template assets. The version is set at the time of creation, generating a snapshot of the asset JSON files. The version doesn't update unless indicated when updating a template. For more information, see [Update an Existing Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_update_template.htm "Update a template after changing the source app’s dashboards, lenses, and datasets in CRM Analytics Studio.").
    -   templateType specifies the type of template:
        -   app: a standard app
        -   embeddedapp: an embedded app
        -   data: a collection of data assets
        -   dashboard: a single dashboard
    -   icons attribute contains three possible options:
        -   templateBadge defines the small icon that appears in the app picker (shown in the previous image) and at the top of the template details window (shown in the next image). Don't use file extension with name attribute, for example "learn", not "learn.png".
        -   appBadge defines the icon shown by Analytics Studio for the app after creation. Must be "1.png" through "21.png". Use file extension with name attribute, for example "16.png", not "16".
        -   templatePreviews defines preview images displayed on the template details window during the app creation process. Supports multiple images. Don't use file extension with name attribute, for example "preview\_education", not "preview\_education.png".
    -   tags specifies tags that are used in template search and that appear on the template details page (shown in the next image).
    -   customAttributes specifies information describing the template in the app creation wizard, such as Salesforce objects used or notable features (shown in the next image). ![The Analytics Studio template picker showing display of text from icons, description, and label template-info.JSON file](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_template_details.png&folder=bi_dev_guide_wave_templates)
-   Template version information: The templateVersion is a string validated as “#.#”. The notesFile, when present, must be an HTML file. If releaseInfo is present, users can reconfigure or upgrade an app that’s been created from the template from Analytics Studio.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

    #### Note

    After creating an app from a template for the first time, users can reconfigure the app based on the existing version of the template. When you update the number in templateVersion, CRM Analytics prompts users who created an app from the template to upgrade the app to the new version. for more information about reconfiguring and upgrading apps from templates, see [Reconfigure an Analytics App](https://help.salesforce.com/articleView?id=bi_app_upgrade.htm&type=5&language=en_US) and [Upgrade an Analytics App](https://help.salesforce.com/articleView?id=bi_app_upgrade.htm&type=5&language=en_US).

-   Reference to the variables file: The file that contains all the variables used in the template is variables.json.

    ```

    ```

-   Reference to the configuration wizard file: The file that defines the wizard the user fills out, answering questions to set variables, is ui.json.

    ```

    ```

-   Reference to the org readiness file: The file that defines the validations to perform when the wizard loads is org-readiness.json. These validations verify that the org has the necessary data and setup to support creating an app from the template without failing.

    ```

    ```

-   Reference to one or more rules files: The file or files defining any rules to be applied to the template assets is rules.json.

    ```

    ```

    The templateToApp rules file defines rules that run when a downstream app is created or updated from a template. These rules are the rules you’re most likely to edit.

    The appToTemplate rules file defines rules that run when a template is created or updated from a source app. These rules are created by the framework code. You aren’t likely to edit them.

-   List of objects defining dashboards and lenses: A dashboard or lens entry can contain a condition statement to determine whether the asset is added at app creation time based on a given variable. This condition statement can be an empty list ("\[\]").

    ```

    ```

-   Reference to external datasets: List of files that define external datasets (CSVs) to create, can include XMD. Each dataset entry can contain an entry for a conditional statement, allowing for decisions to be made by variables on whether a dataset asset is added at app creation time. This condition statement can be an empty list ("\[\]").

    ```

    ```

-   References to datasets: The SFDC dataset builder creates these datasets. Label is optional.

    ```

    ```

    User XMD is NOT required. If it’s present, there's an XMD JSON file in the dataset\_files directory. Otherwise, no XMD JSON file is present. If User XMD exists, it must be v2.0.

    Each dataflow or recipe file must contain a reference to the corresponding dataset (Extract and Register steps). That enables the dataset to be recreated in the creation process of any downstream app.

    Live datasets are supported with the liveConnection parameter. For more information, see [Use Live Datasets in a CRM Analytics Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_use_live_dataset.htm "Use live datasets in your CRM Analytics template with the liveConnection attribute to bring in live connections to Snowflake source tables. Creating a template from a source app with live datasets generates the dataset information, but there are considerations for successful app creation for your users.").

-   Reference to dataflow files: List of files that define dataflows. This reference can be an empty list ("\[\]"). If your app includes multiple dataflows, reference each dataflow file. When a user creates an app from the template, dataflows are created in the order they’re entered here.

    ```

    ```

-   Reference to recipe files: List of files that define recipes. This reference can be an empty list ("\[\]"). If your app includes multiple recipes, reference each recipe file. When a user creates an app from the template, recipes are created in the order they’re entered here. Edit the order as needed. If dataflows exist in the app, they execute before the recipes. For more information, see [Add a Recipe to a CRM Analytics Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_recipe.htm "Data prep recipes are a unique CRM Analytics asset, as they aren’t stored in folders like dashboards, lenses, and datasets. The only way to connect a recipe to an app is via the relationship of the datasets in the folder to the recipes that consume or output those datasets.") You can also specify whether a recipe should sync and execute during app creation with the executeCondition attribute. For more information, see [Configure Recipe Execution](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_execute_recipe.htm "Data Prep recipes can be complex and add to app creation time if they sync and execute while the templated app is generating. Recipes can also change the shape of your existing data. The executeCondition attribute for recipe entries allows you to specify if a templated recipe syncs and executes during templated app creation or not.").

    ```

    ```

-   Reference to dashboard components: List of files that define components in dashboards. This reference can be an empty list ("\[\]"). Each dashboard component in the app’s dashboards gets a unique entry in this list. Each component entry can contain an entry for a conditional statement, allowing for decisions to be made by variables on whether a component asset is added at app creation time. This condition statement can be an empty list ("\[\]").

    ```

    ```

-   Reference to dependencies: For templates with dependencies, add a line to template-info.json that refers to templates to include in the dependency. See [Create Dependent Templates](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_create_dependency.htm "Follow these steps to create templates with dependencies.").
-   Reference to the images: These images associated with the app and used in dashboard files. Each image can contain an entry for a condition statement. Specifying a condition enables decisions to be made with variables on whether an image is added at app creation time. Images must be stored as static resources. References to each image must specify a namespace attribute if the org uses namespace.

    ```

    ```

-   Reference to the folder file: The file that contains the folder information including featuredAssets and shares is folder.json.

    ```

    ```

-   Reference to the auto-install file: The file that contains the auto-install hook configuration and the installed app configuration is auto-install.json. This file must exist if your template is installed with a managed package and the app is created with an auto-install request.

    ```

    ```


You can also call a smart wizard from template-info.json to perform computations or detection on the user's data. The call to the smart wizard must be backed up with an Apex callback class. The Apex callback class can run the smart wizard before or after the configuration wizard runs and when the creation of the app is kicked off. You call the Apex class from template-info.json with something like this:

```

```

For more about the smart wizard, refer to the Best Practices section.

#### See Also

-   [template-info.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_attributes.htm "The template-info.json file is the main file that describes the template. It includes or references all the information required to create a downstream app.")

## Code Examples

```
{
  "label": "Analytics Training Materials",
  "name": "analyticsEducation",
  "description": "An example template to generate datasets, dashboards and lenses for the Analytics introduction course.",
  "assetVersion": 49,
  "templateType": "app",
  "icons": {
     "templateBadge" : {
         "name" : "learn"
     },
     "appBadge" : {
          "name" : "16.png"
     },
     "templatePreviews" : [
          {
             "name": "preview_education",
             "label": "Analytics Training",
             "description": "Learn about templates to generate Analytics assets."
          }
     ]
  },
  "tags": [
     "Learn",
     "Templates",
     "Apps"
  ],
  "customAttributes": [
     {
          "label" : "Features",
          "values" : [
              "Prebuilt Apps",
              "Mobile Ready"
           ]
     }
  ]
},
```

```
"releaseInfo":{
    "templateVersion": "1.0",
    "notesFile": "releaseNotes.html"
},
```

```
"variableDefinition": "variables.json",
```

```
"uiDefinition": "ui.json",
```

```
"readinessDefinition" : "org-readiness.json"
```

## Related Topics

- Complex variables.json Variable Types (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_complex_var_types_variables_json.htm)
- Update an Existing
              Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_update_template.htm)
- Use Live Datasets in a CRM Analytics
        Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_use_live_dataset.htm)
- Add a Recipe to a CRM Analytics Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_recipe.htm)
- Configure Recipe
        Execution (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_execute_recipe.htm)
- Create Dependent Templates (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_create_dependency.htm)
- template-info.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_attributes.htm)
