---
title: "Pipeline Stage (sf_devops__Pipeline_Stage__c)"
domain: devops-center-dev
topic: pipeline-stage-sfdevopspipelinestagec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.513Z
estimatedTokens: 1486
keywords: [Pipeline, Stage, sf_devops__Pipeline_Stage__c, connection, environment, collection, stages, project, release, orgs, DevOps, Center, installed, _devops, _Pipeline]
---

# Pipeline Stage (sf_devops__Pipeline_Stage__c)

> Represents a connection from a pipeline to an environment; the
         collection of all pipeline stages in a project make up the release pipeline. This
      object is available in all orgs that have DevOps Center installed.

# Pipeline Stage (sf\_devops\_\_Pipeline\_Stage\_\_c)

Represents a connection from a pipeline to an environment; the collection of all pipeline stages in a project make up the release pipeline. This object is available in all orgs that have DevOps Center installed.

DevOps Center doesn’t use the Pipeline Stage object to represent the left-most Approved Work Items column in a pipeline; for this reason the column is referred to as a pseudo stage. Instead, DevOps Center computes the items in this column from all Work Item records whose Development Approved field is true but haven’t yet been promoted.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this Pipeline Stage record. |
| sf_devops__Branch__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the Branch record that contains information about the branch associated with this pipeline stage.This field is a relationship field.Relationship Namesf_devops__Branch__rRelationship TypeLookupRefers Tosf_devops__Branch__c |
| sf_devops__Environment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Environment record associated with this pipeline stage. Currently all environments are Salesforce orgs.This field is a relationship field.Relationship Namesf_devops__Environment__rRelationship TypeLookupRefers Tosf_devops__Environment__c |
| sf_devops__Next_Stage__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPointer to the next stage in the pipeline.This field is a relationship field.Relationship Namesf_devops__Next_Stage__rRelationship TypeLookupRefers Tosf_devops__Pipeline_Stage__c |
| sf_devops__Operation_Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf this pipeline stage is part of a remote operation, this field references the associated Async Operation Result record. When the operation terminates, DevOps Center clears this field value.This field is a relationship field.Relationship Namesf_devops__Operation_Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Pipeline__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Pipeline record that this stage belongs to.This field is a relationship field.Relationship Namesf_devops__Pipeline__rRelationship TypeMaster-detailRefers Tosf_devops__Pipeline__c |
| sf_devops__Prerelease__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether this stage is the bundling stage. See How Promotions Work for more information.This field is a calculated field. |
| sf_devops__Promote_Review_Remote_Reference__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique ID of the change request from this stage to the next stage. In GitHub, a change request is called a pull request (PR) and the ID is the PR number. DevOps Center creates this change request whenever changes are merged into the branch associated with this pipeline stage. |
| sf_devops__Swap_Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record for the remote operation that’s deploying metadata to this stage’s environment after it has been swapped.This field is a relationship field.Relationship Namesf_devops__Swap_Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Versioned__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, this pipeline stage accepts only change bundles for promotion. If false, this pipeline stage accepts only work items for promotion.The default value is false. |

#### See Also

-   [Pipeline (sf\_devops\_\_Pipeline\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline__c.htm "Represents a collection of Pipeline Stage records that together make up the DevOps Center release pipeline in a project. This object is available in all orgs that have DevOps Center installed.")

-   [Branch (sf\_devops\_\_Branch\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__branch__c.htm "Stores the state of a branch in the source control repository (also version control system, or VCS). In the DevOps Center object model, this object is a child of the Repository where the branch lives. Work Item and Pipeline Stage records refer to this object. This object is available in all orgs that have DevOps Center installed.")

-   [Environment (sf\_devops\_\_Environment\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm "Represents a connection from DevOps Center to an environment, which currently can be only a Salesforce org. Developers use development environments to do their work. Each pipeline stage has an associated environment. This object is available in all orgs that have DevOps Center installed.")

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

## Related Topics

- How Promotions Work (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions.htm)
- Pipeline (sf_devops__Pipeline__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline__c.htm)
- Branch (sf_devops__Branch__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__branch__c.htm)
- Environment (sf_devops__Environment__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm)
- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
