---
title: "Macro Examples"
domain: bi-dev-guide-wave-templates
topic: macro-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.355Z
estimatedTokens: 175
keywords: [Macro, Examples, show, structure, macros, rules]
---

# Macro Examples

> The following examples show the structure and syntax of macros in rules.

# Macro Examples

The following examples show the structure and syntax of macros in rules.

Here’s an example macro showing the use of attributes, parameters, and “path” statements.

```

```

The following example calls a macro with namespace 'myNS' and macro name 'getSomething' defined with no parameters. Results of the macro are stored in the template context, and can be referenced using this expression: ${Rules.Eval.macroResults}.

```

```

This example sets the JSON node at path $.path.to.json.node with the result of macro myNS:getJsonValue defined with no parameters. This action will only be called if the macro myNS:shouldExecute (defined with one parameter) returns true.

```

```

## Code Examples

```
"macros":
 [ 
        { 
            "namespace": "myMacroNamespace",
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
                    "name": "deleteWidget",
                     "description": "Deletes a widget and any references to the widget.",
                     "parameters": [ 
                        "widgetName" 
                    ],
                     "actions": [ 
                        { 
                            "action": "eval",
                             "key": "results",
                             "path": "${json:searchPaths(\”$.state.widget['p.widgetName']\”)}”  
                       },
                          { 
                            "condition": "${!empty results}",
                             "action": "delete",
                             "path": "$.state.widgets['${p.widgetName}']" 
                        },
                          { 
                            "condition": "${!empty results}",
                             "action": "delete",
                             "path": "$.state.gridLayouts..pages..widgets[?(@.name=='${p.widgetName}')]" 
                        } 
                    ] 
                } 
            ] 
        } 
    ],
      "constants": [...],
      "rules": [...] }
```

```
{
  "action": "eval",
  "key": "macroResults",
  "value": "${myNS:getSomething()}"
}
```

```
{
  "action": "set",
  "condition": "${myNS:shouldExecute(true)}",
  "path": "$.path.to.json.node",
  "value": "${myNS:getJsonValue()}"
}
```
