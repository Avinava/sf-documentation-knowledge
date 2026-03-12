---
title: "Macro Use Case: Recursive Operations"
domain: bi-dev-guide-wave-templates
topic: macro-use-case-recursive-operations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.638Z
estimatedTokens: 225
keywords: [Macro, Case, Recursive, Operations, Here’s, deletes, sfdcDigest, node, digest, nodes, depend]
---

# Macro Use Case: Recursive Operations

> Here’s an example of a macro that deletes an sfdcDigest node. It also deletes the digest node and all other nodes that depend on
    that node.

# Macro Use Case: Recursive Operations

Here’s an example of a macro that deletes an sfdcDigest node. It also deletes the digest node and all other nodes that depend on that node.

This macro deletes the specified node and dynamically queries the JSON document to delete each dependency of those nodes.

Consider the simplified JSON below. To delete 'node3' and its dependencies, the result should delete: node3, node4, node5 (depends on node4), node6 (depends on node5), node7, node8, node9.

## Example

Example JSON

```

```

## Example

Without Macro

Without using a macro (and associated enhancements), nodes would have to be deleted individually.

```

```

This code is rigid and difficult to maintain because rules would need to be modified as node dependencies are added and removed from the JSON payload.

## Example

Macro Source

```

```

## Example

Rule Calling the Macro

```

```

## Code Examples

```
{
    "node1": { }, 
    "node2": {
        "dependsOn": "node1"
    }, 
    "node3": {
        "dependsOn": "node2"
    }, 
    "node4": {
        "dependsOn": "node3"
    }, 
    "node5": {
        "dependsOn": "node4"
    }, 
    "node6": {
        "dependsOn": "node5"
    }, 
    "node7": {
        "dependsOn": "node3"
    }, 
    "node8": {
        "dependsOn": "node3"
    }, 
    "node9": {
        "dependsOn": "node3"
    }
}
```

```
{
    "actions": [
        {
            "action": "delete", 
            "path": "$.node3"
        }, 
        {
            "action": "delete", 
            "path": "$.node4"
        }, 
       {
            "action": "delete", 
            "path": "$.node5"
        }, 
       {
            "action": "delete", 
            "path": "$.node6"
        }, 
        {
            "action": "delete", 
            "path": "$.node7"
        }, 
        {
            "action": "delete", 
            "path": "$.node8"
        }, 
        {
            "action": "delete", 
            "path": "$.node9"
        }
    ]
}
```

```
{ 
    "namespace": "macroRecursion",
     "definitions": [ 
        { 
            "name": "deleteNodeAndDependencies",
             "description": "Delete a node and its dependencies.  Returns an array of json paths of all the nodes that were deleted.",
             "parameters": [ 
                "nodeName" 
            ],
             "actions": [ 
                {"action": "eval", "key": "fullNodePath",  "value": "$.${p.nodeName}" },
                 {"action": "eval", "key": "dependencies",  "value": "${macroRecursion:getDependents(p.nodeName)}"},
                 { 
                  "action": "eval",
                   "value": "${array:forEach(Rules.Eval.dependencies, '${macroRecursion:deleteNodeAndDependencies(macroRecursion:deleteSingleNodeByFullJsonPath(var))}')}" 
                },
                  { 
                    "action": "eval",
                     "value": "${macroRecursion:deleteSingleNodeByFullJsonPath(Rules.Eval.fullNodePath)}" 
                } 
            ] 
        },
          { 
            "name": "deleteSingleNodeByFullJsonPath",
             "description": "Deletes a node by full json path.",
             "parameters": [ 
                "fullJsonPath" 
            ],
             "actions": [ 
               {"action": "eval", "key": "pathSegments",
  "value": "${string:match(p.fullJsonPath,'\\\\[\\'(.*?)\\'\\\\]')}"},
                { "action": "delete",  "path": "${p.fullJsonPath}"} 
            ],
             "returns": "${array:last(Rules.Eval.pathSegments)}" 
        },
          { 
            "name": "getDependents",
             "description": "Returns the full json path to search results",
             "parameters": [ 
                "nodeName" 
            ],
             "actions": [ 
               { "action": "eval", "key": "searchString", "value": "$.*[?(@.dependsOn=='${p.nodeName}')]"},
                { "action": "eval", "key": "paths", "value": "${json:searchPaths(Rules.Eval.searchString)}"} 
            ],
             "returns": "${Rules.Eval.paths}" 
        } 
    ] }
```

```
{
    "rules": [
        {
            "name": "Recursively delete node3 and dependencies", 
            "actions": [
                {"action": "eval", "value": "${macroRecursion:deleteNodeAndDependencies('node3')}" }
            ]
        }
    ]
}
```
