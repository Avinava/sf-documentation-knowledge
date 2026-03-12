---
title: "Object Activity (sf_devops__Object_Activity__c)"
domain: devops-center-dev
topic: object-activity-sfdevopsobjectactivityc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.500Z
estimatedTokens: 1743
keywords: [Activity, sf_devops__Object_Activity__c, DevOps, Center, custom, objects, records, determine, items, listed, Histories, work, pipelines, performs, operation]
---

# Object Activity (sf_devops__Object_Activity__c)

> Represents an activity by one of the DevOps Center custom objects.
         Object Activity records determine the items that are listed in the Activity Histories of
         work items and pipelines. When DevOps Center performs an operation, it creates an activity
         record and inserts it in the appropriate user interface view; each activity references the
         associated custom object. For example, when a user promotes a work item, DevOps Center
         inserts a promotion initiation activity in the work item Activity History; the activity
         references the Work Item and Pipeline Stage objects. When the promotion terminates, DevOps
         Center inserts a second activity that references the same two objects and Async Operation
         Result. This object is available in all orgs that have DevOps Center installed.

# Object Activity (sf\_devops\_\_Object\_Activity\_\_c)

Represents an activity by one of the DevOps Center custom objects. Object Activity records determine the items that are listed in the Activity Histories of work items and pipelines. When DevOps Center performs an operation, it creates an activity record and inserts it in the appropriate user interface view; each activity references the associated custom object. For example, when a user promotes a work item, DevOps Center inserts a promotion initiation activity in the work item Activity History; the activity references the Work Item and Pipeline Stage objects. When the promotion terminates, DevOps Center inserts a second activity that references the same two objects and Async Operation Result. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Object Activity record. |
| sf_devops__Activity_Date__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate and time that the activity occurred. |
| sf_devops__Activity_Type__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionType of activity that was performed. |
| sf_devops__Change_Submission__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Change Submission record that was associated with this activity.This field is a relationship field.Relationship Namesf_devops__Change_Submission__rRelationship TypeLookupRefers Tosf_devops__Change_Submission__c |
| sf_devops__Environment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Environment record that was associated with this activity.This field is a relationship field.Relationship Namesf_devops__Environment__rRelationship TypeLookupRefers Tosf_devops__Environment__c |
| sf_devops__Hidden__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, this activity is for internal bookkeeping only, and DevOps Center doesn’t include it in the Activity History views.The default value is false. |
| sf_devops__Operation_Result__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record that was associated with this activity.This field is a relationship field.Relationship Namesf_devops__Operation_Result__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Parent_Activity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the parent activity, if the parent activity triggered this activity. For example, the promotion of a change bundle triggers child activities that represent all the work items in the change bundle that were promoted.This field is a relationship field.Relationship Namesf_devops__Parent_Activity__rRelationship TypeLookupRefers Tosf_devops__Object_Activity__c |
| sf_devops__Pipeline__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Pipeline record that’s associated with this activity.This field is a relationship field.Relationship Namesf_devops__Pipeline__rRelationship TypeLookupRefers Tosf_devops__Pipeline__c |
| sf_devops__Project__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the parent project that this activity is in.This field is a relationship field.Relationship Namesf_devops__Project__rRelationship TypeMaster-detailRefers Tosf_devops__Project__c |
| sf_devops__Summary__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSummary displayed in the Activities History view for this activity. |
| sf_devops__Target_Pipeline_Stage__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Pipeline Stage record that’s associated with this activity.This field is a relationship field.Relationship Namesf_devops__Target_Pipeline_Stage__rRelationship TypeLookupRefers Tosf_devops__Pipeline_Stage__c |
| sf_devops__Work_Item__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Work Item record that’s associated with this activity.This field is a relationship field.Relationship Namesf_devops__Work_Item__rRelationship TypeLookupRefers Tosf_devops__Work_Item__c |

#### See Also

-   [Pipeline (sf\_devops\_\_Pipeline\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline__c.htm "Represents a collection of Pipeline Stage records that together make up the DevOps Center release pipeline in a project. This object is available in all orgs that have DevOps Center installed.")

-   [Pipeline Stage (sf\_devops\_\_Pipeline\_Stage\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm "Represents a connection from a pipeline to an environment; the collection of all pipeline stages in a project make up the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Work Item (sf\_devops\_\_Work\_Item\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm "Represents a collection of metadata changes in a project. A work item can be associated with an environment in which the work is performed. If it’s not connected to an environment, the VCS Event object handles the changes. A work item goes through a number of development lifecycle stages until all development work is complete and the work item is part of the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

-   [Change Submission (sf\_devops\_\_Change\_Submission\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_submission__c.htm "Represents a change that was submitted (committed) to the work item feature branch. The change includes relevant metadata files. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Pipeline (sf_devops__Pipeline__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline__c.htm)
- Pipeline Stage (sf_devops__Pipeline_Stage__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm)
- Work Item (sf_devops__Work_Item__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm)
- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
- Change Submission (sf_devops__Change_Submission__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_submission__c.htm)
