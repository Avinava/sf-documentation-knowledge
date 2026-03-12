---
title: "Branch (sf_devops__Branch__c)"
domain: devops-center-dev
topic: branch-sfdevopsbranchc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.428Z
estimatedTokens: 942
keywords: [Branch, sf_devops__Branch__c, Stores, state, source, control, repository, version, system, VCS, DevOps, Center, model, child, lives]
---

# Branch (sf_devops__Branch__c)

> Stores the state of a branch in the source control repository (also version
         control system, or VCS). In the DevOps Center object model, this object is a child of the
         Repository where the branch lives. Work Item and Pipeline Stage records refer to this
         object. This object is available in all orgs that have DevOps Center installed.

# Branch (sf\_devops\_\_Branch\_\_c)

Stores the state of a branch in the source control repository (also version control system, or VCS). In the DevOps Center object model, this object is a child of the Repository where the branch lives. Work Item and Pipeline Stage records refer to this object. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the Branch record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| sf_devops__Ignore_Rules__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSerialized JSON representation of the preprocessed contents of the .forceignore file on the branch. |
| sf_devops__Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the branch. |
| sf_devops__Parent_Remote_Reference__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique ID that represents where this branch diverged from its parent branch. In GitHub, this ID is called a SHA. DevOps Center uses this ID to recreate the branch if necessary. For example, if a user deletes the branch on GitHub, but DevOps Center isn’t finished using the branch, then DevOps Center can recreate it using this ID. |
| sf_devops__Remote_Reference_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLast date and time when the branch identified by the Remote Reference field was updated. |
| sf_devops__Remote_Reference__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique ID of the tip of this branch. In GitHub, this ID is called the HEAD SHA. |
| sf_devops__Repository__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA reference to the source code repository in which this branch lives.This field is a relationship field.Relationship Namesf_devops__Repository__rRelationship TypeLookupRefers Tosf_devops__Repository__c |

#### See Also

-   [Repository (sf\_devops\_\_Repository\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__repository__c.htm "Represents a specific location in a source control system where the metadata for a project is stored. Multiple projects can reference the same repository. This object is available in all orgs that have DevOps Center installed.")

-   [Work Item (sf\_devops\_\_Work\_Item\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm "Represents a collection of metadata changes in a project. A work item can be associated with an environment in which the work is performed. If it’s not connected to an environment, the VCS Event object handles the changes. A work item goes through a number of development lifecycle stages until all development work is complete and the work item is part of the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Pipeline Stage (sf\_devops\_\_Pipeline\_Stage\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm "Represents a connection from a pipeline to an environment; the collection of all pipeline stages in a project make up the release pipeline. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Repository (sf_devops__Repository__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__repository__c.htm)
- Work Item (sf_devops__Work_Item__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm)
- Pipeline Stage (sf_devops__Pipeline_Stage__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm)
