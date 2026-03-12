---
title: "Merge Result (sf_devops__Merge_Result__c)"
domain: devops-center-dev
topic: merge-result-sfdevopsmergeresultc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.489Z
estimatedTokens: 453
keywords: [Merge, Result, sf_devops__Merge_Result__c, DevOps, Center, Heroku, application, source, control, branch, part, promotion, completes, stores, happened]
---

# Merge Result (sf_devops__Merge_Result__c)

> Contains information from DevOps Center to the Heroku application
         about the source control branch to merge as part of a promotion. When the merge completes,
         this object then stores information about the merge, such as the ID of the merge and when
         it happened. This object is available in all orgs that have DevOps Center installed.

# Merge Result (sf\_devops\_\_Merge\_Result\_\_c)

Contains information from DevOps Center to the Heroku application about the source control branch to merge as part of a promotion. When the merge completes, this object then stores information about the merge, such as the ID of the merge and when it happened. This object is available in all orgs that have DevOps Center installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this Merge Result record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| sf_devops__Merge_Date__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time that the merge happened. |
| sf_devops__Previous_Remote_Reference__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique ID of the branch before the merge. In GitHub, this ID is called the HEAD SHA. |
| sf_devops__Remote_Reference__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique ID of this merge. In GitHub, this ID is called the SHA. |
| sf_devops__Source_Branch_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the branch that’s being merged. |
| sf_devops__Target_Branch_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the branch into which the source branch is being merged. |
