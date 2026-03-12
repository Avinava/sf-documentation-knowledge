---
title: "Macro Use Case: Delete Workflow Nodes"
domain: bi-dev-guide-wave-templates
topic: macro-use-case-delete-workflow-nodes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.635Z
estimatedTokens: 54
keywords: [Macro, Case, Workflow, Nodes, multiple, having, write, actions]
---

# Macro Use Case: Delete Workflow Nodes

> Use this macro to delete multiple nodes from the workflow without having to write
    multiple actions.

# Macro Use Case: Delete Workflow Nodes

Use this macro to delete multiple nodes from the workflow without having to write multiple actions.

## Example

Macro

```

```

## Example

Rule Calling the Macro

```

```

## Code Examples

```
{
            "name": "deleteWorkflowNode", 
            "description": "Deletes a workflow node.", 
            "parameters": [
                "nodeName"
            ], 
            "actions": [
                { "action": "delete",  "path": "$.workflowDefinition.${p.nodeName}"}
            ]
        },
        {
            "name": "deleteArrayOfWorkflowNodes", 
            "description": "Deletes a set of workflow nodes.", 
            "parameters": [
                "nodeNameArray"
            ], 
            "actions": [
                { "action": "eval",  
                "value": "${array:forEach(p.nodeNameArray, '${macros:deleteWorkflowNode(var)}')}"}
            ]
        }
```

```
{"action":"eval","key" : "myArray","value":["Extract_Queue","Add_Fields_To_Queue","Append_Queue_User"]},
     {
          "action": "eval",
          "description": "remove multiple nodes in dataflow",
          "value": "${macros:deleteArrayOfWorkflowNodes(Rules.Eval.myArray)}"
        }
```
