---
title: "Macro Use Case: Add an Array of SObject Names to Extract
    Workflow"
domain: bi-dev-guide-wave-templates
topic: macro-use-case-add-an-array-of-sobject-names-to-extract-workflow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.633Z
estimatedTokens: 55
keywords: [Macro, Case, Add, Array, SObject, Extract, Workflow, Here’s, adds]
---

# Macro Use Case: Add an Array of SObject Names to Extract
    Workflow

> Here’s a macro that adds an array of sObject names
    to the extract workflow.

# Macro Use Case: Add an Array of SObject Names to Extract Workflow

Here’s a macro that adds an array of sObject names to the extract workflow.

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
    		"name" : "concatArrayFieldName",
    		"description" : "Concatenates field names from an sobject array node",
    		"parameters" :
    		[
    			"variable"
    		],
    		"returns": "${array:concat(Rules.CurrentNode, array:forEach(p.variable,'{"name":"${var.fieldName}"}'))}"
    		
    	},
    	{	
    		"name" : "addToExtractCaseWorkflow",
    		"description" : "Adds array fields to Extract Case node",
    		"parameters" :
    		[
    			"variable"
    		],
    		"actions": [
    		 {
    		 	"action": "set",
          		"description": "put selected values for sfdcDigest in dataflow",
          		"path": "$.workflowDefinition.Extract_Case.parameters.fields",
          		"value" : "${macros:concatArrayFieldName(p.variable)}"
          	}
          	]
    	}
```

```
{
          "action": "eval",
          "description": "put selected values for sfdcDigest in dataflow",
          "value": "${macros:addToExtractCaseWorkflow(Variables.CaseMoreDims)}"
        }
```
