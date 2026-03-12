---
title: "Repository (sf_devops__Repository__c)"
domain: devops-center-dev
topic: repository-sfdevopsrepositoryc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.534Z
estimatedTokens: 734
keywords: [Repository, sf_devops__Repository__c, specific, location, source, control, system, metadata, project, stored, Multiple, projects, orgs, DevOps, Center]
---

# Repository (sf_devops__Repository__c)

> Represents a specific location in a source control system where the
         metadata for a project is stored. Multiple projects can reference the same repository.
      This object is available in all orgs that have DevOps Center installed.

# Repository (sf\_devops\_\_Repository\_\_c)

Represents a specific location in a source control system where the metadata for a project is stored. Multiple projects can reference the same repository. This object is available in all orgs that have DevOps Center installed.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=devops_center_dev)

#### Warning

Many of the fields on this object are specific to GitHub. As DevOps Center supports additional source control systems, these fields will likely change or move.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this Repository record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| sf_devops__Default_Branch__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionBranch in the repository that contains all the changes you plan to release. In GitHub, this branch is typically called main. |
| sf_devops__GitHub_Owner__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOwner of the repository. In GitHub, this string is used in the URL for the repository. |
| sf_devops__GitHub_Repo__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the repository. In GitHub, this string is used in the URL for the repository. |
| sf_devops__Last_Event__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the most recent VCS Event that DevOps Center processed from GitHub. DevOps Center uses this ID to ensure it doesn’t duplicate downloading or reprocessing events. |
| sf_devops__Named_Credential__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the named credential that DevOps Center uses to connect to this repository. |
| sf_devops__Polling_Interval__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies how often DevOps Center polls for VCS Events. |
| sf_devops__Provider__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionProvider of this repository. Currently, the only valid value is GitHub. |

#### See Also

-   [Project (sf\_devops\_\_Project\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm "Represents the parent of all DevOps Center custom objects. See *** for more information. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Project (sf_devops__Project__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__project__c.htm)
