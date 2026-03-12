---
title: "Structuring and Organizing Rules"
domain: bi-dev-guide-wave-templates
topic: structuring-and-organizing-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.640Z
estimatedTokens: 387
keywords: [Structuring, Organizing, Rules, template-to-app-rules.json, followed, template]
---

# Structuring and Organizing Rules

> The rules section of template-to-app-rules.json
        defines the rules followed by the template.

# Structuring and Organizing Rules

The rules section of template-to-app-rules.json defines the rules followed by the template.

The section is made up of three parts:

-   Action: Designates the operation to perform.
-   Path: Defines the path to the location where the action is performed.
-   AppliesTo: Determines the asset files to apply the rules to. Consists of a name.

Rules can be divided into multiple files, which are executed in the order in which you list them in template-info.json. Be sure that a rule that runs first doesn’t refer to a constant referenced in a rule that runs later.

Here are a few guidelines to consider when working with multiple rules files:

-   One rules file can contain all constants, another all actions.
-   Use multiple rules when actions grow to 500 lines. You could divide them into a rules file for dashboards, another for datasets or the dataflow.
-   If you have content to be used by many rules, include it in the first rules file to be executed.

Here is a simple example, a rule for changing the title text on a dashboard:

```

```

Make rules more powerful using functions. See [Use Functions in Rules](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions.htm "Functions make rules more powerful. For example, use functions to apply rules iteratively to arrays or to make rules conditional on the content of a string or an array. CRM Analytics Templates supports string, array, and json functions as well as static math and sfdc_fma functions.").

## Code Examples

```
{
    "name": "Update dashboard title",
    "appliesTo": [
        {
            "type": "dashboard",
            "name": "DashboardOne"
        }
    ],
    "actions": [
        {
            "action": "set",
            "description": "change the title text of the dashboard",
            "path": "$.state.widgets.title_text.parameters.text",
            "value": "${Variables.DashboardTitle}"
        }
    ]
}
```

## Related Topics

- Use Functions in Rules (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions.htm)
