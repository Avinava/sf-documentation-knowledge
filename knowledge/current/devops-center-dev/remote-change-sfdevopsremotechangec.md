---
title: "Remote Change (sf_devops__Remote_Change__c)"
domain: devops-center-dev
topic: remote-change-sfdevopsremotechangec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.526Z
estimatedTokens: 1043
keywords: [Remote, Change, sf_devops__Remote_Change__c, environment, that’s, connected, DevOps, Center, particular, record, accumulation, operations, piece, metadata, presents]
---

# Remote Change (sf_devops__Remote_Change__c)

> Represents a change to an environment that’s connected to DevOps
         Center. In particular, a Remote Change record represents an accumulation of operations on a
         particular piece of metadata. DevOps Center presents this change to the user so they can
         pull it into their work item and commit it to the associated feature branch. See How DevOps Center Keeps Track of User Changes for more information. This object is available in
      all orgs that have DevOps Center installed.

# Remote Change (sf\_devops\_\_Remote\_Change\_\_c)

Represents a change to an environment that’s connected to DevOps Center. In particular, a Remote Change record represents an accumulation of operations on a particular piece of metadata. DevOps Center presents this change to the user so they can pull it into their work item and commit it to the associated feature branch. See [How DevOps Center Keeps Track of User Changes](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm "When a DevOps Center user is connected to a development environment, it tracks the changes the user makes to the environment. This tracking allows DevOps Center to later commit the changes to the source control repository for review.") for more information. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Remote Change record. |
| sf_devops__Change_Submission__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf this remote change has already been committed to the feature branch, this field contains a reference to the associated Change Submission record.This field is a relationship field.Relationship Namesf_devops__Change_Submission__rRelationship TypeLookupRefers Tosf_devops__Change_Submission__c |
| sf_devops__Environment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the environment that this remote change is associated with.This field is a relationship field.Relationship Namesf_devops__Environment__rRelationship TypeMaster-detailRefers Tosf_devops__Environment__c |
| sf_devops__Member_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the metadata component that this remote change represents. |
| sf_devops__Member_Type__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMetadata type that this remote change represents. |
| sf_devops__Remote_Change_By__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUsername of the user who made the metadata change in the environment. |
| sf_devops__Remote_Change_On__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate and time when the metadata change was made. |
| sf_devops__Remote_Change_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionHow the metadata was changed.Possible values are:ADDCHANGEMANUALREMOVERENAMEThe default value is ADD. |
| sf_devops__Source_Component__c | TypestringPropertiesFilter, Nillable, SortDescriptionCombination of the Member Type and Member Name fields.This field is a calculated field. |

#### See Also

-   [How DevOps Center Keeps Track of User Changes](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm "When a DevOps Center user is connected to a development environment, it tracks the changes the user makes to the environment. This tracking allows DevOps Center to later commit the changes to the source control repository for review.")

-   [Change Submission (sf\_devops\_\_Change\_Submission\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_submission__c.htm "Represents a change that was submitted (committed) to the work item feature branch. The change includes relevant metadata files. This object is available in all orgs that have DevOps Center installed.")

-   [Environment (sf\_devops\_\_Environment\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm "Represents a connection from DevOps Center to an environment, which currently can be only a Salesforce org. Developers use development environments to do their work. Each pipeline stage has an associated environment. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- How DevOps Center Keeps Track of User Changes (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm)
- Change Submission (sf_devops__Change_Submission__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_submission__c.htm)
- Environment (sf_devops__Environment__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__environment__c.htm)
