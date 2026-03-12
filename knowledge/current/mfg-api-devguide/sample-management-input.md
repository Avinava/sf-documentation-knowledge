---
title: "Sample Management Input"
domain: mfg-api-devguide
topic: sample-management-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.952Z
estimatedTokens: 148
keywords: [Sample, Management, Input, creating, updating, versioning, Product, Requirement, Specification]
---

# Sample Management Input

> Input for creating, updating, or versioning a Product Requirement
    Specification.

# Sample Management Input

Input for creating, updating, or versioning a Product Requirement Specification.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operation | String | The action to perform. | Required | 66.0 |
| productRequirementSpecification | Product Requirement Specification Input[] | The Product Requirement Specification data to process. | Required | 66.0 |
| requestUniqueId | String | A unique ID for request tracing. This ID is returned in the response. | Optional | 66.0 |

## Code Examples

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
