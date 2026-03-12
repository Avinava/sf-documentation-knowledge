---
title: "Environment (sf_devops__Environment__c)"
domain: devops-center-dev
topic: environment-sfdevopsenvironmentc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.478Z
estimatedTokens: 1633
keywords: [Environment, sf_devops__Environment__c, connection, DevOps, Center, currently, Salesforce, org, Developers, development, environments, their, work, pipeline, stage]
---

# Environment (sf_devops__Environment__c)

> Represents a connection from DevOps Center to an environment, which currently
         can be only a Salesforce org. Developers use development environments to do their work.
         Each pipeline stage has an associated environment. This object is available in all
      orgs that have DevOps Center installed.

# Environment (sf\_devops\_\_Environment\_\_c)

Represents a connection from DevOps Center to an environment, which currently can be only a Salesforce org. Developers use development environments to do their work. Each pipeline stage has an associated environment. This object is available in all orgs that have DevOps Center installed.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=devops_center_dev)

#### Warning

As DevOps Center grows to support additional types of promotions in the Salesforce ecosystem, this object might change. For example, current fields that are specific to orgs might migrate to a new org-centric custom object. And additional custom objects might be created to represent MuleSoft, Tableau, and so on.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this Environment record. |
| sf_devops__Can_Track_Changes__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, specifies that the org that this environment references has source tracking enabled.The default value is false. |
| sf_devops__Expired__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, specifies that the org that this environment references has expired. Examples of expired orgs include deleted or expired scratch orgs, or sandboxes that have been refreshed.The default value is false. |
| sf_devops__Last_Revision_Counter__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last revision counter that was pulled from the org that this environment references. DevOps Center uses this value to ensure that it doesn’t pull duplicate records from Source Member Reference. |
| sf_devops__Named_Credential__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the named credential that DevOps Center uses to connect to the org referenced by this environment. |
| sf_devops__Operation_Result__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Async Operation Result record for the current ongoing operation associated with this environment. DevOps Center sets this value when the operation begins and clears it when the operation terminates.This field is a relationship field.Relationship Namesf_devops__Operation_Result__rRelationship TypeLookupRefers Tosf_devops__Async_Operation_Result__c |
| sf_devops__Org_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe 15-character ID of the Salesforce org that this environment is connected to. DevOps Center connects to an org using a URL. When it connects, it compares its org ID with the value in this field. If the two IDs differ, DevOps Center determines that the connected org is a sandbox that has been refreshed. |
| sf_devops__Project__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the project of this environment.This field is a relationship field.Relationship Namesf_devops__Project__rRelationship TypeMaster-detailRefers Tosf_devops__Project__c |
| sf_devops__Refresh_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time that this sandbox was refreshed from its parent. DevOps Center uses this field and Refresh Source to determine which work items are missing from a recently swapped environment (sandbox). |
| sf_devops__Refresh_Source__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the environment in DevOps Center that this sandbox was cloned from. DevOps Center uses this field and Refresh Date to determine which work items are missing from a recently swapped environment (sandbox).This field is a relationship field.Relationship Namesf_devops__Refresh_Source__rRelationship TypeLookupRefers Tosf_devops__Environment__c |
| sf_devops__Replaces__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the environment that this environment replaces.This field is a relationship field.Relationship Namesf_devops__Replaces__rRelationship TypeLookupRefers Tosf_devops__Environment__c |
| sf_devops__Test_Environment__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, specifies that DevOps Center uses test.salesforce.com to log in to the org. If false, DevOps Center uses login.salesforce.com.The default value is true. |

#### See Also

-   [Source Member Reference (sf\_devops\_\_Source\_Member\_Reference\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__source_member_reference__c.htm "Represents a copy of the relevant information from a SourceMember Tooling API record in a development environment. DevOps Center copies this data to track the metadata changes that a user hasn’t yet pulled into their work item. Copying the data also makes computing Remote Change records more efficient. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

-   [Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm "Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.")

-   [Project (sf\_devops\_\_Project\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm "Represents the parent of all DevOps Center custom objects. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

-   [*Salesforce Help*: Manage Environments](https://help.salesforce.com/s/articleView?id=platform.devops_center_manage_environments.htm&type=5&language=en_US "Salesforce Help: Manage Environments - HTML (New Window)")

## Related Topics

- Source Member Reference (sf_devops__Source_Member_Reference__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__source_member_reference__c.htm)
- Async Operation Result (sf_devops__Async_Operation_Result__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__async_operation_result__c.htm)
- Project (sf_devops__Project__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm)
