---
title: "Download a CRM Analytics Dashboard as a PDF"
domain: api-analytics
topic: download-a-crm-analytics-dashboard-as-a-pdf
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.441Z
estimatedTokens: 316
keywords: [Download, CRM, Analytics, Dashboard, PDF]
---

# Download a CRM Analytics Dashboard as a PDF

> Download a CRM Analytics dashboard as a PDF.

# Download a CRM Analytics Dashboard as a PDF

Download a CRM Analytics dashboard as a PDF.

Use a request on the [Analytics Download](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_download_reference_resource.htm#analytics_api_download_reference_resource "Use the Analytics Download API to download images and PDFs of Analytics assets, including CRM Analytics dashboards and lenses and Lightning Experience dashboards and reports. The Analytics Download API is available in API version 55.0 and later.") resource to download a CRM Analytics dashboard as a .pdf binary file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

Downloads are requested by entering the URI in a browser address bar.

Example Usage

```

```

| Parameter | Description |
| --- | --- |
| assetType | Required. Specifies what type of Analytics asset to download. Valid values are:dashboardlenslightning-dashboardreport |
| assetId | Required. Specifies the Analytics asset id to download. |
| downloadType | Required. Specifies what file type to download the Analytics asset as. Valid values are:pngpdf |

Example Response Body

The response body is binary data of the .pdf representation of the CRM Analytics dashboard.

## Code Examples

```
<domain>/analytics/download/dashboard/0FKB0000000xxxxxxx.pdf
```

## Related Topics

- Analytics Download (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_download_reference_resource.htm)
