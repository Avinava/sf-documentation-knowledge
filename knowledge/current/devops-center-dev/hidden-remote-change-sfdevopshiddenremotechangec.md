---
title: "Hidden Remote Change (sf_devops__Hidden_Remote_Change__c)"
domain: devops-center-dev
topic: hidden-remote-change-sfdevopshiddenremotechangec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.483Z
estimatedTokens: 796
keywords: [Hidden, Remote, Change, sf_devops__Hidden_Remote_Change__c, hide, record, work, item, sample, case, feature, branch, associated, forceignore, file]
---

# Hidden Remote Change (sf_devops__Hidden_Remote_Change__c)

> Used to hide a Remote Change record from a work item. A sample use case is
         when a feature branch associated with the work item has a .forceignore file that excludes the metadata represented by the Remote Change
         record. See How DevOps Center Keeps Track of User Changes for more information. This
      object is available in all orgs that have DevOps Center installed.

# Hidden Remote Change (sf\_devops\_\_Hidden\_Remote\_Change\_\_c)

Used to hide a Remote Change record from a work item. A sample use case is when a feature branch associated with the work item has a .forceignore file that excludes the metadata represented by the Remote Change record. See [How DevOps Center Keeps Track of User Changes](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm "When a DevOps Center user is connected to a development environment, it tracks the changes the user makes to the environment. This tracking allows DevOps Center to later commit the changes to the source control repository for review.") for more information. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Hidden Remote Change record. |
| sf_devops__Hidden_by_Force_Ignore__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, specifies that this Remote Change is hidden from the work item because it matched a .forceignore rule.The default value is false. |
| sf_devops__Remote_Change__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Remote Change record that’s hidden.This field is a relationship field.Relationship Namesf_devops__Remote_Change__rRelationship TypeMaster-detailRefers Tosf_devops__Remote_Change__c |
| sf_devops__Work_Item__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the work item that can’t see the Remote Change record because it’s hidden.This field is a relationship field.Relationship Namesf_devops__Work_Item__rRelationship TypeMaster-detailRefers Tosf_devops__Work_Item__c |

#### See Also

-   [Work Item (sf\_devops\_\_Work\_Item\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm "Represents a collection of metadata changes in a project. A work item can be associated with an environment in which the work is performed. If it’s not connected to an environment, the VCS Event object handles the changes. A work item goes through a number of development lifecycle stages until all development work is complete and the work item is part of the release pipeline. This object is available in all orgs that have DevOps Center installed.")

-   [Remote Change (sf\_devops\_\_Remote\_Change\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__remote_change__c.htm "Represents a change to an environment that’s connected to DevOps Center. In particular, a Remote Change record represents an accumulation of operations on a particular piece of metadata. DevOps Center presents this change to the user so they can pull it into their work item and commit it to the associated feature branch. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- How DevOps Center Keeps Track of User Changes (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm)
- Work Item (sf_devops__Work_Item__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__work_item__c.htm)
- Remote Change (sf_devops__Remote_Change__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__remote_change__c.htm)
