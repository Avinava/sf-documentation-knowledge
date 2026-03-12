---
title: "Change Bundle (sf_devops__Change_Bundle__c)"
domain: devops-center-dev
topic: change-bundle-sfdevopschangebundlec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.432Z
estimatedTokens: 360
keywords: [Change, Bundle, sf_devops__Change_Bundle__c, collection, Work, Item, records, promoted, unit, pipeline, stage, helps, ensure, consistent, merge]
---

# Change Bundle (sf_devops__Change_Bundle__c)

> A collection of Work Item records that are promoted as a single unit to the
         next pipeline stage. This collection helps ensure a consistent merge and deployment of the
         metadata as it moves through the release pipeline. This object is available in all
      orgs that have DevOps Center installed.

# Change Bundle (sf\_devops\_\_Change\_Bundle\_\_c)

A collection of Work Item records that are promoted as a single unit to the next pipeline stage. This collection helps ensure a consistent merge and deployment of the metadata as it moves through the release pipeline. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the Change Bundle record. |
| sf_devops__Project__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA reference to the project in which this change bundle lives.This field is a relationship field.Relationship Namesf_devops__Project__rRelationship TypeMaster-detailRefers Tosf_devops__Project__c |
| sf_devops__Version_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique name of this bundle within the project. |

#### See Also

-   [Project (sf\_devops\_\_Project\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm "Represents the parent of all DevOps Center custom objects. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Project (sf_devops__Project__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm)
