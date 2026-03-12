---
title: "OpenActivity"
domain: object-reference
topic: openactivity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.441Z
estimatedTokens: 3424
keywords: [OpenActivity, read-only, open, activities—future, events, tasks—related, includes, activities, contacts, phone, calls, organization, uses, Salesforce, CRM]
---

# OpenActivity

> This read-only object is displayed in a related list of open
   activities—future events and open tasks—related to an object. It includes
   activities for all contacts related to the object. OpenActivity fields for phone calls are only
   available if your organization uses Salesforce CRM Call Center.

# OpenActivity

This read-only object is displayed in a related list of open activities—future events and open tasks—related to an object. It includes activities for all contacts related to the object. OpenActivity fields for phone calls are only available if your organization uses Salesforce CRM Call Center.

## Supported Calls

describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the related account, which is determined as follows:The account associated with the WhatId, if it exists; orThe account associated with the WhoId, if it exists; otherwisenullFor information on IDs, see ID Field Type.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionIndicates one of the following:The due date of a taskThe date of an event if IsAllDayEvent is set to trueThis field has a time stamp that is always set to midnight in the Universal Time Coordinated (UTC) time zone. The time stamp doesn’t represent the time of the activity; don’t attempt to alter it to accommodate time zone differences. Label is Date. |
| ActivityDateTime | TypedateTimePropertiesAggregate, Filter, Nillable, SortDescriptionContains the event’s due date if the IsAllDayEvent flag is set to false. The time portion of this field is always transferred in the Coordinated Universal Time (UTC) time zone. Translate the time portion to or from a local time zone for the user or the application, as appropriate. Label is Due Date Time.The value for this field and StartDateTime must match, or one of them must be null. |
| ActivitySubtype | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionProvides standard subtypes to facilitate creating and searching for specific activity subtypes. This field isn’t updateable.Possible values are:TaskEmailCallEventLinkedIn —Available in API version 56.0 and later.List Email |
| ActivityType | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionRepresents one of the following values: Call, Email, Meeting, or Other. Label is Type. These are default values, and can be changed.ActivityType is the union of TaskType and EventType. If the same activity appears in both dynamic picklists, duplicate activities appear.TaskType and EventType can each have a Call type. Internally, they are distinct from each other. |
| AlternateDetailId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of a record the activity is related to which contains more details about the activity. For example, an activity can be related to an EmailMessage record.This is a relationship field.Relationship NameAlternateDetailRelationship TypeLookupRefers ToEmailMessage |
| CallDisposition | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the result of a given call, for example, “we'll call back,” or “call unsuccessful.” Limit is 255 characters. |
| CallDurationInSeconds | TypeintPropertiesFilter, Group, Nillable, SortDescriptionDuration of the call in seconds. |
| CallObject | TypestringPropertiesFilter, Group,Nillable, SortDescriptionName of a call center. Limit is 255 characters. |
| CallType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of call being answered: Inbound, Internal, or Outbound. |
| CompletedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the task was saved with a Closed status. This value is always null. |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the PartnerNetworkConnection that shared this record with your organization. This field is available only if your organization has enabled Salesforce to Salesforce and only in API versions 28.0 and later. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the PartnerNetworkConnection that your organization shared this record with. This field is available only if your organization has enabled Salesforce to Salesforce, and only in API versions 28.0 and later. The value is always null. You can use the PartnerNetworkRecordConnection object to forward records to connections. |
| Description | TypetextareaPropertiesNillableDescriptionContains a description of the event or task. Limit is 32 KB. |
| DurationInMinutes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the duration of the event or task. |
| EndDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates the end date and time of the event or task. Available in versions 27.0 and later. This field is optional, depending on the following:If IsAllDayEvent is true, you can supply a value for either DurationInMinutes or EndDateTime. Supplying values in both fields is allowed if the values add up to the same amount of time. If both fields are null, the duration defaults to one day.If IsAllDayEvent is false, a value must be supplied for either DurationInMinutes or EndDateTime. Supplying values in both fields is allowed if the values add up to the same amount of time. |
| IsAllDayEvent | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the value of this field is set to true, then the activity is an event spanning a full day, and the ActivityDate defines the date of the event. If the value of this field is set to false, then the activity may be an event spanning less than a full day, or it may be a task. The default value of this field is false. Label is All-Day Event. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a task is closed (true) or not closed (false). The default value of this field is false. This field is set indirectly by setting Status on the task—each picklist value has a corresponding IsClosed value. Label is Closed. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the activity has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsHighPriority | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates a high-priority task. The default value of this field is false. This field is derived from the Priority field. |
| IsReminderSet | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a reminder is set for an activity (true) or not (false). The default value of this field is false. |
| IsTask | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the value of this field is set to true, then the activity is a task; if the value is set to false, then the activity is an event. The default value of this field is false. Label is Task. |
| IsVisibleInSelfService | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the value of this field is set to true, then the activity can be viewed in the self-service portal. The default value of this field is false. Label is Visible in Self-Service. |
| Location | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the activity is an event, then this field represents the location of the event. If the activity is a task, then the value is null. |
| OwnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the user or group who owns the activity.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToCalendar, Group, User |
| PrimaryAccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionContains the AccountId value from the activity record. Available in API versions 30.0 and later to organizations that use Shared Activities. |
| PrimaryWhoId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionContains the WhoId value from the activity record. Available in API versions 30.0 and later to organizations that have enabled Shared Activities. |
| Priority | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionIndicates the priority of a task, such as high, normal, or low. The default value of this field is Normal. |
| ReminderDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the time at which a reminder is scheduled to fire if IsReminderSet is set to true. If IsReminderSet is set to false, then either the user has deselected the reminder checkbox in the user interface or the reminder has already fired at the time indicated by the value. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionIndicates the current status of a task. The default value of this field is Not Started. Each predefined status field sets a value for IsClosed. To obtain picklist values, query the TaskStatus object.Possible values are:CompletedDeferredIn ProgressNot StartedWaiting on someone else |
| Subject | TypecomboboxPropertiesFilter, Nillable, SortDescriptionContains the subject of the task or event. |
| WhatId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe WhatId represents nonhuman objects such as accounts, opportunities, campaigns, cases, or custom objects. WhatIds are polymorphic. Polymorphic means a WhatId is equivalent to the ID of a related object. The label is Related To ID.This is a polymorphic relationship field.Relationship NameWhatRelationship TypeLookupRefers ToAccount, Accreditation, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareProviderSearchableField, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CommSubscriptionConsent, ContactEncounter, ContactEncounterParticipant, ContactRequest, Contract, CoverageBenefit, CoverageBenefitItem, CreditMemo, DelegatedAccount, DocumentChecklistItem, EnrollmentEligibilityCriteria, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, IdentityDocument, Image, IndividualApplication, Invoice, ListEmail, Location, MemberPlan, Opportunity, Order, OtherComponentTask, PartyConsent, PersonLifeEvent, PlanBenefit, PlanBenefitItem, ProcessException, Product2, ProductItem, ProductRequest, ProductRequestLineItem, ProductTransfer, PurchaserPlan, ReceivedDocument, ResourceAbsence, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, Shift, Shipment, ShipmentItem, Solution, Visit, VisitedParty, VolunteerProject, WorkOrder, WorkOrderLineItem |
| WhoId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe WhoId represents a human such as a lead or a contact. WhoIds are polymorphic. Polymorphic means a WhoId is equivalent to a contact’s ID or a lead’s ID. The label is Name ID.If Shared Activities is enabled, the value of this field is the ID of the related lead or primary contact. If you add, update, or remove the WhoId field, you might encounter problems with triggers, workflows, and data validation rules that are associated with the record. The label is Name ID.This is a polymorphic relationship field.Relationship NameWhoRelationship TypeLookupRefers ToContact, Lead |

