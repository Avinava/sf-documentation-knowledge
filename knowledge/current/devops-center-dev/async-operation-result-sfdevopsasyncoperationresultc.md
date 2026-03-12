---
title: "Async Operation Result (sf_devops__Async_Operation_Result__c)"
domain: devops-center-dev
topic: async-operation-result-sfdevopsasyncoperationresultc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.413Z
estimatedTokens: 791
keywords: [Async, Operation, Result, sf_devops__Async_Operation_Result__c, communication, bridge, Heroku, app, DevOps, Center, creates, instance, delegates, certain, asynchronous]
---

# Async Operation Result (sf_devops__Async_Operation_Result__c)

> Represents the communication bridge between the Heroku app and DevOps Center.
         DevOps Center creates an instance of Async Operation Result when it delegates certain
         asynchronous operations to the Heroku app. These operations include merging branches in the
         source control repository (also called version control system, or VCS) and deploying
         metadata to environments. This object is available in orgs that have DevOps Center
      installed.

# Async Operation Result (sf\_devops\_\_Async\_Operation\_Result\_\_c)

Represents the communication bridge between the Heroku app and DevOps Center. DevOps Center creates an instance of Async Operation Result when it delegates certain asynchronous operations to the Heroku app. These operations include merging branches in the source control repository (also called version control system, or VCS) and deploying metadata to environments. This object is available in orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the Async Operation Result record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| sf_devops__Dependent_Records__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionJSON representation of all the related object records that must be updated as a result of this asynchronous operation. |
| sf_devops__Error_Details__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionIf the remote operation encounters an error, this field contains the stack trace from the Heroku app. |
| sf_devops__In_Terminal_State__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, indicates that this async operation is in a terminal state. If false, the operation is in progress.This field is a calculated field. |
| sf_devops__Log_Id__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique ID for this remote operation. Used internally by Salesforce to tie together various logging systems when investigating customer cases. |
| sf_devops__Message__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus message that’s displayed in DevOps Center as the remote operation progresses. |
| sf_devops__Operation__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionType of remote operation that this record is being used in. |
| sf_devops__Remote_Commands__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionList of remote commands that were executed as part of this remote operation. Includes git and sf (Salesforce CLI) commands. |
| sf_devops__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionStatus of the remote operation.Possible values are:CompletedErrorIgnoredIn ProgressThe default value is In Progress. |

#### See Also

-   [How DevOps Center Uses Asynchronous Operations](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_asynch.htm "The custom objects that make up the DevOps Center object model live in the org in which you installed the DevOps Center managed package. But many of the operations that DevOps Center performs happen outside this org.")

## Related Topics

- How DevOps Center Uses Asynchronous Operations (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_asynch.htm)
