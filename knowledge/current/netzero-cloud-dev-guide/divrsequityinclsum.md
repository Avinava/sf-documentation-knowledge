---
title: "DivrsEquityInclSum"
domain: netzero-cloud-dev-guide
topic: divrsequityinclsum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.804Z
estimatedTokens: 1599
keywords: [DivrsEquityInclSum, quantitative, view, organization, employee, gender, age, group, fairness, indicators, API, version, 57.0, later, Calls]
---

# DivrsEquityInclSum

> Represents information that indicates the quantitative view of the
         organization based on the employee gender, age group, and other fairness indicators.
      This object is available in API version 57.0 and later.

# DivrsEquityInclSum

Represents information that indicates the quantitative view of the organization based on the employee gender, age group, and other fairness indicators. This object is available in API version 57.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

Our platform provides you with the option to track data that you deem appropriate. We don't mandate or require you to enter any specific data. The decision to enter and track information, as well as the nature and extent of that data, rests solely with you.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AgeGroup | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the age group of an employee.Possible values are:30-50 years< 30 years> 50 years |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the employee statistics. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reporting period for which the employee statistics are generated.This field is a relationship field.Relationship NameDisclsReportingPeriodRelationship TypeLookupRefers ToDisclsReportingPeriod |
| DiversityCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of employee.Possible values are:RemunerationRepresentation |
| DiversityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of employee.Possible values are:AbilityGenderRace or EthnicitySexual Orientation |
| EmployeeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of employees. |
| EmployeePercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of employees according to the unique combination of category and type based on gender, age group, race and location. |
| EmployeeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of employee that is a part of the fairness statistic.Possible values are:EmployeesGovernance Body MembersLeadership |
| EmploymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of employment that's included in the fairness statistic.Possible values are:AllFull Time EquivalentFull-TimeNon-EmployeeNon-Guaranteed HoursPart-TimePermanentTemporary |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the gender of an employee.Possible values are:FemaleMaleNon-BinaryNot DisclosedOther |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Location | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the location of an employee. |
| ManagementLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the management level of the employee.Possible values are:Middle ManagementSenior Management |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Race | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the race of an employee. |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRelationship TypeLookupRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DivrsEquityInclSumChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[DivrsEquityInclSumFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DivrsEquityInclSumHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DivrsEquityInclSumShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DivrsEquityInclSumChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- DivrsEquityInclSumFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- DivrsEquityInclSumHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- DivrsEquityInclSumShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
