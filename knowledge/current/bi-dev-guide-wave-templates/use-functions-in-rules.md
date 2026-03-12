---
title: "Use Functions in Rules"
domain: bi-dev-guide-wave-templates
topic: use-functions-in-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.551Z
estimatedTokens: 416
keywords: [Functions, Rules, powerful, apply, iteratively, arrays, conditional, content, array, CRM, Analytics, Templates, supports, json, well]
---

# Use Functions in Rules

> Functions make rules more powerful. For example, use functions to apply rules
    iteratively to arrays or to make rules conditional on the content of a string or an array. CRM
    Analytics Templates supports string, array, and json functions as well as static math and
    sfdc_fma functions.

# Use Functions in Rules

Functions make rules more powerful. For example, use functions to apply rules iteratively to arrays or to make rules conditional on the content of a string or an array. CRM Analytics Templates supports string, array, and json functions as well as static math and sfdc\_fma functions.

Use the "Rules.CurrentNode" property in conjunction with functions. It contains the last results of the JSON 'path' argument supplied in the action of your rule.

Use the EL Expression Language to invoke custom functions with an expression. Functions can appear in the static text of an EL expression, for example:

```

```

See the sections that follows for complete information about each function type.

-   **[string Functions](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions_string.htm)**
    Use string functions in rules to manipulate text strings in asset JSON at runtime.
-   **[array Functions](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions_array.htm)**
    Use array functions in rules to manipulate arrays in asset JSON at runtime.
-   **[json Functions](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions_json.htm)**
    Use json functions in rules to manipulate JSON at runtime. For example, find all the JSON paths in a dashboard that have a link widget and update the links at runtime.
-   **[Static Functions](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions_static.htm)**
    Static functions have specialized use in template rules.

## Code Examples

```
"name" : "my name in lowercase is
    ${string:toLowerCase(Variables.myName)}",
```

## Related Topics

- string Functions (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions_string.htm)
- array Functions (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions_array.htm)
- json Functions (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions_json.htm)
- Static Functions (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_functions_static.htm)
