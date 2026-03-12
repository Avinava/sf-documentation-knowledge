---
title: "Work Item (sf_devops__Work_Item__c)"
domain: devops-center-dev
topic: work-item-sfdevopsworkitemc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.577Z
estimatedTokens: 2550
keywords: [Work, Item, sf_devops__Work_Item__c, collection, metadata, changes, project, associated, environment, performed, it’s, connected, VCS, Event, handles]
---

# Work Item (sf_devops__Work_Item__c)

> Represents a collection of metadata changes in a project. A work item
         can be associated with an environment in which the work is performed. If it’s not connected
         to an environment, the VCS Event object handles the changes. A work item goes through a
         number of development lifecycle stages until all development work is complete and the work
         item is part of the release pipeline. This object is available in all orgs that have
      DevOps Center installed.

# Work Item (sf\_devops\_\_Work\_Item\_\_c)

Represents a collection of metadata changes in a project. A work item can be associated with an environment in which the work is performed. If it’s not connected to an environment, the VCS Event object handles the changes. A work item goes through a number of development lifecycle stages until all development work is complete and the work item is part of the release pipeline. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Work Item record. |
| sf_devops__Assigned_To__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the DevOps Center user that this work item is assigned to. DevOps Center uses this field only to display the user’s name in the UI.This field is a relationship field.Relationship Namesf_devops__Assigned_To__rRelationship TypeLookupRefers ToUser |
| sf_devops__Branch__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Branch record that contains all the information about the feature branch associated with this work item. DevOps Center initially sets this value when the work item transitions to IN_PROGRESS. The value stays set until the work item becomes a member of the change bundle.This field is a relationship field.Relationship Namesf_devops__Branch__rRelationship TypeLookupRefers Tosf_devops__Branch__c |
| sf_devops__Change_Bundle__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf this work item is part of a bundle, this field references the Change Bundle record that this work item belongs to.This field is a relationship field.Relationship Namesf_devops__Change_Bundle__rRelationship TypeLookupRefers Tosf_devops__Change_Bundle__c |
| sf_devops__Combine_Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record associated with the most recent attempt to combine other work items with this work item.This field is a relationship field.Relationship Namesf_devops__Combine_Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Combined_With__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the other work item that this work item has been combined with.This field is a relationship field.Relationship Namesf_devops__Combined_With__rRelationship TypeLookupRefers Tosf_devops__Work_Item__c |
| sf_devops__Concluded__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf this field is set to a value, the work item has finished being used for active development or promotion. A work item is done when it’s either reached the last stage of the pipeline or a user has set its status to NEVERED. |
| sf_devops__Cross_Environment_Combination__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, this work item is the result of a combination operation where metadata came from multiple development environments.The default value is false. |
| sf_devops__Description__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the work item. DevOps Center uses this field only to display the description in the UI. |
| sf_devops__Development_Approved_By__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user who clicked the Ready to Promote button for this work item in DevOps Center.This field is a relationship field.Relationship Namesf_devops__Development_Approved_By__rRelationship TypeLookupRefers ToUser |
| sf_devops__Development_Approved__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, a user has clicked the Ready to Promote button for this work item in DevOps Center and the work item shows up in the Approved Work Items column in the pipeline.The default value is false. |
| sf_devops__Development_Environment__c | TypestringPropertiesFilter, Nillable, SortDescriptionEnvironment in which the work for this work item was developed.This field is a calculated field. |
| sf_devops__Environment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnvironment in which active development work for this work item is happening. DevOps Center clears this field value when the work item’s status is PROMOTED.This field is a relationship field.Relationship Namesf_devops__Environment__rRelationship TypeLookupRefers Tosf_devops__Environment__c |
| sf_devops__Operation_Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf this work item is part of a remote operation, this field references the Async Operation Result record for that operation. DevOps Center clears this field value when the operation terminates.This field is a relationship field.Relationship Namesf_devops__Operation_Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Project__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the parent project of this work item.This field is a relationship field.Relationship Namesf_devops__Project__rRelationship TypeMaster-detailRefers Tosf_devops__Project__c |
| sf_devops__Promoted_From_Environment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the development environment that this work item was originally promoted from. When a user promotes a work item, DevOps Center clears the Environment field value of its associated Work Item record. However, DevOps Center must still know which environment the work item was originally promoted from so it can do further processing. So when the first promotion of a work item completes, DevOps Center sets this field to the value of the Environment field before it’s cleared.This field is a relationship field.Relationship Namesf_devops__Promoted_From_Environment__rRelationship TypeLookupRefers Tosf_devops__Environment__c |
| sf_devops__Promoted__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, then this work item has been promoted at least one time.The default value is false. |
| sf_devops__Rebase_Branch__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Branch record that this work item is using as its rebase branch.This field is a relationship field.Relationship Namesf_devops__Rebase_Branch__rRelationship TypeLookupRefers Tosf_devops__Branch__c |
| sf_devops__Review_Remote_Reference__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique ID of the change request for this work item. In GitHub, a change request is called a pull request (PR) and the ID is the PR number. DevOps Center clears this field when the work item’s status changes to IN_REVIEW. As the work item moves through the pipeline stages, DevOps Center creates change requests and updates this field with the new ID. When the work item becomes a member of a change bundle, DevOps Center clears this field and no longer sets it. |
| sf_devops__State__c | TypestringPropertiesFilter, Nillable, SortDescriptionCurrent state of this work item. Valid values:NEWIN_PROGRESSIN_REVIEWAPPROVEDPROMOTEDCLOSEDNEVERED |
| sf_devops__Subject__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSubject of the work item. DevOps Center uses this field only to display the subject in the UI. |

#### See Also

-   [Branch (sf\_devops\_\_Branch\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__branch__c.htm "Stores the state of a branch in the source control repository (also version control system, or VCS). In the DevOps Center object model, this object is a child of the Repository where the branch lives. Work Item and Pipeline Stage records refer to this object. This object is available in all orgs that have DevOps Center installed.")

-   [Environment (sf\_devops\_\_Environment\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm "Represents a connection from DevOps Center to an environment, which currently can be only a Salesforce org. Developers use development environments to do their work. Each pipeline stage has an associated environment. This object is available in all orgs that have DevOps Center installed.")

-   [Change Bundle (sf\_devops\_\_Change\_Bundle\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_bundle__c.htm "A collection of Work Item records that are promoted as a single unit to the next pipeline stage. This collection helps ensure a consistent merge and deployment of the metadata as it moves through the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

-   [Project (sf\_devops\_\_Project\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm "Represents the parent of all DevOps Center custom objects. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Branch (sf_devops__Branch__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__branch__c.htm)
- Environment (sf_devops__Environment__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm)
- Change Bundle (sf_devops__Change_Bundle__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_bundle__c.htm)
- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
- Project (sf_devops__Project__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm)
