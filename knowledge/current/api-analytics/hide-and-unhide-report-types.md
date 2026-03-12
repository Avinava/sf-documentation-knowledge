---
title: "Hide and Unhide Report Types"
domain: api-analytics
topic: hide-and-unhide-report-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.655Z
estimatedTokens: 161
keywords: [Hide, Unhide, Report, hidden, state, PATCH]
---

# Hide and Unhide Report Types

> Update hidden state of report types (PATCH).

# Hide and Unhide Report Types

Update hidden state of report types (PATCH).

## Syntax

URI

/services/data/<latest API version>/analytics/reports/show-hide-report\_type

Formats

JSON

HTTP Methods

| Method | Description |
| --- | --- |
| PATCH | Sets the hidden parameter to true or false for a specific report type. |

Parameters

| Parameter | Description |
| --- | --- |
| templateId | Required for PATCH calls. Specifies report type API name. |
| hidden | Required for PATCH calls. Specifies if report type is hidden (true) or not (false). |

## Example

Sample Request Body

Hide a report type

```

```

Show a report type

```

```

## Code Examples

```
{
   "templateId" : <Report Type API Name>,
   "hidden" : "true"
}
```

```
{
   "templateId" : <Report Type API Name>,
   "hidden" : "false"
}
```
