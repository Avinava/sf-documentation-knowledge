---
title: "Rules Testing with jsonxform/transformation endpoint"
domain: bi-dev-guide-wave-templates
topic: rules-testing-with-jsonxformtransformation-endpoint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.575Z
estimatedTokens: 307
keywords: [Rules, Testing, jsonxform, transformation, endpoint, Test, results, rule, deployment, calling, Process, Post, Transform, Constant, Array]
---

# Rules Testing with jsonxform/transformation endpoint

> Test the results of a rule before deployment by calling the jsonxform/transformation endpoint.

# Rules Testing with jsonxform/transformation endpoint

Test the results of a rule before deployment by calling the jsonxform/transformation endpoint.

## Process for Using jsonxform/transformation

Use cURL or Postman to execute a Post call on the /services/data/v51.0/jsonxform/transformation REST endpoint. See the examples for starting points on what the POST request body must contain.

If the rule works, the POST response contains the transformed JSON results. If the rule doesn’t work, the POST response contains any errors with guidance to fix the rule.

The following examples show how you can take advantage of the built-in tokens we provide.

## Example: Post Transform

A “put” rule that adds a name/value pair to the JSON.

```

```

## Example: Constant Array

Tests an array function (contains) to determine the right value to add to the final JSON.

```

```

## Example: Macro Transform

Tests a macro with a rule.

```

```

For reference on the jsonxform/transformation REST endpoint, see [JsonXform Transformation Resource](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_jsonxform_transformation.htm) in the Analytics REST API Developer Guide.

## Code Examples

```
{
	"document": {
		"user": {
			"firstName": "${User.FirstName}",
			"lastName": "${User.LastName}",
			"userName": "${User.UserName}",
			"id": "${User.Id}",
			"hello": "${Variables.hello}"
		},
		"company": {
			"id": "${Org.Id}",
			"name": "${Org.Name}",
			"namespace": "${Org.Namespace}"
		}

	},
	"values": {

		"Variables": {
			"hello": "world"
		}
	},
	"definition": {
		"rules": [{
			"name": "Example",
			"actions": [{
				"action": "put",
				"description": "add hobby to user",
				"key": "hobby",
				"path": "$.user",
				"value": "mountain biking"
			}]
		}]
	}
}
```

```
{
	"document": {
		"user": {
			"firstName": "${User.FirstName}",
			"lastName": "${User.LastName}",
			"userName": "${User.UserName}",
			"id": "${User.Id}",
			"hello": "${Variables.hello}"
		},
		"company": {
			"id": "${Org.Id}",
			"name": "${Org.Name}",
			"namespace": "${Org.Namespace}"
		}

	},
	"values": {
		"Variables": {
			"hello": "world",
			"choices": ["Products", "Cases"]
		}
	},
	"definition": {
		"constants": [{
			"name": "ConstantTest",
			"value": "${array:contains(Variables.choices, 'Products') ? 'Products' : 'No Products'}"
		}],
		"rules": [{
			"name": "Example",
			"actions": [{
				"action": "put",
				"description": "add hobby to user with constant",
				"key": "hobby",
				"path": "$.user",
				"value": "${Constants.ConstantTest}"
			}]
		}]
	}
}
```

```
{
	"document": {
		"user": {
			"firstName": "${User.FirstName}",
			"lastName": "${User.LastName}",
			"userName": "${User.UserName}",
			"id": "${User.Id}",
			"favorite": null
		}
	},
	"values": {},
	"definition": {
		"macros": [{
			"namespace": "jsonTest",
			"definitions": [{
				"name": "setNodeByPath",
				"parameters": [
					"jsonPath",
					"value"
				],
				"actions": [{
					"action": "set",
					"path": "${p.jsonPath}",
					"value": "${p.value}"
				}]
			}]
		}],
		"rules": [{
			"name": "Example",
			"actions": [{
					"action": "put",
					"description": "add hobby to user",
					"key": "hobby",
					"path": "$.user",
					"value": "mountain biking"
				},
				{
					"action": "eval",
					"description": "Set the value of 'favorite' with the value from 'hobby'",
					"path": "$.user.hobby",
					"value": "${jsonTest:setNodeByPath('$.user.favorite', Rules.CurrentNode)}"
				}

			]
		}]
	}
}
```
