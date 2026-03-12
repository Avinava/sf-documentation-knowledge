---
title: "Deployment Result (sf_devops__Deployment_Result__c)"
domain: devops-center-dev
topic: deployment-result-sfdevopsdeploymentresultc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.469Z
estimatedTokens: 1305
keywords: [Deployment, Result, sf_devops__Deployment_Result__c, DevOps, Center, Heroku, application, how, execute, metadata, environment, Apex, tests, test, level]
---

# Deployment Result (sf_devops__Deployment_Result__c)

> Contains information from DevOps Center to the Heroku application about how
         to execute a metadata deployment to an environment, such as the Apex tests and test level.
         After the deployment completes, this object then stores information about the deployment,
         such as the deployment ID and completion date. See How Promotions Work for more information. This object is available in
      all orgs that have DevOps Center installed.

# Deployment Result (sf\_devops\_\_Deployment\_Result\_\_c)

Contains information from DevOps Center to the Heroku application about how to execute a metadata deployment to an environment, such as the Apex tests and test level. After the deployment completes, this object then stores information about the deployment, such as the deployment ID and completion date. See [How Promotions Work](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions.htm "Show the objects involved when a user does an unbundled or bundled promotion.") for more information. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Deployment Result record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| sf_devops__Check_Deploy_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the date and time that a validate-only deployment completed. DevOps Center uses this value to prompt the user when a validate-only deployment is about to expire. |
| sf_devops__Check_Deploy_Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record that was used to perform the validate-only deployment.This field is a relationship field.Relationship Namesf_devops__Check_Deploy_Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Check_Deploy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDevOps Center sets this field to true to alert the Heroku application to perform a validate-only deployment.The default value is false. |
| sf_devops__Completion_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the promotion of this Deployment Result completed. |
| sf_devops__Deployment_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the deployment. The Heroku application sets this field after a successful deployment to the environment. |
| sf_devops__Full_Deploy__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDevOps Center sets this field to true to alert the Heroku application to deploy all of the metadata from the branch, rather than just the metadata components in the Deploy Component records.The default value is false. |
| sf_devops__Number_Tests_Completed__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNumber of tests that completed as part of the deployment to the environment. The Heroku application sets this field after the deployment. DevOps Center uses this field to determine if a validate-only deployment is available for a subsequent quick deploy. |
| sf_devops__Run_Tests__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionIf the Test Level field is set to RunSpecifiedTests, this field contains the comma-separated list of Apex tests to run during the deployment. |
| sf_devops__Status__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record that was used for the associated promotion or quick deploy.This field is a relationship field.Relationship Namesf_devops__Status__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Test_Level__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the level of Apex tests to run during the deployment. The Heroku application uses this field when it executes the deployment. Valid values are:NoTestRunRunAllTestsInOrgRunLocalTestsRunSpecifiedTests |

#### See Also

-   [*Metadata API Developer Guide*: deploy()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_deploy.htm "Metadata API Developer Guide: deploy() - HTML (New Window)")

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

-   [How Promotions Work](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions.htm "Show the objects involved when a user does an unbundled or bundled promotion.")

## Related Topics

- How Promotions Work (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions.htm)
- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
