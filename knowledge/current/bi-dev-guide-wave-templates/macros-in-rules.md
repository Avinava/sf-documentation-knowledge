---
title: "Macros in Rules"
domain: bi-dev-guide-wave-templates
topic: macros-in-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.578Z
estimatedTokens: 566
keywords: [Macros, Rules, macro, rule, executes, repeatedly, different, JSON, node, paths]
---

# Macros in Rules

> Use a macro when a single rule executes repeatedly on different JSON node
  paths.

# Macros in Rules

Use a macro when a single rule executes repeatedly on different JSON node paths.

Rule macros enable template developers to define repeatable, well-tested rule code units that can be called within the context of any JSON transformation, simplifying and making the rule definition source easier to maintain.

You invoke macros using standard function syntax. Reference them anywhere a traditional expression is resolved within a rule action. In template rules, macros can be referenced by an ‘eval’ action. Macros can include actions and can reference other macros, and macro recursion is supported. Template support a macro depth of 10; beyond that results in an overflow error and app creation failure.

For example, consider the following macro for multiplying two numbers:

```

```

It can be invoked in rules actions as follows:

```

```

-   **[Rule Macro And Macro Definition Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rulemacro_attributes.htm)**
    A rule macro object contains a collection of macro definition objects. Macro definition objects define the logic of macros and their return values.
-   **[Macro Examples](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templates_dev_macro_examples.htm)**
    The following examples show the structure and syntax of macros in rules.
-   **[Macro Use Case: Recursive Operations](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_macros_sample_recursive.htm)**
    Here’s an example of a macro that deletes an sfdcDigest node. It also deletes the digest node and all other nodes that depend on that node.
-   **[Macro Use Case: Delete Workflow Nodes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_macros_sample_delete.htm)**
    Use this macro to delete multiple nodes from the workflow without having to write multiple actions.
-   **[Macro Use Case: Add an Array of SObject Names to Extract Workflow](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_macros_sample_add_array.htm)**
    Here’s a macro that adds an array of sObject names to the extract workflow.

## Code Examples

```
{
           "namespace": "testMacroNamespace", 
           "definitions": [
               {
                   "name": "multiplyTwoNumbers", 
                   "parameters": [
                       "firstNumber", 
                       "secondNumber"
                   ], 
                   "returns": "${p.firstNumber * p.secondNumber}"
               }, 
               {
                   "name": "shouldExecuteAction", 
                   "returns": true
               }
           ]
}
```

```
{
    "rules": [
        {
            "name": "Testing of example macro", 
            "actions": [
                {
                    "action": "set", 
                    "key": "macroResult", 
                    "path": "$.path.to.a.number", 
                    "value": "${testMacroNamespace:multiplyTwoNumbers(3,3)}"
                }, 
                {
                    "action": "put", 
                    "condition": "${testMacroNamespace:shouldExecuteAction()}", 
                    "path": "$.my.json.path", 
                    "value": {
                        "foo": "bar", 
                        "anotherNumber": “${testMacroNamespace:multiplyTwoNumbers(5,5)}”
                    }
                }
            ]
        }
    ]
}
```

## Related Topics

- Rule Macro And Macro Definition Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rulemacro_attributes.htm)
- Macro Examples (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templates_dev_macro_examples.htm)
- Macro Use Case: Recursive Operations (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_macros_sample_recursive.htm)
- Macro Use Case: Delete Workflow Nodes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_macros_sample_delete.htm)
- Macro Use Case: Add an Array of SObject Names to Extract Workflow (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_rules_macros_sample_add_array.htm)
