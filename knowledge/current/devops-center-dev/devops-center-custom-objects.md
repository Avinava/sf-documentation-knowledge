---
title: "DevOps Center Custom Objects"
domain: devops-center-dev
topic: devops-center-custom-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.369Z
estimatedTokens: 2916
keywords: [DevOps, Center, Custom, Objects, data, model, includes, several]
---

# DevOps Center Custom Objects

> The DevOps Center data model includes several custom objects.

# DevOps Center Custom Objects

The DevOps Center data model includes several custom objects.

-   **[Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)**
    Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.
-   **[Back Sync (sf\_devops\_\_Back\_Sync\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__back_sync__c.htm)**
    Represents the synchronization between a DevOps Center user’s development environment and the first pipeline stage’s branch. In particular, this object tracks when the synchronization happened and the records of the Source Member Reference object that the synchronization can ignore. This object is available in all orgs that have DevOps Center installed.
-   **[Branch (sf\_devops\_\_Branch\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__branch__c.htm)**
    Stores the state of a branch in the source control repository (also version control system, or VCS). In the DevOps Center object model, this object is a child of the Repository where the branch lives. Work Item and Pipeline Stage records refer to this object. This object is available in all orgs that have DevOps Center installed.
-   **[Change Bundle (sf\_devops\_\_Change\_Bundle\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_bundle__c.htm)**
    A collection of Work Item records that are promoted as a single unit to the next pipeline stage. This collection helps ensure a consistent merge and deployment of the metadata as it moves through the release pipeline. This object is available in all orgs that have DevOps Center installed.
-   **[Change Bundle Install (sf\_devops\_\_Change\_Bundle\_Install\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_bundle_install__c.htm)**
    Represents the deployment of the metadata components associated with a change bundle into an environment. This object is available in all orgs that have DevOps Center installed.
-   **[Change Submission (sf\_devops\_\_Change\_Submission\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_submission__c.htm)**
    Represents a change that was submitted (committed) to the work item feature branch. The change includes relevant metadata files. This object is available in all orgs that have DevOps Center installed.
-   **[Deploy Component (sf\_devops\_\_Deploy\_Component\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deploy_component__c.htm)**
    Stores the aggregated set of metadata components that must be deployed as part of a promotion. Includes the metadata components of all the work items associated with the promotion. The Deploy Component object is a child of Deployment Result. This object is available in all orgs that have DevOps Center installed.
-   **[Deployment Result (sf\_devops\_\_Deployment\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm)**
    Contains information from DevOps Center to the Heroku application about how to execute a metadata deployment to an environment, such as the Apex tests and test level. After the deployment completes, this object then stores information about the deployment, such as the deployment ID and completion date. See \*\*\* for more information. This object is available in all orgs that have DevOps Center installed.
-   **[Environment (sf\_devops\_\_Environment\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm)**
    Represents a connection from DevOps Center to an environment, which currently can be only a Salesforce org. Developers use development environments to do their work. Each pipeline stage has an associated environment. This object is available in all orgs that have DevOps Center installed.
-   **[Hidden Remote Change (sf\_devops\_\_Hidden\_Remote\_Change\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__hidden_remote_change__c.htm)**
    Used to hide a Remote Change record from a work item. A sample use case is when a feature branch associated with the work item has a .forceignore file that excludes the metadata represented by the Remote Change record. See \*\*\* for more information. This object is available in all orgs that have DevOps Center installed.
-   **[Merge Result (sf\_devops\_\_Merge\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__merge_result__c.htm)**
    Contains information from DevOps Center to the Heroku application about the source control branch to merge as part of a promotion. When the merge completes, this object then stores information about the merge, such as the ID of the merge and when it happened. This object is available in all orgs that have DevOps Center installed.
-   **[Object Activity (sf\_devops\_\_Object\_Activity\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__object_activity__c.htm)**
    Represents an activity by one of the DevOps Center custom objects. Object Activity records determine the items that are listed in the Activity Histories of work items and pipelines. When DevOps Center performs an operation, it creates an activity record and inserts it in the appropriate user interface view; each activity references the associated custom object. For example, when a user promotes a work item, DevOps Center inserts a promotion initiation activity in the work item Activity History; the activity references the Work Item and Pipeline Stage objects. When the promotion terminates, DevOps Center inserts a second activity that references the same two objects and Async Operation Result. This object is available in all orgs that have DevOps Center installed.
-   **[Pipeline (sf\_devops\_\_Pipeline\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline__c.htm)**
    Represents a collection of Pipeline Stage records that together make up the DevOps Center release pipeline in a project. This object is available in all orgs that have DevOps Center installed.
-   **[Pipeline Stage (sf\_devops\_\_Pipeline\_Stage\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm)**
    Represents a connection from a pipeline to an environment; the collection of all pipeline stages in a project make up the release pipeline. This object is available in all orgs that have DevOps Center installed.
-   **[Project (sf\_devops\_\_Project\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm)**
    Represents the parent of all DevOps Center custom objects. See \*\*\* for more information. This object is available in all orgs that have DevOps Center installed.
-   **[Remote Change (sf\_devops\_\_Remote\_Change\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__remote_change__c.htm)**
    Represents a change to an environment that’s connected to DevOps Center. In particular, a Remote Change record represents an accumulation of operations on a particular piece of metadata. DevOps Center presents this change to the user so they can pull it into their work item and commit it to the associated feature branch. See \*\*\* for more information. This object is available in all orgs that have DevOps Center installed.
-   **[Repository (sf\_devops\_\_Repository\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__repository__c.htm)**
    Represents a specific location in a source control system where the metadata for a project is stored. Multiple projects can reference the same repository. This object is available in all orgs that have DevOps Center installed.
-   **[Source Member Reference (sf\_devops\_\_Source\_Member\_Reference\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__source_member_reference__c.htm)**
    Represents a copy of the relevant information from a SourceMember Tooling API record in a development environment. DevOps Center copies this data to track the metadata changes that a user hasn’t yet pulled into their work item. Copying the data also makes computing Remote Change records more efficient. See \*\*\* for more information. This object is available in all orgs that have DevOps Center installed.
-   **[Submit Component (sf\_devops\_\_Submit\_Component\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__submit_component__c.htm)**
    Represents a metadata component that was committed to a feature branch in the source control repository. The commit can be initiated in one of two ways, either from within DevOps Center or directly in the source control repository. Each metadata component that’s part of the commit must also be deployed to an environment, and DevOps Center uses the Submit Component object to model the metadata. The Submit Component object is a child of Change Submission. This object is available in all orgs that have DevOps Center installed.
-   **[VCS (sf\_devops\_\_Vcs\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__vcs__c.htm)**
    Represents a supported source (version) control system. This object is available in all orgs that have DevOps Center package version 8.2 and later. Available in API version 62.0 and later.
-   **[VCS Synch State (sf\_devops\_\_Vcs\_Synch\_State\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__vcs_synch_state__c.htm)**
    Represents the synchronization state between DevOps Center and the source (version) control system. DevOps Center uses this object to track all synchronization events to ensure that DevOps Center is working with the latest version of the code in the source control repository. This object is available in all orgs that have DevOps Center package version 8.2 and later. Available in API version 62.0 and later.
-   **[Work Item (sf\_devops\_\_Work\_Item\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm)**
    Represents a collection of metadata changes in a project. A work item can be associated with an environment in which the work is performed. If it’s not connected to an environment, the VCS Event object handles the changes. A work item goes through a number of development lifecycle stages until all development work is complete and the work item is part of the release pipeline. This object is available in all orgs that have DevOps Center installed.
-   **[Work Item Promote (sf\_devops\_\_Work\_Item\_Promote\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item_promote__c.htm)**
    Represents the unbundled promotion of a work item to the next stage in a pipeline. See \*\*\* for more information. This object is available in all orgs that have DevOps Center installed.

## Related Topics

- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
- Back Sync (sf_devops__Back_Sync__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__back_sync__c.htm)
- Branch (sf_devops__Branch__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__branch__c.htm)
- Change Bundle (sf_devops__Change_Bundle__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_bundle__c.htm)
- Change Bundle Install (sf_devops__Change_Bundle_Install__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_bundle_install__c.htm)
- Change Submission (sf_devops__Change_Submission__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_submission__c.htm)
- Deploy Component (sf_devops__Deploy_Component__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deploy_component__c.htm)
- Deployment Result (sf_devops__Deployment_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm)
- Environment (sf_devops__Environment__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm)
- Hidden Remote Change (sf_devops__Hidden_Remote_Change__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__hidden_remote_change__c.htm)
