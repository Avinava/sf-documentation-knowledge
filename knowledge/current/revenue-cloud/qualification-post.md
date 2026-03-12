---
title: "Qualification (POST)"
domain: revenue-cloud
topic: qualification-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.505Z
estimatedTokens: 488
keywords: [Qualification, POST, Run, procedure, product, IDs, API, composite, Discovery]
---

# Qualification (POST)

> Run the qualification procedure on a list of product IDs. This API
      is a composite API for Product Discovery.

# Qualification (POST)

Run the qualification procedure on a list of product IDs. This API is a composite API for Product Discovery.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​ContextData | Context Data Input[] | Additional nodes that are added to the custom or default context definition. The maximum number of supported nodes is 10. | Optional | 60.0 |
| catalog​Id | String | ID of the catalog. | Optional | 60.0 |
| category​Id | String | ID of the category. | Optional | 60.0 |
| context​Definition | String | API name of the custom context definition that’s sent for context creation. If this property isn’t specified, the default context definition is used. | Optional | 60.0 |
| context​Mapping | String | Default context mapping of the context definition. If a context mapping is specified, then the API checks whether the mapping belongs to the specified context definition to process the details for hydration. | Optional | 60.0 |
| correlation​Id | String | Unique identifier of the request. | Optional | 60.0 |
| product​Ids | String[] | List of product IDs for qualification check. | Required | 60.0 |
| qualification​Procedure | String | API name of the custom qualification procedure that’s sent for processing. If this property isn’t specified, the default qualification procedure is executed. | Optional | 60.0 |
| user​Context | User Context Input | User context details. For example, account ID or contact ID. | Optional | 60.0 |

Response body for POST

[CPQ Base List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_list_output.htm "Output representation of the list of catalogs, categories, or products based on the request.")

## Code Examples

```
/connect/cpq/qualification
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/qualification
```

```
{
  "productIds": [
    "01txx0000006i7PAAQ",
    "01txx0000006i7QAAQ",
    "01txx0000006i7IAAQ"
  ],
  "userContext": {
    "accountId": "001xx000003GZHgAAO"
  }
}
```

## Related Topics

- Context Data
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_context_data_input.htm)
- User Context
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_user_context_input.htm)
- CPQ Base List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_list_output.htm)
