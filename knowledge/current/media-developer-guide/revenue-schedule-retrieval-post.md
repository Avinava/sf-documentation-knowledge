---
title: "Revenue Schedule Retrieval (POST)"
domain: media-developer-guide
topic: revenue-schedule-retrieval-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.964Z
estimatedTokens: 973
keywords: [Revenue, Schedule, Retrieval, POST, schedules, media, opportunity]
---

# Revenue Schedule Retrieval (POST)

> Get the details of a list of revenue schedules for a media
      opportunity.

# Revenue Schedule Retrieval (POST)

Get the details of a list of revenue schedules for a media opportunity.

Resource

```

```

Example URI

```

```

Available version

65.0.0

HTTP methods

POST

Request parameters for POST

Input Representation: RevenueScheduleRetrievalInput

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | Enum | Specifies the type of revenue schedules to retrieve. | Required | 65.0 |
| opportunityId | String | The ID of the opportunity for which revenue schedules to retrieve. | Required | 65.0 |
| additionalFieldList | List<String> | The developer names of the additional Opportunity Line Item Schedule Actual fields to retrieve. | Optional | 65.0 |
| calendarType | Enum | Specifies the type of calendar for which revenue schedules to retrieve. | Required | 65.0 |
| periodType | Enum | Specifies the type of period for which revenue schedules to retrieve. | Required | 65.0 |
| pageSize | Number | Specifies the number of months for which revenue schedules to retrieve. | Required | 65.0 |
| offset | Number | Specifies the number of revenue schedules that must be skipped before retrieving revenue schedules. | Required | 65.0 |

Request body for POST

```

```

Response parameters for POST

Output Representation: RevenueScheduleRetrievalOutputRepresentation

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| error | String | The details of the error due to which the revenue schedules weren't retrieved. | Required | 65.0 |
| nextOffset | Number | Specifies the number of records that are skipped in the output. | Required | 65.0 |
| hasMoreRevenueSchedules | boolean | Indicates that the opportunity has more revenue schedules that can be retrieved. | Required | 65.0 |
| revenueScheduleDetailList | List<ScheduleDetailsOutputRepresentation> | The details of the revenue schedules retrieved for the opportunity. | Required | 65.0 |

Output Representation: ScheduleDetailsOutputRepresentation

| Parameter Name | Type | Description |
| --- | --- | --- |
| period | String | The period that the revenue schedule belong to. |
| startDate | Date | The start date of the revenue schedule. |
| endDate | Date | The end date of the revenue schedule. |
| productList | List<RevenueScheduleProductOutputRepresentation> | The list of products that are part of the revenue schedule. |

Output Representation: RevenueScheduleProductOutputRepresentation

| Parameter Name | Type | Description |
| --- | --- | --- |
| productName | String | The name of the opportunity product that the revenue schedule is for. |
| startDate | Date | The start date of the product's schedule. |
| endDate | Date | The end date of the product's schedule. |
| plannedBudget | Double | The planned budget of the product's schedule. |
| teamList | List<TeamMemberOutputRepresentation> | The list of team members across whom the revenue of the product's schedule is split. |
| bookedAmount | Double | The booked amount of the product's schedule. |
| deliveredAmount | Double | The delivered amount of the product's schedule. |
| billedAmount | Double | The billed amount of the product's schedule. |
| adjustedAmount | Double | The adjusted amount of the product's schedule. |
| additionalFields | Map<String, Object> | The additional field values of the product's schedule |
| lastUpdatedDate | Date | The date and time on which the product's schedule was last updated. |

Output Representation: TeamMemberOutputRepresentation

| Parameter Name | Type | Description |
| --- | --- | --- |
| teamMemberName | String | The name of the team member who is allocated a percentage of the opportunity revenue. |
| splitPercentage | Double | The percentage of the opportunity revenue that's allocated to the team member. |

Response body for POST

```

```

## Code Examples

```
connect/media/asm/actions/generate-revenue-schedules
```

```
https://yourInstance.salesforce.com/services/data/65.0/connect/media/asm/actions/retrieve-revenue-schedules
```

```
{
  "type": "periodic",
  "opportunityId": "006xx000001a2ogAAA",
  "additionalFieldList": [
    "AdOpportunityLineItem.EndDate",
    "AdOpportunityLineItem.CalendarType",
    "OpportunityLineItemSchedule.ScheduleDate",
    "OpportunityLineItemSchdActual.StartDate",
    "OpportunityLineItem.Name",
    "OpportunityLineItem.Product2Id",
    "Product2.Id"
  ],
  "periodType": "monthly",
  "calendarType": "gregorian",
  "pageSize": 2,
  "offset": 0
}
```

