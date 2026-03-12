---
title: "Insurance Quote Details (GET, PATCH)"
domain: insurance-developer-guide
topic: insurance-quote-details-get-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.332Z
estimatedTokens: 900
keywords: [Insurance, Quote, PATCH]
---

# Insurance Quote Details (GET, PATCH)

> Get or update quote details by the specified quote ID.

# Insurance Quote Details (GET, PATCH)

Get or update quote details by the specified quote ID.

You can get the desired quote details by using the filter and non-filter request parameters. Use the term filter to differentiate between the filter and non-filter parameters. See, Resource example.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=insurance_developer_guide)

#### Note

A filter parameter is used to show the results that match a certain criteria, for example ProductSpec=InsuredItem shows the quote details for the insured item only. A non-filter parameter controls the behavior or format of the response, for example returnChildrenNodes=true shows the child nodes of the SalesTransactionItem. In the default context definition, a SalesTransactionItem in context represents a QuoteLineItem.

These are the operators that are supported to filter the results.

-   eq—Equal
-   ne—Not equal
-   lt—Less than
-   lte—Less than or equal to
-   gt—Greater than
-   gte—Greater than or equal to

Resource

```

```

```

```

The field1 parameter refers to the ProductSpec filter parameter, and the field2 parameter refers to the valid context attribute of SalesTransactionItem in the target context definition. You can add multiple filter and non-filter parameters to get the desired result.

Resource example

```

```

```

```

Available version

63.0

HTTP methods

GET, PATCH

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| connectDynamicParameters | Map<String,String> | Specify these filter and non-filter request parameters to get the desired results.contextId—Non-filter parameter to get the quote details for the specified context ID.ProductSpec—Filter parameter to get the quote details for the specified product spec. Valid values are:CoverageInsuredItemInsuredPartyProductreturnChildrenNodes—Non-filter parameter that retrieves all the SalesTransactionItems in the hierarchy, starting from each matching SalesTransactionItem and includes all child nodes.Use the returnChildrenNodes parameter with filter parameters.includeClause—Non-filter parameter that includes the associated product clauses of the SalesTransactionItems in the response body.Use the includeClause parameter with filter parameters. | Optional | 63.0 |

Response body for GET

[Get Quote](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_quote_output.htm "Output representation of the details of the get quote details.")

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedNodes | Insurance Quote Input Node[] | List of added nodes for insurance quote. | Optional | 63.0 |
| additionalFields | Map<String, Object> | Insurance quote additional fields. | Optional | 63.0 |
| configOptions | Insurance Quote Config Options[] | Configurator options for insurance quote. | Optional | 63.0 |
| deletedNodes | Insurance Quote Input Node[] | List of deleted nodes from insurance quote. | Optional | 63.0 |
| pricingProcedure | String | Pricing procedure for insurance quote. | Optional | 63.0 |
| updatedNodes | Insurance Quote Input Node[] | List of updated nodes on insurance quote. | Optional | 63.0 |

Response body for PATCH

[Insurance Quote](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_quote_output.htm "Output representation of the details of the insurance quote.")

## Code Examples

```
/connect/insurance/quotes/quoteId
```

```
/connect/insurance/quotes/quoteId?contextId=[value]filter[field1][operator1]=[value1]&filter[field2][operator2]=[value2]&key1=value1&includeClause=true
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/quotes/0Q0DR0000000xFw0AI
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/quotes/0Q0DR0000000xFw0AI?contextId=0000000i18tq18g002917545349255616564529f415d45c4b1b1ea08747a2195&filter[ProductSpec][eq]=InsuredItem&filter[DYN__Auto_Value][gt]=60000&returnChildrenNodes=true&includeClause=true
```

```
{
  "configOptions": {
    "executePricing": false,
    "validateProductCatalog": false,
    "executeConfigurationRules": false,
    "executeQualificationRules": false
  },
  "additionalFields": {
    "Status": "Draft",
    "ValidFromDate": "2025-10-29T00:00:00.000Z"
  },
  "addedNodes": [
    {
      "productCode": "autoCollision",
      "instanceKeys": [
        "autoBundle",
        "autoCollision"
      ],
      "additionalFields": {
        "StartDate": "2025-09-29T00:00:00.000Z",
        "EndDate": "2025-10-29T00:00:00.000Z",
        "Discount": 40
      }
    }
  ],
  "updatedNodes": [
    {
      "instanceKeys": [
        "autoBundle"
      ],
      "productCode": "autoBundle",
      "attributes": {
        "avMake": "AudiQ14"
      },
      "additionalFields": {
        "StartDate": "2025-09-29T00:00:00.000Z",
        "EndDate": "2025-10-29T00:00:00.000Z",
        "Discount": 50
      }
    }
  ]
}
```

## Related Topics

- Get Quote (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_get_quote_output.htm)
- Insurance Quote Input Node (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_quote_input_node.htm)
- Insurance Quote Config Options (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_ins_quote_config_options.htm)
- Insurance Quote (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_quote_output.htm)
