---
title: "System Objects"
domain: life-sciences-dev-guide
topic: system-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.794Z
estimatedTokens: 918
keywords: [System, Objects, core, functionality, Life, Sciences, Cloud, Commercial, Engagement, Integration, Job, Run, Trigger, Handlers, User]
---

# System Objects

> System objects are related to core system functionality used by Life Sciences Cloud for
  Commercial Engagement.

# System Objects

System objects are related to core system functionality used by Life Sciences Cloud for Commercial Engagement.

## Integration Job Run

Stores details of scheduled integration jobs, including start and end times, job status, and a summary of records processed. This information enables administrators to monitor job performance, identify issues promptly, and maintain integration workflows efficiently by providing a centralized view of job statuses and outcomes. For example, store details of an integration job that syncs healthcare provider and healthcare organization records from an external system to the Salesforce Life Sciences data model.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_system_objects_integration_job_run_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/system-objects-integration-job-run.html "HTML (New Window)").

## Trigger Handlers

Triggers handlers respond to specific events or triggers within the Life Sciences Cloud. A trigger is an event that signals the need for some action to occur, and the handler is the function that executes in response to that event.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_system_objects_trigger_handlers_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/system-objects-trigger-handlers.html "HTML (New Window)").

## User and Device Management

The user and device management objects store additional information about users and mobile devices associated with users.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_user_and_device_management.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/system-objects-user-and-device-management.html "HTML (New Window)").

-   **[IntegrationJobRun](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_integrationjobrun.htm)**
    Represents the statistical details of asynchronous integration jobs that are run on the system. This object is available in API version 65.0 and later.
-   **[LifeScienceMobileApp](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencemobileapp.htm)**
    Represents information about a mobile device associated with a user. This object is available in API version 65.0 and later.
-   **[LifeScienceTriggerHandler](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencetriggerhandler.htm)**
    Represents a collection of fields to set up the trigger handlers to run for each Life Sciences object. This object is available in API version 65.0 and later.
-   **[UserAdditionalInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_useradditionalinfo.htm)**
    Represents information about a user such as additional identifiers, user preferences, and a return address. This object is available in API version 65.0 and later.

## Related Topics

- IntegrationJobRun (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_integrationjobrun.htm)
- LifeScienceMobileApp (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencemobileapp.htm)
- LifeScienceTriggerHandler (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencetriggerhandler.htm)
- UserAdditionalInfo (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_useradditionalinfo.htm)
