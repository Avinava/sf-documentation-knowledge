---
title: "Step 3: Edit the JSON Files"
domain: bi-dev-guide-wave-templates
topic: step-3-edit-the-json-files
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.499Z
estimatedTokens: 1515
keywords: [Step, Edit, JSON, Files, source, app, looks, fantastic, widgets, rendered, beautifully, their, dashboards, template, gives]
---

# Step 3: Edit the JSON Files

> Your source app looks fantastic, with widgets rendered beautifully in their dashboards.
  Next, create a template that gives users the same experience as your app but with data unique to
  their Salesforce orgs. For standard apps, add a configuration wizard to customize app creation.
  The wizard helps an admin using your template add data, name a dashboard, label a chart, or add
  their own touches. For embedded apps, add the auto-install.json file. You control the process by editing the files that constitute
  the template assets, thetemplate-info.json, ui.json, variables.json, and
  any number of rules.json files. These JSON files open a world
  of flexibility and power in the template creation universe.

# Step 3: Edit the JSON Files

Your source app looks fantastic, with widgets rendered beautifully in their dashboards. Next, create a template that gives users the same experience as your app but with data unique to their Salesforce orgs. For standard apps, add a configuration wizard to customize app creation. The wizard helps an admin using your template add data, name a dashboard, label a chart, or add their own touches. For embedded apps, add the auto-install.json file. You control the process by editing the files that constitute the template assets, thetemplate-info.json, ui.json, variables.json, and any number of rules.json files. These JSON files open a world of flexibility and power in the template creation universe.

The files interact as follows:

-   The ui.json file uses the variables in the variables.json file to dictate what goes on each page of the wizard. The ui.json file can contain conditionals that dictate which questions or pages are displayed in the wizard.
-   variables.json contains all template variables, including text for wizard questions and specifications for the answers. The file can also define conditional questions. For example, a question only appears if an org contains certain data. Or if a wizard question is answered in a way that requires more detail, the wizard presents other conditional questions.
-   The template-info.json file identifies all the template components, including the references to the rules, variables, and UI files. The template-info.json file can contain conditionals that dictate whether assets are generated in the downstream app.
-   The template-to-app-rules.json files use variables to set constants, and then use rules to set values that dictate how assets within the downstream app are generated. The most common uses for rules include adding and removing dashboard widgets and dataflow actions.
-   The app-to-template-rules.json file defines templatizing the source app. It’s edited only when you change the source app to change the template.
-   The folder.json file enables you to set a preferred order of the dashboards in the downstream app, as opposed to leaving them alphabetized.
-   The optional auto-install.json file is used when a template is part of a managed package. It defines the auto-install hook and the automated app configuration settings used to generate an auto-install request when the package is installed. This file is created manually, it isn’t generated on template creation.

And yet, editing these JSON files is an optional step. A template is complete even without you touching any of these files. Such a minimal template creates apps that mirror the source app without any customization. You can test your template without any editing to validate that app creation works before moving on to more complex customizations.

Don’t confuse the template assets discussed here with the JSON files representing the *source app assets*. For example, dashboard\_name.json and lens\_name.json are also exported as part of the Metadata API retrieval. We recommend that you alter app assets and widgets in CRM Analytics Studio, remembering to update the template object using Analytics Studio to update the template. That means you don’t manually edit their corresponding JSON files.

-   **[Wizard Best Practices](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_best_practices.htm)**
    To deliver an optimal user experience, adopt these best practices when creating a wizard.
-   **[Edit template-info.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_template_info_json.htm)**
    template-info.json describes the template. It references all the information required to create an app from the template.
-   **[Edit folder.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_folder_json.htm)**
    The folder.json file describes the featuredAssets for the application.
-   **[Edit auto-install.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_auto_install_json.htm)**
    auto-install.json configures the template for the auto-install framework. Always create this optional file if you plan to design your template for auto-installation via a managed package with an auto-install request.
-   **[Edit org-readiness.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_org_readiness_json.htm)**
    The org-readiness.json file configures the validations to run on a user org to ensure it can create an app successfully.
-   **[Edit variables.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_variables_json.htm)**
    The variables.json file describes all the variables used in the template-info.json, ui.json, and the different rules.json files.
-   **[Edit ui.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_ui_json.htm)**
    The ui.json file determines how your template displays the configuration wizard questions defined in variables.json.
-   **[Edit Rules Files](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_rules_json.htm)**
    Rules files define how an app gets created by the template.
-   **[Use the Apex WaveTemplateConfigurationModifier Class](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class.htm)**
    The WaveTemplateConfigurationModifier class checks an org’s data. Also, to simplify app creation, it can modify the template configuration wizard accordingly.
-   **[Use the Apex Access Methods](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_access_class.htm)**
    The Access class provides utility methods to check Integration User access to sObjects and sObjectFields. Use these methods in your WaveTemplateConfigurationModifier implementation.

## Related Topics

- Wizard Best Practices (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_best_practices.htm)
- Edit template-info.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_template_info_json.htm)
- Edit folder.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_folder_json.htm)
- Edit auto-install.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_auto_install_json.htm)
- Edit org-readiness.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_org_readiness_json.htm)
- Edit variables.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_variables_json.htm)
- Edit ui.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_ui_json.htm)
- Edit Rules Files (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_rules_json.htm)
- Use the Apex WaveTemplateConfigurationModifier Class (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_class.htm)
- Use the Apex Access Methods (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_apex_access_class.htm)
