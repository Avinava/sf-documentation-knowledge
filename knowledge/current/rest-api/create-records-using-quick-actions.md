---
title: "Create Records Using Quick Actions"
domain: rest-api
topic: create-records-using-quick-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.563Z
keywords: [Create, Records, Quick, Actions, Syntax, Example]
---

# Create Records Using Quick Actions

# Create Records Using Quick Actions

Creates a record via a quick action. This resource is available in REST API version 28.0 and later.

Add all required fields to an object before you create a quick action for that object. If you add a required field after creating a quick action, the field doesn’t appear in the quick action’s describe results. Then, when the quick action runs, the field isn’t available and an error occurs for the missing field. If you don’t want the required field to appear in the quick action’s layout, set a default value for the field.

When working with actions, also refer to [sObject Quick Actions](atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm "Access an object’s actions and the action details. This resource is available in REST API version 28.0 and later.").

## Syntax

URI

/services/data/vXX.X/quickActions/

Formats

JSON, XML

HTTP Method

POST

Authentication

Authorization: Bearer token

Parameters

None required

## Example

Example Request

```

```

Example Request Body

```

```