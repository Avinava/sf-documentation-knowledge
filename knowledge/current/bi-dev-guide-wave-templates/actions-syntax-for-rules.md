---
title: "Actions Syntax for Rules"
domain: bi-dev-guide-wave-templates
topic: actions-syntax-for-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.363Z
estimatedTokens: 544
keywords: [Actions, Rules, Needs, index]
---

# Actions Syntax for Rules

> Needs "index" and "value".

# Actions Syntax for Rules

| Action | Example | Notes |
| --- | --- | --- |
| add | {      "action": "add",     "description" : "Add desc",     "path": "$.json.path.to.existing.json,array",     "index": 0,     "value": "value to add" } | Adds an entry to an existing array.Needs "index" and "value"."index" should be 0 for first element in array, any number after that for middle of array.If "index" is larger than array size, value is added to end of array. |
| put | {      "action": "put",     "description" : "Put desc",     "path": "$.json.path.to.existing.json",     "key": "jsonAttributeName",     "value": "new value" } | Add an attribute and value to an existing JSON value.Needs "key" and "value"."value" can be a string or an array. |
| set | {      "action": "set",     "description" : "Set desc",     "path": "$.json.path.to.attribute",     "value": "setValue" } | Set a value on an existing JSON attribute.Needs "value". |
| delete | {      "action": "delete",     "description" : "Delete desc",     "path": "$.json.path.to.delete" } | Remove a node in the existing JSON tree. |
| eval | [      {          "action": "eval",        "key": "helloResult",        "value": "${myMacros:sayHello('Hello')}"      },     {          "action": "set",        "path": "$.path.json.node",        "value": "${Rules.Eval.helloResult}"      } ] | Evaluate the expression specified in 'value' and assign results to the context variable specified by 'key' (if set). Context attribute can be referenced using the expression:  ${Rules.Eval.<variable_name>}. Scope of the eval variable is one of the following:The entire document if performed in a rule.The macro if performed within a macro. |
| replace | {  "action": "replace",  "key": "RPLCM_Opportunity_Amount_Field",  "value": "${Variables.Opportunity_Amount.fieldName}" }, | Replace any text string throughout entire document. Use when regular expressions are not an option. Can still use expressions.Instead of using the ‘replace’ action, you can perform targeted search and replace (JSON Path) with ${string:replace(...)}.In cases requiring regular expressions, use ${string:replaceFirst(...)}, ${string:replaceAll(...)}. |

## Code Examples

```
{ 
    "action": "add",
    "description" : "Add desc",
    "path": "$.json.path.to.existing.json,array",
    "index": 0,
    "value": "value to add"
}
```

```
{ 
    "action": "put",
    "description" : "Put desc",
    "path": "$.json.path.to.existing.json",
    "key": "jsonAttributeName",
    "value": "new value"
}
```

```
{ 
    "action": "set",
    "description" : "Set desc",
    "path": "$.json.path.to.attribute",
    "value": "setValue"
}
```

```
{ 
    "action": "delete",
    "description" : "Delete desc",
    "path": "$.json.path.to.delete"
}
```

```
[ 
    { 
        "action": "eval",
         "key": "helloResult",
         "value": "${myMacros:sayHello('Hello')}" 
    },
      { 
        "action": "set",
         "path": "$.path.json.node",
         "value": "${Rules.Eval.helloResult}" 
    } ]
```
