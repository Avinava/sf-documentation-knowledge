---
title: "Get Engagement Channels"
domain: salesforce-scheduler-developer-guide
topic: get-engagement-channels
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.021Z
estimatedTokens: 649
keywords: [Engagement, Channels, channel, medium, Phone, Video, Person, service, resources, meet, customers]
---

# Get Engagement Channels

> An engagement channel is a medium, such as Phone, Video, and In Person that service
      resources use to meet customers.

# Get Engagement Channels

An engagement channel is a medium, such as Phone, Video, and In Person that service resources use to meet customers.

Before using engagement channels for scheduling appointments:

-   Enable engagement channels in the Salesforce Scheduler Settings of your instance. See [Enable the Scheduling Appointments Using Engagement Channels Setting](https://help.salesforce.com/s/articleView?id=platform.ls_enable_schedule_appnt_using_engage_channels_setting.htm&type=5&language=en_US "HTML (New Window)").
-   Set up engagement channels, including setting the required access and creating engagement channels. See [Engagement Channels](https://help.salesforce.com/s/articleView?id=platform.ls_engagement_channels.htm&type=5&language=en_US "HTML (New Window)").
-   Create the Shift Engagement Channel and Engagement Channel Work Type records for the applicable shifts.
-   Define Shift Rules in the scheduling policy. See [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").

1.  Create a page to show the engagement channel types. Salesforce Scheduler shows service resources and resource time slots based on the channel that a user selects when creating an appointment.
2.  Make a GET request on the [engagement-channel-types](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_engagement_channel_types.htm "HTML (New Window)") Connect API.

    Sample Request

    Filter the engagement channel types by the workTypeGroupId selected in the previous step.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    You can filter the engagement channel type results by workTypeGroupIds or workTypeIds.

    Sample Response

    The request returns the engagement channels for the workTypeGroupId specified in the request.

    ```

    ```

3.  Parse the JSON response, and show the engagement channel types on the page that you created.

Your users can select an engagement channel type for the appointment from the page.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_work_type_groups.htm "Get Work Type Groups")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_service_territories.htm "Get Service Territories")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling​/engagement-channel-types?workTypeGroupIds=0VSS700000000sVOAQ
```

```
{
  "result": {
    "engagementChannelTypes": [
      {
        "contactPointType": "InPerson",
        "id": "0eFS70000004CG5MAM",
        "name": "EngagementChannel1",
        "workTypeGroupIds": [
          "0VSS700000000sVOAQ"
        ],
        "workTypeIds": []
      },
      {
        "contactPointType": "Video",
        "id": "0eFS70000004CGFMA2",
        "name": "EngagementChannel3",
        "workTypeGroupIds": [
          "0VSS700000000sVOAQ"
        ],
        "workTypeIds": []
      }
    ]
  }
}
```

```
{
  "result" : {
    "engagementChannelTypes" : [ {
      "contactPointType" : "Video",
      "id" : "0eFS70000004CGAMA2",
      "name" : "EngagementChannel2",
      "workTypeGroupIds" : [ ],
      "workTypeIds" : [ ]
    }, {
      "contactPointType" : "InPerson",
      "id" : "0eFS70000004CG5MAM",
      "name" : "EngagementChannel1",
      "workTypeGroupIds" : [ ],
      "workTypeIds" : [ ]
    }, {
      "contactPointType" : "Video",
      "id" : "0eFS70000004CGFMA2",
      "name" : "EngagementChannel3",
      "workTypeGroupIds" : [ ],
      "workTypeIds" : [ ]
    } ]
  }
}
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_work_type_group.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_service_territory.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_work_type_group.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_service_territory.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_work_type_groups.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_service_territories.htm)
