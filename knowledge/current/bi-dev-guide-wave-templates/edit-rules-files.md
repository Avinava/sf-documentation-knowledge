---
title: "Edit Rules Files"
domain: bi-dev-guide-wave-templates
topic: edit-rules-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.506Z
estimatedTokens: 821
keywords: [Edit, Rules, Files, define, how, app, created, template]
---

# Edit Rules Files

> Rules files define how an app gets created by the template.

# Edit Rules Files

Rules files define how an app gets created by the template.

There are two type of rules files: template-to-app-rules.json and app-to-template-rules.json. They use the same syntax, but serve different purposes.

-   template-to-app-rules.json defines the rules that the template follows when creating an app. For example, you can define a rule that specifies that if an org doesn’t use certain objects, the app doesn't use them in dashboards or the dataflow. Another rule can replace a label name in a chart with the name of a field from a Salesforce object selected in a wizard question. Rules also define how variables are handled. For example, if the wizard asks which fields to include in filters for accounts, template-to-app-rules.jsondetermines how that choice is reflected in dashboards.
-   app-to-template-rules.json provides rules for converting an updated source app back to template form. After changing the source app, you update the template object with a PUT call to the CRM Analytics REST API. For example, you can tokenize all asset files every time they are pulled out of the source app. You use app-to-template rules infrequently, because you're unlikely to update the source app often.

The rules file is referenced from template-info.json:

```

```

The bulk of what follows details the use of template-to-app-rules.json.

-   **[Rules Files Structure](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_files_structure.htm)**
    Rules files can contain three sections: rules, constants, and macros.
-   **[Structuring and Organizing Rules](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_structure.htm)**
    The rules section of template-to-app-rules.json defines the rules followed by the template.
-   **[Rules Syntax](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_syntax.htm)**
    The rules object may contain any number of rule objects. A rule object is made up of:
-   **[Actions in Rules](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_actions_in_rules.htm)**
    Actions define what a rule does. Use constants to make it easier to perform any action.
-   **[Actions Syntax for Rules](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_actions_syntax_rules.htm)**

-   **[Use Functions in Rules](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions.htm)**
    Functions make rules more powerful. For example, use functions to apply rules iteratively to arrays or to make rules conditional on the content of a string or an array. CRM Analytics Templates supports string, array, and json functions as well as static math and sfdc\_fma functions.
-   **[Macros in Rules](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_macros_in_rules.htm)**
    Use a macro when a single rule executes repeatedly on different JSON node paths.

#### See Also

-   [rules.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_json_attributes.htm "The rules.json file attributes are:")

## Code Examples

```
"rules" : [
    { "type" : "appToTemplate", "file" : "appToTemplateRules.json" },
    { "type" : "templateToApp", "file" : "templateToAppRules.json" }
],
```

## Related Topics

- Rules Files Structure (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_files_structure.htm)
- Structuring and Organizing Rules (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_structure.htm)
- Rules Syntax (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_syntax.htm)
- Actions in Rules (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_actions_in_rules.htm)
- Actions Syntax for Rules (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_actions_syntax_rules.htm)
- Use Functions in Rules (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions.htm)
- Macros in Rules (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_macros_in_rules.htm)
- rules.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_json_attributes.htm)
