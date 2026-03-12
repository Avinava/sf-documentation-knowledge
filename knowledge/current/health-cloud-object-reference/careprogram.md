---
title: "CareProgram"
domain: health-cloud-object-reference
topic: careprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.387Z
estimatedTokens: 1770
keywords: [CareProgram, activities, patient, therapy, financial, assistance, education, wellness, fitness, plan, offered, participants, employer, insurer, Calls]
---

# CareProgram

> Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants by an employer or
		insurer.

# CareProgram

Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants by an employer or insurer.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActiveSiteCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of active sites for conducting the research study. This field is available in API version 64.0 and later when Site Management is enabled. |
| BudgetAmount | TypeCurrencyPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionApproved budget for the care program. |
| CareProgramName | TypeTextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the care program. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the category of the care program.Possible values are:AdvancedTherapyTrialManagement (This field is available for the Participant Management feature in API version 61.0 and later.)Patient Services (This field is available with Patient Program Outcome Management permission set in API version 62.0 and later.) |
| CurrentEnrolleeCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of enrollees who have joined the care program to date. This field is available for the Participant Management feature in API version 61.0 and later. |
| Description | TypeLong Text AreaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA short description explaining the program. |
| EndDate | TypeDatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProgram termination date. |
| EnrollmentDurationMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the participant enrollment duration. This field is available in API version 64.0 and later when Site Management is enabled.This field is a relationship field.Relationship NameEnrollmentDurationMeasureRefers ToUnitOfMeasure |
| EnrollmentRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate of the participant enrollment at the site. This is calculated by dividing the target enrollment count by the target enrollment duration and the number of planned sites. This field is available in API version 64.0 and later when Site Management is enabled. |
| FirstSiteClosedOutDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the first site is closed out. |
| FirstSiteActivatedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the first site is activated for conducting research studies. This field is available in API version 64.0 and later when Site Management is enabled. |
| LastSiteActivatedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the last site is activated for conducting research studies. This field is available in API version 64.0 and later when Site Management is enabled. |
| LastSiteClosedOutDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the last site is closed out. This field is available in API version 64.0 and later when Site Management is enabled. |
| ParentProgram | TypeLookup(Care Program)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of another program that this program is a part of, if any. |
| ProgramSponsor | TypeLookup(Account)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the third-party program sponsor, if any. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the record was sourced. |
| StartDate | TypeDatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEffective start date of the program. |
| Status | TypePick listPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the program. |
| TargetEnrollmentDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration in which the enrollment for the targeted number of participants must be completed. This field is available in API version 64.0 and later when Site Management is enabled. |
| TargetEnrolleeCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe target enrollee count of the care program. This field is available for the Participant Management feature in API version 61.0 and later. |
| TargetSiteCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of sites planned for conducting the research study. This field is available in API version 64.0 and later when Site Management is enabled. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareProgramChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[CareProgramFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareProgramHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareProgramShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareProgramChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareProgramFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareProgramHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareProgramShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
