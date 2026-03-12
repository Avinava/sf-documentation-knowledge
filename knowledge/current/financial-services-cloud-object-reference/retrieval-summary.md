---
title: "Retrieval Summary"
domain: financial-services-cloud-object-reference
topic: retrieval-summary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.488Z
estimatedTokens: 215
keywords: [Retrieval, Summary, data, definition, root, record, defTinition]
---

# Retrieval Summary

> Get the data of a retrieval summary definition by using the root record ID and the
    retrieval summary defTinition ID.

# Retrieval Summary

Get the data of a retrieval summary definition by using the root record ID and the retrieval summary defTinition ID.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fetchRealTime | Boolean | Indicates whether the household financial data has to be fetched in real time for financial accounts, financial holdings, assets and liabilities, and members of a household. | Optional | 63.0 |

Response body for GET

[Retrieval Summary Result](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_retrieval_summary_result.htm "Output representation of a retrieval summary definition call.")

## Code Examples

```
/connect/retrieval-summary/runtime/retrievalSummaryDefinitionApiName/rootRecordId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/retrieval-summary/runtime/HouseholdAPIForWealthManagement/001Ws000003guk2IAA
```

## Related Topics

- Retrieval
              Summary Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_retrieval_summary_result.htm)
