---
title: "LookedUpFromActivity"
domain: object-reference
topic: lookedupfromactivity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.623Z
estimatedTokens: 3186
keywords: [LookedUpFromActivity, read-only, activity, record, event, task, records, custom, lookup, relationships, another, queryable, Calls, Usage]
---

# LookedUpFromActivity

> This read-only object is displayed as a related list on an activity
			record (an event or a task); the list contains records that have custom lookup
			relationships from the activity to another object. This object is not
		queryable.

# LookedUpFromActivity

This read-only object is displayed as a related list on an activity record (an event or a task); the list contains records that have custom lookup relationships from the activity to another object. This object is not queryable.

## Supported Calls

describeSObjects()

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the related account, which is determined as follows:The account associated with the WhatId, if it exists; orThe account associated with the WhoId, if it exists; otherwisenullFor information on IDs, see Field TypesThis is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionIndicates one of the following:The due date of a taskThe date of an event if IsAllDayEvent is set to trueThis field has a time stamp that is always set to midnight in the Universal Time Coordinated (UTC) time zone. The time stamp doesn’t represent the time of the activity; don’t attempt to alter it to accommodate time zone differences. Label is Date. |
| ActivityDateTime | TypedateTimePropertiesAggregate, Filter, Nillable, SortDescriptionContains the event’s due date if the IsAllDayEvent flag is set to false. The time portion of this field is always transferred in the Coordinated Universal Time (UTC) time zone. Translate the time portion to or from a local time zone for the user or the application, as appropriate. Label is Due Date Time.The value for this field and StartDateTime must match, or one of them must be null. |
| ActivitySubtype | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionProvides standard subtypes to facilitate creating and searching for specific activity subtypes. This field isn’t updateable.Possible values are:TaskEmailCallEventLinkedIn —Available in API version 56.0 and later.List Email |
| ActivityType | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionRepresents one of the following values: Call, Email, Meeting, or Other. Label is Type. These are default values, and can be changed.ActivityType is the union of TaskType and EventType. If the same activity appears in both dynamic picklists, duplicate activities appear.TaskType and EventType can each have a Call type. Internally, they are distinct from each other. |
| CallDisposition | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the result of a given call; for example, “we’ll call back,” or “call unsuccessful.” Limit is 255 characters. |
| CallDurationInSeconds | TypeintPropertiesFilter, Group, Nillable, SortDescriptionDuration of the call in seconds. |
| CallObject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of a call center. Limit is 255 characters. |
| CallType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of call being answered: Inbound, Internal, or Outbound. |
| CompletedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the task was saved with a Closed status.For insert, if the task is saved with a Closed status the field is set. If the task is saved with an Open status the field is set to NULL.For update, if the task is saved with a new Closed status, the field is reset.If the task is saved with a new non-closed status, the field is reset to NULL.If the task is saved with the same closed status (that is, unchanged) there is no change to the field.NoteThe status is a dynamic enum. If the Closed mapping is changed it won’t cause an update of existing tasks. Only new insert/update operations are affected. |
| Description | TypetextareaPropertiesNillableDescriptionContains a description of the event or task. Limit is 32 KB. |
| DurationInMinutes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the duration of the event or task. |
| EndDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates the end date and time of the event or task. Available in versions 27.0 and later. This field is optional, depending on the following:If IsAllDayEvent is true, you can supply a value for either DurationInMinutes or EndDateTime. Supplying values in both fields is allowed if the values add up to the same amount of time. If both fields are null, the duration defaults to one day.If IsAllDayEvent is false, a value must be supplied for either DurationInMinutes or EndDateTime. Supplying values in both fields is allowed if the values add up to the same amount of time. |
| IsAllDayEvent | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the value of this field is set to true, then the activity is an event spanning a full day, and the ActivityDate defines the date of the event. If the value of this field is set to false, then the activity may be an event spanning less than a full day, or it may be a task. The default value of this field is false. Label is All-Day Event. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a task is closed (true) or not closed (false). The default value of this field is false. This field is set indirectly by setting Status on the task—each picklist value has a corresponding IsClosed value. Label is Closed. |
| IsHighPriority | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates a high-priority task. The default value of this field is false. This field is derived from the Priority field. |
| IsReminderSet | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a reminder is set for an activity (true) or not (false). The default value of this field is false. |
| IsTask | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the value of this field is set to true, then the activity is a task; if the value is set to false, then the activity is an event. The default value of this field is false. Label is Task. |
| IsVisibleInSelfService | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the value of this field is set to true, then the activity can be viewed in the self-service portal. The default value of this field is false. Label is Visible in Self-Service. |
| Location | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the activity is an event, then this field represents the location of the event. If the activity is a task, then the value is null. |
| OwnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the user or group who owns the activity.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToCalendar, Group, User |
| Priority | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionIndicates the priority of a task, such as high, normal, or low. The default value of this field is Normal. |
| ReminderDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the time at which a reminder is scheduled to fire if IsReminderSet is set to true. If IsReminderSet is set to false, then either the user has deselected the reminder checkbox in the user interface or the reminder has already fired at the time indicated by the value. |
| StartDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates the start date and time of the event. Available in versions 13.0 and later.The StartDateTime field contains the event start date.However, if the event’s IsAllDayEvent flag is set to true (indicating an all-day event), then the time stamp in the StartDateTime field is always set to midnight in the Coordinated Universal Time (UTC) time zone. Don’t attempt to alter the time stamp to account for any time zone differences.If the event’s IsAllDayEvent flag is set to false, then you must translate the time portion of the time stamp in the StartDateTime field to or from a local time zone for the user or the application, as appropriate, and the translation must be in the Coordinated Universal Time (UTC) time zone.If this field has a value, then ActivityDate and ActivityDateTime either must be null or must match the value of this field. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionIndicates the current status of a task. The default value of this field is Not Started. Each predefined status field sets a value for IsClosed.Possible values are:CompletedDeferredIn ProgressNot StartedWaiting on someone else |
| Subject | TypecomboboxPropertiesFilter, Nillable, SortDescriptionContains the subject of the task or event. |
| WhatId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe WhatId represents nonhuman objects such as accounts, opportunities, campaigns, cases, or custom objects. WhatIds are polymorphic. Polymorphic means a WhatId is equivalent to the ID of a related object. The label is Related To ID.This is a polymorphic relationship field.Relationship NameWhatRelationship TypeLookupRefers ToAccount, Accreditation, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareProviderSearchableField, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CommSubscriptionConsent, ContactEncounter, ContactEncounterParticipant, ContactRequest, Contract, CoverageBenefit, CoverageBenefitItem, CreditMemo, DelegatedAccount, DocumentChecklistItem, EnrollmentEligibilityCriteria, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, IdentityDocument, Image, IndividualApplication, Invoice, ListEmail, Location, MemberPlan, Opportunity, Order, OtherComponentTask, PartyConsent, PersonLifeEvent, PlanBenefit, PlanBenefitItem, ProcessException, Product2, ProductItem, ProductRequest, ProductRequestLineItem, ProductTransfer, PurchaserPlan, ReceivedDocument, ResourceAbsence, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, Shift, Shipment, ShipmentItem, Solution, Visit, VisitedParty, VolunteerProject, WorkOrder, WorkOrderLineItem |
| WhoId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe WhoId represents a human such as a lead or a contact. WhoIds are polymorphic. Polymorphic means a WhoId is equivalent to a contact’s ID or a lead’s ID. The label is Name ID.This is a polymorphic relationship field.Relationship NameWhoRelationship TypeLookupRefers ToContact, Lead |

## Usage

Query activities related to an object

1.  Optionally, issue a describe call against the object whose activities you wish to query, to get a suggestion of the correct SOQL to use.
2.  Issue a SOQL relationship query with a main clause that references the object, and an inner clause that references the activity custom lookup relationship; for example:

    ```

    ```

    In this example sponsoredact\_\_r is a user defined relationship list.


The user interface enforces sharing rules, filtering out related-list items that a user doesn’t have permission to see.

The following restrictions on users who don’t have “View All Data” permission help prevent performance issues:

-   In the main clause of the relationship query, you can reference only one record. For example, you can’t filter on all records where the account name starts with ‘A’; instead, you must reference a single account record.
-   In the inner clause of the query, you can’t use WHERE.
-   In the inner clause of the query, you must specify a limit of 500 or fewer on the number of rows that are returned in the list.
-   You must sort on ActivityDate in descending order and LastModifiedDate in descending order; you can display nulls last. For example: ORDER BY ActivityDate DESC NULLS LAST, LastModifiedDate DESC.

## Code Examples

```
SELECT id, name, 
(SELECT id, subject from sponsoredact__r) 
FROM Contact
```

## Related Topics

- Field Types (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
