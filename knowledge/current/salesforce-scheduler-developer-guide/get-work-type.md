---
title: "Get Work Type"
domain: salesforce-scheduler-developer-guide
topic: get-work-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.195Z
estimatedTokens: 361
keywords: [Work, associated, service, territory, group]
---

# Get Work Type

> Default to the work type that is associated with the service territory
      and work type group.

# Get Work Type

Default to the work type that is associated with the service territory and work type group.

A work type group represents a general appointment category or topic, such as a home loan or investment.

1.  Use the Query() request on the WorkTypeGroupMember object to retrieve the work types associated with the work type group selected on the Select Work Type Group screen.

    Sample Request

    This sample REST API call uses the Query() request to retrieve the work types.

    ```

    ```

    Sample Response

    The request returns the work type records.

    ```

    ```

2.  Use the Query() request on the ServiceTerritoryWorkType object by specifying the work type records retrieved in the previous step to default the work type based on the selected service territory and work type group.

    Sample Request

    This sample REST API call uses the Query() request to default the work type.

    ```

    ```

    Sample Response

    The request returns the work type records.

    ```

    ```


On the next page in your app, you can show the service resources and their availability.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_work_type_groups.htm "Get Work Type Groups")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_appointment_candidates.htm "Get Service Resources")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=
SELECT+WorkTypeId,WorkType.Name+FROM+WorkTypeGroupMember+WHERE+WorkTypeGroupId+=+'0VSx000000014DmGAI'
```

```
{
  "totalSize": 2,
  "done": true,
  "records": [
    {
      "attributes": {
        "type": "WorkTypeGroupMember",
        "url": "/services/data/v55.0/sobjects/WorkTypeGroupMember/0Wzx000000013tICAQ"
      },
      "WorkTypeId": "08qx000000014fnAAA",
      "WorkType": {
        "attributes": {
          "type": "WorkType",
          "url": "/services/data/v55.0/sobjects/WorkType/08qx000000014fnAAA"
        },
        "Name": "WT 3"
      }
    },
    {
      "attributes": {
        "type": "WorkTypeGroupMember",
        "url": "/services/data/v55.0/sobjects/WorkTypeGroupMember/0Wzx000000013tJCAQ"
      },
      "WorkTypeId": "08qx000000014fwAAA",
      "WorkType": {
        "attributes": {
          "type": "WorkType",
          "url": "/services/data/v55.0/sobjects/WorkType/08qx000000014fwAAA"
        },
        "Name": "WT 4"
      }
    }
  ]
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=
SELECT+WorkTypeId,WorkType.Name+FROM+ServiceTerritoryWorkType+WHERE+ServiceTerritoryId+=+'0Hhx000000012oSCAQ'+AND+WorkTypeId+IN+('08qx000000014fnAAA','08qx000000014fwAAA')
```

```
{
  "totalSize": 1,
  "done": true,
  "records": [
    {
      "attributes": {
        "type": "ServiceTerritoryWorkType",
        "url": "/services/data/v55.0/sobjects/ServiceTerritoryWorkType/0VEx00000001Ag4GAE"
      },
      "WorkTypeId": "08qx000000014fnAAA",
      "WorkType": {
        "attributes": {
          "type": "WorkType",
          "url": "/services/data/v55.0/sobjects/WorkType/08qx000000014fnAAA"
        },
        "Name": "WT 3"
      }
    }
  ]
}
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_work_type_groups.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_appointment_candidates.htm)
