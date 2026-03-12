---
title: "Bulk Presentation (PATCH)"
domain: life-sciences-dev-guide
topic: bulk-presentation-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.503Z
estimatedTokens: 378
keywords: [Bulk, Presentation, PATCH, associated, content, upload, files, PDF, ZIP, associating, metadata, Health, Cloud, Starter, Life]
---

# Bulk Presentation (PATCH)

> Update a presentation and its associated content in bulk. You can upload presentation
    files as PDF or ZIP and associating metadata. The Health Cloud Starter
      and Life Sciences Commercial Admin Permission Sets are required for
      accessing this API. To know more, see Email Template and Intelligent Content.

# Bulk Presentation (PATCH)

Update a presentation and its associated content in bulk. You can upload presentation files as PDF or ZIP and associating metadata. The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are required for accessing this API. To know more, see [Email Template](https://help.salesforce.com/s/articleView?id=ind.lsc_email_get_ready.htm&language=en_US) and [Intelligent Content](https://help.salesforce.com/s/articleView?id=ind.lsc_intelligent_content_get_ready.htm&language=en_US).

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

PATCH

Request body for PATCH

```

```

Properties

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| content​Type | String | The type of content. Possible values are:PRESENTATION_PDFPRESENTATION_ZIPPRESENTATION_PAGE. | Required |
| present​ation | Object | JSON payload containing presentation metadata. | Required only if the content​Type is PRESENTATION_PDFor PRESENTATION_ZIP |
| pages | List<Object> | List of presentation pages, each containing its own metadata and file association. Only one page can be provided in the pages input for PRESENTATION_PAGEcontent type. | Optional |

Response body for PATCH

[Update Bulk Presentation Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_management_output.htm "Represents the information about the job status and any associated messages returned for Content Management APIs.")

## Code Examples

```
/connect/life-sciences/commercial/bulk-presentation
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/bulk-presentation
```

```apex
{
  "contentType": "PRESENTATION_ZIP", // Valid values: PRESENTATION_PDF, PRESENTATION_ZIP, or PRESENTATION_PAGE. 
  
  // Required for PDF or ZIP content types. Not required for PRESENTATION_PAGE. 
  "presentation": {
    "name": "demo-presentation-name", 
    "id": "demo-presentation-id", 
    "enableDoubleTapZoom": true, 
    "enablePinchZoom": false, 
    "playerGesture": "Swipeup", 
    "activationDate": "2019-06-03T15:00:00.000Z", 
    "deactivationDate": "2019-06-03T15:00:00.000Z", 
    
    // These fields are only valid for PRESENTATION_ZIP. 
    "topics": [
      "topic_id_1",
      "topic_id_2"
    ],
    "sendByEmail": false,
    "publicContentName": "public_content_name",
    "publicContentUrl": "public_content_url",
    
    "customFields": [
      {
        "fieldName": "Custom_Text_Field__c",
        "fieldValue": "custom_field_value_1_string"
      }
    ]
  },
  
  // Only one page can be provided for PRESENTATION_PAGE. 
  "pages": [
    {
      // Required only for PRESENTATION_PDF. Must be 1 for the file page, and incremented for subsequent PDF pages. Not required for ZIP/PAGE. 
      "pageNumber": 1, 
      "name": "demo-presentation-page1", 
      "mandatory": false, 
      "activationDate": "2019-06-03T15:00:00.000Z",
      "deactivationDate": "2019-06-03T15:00:00.000Z",
      
      /* File input (contentDocumentId or fileId) is ONLY required if you are UPDATING the content of the presentation.
         - For PDF: File input is ONLY provided on the page where pageNumber is 1. Omit fileId/contentDocumentId if only updating metadata.
         - For ZIP/PAGE: File input is required for ALL pages if their content is changing.
      */
      "contentDocumentId": "069xx0000004gbkAAA", 
      //"fileId": "file1-key", /* Use contentDocumentId OR fileId, but not both. */
      
      "id": "demo-page-id-1", // Required for ZIP/PAGE. Omit for PRESENTATION_PDF. 
      "isAdditionalContent": false, // Required for ZIP/PAGE. Omit for PRESENTATION_PDF. 
      
      "customFields": [
        {
          "fieldName": "custom_field_name_1",
          "fieldValue": 45
        }
      ],
      "products": [
        {
          "productId": "1Kexx0000004C92CAE",
          "guidanceIds": [
            "1Kgxx0000004C92CAE"
          ]
        }
      ]
    },
    {
      /* Second page example. */
      //"pageNumber": 2, /* Must be included for a second page if contentType is PRESENTATION_PDF. */
      "name": "demo-presentation-page2",
      "mandatory": false,
      "activationDate": "2019-06-03T15:00:00.000Z",
      "deactivationDate": "2019-06-03T15:00:00.000Z",
      
      // File input is required here for ZIP/PAGE if content is being updated. Not required for PDF. 
      "contentDocumentId": "069xx0000004gbcAAB", 
      
      "id": "demo-page-id-2", // Required for ZIP/PAGE. 
      "isAdditionalContent": false, // Required for ZIP/PAGE. 
      
      "customFields": [
        {
          "fieldName": "custom_field_name_1",
          "fieldValue": "custom_field_value_1"
        }
      ],
      "products": [
        {
          "productId": "1Kexx0000004C92CAE",
          "guidanceIds": [
            "1Kgxx0000004C92CAE"
          ]
        }
      ]
    }
  ]
}
```

## Related Topics

- Object (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_bulk_presentation_input_patch.htm)
- List<Object> (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_bulk_presentation_pages_input_patch.htm)
- Update Bulk
              Presentation Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_management_output.htm)
