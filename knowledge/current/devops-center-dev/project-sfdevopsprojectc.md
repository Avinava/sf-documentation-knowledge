---
title: "Project (sf_devops__Project__c)"
domain: devops-center-dev
topic: project-sfdevopsprojectc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.519Z
estimatedTokens: 703
keywords: [Project, sf_devops__Project__c, parent, DevOps, Center, custom, objects, Understand, Data, Model, orgs, installed, _devops, _Project, Calls]
---

# Project (sf_devops__Project__c)

> Represents the parent of all DevOps Center custom objects. See Understand the DevOps Center Data Model for more information. This object is available in
      all orgs that have DevOps Center installed.

# Project (sf\_devops\_\_Project\_\_c)

Represents the parent of all DevOps Center custom objects. See [Understand the DevOps Center Data Model](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_datamodel.htm "The DevOps Center object model consists of custom objects that are created when you install the DevOps Center managed package in an org. The top object is Project, which is the direct or indirect parent of almost all other objects. The only exception is Repository, which one or more projects reference.") for more information. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this Project record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| sf_devops__Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the project. DevOps Center uses this field only to display the description in the UI. |
| sf_devops__Hidden__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, this project doesn’t show up in the DevOps Center list of projects.The default value is false. |
| sf_devops__Package_Directories__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionList of filepaths that DevOps Center uses when inspecting feature branches for metadata. DevOps Center first loads the list from the sfdx-project.json file when the admin creates the Salesforce DX project. DevOps Center subsequently updates the list whenever the sfdx-project.json file changes on the branch associated with the final pipeline stage. |
| sf_devops__Platform_Repository__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the project’s source control repository.This field is a relationship field.Relationship Namesf_devops__Platform_Repository__rRelationship TypeLookupRefers Tosf_devops__Repository__c |

#### See Also

-   [Repository (sf\_devops\_\_Repository\_\_c)](atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__repository__c.htm "Represents a specific location in a source control system where the metadata for a project is stored. Multiple projects can reference the same repository. This object is available in all orgs that have DevOps Center installed.")

## Related Topics

- Understand the DevOps Center Data Model (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_datamodel.htm)
- Repository (sf_devops__Repository__c) (atlas.en-us.devops_center_dev.meta/devops_center_dev/sforce_api_objects_sf_devops__repository__c.htm)
