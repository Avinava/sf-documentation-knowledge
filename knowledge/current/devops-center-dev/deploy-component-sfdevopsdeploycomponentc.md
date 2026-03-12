---
title: "Deploy Component (sf_devops__Deploy_Component__c)"
domain: devops-center-dev
topic: deploy-component-sfdevopsdeploycomponentc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.454Z
estimatedTokens: 640
keywords: [Deploy, Component, sf_devops__Deploy_Component__c, Stores, aggregated, metadata, components, deployed, part, promotion, Includes, work, items, associated, child]
---

# Deploy Component (sf_devops__Deploy_Component__c)

> Stores the aggregated set of metadata components that must be deployed as
         part of a promotion. Includes the metadata components of all the work items associated with
         the promotion. The Deploy Component object is a child of Deployment Result. This
      object is available in all orgs that have DevOps Center installed.

# Deploy Component (sf\_devops\_\_Deploy\_Component\_\_c)

Stores the aggregated set of metadata components that must be deployed as part of a promotion. Includes the metadata components of all the work items associated with the promotion. The Deploy Component object is a child of Deployment Result. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Deploy Component record. |
| sf_devops__Deployment_Result__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the parent Deployment Result of this component.This field is a relationship field.Relationship Namesf_devops__Deployment_Result__rRelationship TypeMaster-detailRefers Tosf_devops__Deployment_Result__c |
| sf_devops__File_Path__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFull pathname of the -meta.xml source file for this component. The Heroku application uses this field to determine if the .forceignore file on the branch references the component. If it does, this component is ignored during the deployment to the environment. |
| sf_devops__Force_Ignored__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSet to true by the Heroku application when the component wasn’t deployed to the environment because it matched a .forceignore rule.The default value is false. |
| sf_devops__Operation__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the operation, either UPSERT or DELETE. |
| sf_devops__Source_Component__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionType and name of this metadata component. |

#### See Also

-   [Deployment Result (sf\_devops\_\_Deployment\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm "Contains information from DevOps Center to the Heroku application about how to execute a metadata deployment to an environment, such as the Apex tests and test level. After the deployment completes, this object then stores information about the deployment, such as the deployment ID and completion date. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Deployment Result (sf_devops__Deployment_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__deployment_result__c.htm)
