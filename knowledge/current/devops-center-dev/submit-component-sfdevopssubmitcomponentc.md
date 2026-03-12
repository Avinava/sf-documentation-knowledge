---
title: "Submit Component (sf_devops__Submit_Component__c)"
domain: devops-center-dev
topic: submit-component-sfdevopssubmitcomponentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.545Z
estimatedTokens: 929
keywords: [Submit, Component, sf_devops__Submit_Component__c, metadata, committed, feature, branch, source, control, repository, commit, initiated, two, ways, either]
---

# Submit Component (sf_devops__Submit_Component__c)

> Represents a metadata component that was committed to a feature
         branch in the source control repository. The commit can be initiated in one of two ways,
         either from within DevOps Center or directly in the source control repository. Each
         metadata component that’s part of the commit must also be deployed to an environment, and
         DevOps Center uses the Submit Component object to model the metadata. The Submit Component
         object is a child of Change Submission. This object is available in all orgs that have
      DevOps Center installed.

# Submit Component (sf\_devops\_\_Submit\_Component\_\_c)

Represents a metadata component that was committed to a feature branch in the source control repository. The commit can be initiated in one of two ways, either from within DevOps Center or directly in the source control repository. Each metadata component that’s part of the commit must also be deployed to an environment, and DevOps Center uses the Submit Component object to model the metadata. The Submit Component object is a child of Change Submission. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Submit Component record. |
| sf_devops__Change_Submission__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the parent Change Submission record that this Submit Component record is a child of.This field is a relationship field.Relationship Namesf_devops__Change_Submission__rRelationship TypeMaster-detailRefers Tosf_devops__Change_Submission__c |
| sf_devops__Empty__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, indicates that the metadata component didn’t change anything on the associated feature branch. This scenario occurs when a user pulls removed metadata from a development environment, but the metadata source doesn’t yet exist on the feature branch. DevOps Center still removes the metadata from the environment but doesn’t change the feature branch.The default value is false. |
| sf_devops__File_Path__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFull pathname of the -meta.xml source file for this component on the feature branch. |
| sf_devops__Operation__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the operation that was executed on this component. Either ADD, CHANGE, or DELETE. |
| sf_devops__Source_Component__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionCombination of the metadata name and type. |
| sf_devops__Source_Remote_Change__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf a user in DevOps Center initiated the commit, this field is a reference to the associated Remote Change record that displayed the component in the user interface.This field is a relationship field.Relationship Namesf_devops__Source_Remote_Change__rRelationship TypeLookupRefers Tosf_devops__Remote_Change__c |

#### See Also

-   [Change Submission (sf\_devops\_\_Change\_Submission\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_submission__c.htm "Represents a change that was submitted (committed) to the work item feature branch. The change includes relevant metadata files. This object is available in all orgs that have DevOps Center installed.")

-   [Remote Change (sf\_devops\_\_Remote\_Change\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__remote_change__c.htm "Represents a change to an environment that’s connected to DevOps Center. In particular, a Remote Change record represents an accumulation of operations on a particular piece of metadata. DevOps Center presents this change to the user so they can pull it into their work item and commit it to the associated feature branch. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Change Submission (sf_devops__Change_Submission__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__change_submission__c.htm)
- Remote Change (sf_devops__Remote_Change__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__remote_change__c.htm)