```
{
  "nextOffset": 3,
  "hasMore": true,
  "revenueScheduleDetailList": [
    {
      "period": "Jan 25",
      "startDate": "2024-12-30T00:00:00.000Z",
      "endDate": "2025-01-26T00:00:00.000Z",
      "products": [
        {
          "productName": "WTVR",
          "startDate": "2025-01-13T00:00:00.000Z",
          "endDate": "2025-01-26T00:00:00.000Z",
          "plannedBudget": 229.51,
          "team": [
            {
              "name": "Alex",
              "splitPerc": 50
            },
            {
              "name": "Other Team Member",
              "splitPerc": 50
            }
          ],
          "bookedAmount": null,
          "deliveredAmount": null,
          "billedAmount": null,
          "adjustedAmount": null,
          "additionalFields": {
            "Product2.Id": "01txx0000006i7hAAA",
            "AdOpportunityLineItem.EndDate": "2025-09-30",
            "OpportunityLineItemSchedule.ScheduleDate": "2025-06-03",
            "OpportunityLineItem.Name": "Acme - 1,200 Widgets Admin Certification",
            "OpportunityLineItemSchdActual.StartDate": "2025-06-03",
            "OpportunityLineItem.Product2Id": "01txx0000006i7hAAA",
            "AdOpportunityLineItem.CalendarType": "gregorian"
          },
          "lastUpdated": "2025-06-30T14:47:30.000Z"
        },
        {
          "productName": "KASW",
          "startDate": "2025-01-13T00:00:00.000Z",
          "endDate": "2025-01-26T00:00:00.000Z",
          "plannedBudget": 269.23,
          "team": [
            {
              "name": "Eva",
              "splitPerc": 50
              
            },
            {
              "name": "Other Team Member",
              "splitPerc": 50
            }
          ],
          "bookedAmount": null,
          "deliveredAmount": null,
          "billedAmount": null,
          "adjustedAmount": null,
          "additionalFields": {
            "Product2.Id": "01txx0000006i7hAAA",
            "AdOpportunityLineItem.EndDate": "2025-09-30",
            "OpportunityLineItemSchedule.ScheduleDate": "2025-06-03",
            "OpportunityLineItem.Name": "Acme - 1,200 Widgets Admin Certification",
            "OpportunityLineItemSchdActual.StartDate": "2025-06-03",
            "OpportunityLineItem.Product2Id": "01txx0000006i7hAAA",
            "AdOpportunityLineItem.CalendarType": "gregorian"
          },
          "lastUpdated": "2025-06-30T14:47:30.000Z"
        }
      ]
    },
    {
      "period": "Feb 25",
      "startDate": "2025-02-27T00:00:00.000Z",
      "endDate": "2025-03-23T00:00:00.000Z",
      "products": [
        {
          "productName": "WTVR",
          "startDate": "2025-02-27T00:00:00.000Z",
          "endDate": "2025-03-23T00:00:00.000Z",
          "plannedBudget": 459.02,
          "team": [
            {
              "name": "Alex",
              "splitPerc": 50
            },
            {
              "name": "Other Team Member",
              "splitPerc": 50
            }
          ],
          "bookedAmount": null,
          "deliveredAmount": null,
          "billedAmount": null,
          "adjustedAmount": null,
          "additionalFields": {
            "Product2.Id": "01txx0000006i7hAAA",
            "AdOpportunityLineItem.EndDate": "2025-09-30",
            "OpportunityLineItemSchedule.ScheduleDate": "2025-06-03",
            "OpportunityLineItem.Name": "Acme - 1,200 Widgets Admin Certification",
            "OpportunityLineItemSchdActual.StartDate": "2025-06-03",
            "OpportunityLineItem.Product2Id": "01txx0000006i7hAAA",
            "AdOpportunityLineItem.CalendarType": "gregorian"
          },
          "lastUpdated": "2025-06-30T14:47:30.000Z"
        },
        {
          "productName": "KASW",
          "startDate": "2025-02-27T00:00:00.000Z",
          "endDate": "2025-03-23T00:00:00.000Z",
          "plannedBudget": 538.46,
          "team": [
            {
              "name": "Eva",
              "splitPerc": 50
            },
            {
              "name": "Other Team Member",
              "splitPerc": 50
            }
          ],
          "bookedAmount": null,
          "deliveredAmount": null,
          "billedAmount": null,
          "adjustedAmount": null,
          "additionalFields": {
            "Product2.Id": "01txx0000006i7hAAA",
            "AdOpportunityLineItem.EndDate": "2025-09-30",
            "OpportunityLineItemSchedule.ScheduleDate": "2025-06-03",
            "OpportunityLineItem.Name": "Acme - 1,200 Widgets Admin Certification",
            "OpportunityLineItemSchdActual.StartDate": "2025-06-03",
            "OpportunityLineItem.Product2Id": "01txx0000006i7hAAA",
            "AdOpportunityLineItem.CalendarType": "gregorian"
          },
          "lastUpdated": "2025-06-30T14:47:30.000Z"
        }
      ]
    }
  ]
  
}
```
