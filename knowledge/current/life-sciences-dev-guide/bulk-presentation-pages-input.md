---
title: "Bulk Presentation Pages Input"
domain: life-sciences-dev-guide
topic: bulk-presentation-pages-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:54.814Z
estimatedTokens: 597
keywords: [Bulk, Presentation, Pages]
---

> Input representation for a presentation page.

# Bulk Presentation Pages Input

Input representation for a presentation page.

Properties

| Property Name | Type | Description | Required | Available version |
| --- | --- | --- | --- | --- |
| activation​Date | Datetime | Date and time when the page becomes active. | Optional | 65.0 |
| content​DocumentId | String | ID of the content document for the page. You cannot provide this paramter when you pass the fileIdas only one of the two parameters are allowed. For the PRESENTATION_PDF content type, provide the file input (contentDocumentId or fileId) within the metadata only for the first page (pageNumber 1) in the pages list. | Required when content​Type is PRESENTATION_ZIP, PRESENTATION_PAGE, PRESENTATION_PDF. | 65.0 |
| custom​Fields | Object | Map of custom field names and their values for the page. | Optional | 65.0 |
| deactivation​Date | Datetime | Date and time when the page becomes inactive. | Optional | 65.0 |
| fileId | String | File ID for the page content. You can pass this parameter if you wish to process a new file that you will include in the request. You cannot provide this parameter when you pass the content​DocumentId as only one of the two are allowed. For the PRESENTATION_PDF content type, provide the file input (contentDocumentId or fileId) within the metadata only for the first page (pageNumber 1) in the pages list. | Required when content​Type is PRESENTATION_ZIP. | 65.0 |
| id | String | ID of the presentation page. This is either the source system ID or the Salesforce ID. | Required | 65.0 |
| isAdditional​Content | Boolean | Indicates whether the page contains additional content (true) or not (false). The default value is false. | Optional | 65.0 |
| mandatory | Boolean | Indicates if the page is mandatory for the presentation (true) or not (false). The default value is false. | Optional | 65.0 |
| name | String | Name of the presentation page. | Required only if the content​Type is PRESENTATION_PAGEor PRESENTATION_ZIP | 65.0 |
| page​Number | Integer | Page number for the presentation page. This value must be unique and within the range of 1 to 200. | Required only when contentType is PRESENTATION_PDF. This field is not required when the contentType is PRESENTATION_ZIPor PRESENTATION_PAGE. | 65.0 |
| products | List<Products Input> | List of products and their associated guidance IDs for the page. | Optional | 65.0 |

## Related Topics

- Products Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_page_products_array_input.htm)
