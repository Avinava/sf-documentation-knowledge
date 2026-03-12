---
title: "Analytics Download"
domain: api-analytics
topic: analytics-download
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.457Z
estimatedTokens: 400
keywords: [Analytics, Download, png, image, CRM, dashboard, lens, Lightning, Experience, report, pdf, file, downloads, via, browser, API, images, PDFs, assets, including]
---

# Analytics Download

> Download a .png image of a CRM Analytics dashboard or lens, or
  Lightning Experience dashboard or report. Download a .pdf file of a CRM
  Analytics dashboard or lens. Request downloads via browser calls.

# Analytics Download

Download a .png image of a CRM Analytics dashboard or lens, or Lightning Experience dashboard or report. Download a .pdf file of a CRM Analytics dashboard or lens. Request downloads via browser calls.

## Syntax

URI

domain/analytics/download/assetType/assetId.downloadType

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

To request a download, enter the URI in a browser address bar.

We don't support the use of this API from Apex.

Formats

.png or .pdf

Parameters

| Parameter | Description |
| --- | --- |
| assetType | Required. Specifies what type of Analytics asset to download. Valid values are:dashboardlenslightning-dashboardreport |
| assetId | Required. Specifies the Analytics asset id to download. |
| downloadType | Required. Specifies what file type to download the Analytics asset as. Valid values are:pngpdf |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

For Lightning Experience reports, the request works only with png and only if the report has a chart. If you use pdf or if the report doesn’t have a chart, the request returns an error.

## Response Body

The response body is binary data of the .png or .pdf representation of the Analytics asset.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

For limits on columns and pages in .pdf files, see [Analytics Download Limits](https://help.salesforce.com/apex/HTViewHelpDoc?id=bi_limits.htm&language=en_US#AnalyticsDownloadLimits).

## Related Topics

- Analytics Download (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_download_reference_download.htm)
