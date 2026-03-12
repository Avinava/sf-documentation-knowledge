---
title: "Sample Management (POST)"
domain: mfg-api-devguide
topic: sample-management-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.970Z
estimatedTokens: 235
keywords: [Sample, Management, POST, Creates, updates, versions, Product, Requirement, Specification, records]
---

# Sample Management (POST)

> Creates, updates, or versions Product Requirement Specification records.

# Sample Management (POST)

Creates, updates, or versions Product Requirement Specification records.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operation | String | The action to perform. | Required | 66.0 |
| productRequirementSpecification | Product Requirement Specification Input[] | The Product Requirement Specification data to process. | Required | 66.0 |
| requestUniqueId | String | A unique ID for request tracing. This ID is returned in the response. | Optional | 66.0 |

Response body for POST

[Sample Management Output](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_sample_management_output.htm "Output representation of the response for a Product Requirement Specification operation.")

## Code Examples

```
/connect/manufacturing/sample-management/product-specifications
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/manufacturing/sample-management/product-specifications
```

```
{
  "requestUniqueId": "insert_op_req_1",
  "operation": "Insert",
  "productRequirementSpecification": {
    "properties": [
      {
        "field": "Name",
        "value": "Project Everest Core Requirements"
      },
      {
        "field": "AccountId",
        "value": "001xx000003GaGxAAK"
      },
      {
        "field": "Status",
        "value": "Draft"
      },
      {
        "field": "Alias__c",
        "value": "Requirements1136"
      }
    ],
    "productRequirementSpecificationVersions": [
      {
        "properties": [
          {
            "field": "Name",
            "value": "Functional1136"
          },
          {
            "field": "Purpose",
            "value": "To define the minimum viable product (MVP) features for Project Everest."
          },
          {
            "field": "Version",
            "value": "2"
          },
          {
            "field": "Scope",
            "value": "To define the minimum viable product (MVP) features for Project Everest."
          }
        ],
        "productRequirementSpecificationItems": [
          {
            "properties": [
              {
                "field": "Name",
                "value": "Functional1136"
              },
              {
                "field": "Statement",
                "value": "The system shall display a real-time summary of key performance indicators (KPIs) on the main dashboard."
              },
              {
                "field": "AcceptanceCriteria",
                "value": "The system shall display a real-time summary of key performance indicators (KPIs) on the main dashboard."
              },
              {
                "field": "Category",
                "value": "Functional"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Related Topics

- Product Requirement Specification Input (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_requests_product_requirement_specification_input.htm)
- Sample Management Output (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_sample_management_output.htm)
