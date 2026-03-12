---
title: "Back Sync (sf_devops__Back_Sync__c)"
domain: devops-center-dev
topic: back-sync-sfdevopsbacksyncc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.421Z
estimatedTokens: 1840
keywords: [Back, Sync, sf_devops__Back_Sync__c, synchronization, DevOps, Center, user’s, development, environment, pipeline, stage’s, branch, particular, tracks, happened]
---

# Back Sync (sf_devops__Back_Sync__c)

> Represents the synchronization between a DevOps Center user’s development
         environment and the first pipeline stage’s branch. In particular, this object tracks when
         the synchronization happened and the records of the Source Member Reference object that the
         synchronization can ignore. This object is available in all orgs that have DevOps
      Center installed.

# Back Sync (sf\_devops\_\_Back\_Sync\_\_c)

Represents the synchronization between a DevOps Center user’s development environment and the first pipeline stage’s branch. In particular, this object tracks when the synchronization happened and the records of the Source Member Reference object that the synchronization can ignore. This object is available in all orgs that have DevOps Center installed.

Let’s set up an example to see how this works. Assume that:

-   The user has already pulled two metadata changes into their development environment, represented by two Remote Change records. The Revision Counter fields for these two metadata files in the Source Member Reference object are 5 and 6.
-   There are two unpulled metadata changes in the Source Member Reference object, with revision counters 7 and 8.
-   The user clicks **Sync** in their Pipeline Environment. DevOps Center sets the Start Revision Counter field of this Back Sync record to 8.
-   The synchronization generates 3 new rows in the Source Member Reference table with Revision Counter values of 9, 10, and 11.
-   The synchronization completes, and DevOps Center sets the End Revision Counter field of this Back Sync record to 11.
-   The user makes two more metadata changes in their development environment: the corresponding with Revision Counter values in the Source Member Reference object are 12 and 13.

The next time the user clicks **Pull Changes** from within their work item, DevOps centers pulls metadata changes that correspond to Source Member References with revision counters 7 through 13.

DevOps Center then must convert relevant Source Member References into Remote Change records. It first checks other Back Sync records associated with this development environment. In our example, DevOps Center ignores the revision counters 9, 10, and 11 and creates Remote Change records for only revision counters 7, 8, 12, and 13.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the Back Sync record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| sf_devops__Deployment_Result__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA reference to the Deployment Result record that was sent to the Heroku application to perform the metadata deployment to the development environment.This field is a relationship field.Relationship Namesf_devops__Deployment_Result__rRelationship TypeLookupRefers Tosf_devops__Deployment_Result__c |
| sf_devops__Destination_Environment__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA reference to the development environment that was synchronized.This field is a relationship field.Relationship Namesf_devops__Destination_Environment__rRelationship TypeLookupRefers Tosf_devops__Environment__c |
| sf_devops__End_Revision_Counter__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe Source Member Reference revision counter in the development environment after the synchronization completes. |
| sf_devops__Operation_Result__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the Async Operation Result that was used in this remote operation.This field is a relationship field.Relationship Namesf_devops__Operation_Result__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Source_Pipeline_Stage__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA reference to the Pipeline Stage whose branch was used to deploy metadata from. This stage is always the first one in the pipeline.This field is a relationship field.Relationship Namesf_devops__Source_Pipeline_Stage__rRelationship TypeLookupRefers Tosf_devops__Pipeline_Stage__c |
| sf_devops__Start_Revision_Counter__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe Source Member Reference revision counter in the development environment before the synchronization was initiated. |

#### See Also

-   [*Salesforce Help*: Synchronize Your Development Environment](https://help.salesforce.com/s/articleView?id=platform.devops_center_dev_environment_sync.htm&type=5&language=en_US "Salesforce Help: Synchronize Your Development Environment - HTML (New Window)")

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

-   [Source Member Reference (sf\_devops\_\_Source\_Member\_Reference\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__source_member_reference__c.htm "Represents a copy of the relevant information from a SourceMember Tooling API record in a development environment. DevOps Center copies this data to track the metadata changes that a user hasn’t yet pulled into their work item. Copying the data also makes computing Remote Change records more efficient. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

-   [Environment (sf\_devops\_\_Environment\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm "Represents a connection from DevOps Center to an environment, which currently can be only a Salesforce org. Developers use development environments to do their work. Each pipeline stage has an associated environment. This object is available in all orgs that have DevOps Center installed.")

-   [Pipeline Stage (sf\_devops\_\_Pipeline\_Stage\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm "Represents a connection from a pipeline to an environment; the collection of all pipeline stages in a project make up the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Deployment Result (sf\_devops\_\_Deployment\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm "Contains information from DevOps Center to the Heroku application about how to execute a metadata deployment to an environment, such as the Apex tests and test level. After the deployment completes, this object then stores information about the deployment, such as the deployment ID and completion date. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
- Source Member Reference (sf_devops__Source_Member_Reference__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__source_member_reference__c.htm)
- Environment (sf_devops__Environment__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm)
- Pipeline Stage (sf_devops__Pipeline_Stage__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm)
- Deployment Result (sf_devops__Deployment_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm)
