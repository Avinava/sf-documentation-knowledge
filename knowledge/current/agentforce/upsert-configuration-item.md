---
title: "Upsert Configuration Item"
domain: agentforce
topic: upsert-configuration-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.915Z
estimatedTokens: 661
keywords: [Upsert, Configuration, Item, Submit, bulk, operation, items, asynchronous, job, getStatus, query, check, progress]
---

# Upsert Configuration Item

> Submit a bulk operation to create or update one or more
      configuration items. This is an asynchronous operation that returns a job ID, which you can
      use with the getStatus query to check the operation progress.

# Upsert Configuration Item

Submit a bulk operation to create or update one or more configuration items. This is an asynchronous operation that returns a job ID, which you can use with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress.

## Request

JSON example

This example shows a sample request to upsert configuration items in bulk.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | UpsertCIBulkInput | A container object that holds the payload array containing one or more configuration item objects to create or update. | Required | 66.0 |

## Response

JSON example

This example is a sample response from the upsertCI mutation.

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The unique identifier of the asynchronous job. Use this ID with the getStatus query to check the operation progress. | 66.0 |
| status | String | The initial status of the asynchronous job. | 66.0 |
| updatedAt | String | The date and time when the job was created, in YYYY-MM-DDTHH:MM:SSZ format. | 66.0 |
| details | String | A message indicating the job has been queued and is being processed. | 66.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=agentforce_it_service_dev_guide)

#### Note

-   After submitting the upsertCI mutation, use the returned job id with the [getStatus](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm#query_getStatus "Retrieve the status of a previously submitted asynchronous job. For example, upsertCI a bulk upsert operation. Use this query to check the progress and completion status of the asynchronous operations.") query to check the operation progress and completion status.
-   When using the upsertCI operation, you can request any available attribute to be included in the response. The attributes you can include:
    -   Standard Attributes: Many attributes are available out-of-the-box.
    -   Custom Attributes: You can create and include custom attributes using the sObject API.
-   Add any attribute using its Developer Name (for example, SD\_AsNa—Asset Name) to specify exactly which information you want to receive for your Configuration Items (CIs).

## Code Examples

```
mutation UpsertCI {
  upsertCI(
    input: {
      payload: [
        {
          cnfgItemType: "F5 Load Balancer"
          SD_AsNa: "LB-PROD-F5-01"
          SD_Ty: "Application Delivery Controller"
          SD_De: "Production load balancer for web tier"
          SD_St: "Active"
          SD_BuCr: "Critical"
          SD_Co: "Network Infrastructure"
          SD_HoNa: "lb-prod-f5-01.corp.local"
          SD_CiOw: "network.team@company.com"
          SD_CiLo: "Data Center 1 - DMZ"
          SD_Ma: "F5 Networks"
          SD_MoNu: "BIG-IP 4000s"
          SD_SeNu: "f5-4000s-2021-12345"
          SD_IpAd: "10.0.2.10"
          SD_ViIpAd: "10.0.100.10, 10.0.100.11"
          SD_LoBaPo: "443"
          SD_LoBaSt: "Available"
          SD_LoBaMe: "Round Robin"
          SD_DePo: "web-pool-01"
          SD_SsPo: "TLS-1.2"
          SD_SoVe: "16.1.2"
        }
      ]
    }
  ) {
    id
    status
    updatedAt
    details
    totalRecordCount
    successRecordCount
    failureRecordCount
  }
}
```

```
{
  "data": {
    "upsertCI": {
      "id": 108,
      "status": "Processing",
      "updatedAt": "2025-11-14T10:15:00.123456Z",
      "details": "Job queued - Upsert CI - Canonical API (1 items)"
    }
  }
}
```

## Related Topics

- getStatus (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/query_getStatus.htm)
