---
title: "Rules Syntax"
domain: bi-dev-guide-wave-templates
topic: rules-syntax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.644Z
estimatedTokens: 268
keywords: [Rules, may, contain, any, number, rule, objects, made]
---

# Rules Syntax

> The rules object may contain any number of rule objects. A rule object is made up
    of:

# Rules Syntax

The rules object may contain any number of rule objects. A rule object is made up of:

| Attribute | Type | Example | Required | Notes |
| --- | --- | --- | --- | --- |
| name | String | "name": "ruleName" | Yes |  |
| condition | String | "condition": "${Variables.foo == "Yes"}" | No | Use freemarker conditions to apply the rule (same syntax as conditions used in template-info.json) |
| appliesTo | Array | {     "type": "dashboard",     "name": "dashboardOne" } | Yes | Use "type": "*" to apply to all JSON assets. Other valid values are "dashboard" , "lens", "workflow", "schema", and "xmd"The "name" string allows specific JSON assets to be referencedThe "name" can take "*" as well, to apply to all of one asset type or a group of one asset typeNoteNOTE: for workflow type, name has to be "*" |
| label | String |  |  |  |
| actions | Array | {      "action": "set",     "description" : "A desc",     "path": "$.json.path",     "value": "setValue" } | Yes | 4 actions types: add, put, set, and deleteCan have as many actions as needed in array |

## Code Examples

```
{
    "type": "dashboard",
    "name": "dashboardOne"
}
```

```
{ 
    "action": "set",
    "description" : "A desc",
    "path": "$.json.path",
    "value": "setValue"
}
```
