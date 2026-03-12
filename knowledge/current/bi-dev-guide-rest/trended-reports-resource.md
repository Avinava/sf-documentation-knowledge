---
title: "Trended Reports Resource"
domain: bi-dev-guide-rest
topic: trended-reports-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.878Z
estimatedTokens: 188
keywords: [Trended, Reports, Resource, deletes, updates, trending, report]
---

# Trended Reports Resource

> Returns, deletes, or updates a trending report.

# Trended Reports Resource

Returns, deletes, or updates a trending report.

Resource URL

```

```

Formats

JSON

Available Version

37.0

HTTP Methods

DELETE GET PATCH

Request parameters for GET, PATCH, and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| trended​Report​Id | Id | The ID of the trended report. | Required | 37.0 |

Response body for GET and PATCH

[Trended Report](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_trended_report.htm "An Analytics trended report.")

Request body for PATCH

[Trended Report Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_trended_report_input.htm "An Analytics trended report.")

## Code Examples

```
/wave/trendedreports/<trendedReportId>
```

## Related Topics

- Trended Report (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_trended_report.htm)
- Trended Report Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_trended_report_input.htm)
