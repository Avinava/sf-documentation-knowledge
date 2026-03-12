---
title: "Pipeline (sf_devops__Pipeline__c)"
domain: devops-center-dev
topic: pipeline-sfdevopspipelinec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.504Z
estimatedTokens: 471
keywords: [Pipeline, sf_devops__Pipeline__c, collection, Stage, records, together, DevOps, Center, release, project, orgs, installed, _devops, _Pipeline, Calls]
---

# Pipeline (sf_devops__Pipeline__c)

> Represents a collection of Pipeline Stage records that together make
         up the DevOps Center release pipeline in a project. This object is available in all
      orgs that have DevOps Center installed.

# Pipeline (sf\_devops\_\_Pipeline\_\_c)

Represents a collection of Pipeline Stage records that together make up the DevOps Center release pipeline in a project. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this Pipeline record. |
| sf_devops__Activated__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the admin has clicked Activate for the pipeline in DevOps Center and users can start promoting work items. If false, the admin is still building the pipeline.The default value is false. |
| sf_devops__Project__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the parent project of this pipeline.This field is a relationship field.Relationship Namesf_devops__Project__rRelationship TypeMaster-detailRefers Tosf_devops__Project__c |

#### See Also

-   [Pipeline Stage (sf\_devops\_\_Pipeline\_Stage\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm "Represents a connection from a pipeline to an environment; the collection of all pipeline stages in a project make up the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Project (sf\_devops\_\_Project\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm "Represents the parent of all DevOps Center custom objects. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Pipeline Stage (sf_devops__Pipeline_Stage__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__pipeline_stage__c.htm)
- Project (sf_devops__Project__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm)
