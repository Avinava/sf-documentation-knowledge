---
title: "Work Item Promote (sf_devops__Work_Item_Promote__c)"
domain: devops-center-dev
topic: work-item-promote-sfdevopsworkitempromotec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.606Z
estimatedTokens: 1503
keywords: [Work, Item, Promote, sf_devops__Work_Item_Promote__c, unbundled, promotion, stage, pipeline, Promotions, Deeper, Look, orgs, DevOps, Center, installed]
---

# Work Item Promote (sf_devops__Work_Item_Promote__c)

> Represents the unbundled promotion of a work item to the next stage
         in a pipeline. See Unbundled Promotions: A Deeper Look for more information. This
      object is available in all orgs that have DevOps Center installed.

# Work Item Promote (sf\_devops\_\_Work\_Item\_Promote\_\_c)

Represents the unbundled promotion of a work item to the next stage in a pipeline. See [Unbundled Promotions: A Deeper Look](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions_unbundled.htm "Now that we know the main custom objects involved in an unbundled promotion, let’s step through the different phases of the promotion and check the status of these objects at each phase.") for more information. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Work Item Promote record. |
| sf_devops__Deployment_Result__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Deploy Result record that DevOps Center used to control the deployment of the work item.This field is a relationship field.Relationship Namesf_devops__Deployment_Result__rRelationship TypeLookupRefers Tosf_devops__Deployment_Result__c |
| sf_devops__Merge_Result__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the Merge Result record that DevOps Center used to control how the feature branch associated with the work item was merged as part of the promotion.This field is a relationship field.Relationship Namesf_devops__Merge_Result__rRelationship TypeLookupRefers Tosf_devops__Merge_Result__c |
| sf_devops__Pipeline_Stage__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the pipeline stage that the work item was promoted to.This field is a relationship field.Relationship Namesf_devops__Pipeline_Stage__rRelationship TypeMaster-detailRefers Tosf_devops__Pipeline_Stage__c |
| sf_devops__Rebase_Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record associated with a potential remote rebase operation. After DevOps Center performs an unbundled promotion of a work item, it checks whether another unbundled promotion is pending. If there is, DevOps Center must rebase the feature branch of the original work item to the branch in the next stage of the pipeline. This field references the Async Operation Result that’s doing this work.This field is a relationship field.Relationship Namesf_devops__Rebase_Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record associated with the remote operation of promoting this work item.This field is a relationship field.Relationship Namesf_devops__Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Work_Item__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the work item that was promoted.This field is a relationship field.Relationship Namesf_devops__Work_Item__rRelationship TypeMaster-detailRefers Tosf_devops__Work_Item__c |

#### See Also

-   [Deployment Result (sf\_devops\_\_Deployment\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm "Contains information from DevOps Center to the Heroku application about how to execute a metadata deployment to an environment, such as the Apex tests and test level. After the deployment completes, this object then stores information about the deployment, such as the deployment ID and completion date. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

-   [Merge Result (sf\_devops\_\_Merge\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__merge_result__c.htm "Contains information from DevOps Center to the Heroku application about the source control branch to merge as part of a promotion. When the merge completes, this object then stores information about the merge, such as the ID of the merge and when it happened. This object is available in all orgs that have DevOps Center installed.")

-   [Pipeline Stage (sf\_devops\_\_Pipeline\_Stage\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm "Represents a connection from a pipeline to an environment; the collection of all pipeline stages in a project make up the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Work Item (sf\_devops\_\_Work\_Item\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm "Represents a collection of metadata changes in a project. A work item can be associated with an environment in which the work is performed. If it’s not connected to an environment, the VCS Event object handles the changes. A work item goes through a number of development lifecycle stages until all development work is complete and the work item is part of the release pipeline. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Unbundled Promotions: A Deeper Look (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions_unbundled.htm)
- Deployment Result (sf_devops__Deployment_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm)
- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
- Merge Result (sf_devops__Merge_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__merge_result__c.htm)
- Pipeline Stage (sf_devops__Pipeline_Stage__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm)
- Work Item (sf_devops__Work_Item__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm)
