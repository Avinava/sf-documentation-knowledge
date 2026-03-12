---
title: "DevOps Center Custom Platform Events"
domain: devops-center-dev
topic: devops-center-custom-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.378Z
estimatedTokens: 682
keywords: [DevOps, Center, Custom, Platform, Events, generates, work, items, they, move, development, promotion, lifecycle]
---

# DevOps Center Custom Platform Events

> DevOps Center generates platform events for work items as they move through the
  development and promotion lifecycle.

# DevOps Center Custom Platform Events

DevOps Center generates platform events for work items as they move through the development and promotion lifecycle.

In the development phases, DevOps Center generates a platform event every time a work item changes state (New, In Progress, and so on). DevOps Center also generates a platform event for every commit on the work item’s feature branch and when the change request is opened.

In the promotion lifecycle, DevOps Center generates a platform event whenever the work item’s metadata is merged into a pipeline stage. DevOps Center also generates a platform event whenever a work item’s metadata is deployed to a pipeline stage’s org.

You can subscribe to these events using all the methods supported by Salesforce (Apex Triggers, Flows, LWCs, APIs, and so on).

-   **[Deployment (sf\_devops\_\_Deployment\_\_e)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment__e.htm)**
    Notifies subscribers when a work item’s metadata is deployed to a pipeline stage. This object is available in API version 62.0 and later.
-   **[Work Item Commit (sf\_devops\_\_Work\_Item\_Commit\_\_e)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_commit__e.htm)**
    Notifies subscribers whenever a commit occurs on a work item’s feature branch. This object is available in API version 62.0 and later.
-   **[Work Item Merged Change Request (sf\_devops\_\_Work\_Item\_Merged\_Change\_Request\_\_e)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_merged_change_request__e.htm)**
    Notifies subscribers when a work item’s metadata is merged into a pipeline stage’s branch. This object is available in API version 62.0 and later.
-   **[Work Item Open Change Request (sf\_devops\_\_Work\_Item\_Open\_Change\_Request\_\_e)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_open_change_request__e.htm)**
    Notifies subscribers whenever a change request (pull request) is opened for a work item. This object is available in API version 62.0 and later.
-   **[Work Item State Change (sf\_devops\_\_Work\_Item\_State\_Change\_\_e)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_state_change__e.htm)**
    Notifies subscribers when the State\_\_c field of a work item changes. This object is available in API version 62.0 and later.

#### See Also

-   [*GitHub Repository*: DevOps Center Extension Showcase](https://github.com/forcedotcom/devops-center-extension-examples/blob/main/README.md "GitHub Repository: DevOps Center Extension
    Showcase - HTML (New Window)")

## Related Topics

- Deployment (sf_devops__Deployment__e) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment__e.htm)
- Work Item Commit (sf_devops__Work_Item_Commit__e) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_commit__e.htm)
- Work Item Merged Change Request (sf_devops__Work_Item_Merged_Change_Request__e) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_merged_change_request__e.htm)
- Work Item Open Change Request (sf_devops__Work_Item_Open_Change_Request__e) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_open_change_request__e.htm)
- Work Item State Change (sf_devops__Work_Item_State_Change__e) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_state_change__e.htm)
