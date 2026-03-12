---
title: "AutoResponseRule"
domain: tooling-api
topic: autoresponserule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.747Z
estimatedTokens: 208
keywords: [AutoResponseRule, Specifies, whether, autoresponse, rule, active, true, Supported, SOAP, API, Calls, REST, HTTP, Fields, Usage]
---

# AutoResponseRule

> Specifies whether the autoresponse rule is active (true).

# AutoResponseRule

Specifies whether the autoresponse rule is active (true).

Available in API version 35.0 and later.

## Supported SOAP API Calls

query()

## Supported REST API HTTP Methods

Query, GET

## Fields

| Field Name | Details |
| --- | --- |
| Active | TypebooleanPropertiesDefaulted on create Filter, Group, SortDescriptionIf true, the autoresponse rule is active. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionRepresents the object associated with this autoresponse rule. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the name of the autoresponse rule. |

## Usage

Use this object to query whether an autoresponse rule is active.

```

```

More information about the autoresponse rule is available by querying the metadata type AutoResponseRules.

## Code Examples

```
SELECT Name, Active
FROM AutoResponseRule
```
