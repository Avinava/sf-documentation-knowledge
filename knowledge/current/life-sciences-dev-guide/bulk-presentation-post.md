---
title: "Bulk Presentation (POST)"
domain: life-sciences-dev-guide
topic: bulk-presentation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.497Z
estimatedTokens: 435
keywords: [Bulk, Presentation, POST, associated, content, upload, files, PDF, ZIP, metadata, Health, Cloud, Starter, Life, Sciences]
---

# Bulk Presentation (POST)

> Create a presentation and its associated content in bulk. You can upload presentation
    files as PDF or ZIP and associated metadata. The Health Cloud Starter and
        Life Sciences Commercial Admin Permission Sets are required for accessing
      this API. To know more, see Email Template and Intelligent Content.

# Bulk Presentation (POST)

Create a presentation and its associated content in bulk. You can upload presentation files as PDF or ZIP and associated metadata. The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are required for accessing this API. To know more, see [Email Template](https://help.salesforce.com/s/articleView?id=ind.lsc_email_get_ready.htm&language=en_US) and [Intelligent Content](https://help.salesforce.com/s/articleView?id=ind.lsc_intelligent_content_get_ready.htm&language=en_US).

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

For all Bulk APIs, provide the file input either as contentDocumentIdorfileId. Do not include both parameters.

Request body for POST

```

```

Properties

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| content​Type | String | The type of content. Valid values are PRESENTATION_PDF, PRESENTATION_ZIP, or PRESENTATION_PAGE. | Required |
| present​ation | Object | JSON payload containing presentation metadata. | Required only if the content​Type is PRESENTATION_PDFor PRESENTATION_ZIP |
| pages | List<Object> | List of presentation pages, each containing its own metadata and file association. Only one page can be provided in the pages input for PRESENTATION_PAGEcontent type. | Required |

Response body for POST

[Create Bulk Presentation Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_management_output.htm "Represents the information about the job status and any associated messages returned for Content Management APIs.")

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
  "presentation": {
// Required for PRESENTATION_PDF or PRESENTATION_ZIP. Not needed for PRESENTATION_PAGE.
    "name": "demo-presentation-name", 
    "id": "demo-presentation-external-id", 
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
  
  "pages": [
    {
      // Required only for PRESENTATION_PDF. Must be 1 for the file page, and incremented for subsequent PDF pages. Not needed for ZIP/PAGE.
      "pageNumber": 1, 
      "name": "demo-presentation-page1", 
      "mandatory": false, 
      "activationDate": "2019-06-03T15:00:00.000Z",
      "deactivationDate": "2019-06-03T15:00:00.000Z",
      
      /* Provide EITHER contentDocumentId OR fileId, but not both.
         - For PDF: File input is ONLY provided on the page where pageNumber is 1.
         - For ZIP/PAGE: File input is required for ALL pages.
      */
      "contentDocumentId": "069xx0000004gbkAAA", 
      //"fileId": "file1-key",
      
      "id": "demo-page-id-1", // Required for ZIP/PAGE. Not required for PRESENTATION_PDF. 
      "isAdditionalContent": false, // Required for ZIP/PAGE. Not required for PRESENTATION_PDF. 
      
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
      //"pageNumber": 2, /* Must be included for a second page if contentType is PRESENTATION_PDF. */
      "name": "demo-presentation-page2",
      "mandatory": false,
      "activationDate": "2019-06-03T15:00:00.000Z",
      "deactivationDate": "2019-06-03T15:00:00.000Z",
      
      // File input is required here for ZIP/PAGE. Must be omitted for PDF. 
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

- Object (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_bulk_presentation.htm)
- List<Object> (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_bulk_presentation_pages_input.htm)
- Create Bulk
              Presentation Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_management_output.htm)
