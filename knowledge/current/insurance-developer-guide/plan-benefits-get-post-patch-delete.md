---
title: "Plan Benefits (GET, POST, PATCH, DELETE)"
domain: insurance-developer-guide
topic: plan-benefits-get-post-patch-delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.297Z
estimatedTokens: 642
keywords: [Plan, Benefits, POST, PATCH, Insurance, Policy, Coverage, Networks]
---

# Plan Benefits (GET, POST, PATCH, DELETE)

> Get, create, update and delete Insurance Policy Coverage Networks and Insurance
        Policy Coverage Benefits of an Insurance Policy Coverage.

# Plan Benefits (GET, POST, PATCH, DELETE)

Get, create, update and delete Insurance Policy Coverage Networks and Insurance Policy Coverage Benefits of an Insurance Policy Coverage.

Resource

```

```

Available version

63.0

HTTP methods

GET, POST, PATCH, DELETE

Response body for GET

[PlanBenefits](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_plan_benefits.htm "Output representation details of the insurance policy benefits.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Descriptions | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Benefit Attributes | List of benefit attributes. | Optional | 63.0 |
| network | String | The tier type of the network. | Optional | 63.0 |
| networks | Networks | Insurance Policy Coverage Networks for creating plan benefits. | Required | 63.0 |
| productCompGgpId | String | ID of product component group. | Optional | 63.0 |
| productId | String | ID of the product. | Required | 63.0 |
| productName | String | Name of the product. | Optional | 63.0 |

Response body for POST

[PlanBenefitsUpsert](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_plan_benefit_output.htm "Output representation details of the create and update plan benefits request.")

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefits | Benefits Input [] | The benefits of the Insurance Plan Coverage. | Optional | 63.0 |
| networks | Networks Input [] | The list of networks. | Optional | 63.0 |

Response body for PATCH

[PlanBenefitsUpsert](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_plan_benefit_output.htm "Output representation details of the create and update plan benefits request.")

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitIds | String[] | ID of Insurance Policy Coverage Benefit. If benefitIds are provided, the service will only delete the respective Insurance Policy Coverage Benefit records. | Optional | 63.0 |
| networkIds | String[] | ID of the Insurance Policy Coverage Network. IfnetworkIds are provided, the service will only delete the respective Insurance Policy Coverage Network records and their associated Insurance Policy Coverage Benefit records. | Optional | 63.0 |

## Code Examples

```
/connect/insurance/brokerage/coverages/coverageId/benefits
```

```
{
    "networks": [
        {
            "network": "First Network Tier",
            "name": "Preferred Network"
        },
        {
            "network": "Second Network Tier",
            "name": "In Network"
        }
    ],
    "benefits": [
        {
            "productId": "01tSG0000011yBFxxY",
            "productCompGgpId": "0y7SG0000000ZiXxxU",
            "productName": "Chiropractic Care",
            "network": "First Network Tier",
            "attributes": [
                {
                    "attributeDefinitionId": "0tjSG0000001embxxA",
                    "name": "Copay",
                    "value": 311
                },
                {
                    "attributeDefinitionId": "0tjSG0000001YmMxxU",
                    "name": "Deductible",
                    "value": "100"
                }
            ]
        }
    ]
}
```

```
{
    "networks": [
        {
            "networkId": "1HXSG0000002xxxxAM",
            "name": "Preferred Network Updated"
        },
        {
            "networkId": "1HXSG0000002xxxxA2",
            "name": "In Network Updated"
        },
        {
            "network": "Third Network Tier",
            "name": "Out Network"
        }
    ],
    "benefits": [
        {
            "benefitId": "1HSSG0000005Ws7xxE",
            "productId": "01tSG0000011yBFxxY",
            "productCompGgpId": "0y7SG0000000ZiXxxU",
            "productName": "Chiropractic Care",
            "attributes": [
                {
                    "covBnftAttrId": "1HYSG00000002GPxxY",
                    "attributeDefinitionId": "0tjSG0000001embxxA",
                    "name": "Copay",
                    "value": 311
                },
                {
                    "covBnftAttrId": "1HYSG00000002GQxxY",
                    "attributeDefinitionId": "0tjSG0000001YmMxxU",
                    "name": "Notes",
                    "value": "Preferred network limitations apply."
                }
            ]
        }
    ]
}
```

## Related Topics

- PlanBenefits (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_plan_benefits.htm)
- Benefit
                                                  Attributes (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_plan_benefit_attribute_input.htm)
- Networks (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_update_plan_benefit_network.htm)
- PlanBenefitsUpsert (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_plan_benefit_output.htm)
- Benefits Input [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_plan_benefit_update_input.htm)
- Networks Input [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_update_plan_benefit_network.htm)
