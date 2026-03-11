---
title: "Index Configuration Collection (GET, PUT)"
domain: revenue-cloud
topic: index-configuration-collection-get-put
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.312Z
keywords: [Index, Configuration, Collection, GET, PUT]
---

# Index Configuration Collection (GET, PUT)

# Index Configuration Collection (GET, PUT)

Retrieve the saved index configurations. Additionally, you can persist the index configuration.

Resource

```

```

Resource example

```

```

```

```

Available version

62.0

HTTP methods

GET, PUT

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 62.0 |
| field​Types | String[] | Filters and returns only the persisted index configurations, based on the index configuration type specified in the query parameters.The supported types of filters are:STANDARDCUSTOMProductDynamicAttributeProductAttributeDefinitionStandardProductAttributeDefinitionCustom | Optional | 62.0 |
| include​Metadata | Boolean | Indicates whether to include metadata (true) or not (false). | Optional | 62.0 |

Response body for GET

[Index Configuration Collection](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_index_configuration_collection_output.htm "Output representation of the collection of index configuration details.")

Request body for PUT

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 62.0 |
| index​Configurations | Index Configuration Input[] | List of index configurations. | Required | 62.0 |

Response body for PUT

[Index Configurations Update](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_index_configurations_update_output.htm "Output representation of the updated index configuration.")