---
title: "Trigger Process Rules"
domain: rest-api
topic: trigger-process-rules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.536Z
keywords: [Trigger, Process, Rules, Syntax, Example]
---

# Trigger Process Rules

# Trigger Process Rules

Triggers all active workflow rules. All rules associated with the specified ID are evaluated, regardless of the evaluation criteria. All IDs must be for records on the same object. This resource is available in REST API version 30.0 and later.

## Syntax

URI

/services/data/vXX.X/process/rules/

Formats

JSON, XML

HTTP methods

POST

Authentication

Authorization: Bearer token

Request parameters

None required

Request body

The request body contains an array of context IDs:

| Name | Type | Description |
| --- | --- | --- |
| contextIds | ID[] | An array of IDs of the items that are being acted upon. |

## Example

See [Trigger Process Rules](atlas.en-us.api_rest.meta/api_rest/dome_process_rules_trigger.htm "Use the *** resource to trigger process rules. All rules associated with the specified ID will be evaluated, regardless of the evaluation criteria. All IDs must be for records on the same object.").