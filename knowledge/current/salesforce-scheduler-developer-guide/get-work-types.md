---
title: "Get Work Types"
domain: salesforce-scheduler-developer-guide
topic: get-work-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.144Z
estimatedTokens: 355
keywords: [Work, correct, record, group, service, territory, selected, previous, step]
---

# Get Work Types

> Get the correct work type record that represents the work type group and service
      territory that are selected in the previous step.

# Get Work Types

Get the correct work type record that represents the work type group and service territory that are selected in the previous step.

A work type represents a type of work to be performed in Salesforce Scheduler. A work type is a template representing an appointment topic (work type group) with an appointment location (service territory). It defines key appointment parameters such as appointment duration, preparation and wrap-up buffers, and availability timings.

1.  Use the Query() request on the WorkTypeGroupMember object to retrieve a work type for the work type group selected in the Get Work Type Groups step.

    Sample Request

    This sample REST API call uses the Query() request retrieve work type records that are associated with the selected work type group.

    ```

    ```

    Sample Response

    The request returns the work type records.

    ```

    ```

2.  Use the Query() request on the ServiceTerritoryWorkType object to filter the correct work type for the selected service territory selected in the Get Service Territories step.

    Sample Request

    This sample REST API call uses the Query() request to find the correct work type for the selected service territory.

    ```

    ```

    Sample Response

    The request returns the work type records.

    ```

    ```


On the next page in your app, you can show the service resources and their availability.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=SELECT+Id,Name,
WorkTypeGroupId,WorkTypeId+FROM+WorkTypeGroupMember+WHERE+WorkTypeGroupId+=+'0VSB0000000TbhWOAS'
```

```
{
  "totalSize" : 2,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "WorkTypeGroupMember",
      "url" : "/services/data/v53.0/sobjects/WorkTypeGroupMember/0WzB0000000TbZcKAK"
    },
    "Id" : "0WzB0000000TbZcKAK",
    "Name" : "00000047",
    "WorkTypeGroupId" : "0VSB0000000TbhWOAS",
    "WorkTypeId" : "08qB00000002ocgIAA"
  }, {
    "attributes" : {
      "type" : "WorkTypeGroupMember",
      "url" : "/services/data/v53.0/sobjects/WorkTypeGroupMember/0WzB0000000Tbm5KAC"
    },
    "Id" : "0WzB0000000Tbm5KAC",
    "Name" : "00000048",
    "WorkTypeGroupId" : "0VSB0000000TbhWOAS",
    "WorkTypeId" : "08qB0000000UF63IAG"
  } ]
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=SELECT+Id,Name,
ServiceTerritoryId,WorkTypeId+FROM+ServiceTerritoryWorkType+WHERE+WorkTypeId+=+'08qB00000002ocgIAA'+AND+
ServiceTerritoryId+=+'0HhB00000001P0PKAU'
```

```
{
  "totalSize" : 1,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "ServiceTerritoryWorkType",
      "url" : "/services/data/v53.0/sobjects/ServiceTerritoryWorkType/0VEB0000000TbbrOAC"
    },
    "Id" : "0VEB0000000TbbrOAC",
    "Name" : "00000063",
    "ServiceTerritoryId" : "0HhB00000001P0PKAU",
    "WorkTypeId" : "08qB00000002ocgIAA"
  } ]
}
```
