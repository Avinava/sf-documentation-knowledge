---
title: "Appendix"
domain: bi-dev-guide-wave-templates
topic: appendix
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.613Z
estimatedTokens: 1415
keywords: [Appendix, document, detailed, examples, attribute, descriptions, in-depth, materials, build, concepts, discussed, point]
---

# Appendix

> The reference section of this document contains detailed examples, attribute lists and
    descriptions, and other in-depth reference materials that build on the concepts we have
    discussed up to this point.

# Appendix

The reference section of this document contains detailed examples, attribute lists and descriptions, and other in-depth reference materials that build on the concepts we have discussed up to this point.

-   **[Add a Recipe to a CRM Analytics Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_recipe.htm)**
    Data prep recipes are a unique CRM Analytics asset, as they aren’t stored in folders like dashboards, lenses, and datasets. The only way to connect a recipe to an app is via the relationship of the datasets in the folder to the recipes that consume or output those datasets.
-   **[Configure Recipe Execution](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_execute_recipe.htm)**
    Data Prep recipes can be complex and add to app creation time if they sync and execute while the templated app is generating. Recipes can also change the shape of your existing data. The executeCondition attribute for recipe entries allows you to specify if a templated recipe syncs and executes during templated app creation or not.
-   **[Add an Einstein Discovery Story to a CRM Analytics Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_discovery_story.htm)**
    Einstein Discovery stories can be added to an app template by referring to the story in the template-info.json file.
-   **[Add a Remote Connector to a CRM Analytics Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_connector.htm)**
    Add remote connectors to the digest node of a template dataflow by referencing connectors in variables.json and editing ui.json and rules.json.
-   **[Use Live Datasets in a CRM Analytics Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_use_live_dataset.htm)**
    Use live datasets in your CRM Analytics template with the liveConnection attribute to bring in live connections to Snowflake source tables. Creating a template from a source app with live datasets generates the dataset information, but there are considerations for successful app creation for your users.
-   **[Work with Embedded App Auto-Install Requests](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_auto_install_details.htm)**
    Embedded app templates can create apps without any custom code, but you can add customizations to your embedded app lifecycle. Create Apex classes that use the CRM Analytics auto-installer to create and manage auto-install requests for your embedded app.
-   **[Feature Parameters for Analytics Templates](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_feature_parameters.htm)**
    Feature parameters are available to control behavior in the template-to-app process for CRM Analytics apps. Feature parameters are defined as metadata that is deployed as part of the managed package. When feature parameters are deployed with the template, the parameter values are set using the LMA application.
-   **[template-info.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_attributes.htm)**
    The template-info.json file is the main file that describes the template. It includes or references all the information required to create a downstream app.
-   **[template-info.json Example](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_example.htm)**
    Here are two example template-info.json files.
-   **[ui.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_ui_json_attributes.htm)**
    The ui.json file attributes are:
-   **[variables.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_variables_json_attributes.htm)**
    Named nodes, each representing a single variable. Each node contains the following attributes:
-   **[org-readiness.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_org_readiness_json_attributes.htm)**
    The org-readiness.json file attributes are:
-   **[folder.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_folder_json_attributes.htm)**
    The folder.json file attributes are:
-   **[auto-install.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_auto_install_json_attributes.htm)**
    The auto-install.json file attributes are:
-   **[rules.json Example](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_json_example.htm)**
    Refer to this example of the rules.json file.
-   **[rules.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_json_attributes.htm)**
    The rules.json file attributes are:
-   **[Rules Testing with jsonxform/transformation endpoint](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_jsonxform_transformation.htm)**
    Test the results of a rule before deployment by calling the jsonxform/transformation endpoint.
-   **[VisualForce Events for Customizing the Wizard UI](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_vf_events.htm)**
    This reference section explains the details of using VisualForce for customizing the Wizard user interface.

## Related Topics

- Add a Recipe to a CRM Analytics Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_recipe.htm)
- Configure Recipe Execution (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_execute_recipe.htm)
- Add an Einstein Discovery Story to a CRM Analytics Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_discovery_story.htm)
- Add a Remote Connector to a CRM Analytics Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_connector.htm)
- Use Live Datasets in a CRM Analytics Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_use_live_dataset.htm)
- Work with Embedded App Auto-Install Requests (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_auto_install_details.htm)
- Feature Parameters for Analytics Templates (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_feature_parameters.htm)
- template-info.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_attributes.htm)
- template-info.json Example (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_template-info_json_example.htm)
- ui.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_ui_json_attributes.htm)
