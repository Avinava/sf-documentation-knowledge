---
title: "Download a CRM Analytics Lens as a PNG"
domain: api-analytics
topic: download-a-crm-analytics-lens-as-a-png
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.444Z
estimatedTokens: 312
keywords: [Download, CRM, Analytics, Lens, PNG, image]
---

# Download a CRM Analytics Lens as a PNG

> Download a CRM Analytics lens as an image.

# Download a CRM Analytics Lens as a PNG

Download a CRM Analytics lens as an image.

Use a request on the [Analytics Download](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_download_reference_resource.htm#analytics_api_download_reference_resource "Use the Analytics Download API to download images and PDFs of Analytics assets, including CRM Analytics dashboards and lenses and Lightning Experience dashboards and reports. The Analytics Download API is available in API version 55.0 and later.") resource to download a CRM Analytics lens as a .png binary file.

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

The response body is binary data of the .png representation of the CRM Analytics lens.

## Code Examples

```
<domain>/analytics/download/lens/0FKB0000000xxxxxxx.png
```

## Related Topics

- Analytics Download (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_download_reference_resource.htm)
