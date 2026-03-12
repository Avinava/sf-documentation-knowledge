---
title: "Change Submission (sf_devops__Change_Submission__c)"
domain: devops-center-dev
topic: change-submission-sfdevopschangesubmissionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.447Z
estimatedTokens: 1277
keywords: [Change, Submission, sf_devops__Change_Submission__c, submitted, committed, work, item, feature, branch, includes, relevant, metadata, files, orgs, DevOps]
---

# Change Submission (sf_devops__Change_Submission__c)

> Represents a change that was submitted (committed) to the work item feature
         branch. The change includes relevant metadata files. This object is available in all
      orgs that have DevOps Center installed.

# Change Submission (sf\_devops\_\_Change\_Submission\_\_c)

Represents a change that was submitted (committed) to the work item feature branch. The change includes relevant metadata files. This object is available in all orgs that have DevOps Center installed.

The commit can occur in one of these ways:

-   A user clicked **Commit Changes** in a work item within DevOps Center.
-   A user committed the change outside of DevOps Center, such as through the GitHub UI, and DevOps Center detects the event.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Change Submission record. |
| sf_devops__Comment__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe commit message that the user entered. |
| sf_devops__Creation_Result__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen the commit comes from a user using DevOps Center, this field references the Async Operation Result record that was used for the commit.This field is a relationship field.Relationship Namesf_devops__Creation_Result__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Inspection_Result__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen the commit comes from outside DevOps Center, this field references the Async Operation Result record that was used when DevOps Center detected the commit. DevOps Center must inspect the commit to determine the relevant metadata components.This field is a relationship field.Relationship Namesf_devops__Inspection_Result__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Remote_Reference__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique ID of the feature branch before the commit. In GitHub, this ID is called a SHA. DevOps Center uses this ID when the Inspection Result field contains an error and DevOps Center must inspect the commit again. |
| sf_devops__Repository__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the repository in which the commit is made.This field is a relationship field.Relationship Namesf_devops__Repository__rRelationship TypeMaster-detailRefers Tosf_devops__Repository__c |
| sf_devops__Submitted_By_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the user that performed the commit when it was initiated outside of DevOps Center. |
| sf_devops__Submitted_By__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user that performed the commit when it was initiated in DevOps Center.This field is a relationship field.Relationship Namesf_devops__Submitted_By__rRelationship TypeLookupRefers ToUser |
| sf_devops__Submitted_On__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate and time of the commit. |
| sf_devops__Work_Item__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the work item that the commit is associated with. This work item owns the feature branch.This field is a relationship field.Relationship Namesf_devops__Work_Item__rRelationship TypeLookupRefers Tosf_devops__Work_Item__c |

#### See Also

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

-   [Repository (sf\_devops\_\_Repository\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__repository__c.htm "Represents a specific location in a source control system where the metadata for a project is stored. Multiple projects can reference the same repository. This object is available in all orgs that have DevOps Center installed.")

-   [Work Item (sf\_devops\_\_Work\_Item\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm "Represents a collection of metadata changes in a project. A work item can be associated with an environment in which the work is performed. If it’s not connected to an environment, the VCS Event object handles the changes. A work item goes through a number of development lifecycle stages until all development work is complete and the work item is part of the release pipeline. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
- Repository (sf_devops__Repository__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__repository__c.htm)
- Work Item (sf_devops__Work_Item__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm)
