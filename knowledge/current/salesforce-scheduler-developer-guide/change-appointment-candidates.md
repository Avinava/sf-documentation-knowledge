---
title: "Change Appointment Candidates"
domain: salesforce-scheduler-developer-guide
topic: change-appointment-candidates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.150Z
estimatedTokens: 373
keywords: [Change, Appointment, Candidates, assigned, resources, mark, themselves, absent, query, ServiceTerritoryMember, show, alternative]
---

# Change Appointment Candidates

> If the assigned resources mark themselves absent, use the query request on the ServiceTerritoryMember object to show the list of alternative
      resources.

# Change Appointment Candidates

If the assigned resources mark themselves absent, use the query request on the ServiceTerritoryMember object to show the list of alternative resources.

Create a page in your app where you can show the available service resources based on the service territory.

This sample REST API call uses the query request to retrieve the alternate resources.

Resource URI

```

```

Sample Response

The API returns the available time slots and service resources.

```

```

Parse the JSON response, and show the available service resources on the page so that the user can select a primary service resource.

Here’s how a **Select Service Resource** page can look.![A representation of the Select Service Resource screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_primary_resource.png&folder=salesforce_scheduler_developer_guide)

Here’s how a page can look when the user selects a primary service resource.![A representation of the Select Service Resource screen with the primary resource selected.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_select_primary_resource.png&folder=salesforce_scheduler_developer_guide)

On the next page in your app, show the selected primary resource. You can also show the other service resources, including assets, so that users can add them as required resources. Then, show the consolidated time slots for all the selected resources.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=SELECT+EffectiveStartDate,EffectiveEndDate,ServiceResourceId,ServiceTerritoryId+FROM+ServiceTerritoryMember
```

```
{
    "totalSize" : 55,
    "done" : true,
    "records" : [
  {
    "attributes" : {
      "type" : "ServiceTerritoryMember",
      "url" : "/services/data/v53.0/sobjects/ServiceTerritoryMember/0HuB0000000TalUKAS"
    },
    "EffectiveStartDate" : "2021-10-22T15:00:00.000+0000",
    "EffectiveEndDate" : null,
    "ServiceResourceId" : "0HnB0000000TbgFKAS",
    "ServiceTerritoryId" : "0HhB0000000TakhKACC"
    }, {
    "attributes" : {
      "type" : "ServiceTerritoryMember",
      "url" : "/services/data/v53.0/sobjects/ServiceTerritoryMember/0HuB0000000TaleKAC"
    },
    "EffectiveStartDate" : "2021-10-22T15:00:00.000+0000",
    "EffectiveEndDate" : null,
    "ServiceResourceId" : "0HnB0000000TbgDKAS",
    "ServiceTerritoryId" : "0HhB0000000TakhKAC"
    }, {
    "attributes" : {
      "type" : "ServiceTerritoryMember",
      "url" : "/services/data/v53.0/sobjects/ServiceTerritoryMember/0HuB0000000TaloKAC"
    },
    "EffectiveStartDate" : "2021-10-22T15:00:00.000+0000",
    "EffectiveEndDate" : null,
    "ServiceResourceId" : "0HnB0000000TbgjKAC",
    "ServiceTerritoryId" : "0HhB0000000TakhKAC"
    }
 ]
}
```
