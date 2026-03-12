---
title: "Filter
    Operator List"
domain: api-analytics
topic: filter-operator-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.466Z
estimatedTokens: 199
keywords: [Filter, Operator, operators, Reponse]
---

# Filter
    Operator List

> Return a list of filter operators.

# Filter Operator List

Return a list of filter operators.

## Syntax

URI

/services/data/vXX.X/analytics/filteroperators

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Returns a list of filter operators. |

Parameters

| Parameter | Description |
| --- | --- |
| forDashboards | Optional. When forDashboards equals true, returns filter operators for dashboard filters. Otherwise, the GET response always returns filter operators for report filters. |

## GET Response Body

Returns an array of field data types. Each object contains the following fields:

| Property | Type | Description |
| --- | --- | --- |
| label | String | The end user-facing name of the operator. |
| name | String | The API name of the operator. |

## Example GET Reponse Body

```

```

## Code Examples

```
{
  "date" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  } ],
  "string" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  }, {
    "label" : "contains",
    "name" : "contains"
  }, {
    "label" : "does not contain",
    "name" : "notContain"
  }, {
    "label" : "starts with",
    "name" : "startsWith"
  } ],
  "double" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  } ],
  "picklist" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  }, {
    "label" : "contains",
    "name" : "contains"
  }, {
    "label" : "does not contain",
    "name" : "notContain"
  }, {
    "label" : "starts with",
    "name" : "startsWith"
  } ],
  "textarea" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  }, {
    "label" : "contains",
    "name" : "contains"
  }, {
    "label" : "does not contain",
    "name" : "notContain"
  }, {
    "label" : "starts with",
    "name" : "startsWith"
  } ],
  "percent" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  } ],
  "url" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  }, {
    "label" : "contains",
    "name" : "contains"
  }, {
    "label" : "does not contain",
    "name" : "notContain"
  }, {
    "label" : "starts with",
    "name" : "startsWith"
  } ],
  "int" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  } ],
  "reference" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  } ],
  "datetime" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  } ],
  "boolean" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  } ],
  "phone" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  }, {
    "label" : "contains",
    "name" : "contains"
  }, {
    "label" : "does not contain",
    "name" : "notContain"
  }, {
    "label" : "starts with",
    "name" : "startsWith"
  } ],
  "currency" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  } ],
  "id" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "starts with",
    "name" : "startsWith"
  } ],
  "email" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "less than",
    "name" : "lessThan"
  }, {
    "label" : "greater than",
    "name" : "greaterThan"
  }, {
    "label" : "less or equal",
    "name" : "lessOrEqual"
  }, {
    "label" : "greater or equal",
    "name" : "greaterOrEqual"
  }, {
    "label" : "contains",
    "name" : "contains"
  }, {
    "label" : "does not contain",
    "name" : "notContain"
  }, {
    "label" : "starts with",
    "name" : "startsWith"
  } ],
  "multipicklist" : [ {
    "label" : "equals",
    "name" : "equals"
  }, {
    "label" : "not equal to",
    "name" : "notEqual"
  }, {
    "label" : "includes",
    "name" : "includes"
  }, {
    "label" : "excludes",
    "name" : "excludes"
  } ]
}
```