## Usage

Query activities that are related to an object

1.  Optionally, issue a describe call against the object whose activities you want to query, to get a suggestion of the correct SOQL query to use.
2.  Issue a SOQL relationship query with a main clause that references the object and an inner clause that references the activity history. For example:

    ```

    ```


The user interface enforces sharing rules, filtering out related-list items that a user doesn’t have permission to see.

The following constraints on users who don’t have the “View All Data” permission help prevent performance issues.

-   In the main clause of the relationship query, you can reference only one record. For example, you can’t filter on all records where the account name starts with “A.” Instead, you must reference a single account record.

    ```

    ```

-   In the inner clause of the query, you can’t use WHERE.
-   In the inner clause of the query, you must specify a limit of 500 or fewer on the number of rows that are returned in the list.
-   In the inner clause of the query, you must sort on ActivityDate in ascending order and LastModifiedDate in descending order. You can optionally display nulls last. For example: ORDER BY ActivityDate ASC NULLS LAST, LastModifiedDate DESC.

#### See Also

-   [Task](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_task.htm "Represents a business activity such as making a phone call or other to-do items. In the user interface, Task and Event records are collectively referred to as activities.")

## Code Examples

```
SELECT 
   (SELECT ActivityDate, Description 
    FROM OpenActivities) 
FROM Account 
WHERE Name Like 'XYZ%'
```

```
SELECT 
   (SELECT ActivityDate, Description 
    FROM OpenActivities 
    ORDER BY ActivityDate ASC NULLS LAST, LastModifiedDate DESC 
    LIMIT 500)
FROM Account
WHERE Name = 'Acme'
LIMIT 1
```

## Related Topics

- ID Field Type (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- EmailMessage (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailmessage.htm)
- Task (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_task.htm)
