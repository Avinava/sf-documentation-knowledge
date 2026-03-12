---
title: "vpls360csr_GetUserStory"
domain: media-developer-guide
topic: vpls360csrgetuserstory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.300Z
estimatedTokens: 137
keywords: [vpls360csr_GetUserStory, Integration, Procedure, agent, console, customer, story, vpls360csr, _GetUserStory, Sample, Input, Output, Calls]
---

# vpls360csr_GetUserStory

> This Integration Procedure is used in the agent console to
      get the details of the customer story.

# vpls360csr\_GetUserStory

This Integration Procedure is used in the agent console to get the details of the customer story.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ObjectId | Required |
| pageSize | Required |
| StoryContext | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Customer Story


## Calls

-   Data Mapper: VPL-GetStoryAccountId

-   Data Mapper: VPL-GetSubscriptionDetails

-   Remote Action:

    -   Class: StoryListHandler

    -   Method: getStories

## Code Examples

```
{
    "ObjectId": "a1S4W000006A1eAUAS",
    "StoryContext": "Account",
    "pageSize": "10"
}
```

```
{
  "Stories": [
    {
      "title": null,
      "summaryLabelMap": {
        "Title_Highlight": "Outcome",
        "Title": "Process Name"
      },
      "summaryFieldMap": {
        "Title_Highlight": "VPL_Outcome__c",
        "Title": "VPL_ProcessName__c"
      },
      "subtitle": null,
      "strActivityDate": "12/21/2020, 7:39 AM",
      "parentObjAPIName": "Account",
      "parentName": null,
      "parentId": "0014W00002BvqD1QAJ",
      "ownerValueMap": null,
      "owner": "",
      "onGoing": false,
      "objType": "vlocity_cmt__CustomerInteractionTopic__c",
      "objAPIName": "vlocity_cmt__CustomerInteractionTopic__c",
      "navigateLink": null,
      "monthNameLastActivityDate": "Dec 21, 2020",
      "monthDayLastActivityDate": "Dec 21",
      "modified": "Last Modified By Manju J on 2020-12-21 15:39:17",
      "longLastActivityDate": "1608565157",
      "localTime": "07:39:17.000Z",
      "localDate": "2020-12-21",
      "LastActivityDate": "2020-12-21T15:39:17.000Z",
      "indicators": {},
      "imageRef": null,
      "Id": "a1R4W000004cwF8UAI",
      "highlight": null,
      "formatedLastActivityDate": "12/21/2020",
      "filterDummy": "Allvlocity_cmt__CustomerInteractionTopic__c",
      "editFields": null,
      "detailValueMap": null,
      "detailFieldList": [],
      "activityType": null,
      "actionFields": []
    }
]
 "StoryTitle": null
}
```
