---
title: "Presentation Page Product (POST, PATCH)"
domain: life-sciences-dev-guide
topic: presentation-page-product-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.561Z
estimatedTokens: 388
keywords: [Presentation, Product, POST, PATCH, guidance, associations, Health, Cloud, Starter, Life, Sciences, Commercial, Admin, Permission, accessing]
---

# Presentation Page Product (POST, PATCH)

> Create or update (delete) product and guidance associations for a presentation page.
            The Health Cloud Starter and Life Sciences Commercial
                Admin Permission Sets are required for accessing this API. To know more,
            see Email Template and Intelligent Content.

# Presentation Page Product (POST, PATCH)

Create or update (delete) product and guidance associations for a presentation page. The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are required for accessing this API. To know more, see [Email Template](https://help.salesforce.com/s/articleView?id=ind.lsc_email_get_ready.htm&language=en_US) and [Intelligent Content](https://help.salesforce.com/s/articleView?id=ind.lsc_intelligent_content_get_ready.htm&language=en_US).

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST, PATCH

Request body for POST or PATCH

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

The PATCH request will delete the records.

```

```

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| id | String | ID of the presentation page. | Required, if an existing page record needs to be updated for PRESENTATION_ZIP and PRESENTATION_PAGE content types. |
| pageNumber | Integer | Page number for the presentation page. This value must be unique and within the range of 1 to 200. | Required for PRESENTATION_PDF content type. |
| products | List<Object> | Array of objects containing the product ID and guidance ID mapping. | Required |

Response body for POST

[Presentation Page Product Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_presentation_page_products_output.htm "Represents the output for Presentation Page Products API.")

## Code Examples

```
/connect/life-sciences/commercial/page/products
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/page/products
```

```
{
      "id": "string",
      "products": [
        {
          "productId": "1Kexx000000409xxAE",
          "guidanceIds": [
            "a0Fc0000007I5l6EAC", "Guidance_2_ext_id"
          ]
        }
      ]
    }
```

## Related Topics

- List<Object> (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_page_products_array_input.htm)
- Presentation Page Product Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_presentation_page_products_output.htm)
