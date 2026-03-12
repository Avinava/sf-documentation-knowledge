---
title: "Change Bundle Install (sf_devops__Change_Bundle_Install__c)"
domain: devops-center-dev
topic: change-bundle-install-sfdevopschangebundleinstallc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.439Z
estimatedTokens: 1223
keywords: [Change, Bundle, Install, sf_devops__Change_Bundle_Install__c, deployment, metadata, components, associated, environment, orgs, DevOps, Center, installed, _devops, _Change]
---

# Change Bundle Install (sf_devops__Change_Bundle_Install__c)

> Represents the deployment of the metadata components associated with a change
         bundle into an environment. This object is available in all orgs that have DevOps
      Center installed.

# Change Bundle Install (sf\_devops\_\_Change\_Bundle\_Install\_\_c)

Represents the deployment of the metadata components associated with a change bundle into an environment. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Change Bundle Install record. |
| sf_devops__Change_Bundle__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Change Bundle record that’s being deployed.This field is a relationship field.Relationship Namesf_devops__Change_Bundle__rRelationship TypeMaster-detailRefers Tosf_devops__Change_Bundle__c |
| sf_devops__Deployment_Result__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Deployment Result record that controls the metadata deployment associated with this record.This field is a relationship field.Relationship Namesf_devops__Deployment_Result__rRelationship TypeLookupRefers Tosf_devops__Deployment_Result__c |
| sf_devops__Environment__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the environment in which the change bundle is being deployed.This field is a relationship field.Relationship Namesf_devops__Environment__rRelationship TypeLookupRefers Tosf_devops__Environment__c |
| sf_devops__Merge_Result__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the Merge Result record that lists the source control branches that were merged as part of this deployment.This field is a relationship field.Relationship Namesf_devops__Merge_Result__rRelationship TypeLookupRefers Tosf_devops__Merge_Result__c |
| sf_devops__Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record that’s associated with this record.This field is a relationship field.Relationship Namesf_devops__Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |

#### See Also

-   [Change Bundle (sf\_devops\_\_Change\_Bundle\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_bundle__c.htm "A collection of Work Item records that are promoted as a single unit to the next pipeline stage. This collection helps ensure a consistent merge and deployment of the metadata as it moves through the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Deployment Result (sf\_devops\_\_Deployment\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm "Contains information from DevOps Center to the Heroku application about how to execute a metadata deployment to an environment, such as the Apex tests and test level. After the deployment completes, this object then stores information about the deployment, such as the deployment ID and completion date. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

-   [Environment (sf\_devops\_\_Environment\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm "Represents a connection from DevOps Center to an environment, which currently can be only a Salesforce org. Developers use development environments to do their work. Each pipeline stage has an associated environment. This object is available in all orgs that have DevOps Center installed.")

-   [Merge Result (sf\_devops\_\_Merge\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__merge_result__c.htm "Contains information from DevOps Center to the Heroku application about the source control branch to merge as part of a promotion. When the merge completes, this object then stores information about the merge, such as the ID of the merge and when it happened. This object is available in all orgs that have DevOps Center installed.")

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

## Related Topics

- Change Bundle (sf_devops__Change_Bundle__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_bundle__c.htm)
- Deployment Result (sf_devops__Deployment_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm)
- Environment (sf_devops__Environment__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm)
- Merge Result (sf_devops__Merge_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__merge_result__c.htm)
- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
