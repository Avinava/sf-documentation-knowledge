---
title: "Activity Plans"
domain: life-sciences-dev-guide
topic: activity-plans
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.617Z
estimatedTokens: 900
keywords: [Activity, Plans, allow, administrators, define, goals, specific, employees, including, targeted, accounts, plan, cycle, duration, activities]
---

# Activity Plans

> Activity plans allow administrators to define goals for specific employees, including
  targeted accounts, plan cycle duration, types of activities, links to products, and weight of
  activity type. Employees and managers can review and edit these goals before final approval by the
  administrator. After plans are approved, employees execute activities against their goals, with
  the option to request changes during an active plan. Charts provide a visual representation of the
  employee's progress toward goals.

# Activity Plans

Activity plans allow administrators to define goals for specific employees, including targeted accounts, plan cycle duration, types of activities, links to products, and weight of activity type. Employees and managers can review and edit these goals before final approval by the administrator. After plans are approved, employees execute activities against their goals, with the option to request changes during an active plan. Charts provide a visual representation of the employee's progress toward goals.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_activity_plans_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/life_sciences_activity_plans.htm "HTML (New Window)").

-   **[ActivityPlan](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_activityplan.htm)**
    Represents the user's activity goals for the cycle. This object is available in API version 65.0 and later.
-   **[ActivityPlanTerritory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_activityplanterritory.htm)**
    Represents the territory details associated with an activity plan. This object is available in API version 65.0 and later.
-   **[ProviderActivityGoal](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitygoal.htm)**
    Represents the goals for the provider accounts. This object is available in API version 65.0 and later.
-   **[ProviderActivityGoalMeasure](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitygoalmeasure.htm)**
    Represents the goal measurement for an activity type. This object is available in API version 65.0 and later.
-   **[ProviderActivityMeasureType](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitymeasuretype.htm)**
    Represents the details of the activity goal measure type. This object is available in API version 65.0 and later.
-   **[ProviderActvtyPlanAdjusment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractvtyplanadjusment.htm)**
    Represents the details of the adjustment requests for an activity plan. This object is available in API version 65.0 and later.
-   **[PrvdActvtyPlanAdjProdt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdactvtyplanadjprodt.htm)**
    Represents the details of the products associated with the provider activity plan adjustment. This object is available in API version 65.0 and later.
-   **[PrvdActvtyGoalMeasureProdt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdactvtygoalmeasureprodt.htm)**
    Represents the details of the products associated with the activity goal measure. This object is available in API version 65.0 and later.
-   **[TimePeriod](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_timeperiod.htm)**
    Represents the time period that's used to calculate the activity.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Holiday](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_holiday.htm)

## Related Topics

- ActivityPlan (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_activityplan.htm)
- ActivityPlanTerritory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_activityplanterritory.htm)
- ProviderActivityGoal (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitygoal.htm)
- ProviderActivityGoalMeasure (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitygoalmeasure.htm)
- ProviderActivityMeasureType (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractivitymeasuretype.htm)
- ProviderActvtyPlanAdjusment (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideractvtyplanadjusment.htm)
- PrvdActvtyPlanAdjProdt (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdactvtyplanadjprodt.htm)
- PrvdActvtyGoalMeasureProdt (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdactvtygoalmeasureprodt.htm)
- TimePeriod (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_timeperiod.htm)
