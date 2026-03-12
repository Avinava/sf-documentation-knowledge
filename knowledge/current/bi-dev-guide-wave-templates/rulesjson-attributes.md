---
title: "rules.json Attributes"
domain: bi-dev-guide-wave-templates
topic: rulesjson-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.628Z
estimatedTokens: 544
keywords: [rules.json, Attributes, file]
---

# rules.json Attributes

> The rules.json file attributes are:

# rules.json Attributes

The rules.json file attributes are:

| Attribute | Required | Description |
| --- | --- | --- |
| constants | No | Container attribute only - array of constants to be defined, can be empty if no constants are needed |
| constants --> name | No | Unique name for a constant, used to reference the constant in other places |
| constants --> value | No | Value of the constant |
| rules | No | Container attribute only - array of rules to be defined, can be empty if no rules are needed |
| label | No |  |
| rules --> name | Yes | Unique name for a rule |
| rules --> condition | No | If condition is met, then the rule will run, if the condition is not met, the rule will not run. |
| rules --> appliesTo | Yes | Container attribute only - array of assets the rule should be be applied to (dashboards, dataflow, recipes, schemas, XMDs) |
| rules --> appliesTo --> name | No. Best practice is to specify name. If null, defaults to *, and rule applies to all template assets. | Name of asset (can be * in case of dashboards for all dashboards); must match the “name” defined in the template-info for the asset |
| rules --> appliesTo --> type | No. Best practice is to specify type. If null, defaults to *, and rule applies to all asset types* | Type of asset (dashboard, workflow, lens, schema, xmd) |
| rules --> actions | Yes | Container attribute only - array of actions the rule should invoke (one or more action is necessary) |
| rules --> actions --> action | Yes | Type of action - set, add, delete, put, replace |
| rules --> actions --> description | No | Description of the rule action - for maintainability |
| rules --> actions --> path | Yes | JSONPath to take the action on |
| rules --> actions --> value | No | Value needed for set/add/put, defines the value to put in the JSONPath |
| rules --> actions --> index | No | Index needed for add action only |
| rules --> actions --> key | No | Key needed for put action only |

#### See Also

-   [Edit Rules Files](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_rules_json.htm "Rules files define how an app gets created by the template.")

## Related Topics

- Edit Rules Files (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_rules_json.htm)
