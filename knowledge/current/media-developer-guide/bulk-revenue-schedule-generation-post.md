---
title: "Bulk Revenue Schedule Generation (POST)"
domain: media-developer-guide
topic: bulk-revenue-schedule-generation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.953Z
estimatedTokens: 703
keywords: [Bulk, Revenue, Schedule, Generation, POST, schedules, collection, opportunity, line, items]
---

# Bulk Revenue Schedule Generation (POST)

> Create revenue schedules for a collection of opportunity line
      items.

# Bulk Revenue Schedule Generation (POST)

Create revenue schedules for a collection of opportunity line items.

Resource

```

```

Example URI

```

```

Available version

65.0

HTTP methods

POST

Request parameters for POST

Input Representation: RevenueScheduleGenerationBulkInput

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| endDate | String | The end date of the opportunity line items for which revenue schedules must be generated. | Optional | 65.0 |
| opportunityId | String | The ID of the opportunity that consists of the line items for which revenue schedules must be generated. | Optional | 65.0 |
| opportunityLineItemList | List<String> | The IDs of the opportunity line items for which revenue schedules must be generated. | Optional | 65.0 |
| calendarType | Enum | Specifies the type of calendar based on which revenue schedules are generated for the opportunity line items. Possible values are Broadcast and Gregorian. | Required | 65.0 |
| revenueSchedulePeriodType | Enum | Specifies the type of period for which revenue schedules must be generated. | Required | 65.0 |
| revenueDistributionType | Enum | Specifies the method in which the opportunity line item revenue is distributed across the schedules that must be generated. | Required | 65.0 |

Request body for POST

```

```

Response parameters for POST

Output Representation: RevenueScheduleGenerationBulk

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | The status of the asynchronous job that was executed to generate opportunity line item revenue schedules. | Required | 65 |
| message | String | The message that indicates the status of the revenue schedule generation request. | Optional | 65 |
| error | String | The details of the error due to which the asynchronous job that generates revenue schedules wasn't executed. | Optional | 65 |
| jobUrl | String | The URL of the asynchronous job that was executed to generate opportunity line item revenue schedules. | Required | 65 |

Async Output Details

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | The status of the asynchronous job that was executed to generate opportunity line item revenue schedules. | Required | 65.0 |
| message | String | The message that indicates the status of the revenue schedule generation request. | Optional | 65.0 |
| error | String | The details of the error due to which the asynchronous job that generates revenue schedules wasn't executed. | Optional | 65.0 |

Response body for POST

```

```

In error scenario (when end date is missing for one or more Opportunity Products):

```

```

## Code Examples

```
connect/media/asm/actions/generate-revenue-schedules
```

```
https://yourInstance.salesforce.com/services/data/65.0/connect/media/asm/actions/generate-revenue-schedules
```

```
{
    "endDate":"", //format dd-mm-yyyy
    "opportunityLineItemIds":[],
    "oppId": "53534534",
    "calendarType": "broadcast",
    "period":"monthly",
    "revenueDistributionType": "prorated"
}
```

```
{
"status": "SUCCESS",
"message": "Sent request for async schedule generation successfully",
"jobId":"Id"
}
```

```
{
   "status":"FAILED",
   "error": "Bad Request",
   "message": "End date must be populated for all Opp Products"
}
```
