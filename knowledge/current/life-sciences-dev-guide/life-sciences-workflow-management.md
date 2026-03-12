---
title: "Life Sciences Workflow Management"
domain: life-sciences-dev-guide
topic: life-sciences-workflow-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.805Z
estimatedTokens: 837
keywords: [Life, Sciences, Workflow, Management, Configure, workflows, Commercial, Engagement, objects, users, advance, records, steps, path, unique]
---

# Life Sciences Workflow Management

> Configure workflows for Commercial Engagement objects. As users advance records through
  the steps in a workflow path, unique permissions apply based on each step and the conditions met
  for that step. Control data permissions for create, update, and delete operations, and control
  user actions based on a user's role in the workflow. Validate custom business rules and enforce a
  status transition action checklist. Configure additional actions such as calling Platform Events
  for both mobile and web platforms.

# Life Sciences Workflow Management

Configure workflows for Commercial Engagement objects. As users advance records through the steps in a workflow path, unique permissions apply based on each step and the conditions met for that step. Control data permissions for create, update, and delete operations, and control user actions based on a user's role in the workflow. Validate custom business rules and enforce a status transition action checklist. Configure additional actions such as calling Platform Events for both mobile and web platforms.

![images/lsc_workflow_mgmt.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_workflow_mgmt.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/workflow-management.html "HTML (New Window)").

-   **[LifeScienceCustomScript](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencecustomscript.htm)**
    Represents a custom script associated with a Life Science stage object within a workflow. Use a custom script to implement the validation logic for the stage object. This object is available in API version 65.0 and later.
-   **[LifeSciStageAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageaction.htm)**
    Represents the configuration of an action performed as part of a workflow. This object is available in API version 65.0 and later.
-   **[LifeSciStageObject](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageobject.htm)**
    Represents an object associated with a workflow. This object is available in API version 65.0 and later.
-   **[LifeSciStageOperation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperation.htm)**
    Represents the criteria to evaluate in determining the applicable permissions and available actions for a specific step in a workflow. This object is available in API version 65.0 and later.
-   **[LifeSciStageOperationAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperationaction.htm)**
    Represents a junction between a stage operation and a stage action. This object defines a set of available stage actions in the context of a specific stage operation. This object is available in API version 65.0 and later.
-   **[LifeSciStageOperationCondn](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperationcondn.htm)**
    Represents a logical expression for applying an operation in a workflow. This object is available in API version 65.0 and later.
-   **[LifeSciStagePath](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistagepath.htm)**
    Represents information about the steps associated with a workflow and the path from one step in the workflow to the next. This object is available in API version 65.0 and later.
-   **[LifeSciStageValue](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistagevalue.htm)**
    Represents an individual step within a workflow. This object is available in API version 65.0 and later.

## Related Topics

- LifeScienceCustomScript (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciencecustomscript.htm)
- LifeSciStageAction (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageaction.htm)
- LifeSciStageObject (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageobject.htm)
- LifeSciStageOperation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperation.htm)
- LifeSciStageOperationAction (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperationaction.htm)
- LifeSciStageOperationCondn (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistageoperationcondn.htm)
- LifeSciStagePath (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistagepath.htm)
- LifeSciStageValue (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescistagevalue.htm)
