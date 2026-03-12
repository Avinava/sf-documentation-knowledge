---
title: "wkdw__EmployeeWorkExperience__c"
domain: workdotcom-dev-guide
topic: wkdwemployeeworkexperiencec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.468Z
estimatedTokens: 535
keywords: [wkdw__EmployeeWorkExperience__c, Stores, work, experience, employee, Workspace, community, orgs, managed, package, installed, wkdw, _EmployeeWorkExperience, Calls]
---

# wkdw__EmployeeWorkExperience__c

> Stores work experience of an employee in the Employee Workspace community.
    This object is available in orgs that have the Employee Workspace managed package
    installed.

# wkdw\_\_EmployeeWorkExperience\_\_c

Stores work experience of an employee in the Employee Workspace community. This object is available in orgs that have the Employee Workspace managed package installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAggregatable, Create, Defaulted On Create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of an employee’s work experience. |
| OwnerId | TypereferencePropertiesAggregatable, Create, Defaulted On Create, Filter, Group, NamePointing, Sort, UpdateDescriptionThe ID of the user who owns the work experience record. |
| wkdw__CompletionDate__c | TypedatePropertiesAggregatable, Create, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the work was completed. If the completion date isn’t specified, the work is marked as ongoing. |
| wkdw__Description__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of an employee’s work experience. |
| wkdw__Ongoing__c | TypebooleanPropertiesDefaulted On Create, Filter, Group, SortDescriptionIndicates if the specified work is an ongoing experience. |
| wkdw__Role__c | TypestringPropertiesAggregatable, Create, Filter, Group, Sort, UpdateDescriptionThe role of an employee in the work experience. |
| wkdw__StartDate__c | TypedatePropertiesAggregatable, Create, Filter, Group, Sort, UpdateDescriptionThe date when the work was started. |
| wkdw__URLs__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRelated URLs, separated by line breaks, for the work experience. |
