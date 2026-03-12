---
title: "Source Member Reference (sf_devops__Source_Member_Reference__c)"
domain: devops-center-dev
topic: source-member-reference-sfdevopssourcememberreferencec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.538Z
estimatedTokens: 770
keywords: [Source, Member, sf_devops__Source_Member_Reference__c, copy, relevant, SourceMember, Tooling, API, record, development, environment, DevOps, Center, copies, data]
---

# Source Member Reference (sf_devops__Source_Member_Reference__c)

> Represents a copy of the relevant information from a SourceMember
         Tooling API record in a development environment. DevOps Center copies this data to track
         the metadata changes that a user hasn’t yet pulled into their work item. Copying the data
         also makes computing Remote Change records more efficient. See How DevOps Center Keeps Track of User Changes for more information. This object is available in
      all orgs that have DevOps Center installed.

# Source Member Reference (sf\_devops\_\_Source\_Member\_Reference\_\_c)

Represents a copy of the relevant information from a SourceMember Tooling API record in a development environment. DevOps Center copies this data to track the metadata changes that a user hasn’t yet pulled into their work item. Copying the data also makes computing Remote Change records more efficient. See [How DevOps Center Keeps Track of User Changes](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm "When a DevOps Center user is connected to a development environment, it tracks the changes the user makes to the environment. This tracking allows DevOps Center to later commit the changes to the source control repository for review.") for more information. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Source Member Reference record. |
| sf_devops__Remote_Change__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Remote Change record that this Source Member Reference record is linked to.This field is a relationship field.Relationship Namesf_devops__Remote_Change__rRelationship TypeMaster-detailRefers Tosf_devops__Remote_Change__c |
| sf_devops__Revision_Counter__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionValue of the RevisionCounter field of the associated SourceMember Tooling API record. |
| sf_devops__Source_Member_Id__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the associated SourceMember Tooling API record. |

#### See Also

-   [How DevOps Center Keeps Track of User Changes](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm "When a DevOps Center user is connected to a development environment, it tracks the changes the user makes to the environment. This tracking allows DevOps Center to later commit the changes to the source control repository for review.")

-   [Remote Change (sf\_devops\_\_Remote\_Change\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__remote_change__c.htm "Represents a change to an environment that’s connected to DevOps Center. In particular, a Remote Change record represents an accumulation of operations on a particular piece of metadata. DevOps Center presents this change to the user so they can pull it into their work item and commit it to the associated feature branch. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

-   [*Tooling API Developer Guide*: SourceMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_sourcemember.htm "Tooling API Developer Guide: SourceMember - HTML (New Window)")

## Related Topics

- How DevOps Center Keeps Track of User Changes (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_workitem.htm)
- Remote Change (sf_devops__Remote_Change__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__remote_change__c.htm)
