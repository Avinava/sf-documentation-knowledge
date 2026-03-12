---
title: "Task"
domain: loyalty
topic: task
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.574Z
estimatedTokens: 5692
keywords: [Task, business, activity, making, phone, call, to-do, items, user, Event, records, collectively, referred, activities, Calls]
---

# Task

> Represents a business activity such as making a phone call or other
			to-do items. In the user interface, Task and Event records are collectively referred to
			as activities.

# Task

Represents a business activity such as making a phone call or other to-do items. In the user interface, Task and Event records are collectively referred to as activities.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Task fields related to calls are exclusive to Salesforce CRM Call Center. Also, query(), delete(), and update() aren’t allowed with tasks related to more than one contact in API versions 23.0 and earlier.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Field Type |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRepresents the ID of the related Account. The AccountId is determined as follows.If the value of WhatId is any of the following objects, then Salesforce uses that object’s AccountId.AccountOpportunityContractCustom object that is a child of AccountIf the value of the WhatIdfield is any other object, and the value of the WhoId field is a Contact object, then Salesforce uses that contact’s AccountId. (If your organization uses Shared Activities, then Salesforce uses the AccountId of the primary contact.)Otherwise, Salesforce sets the value of the AccountId field to null.For information on IDs, see ID Field Type.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActivityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the due date of the task. This field has a timestamp that is always set to midnight in the Coordinated Universal Time (UTC) time zone. The timestamp is not relevant; do not attempt to alter it to accommodate time zone differences. Label is Due Date.NoteThis field can’t be set or updated for a recurring task (IsRecurrence is true). |
| CallDisposition | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the result of a given call, for example, “we'll call back,” or “call unsuccessful.” Limit is 255 characters.Not subject to field-level security, available for any user in an organization with Salesforce CRM Call Center. |
| CallDurationInSeconds | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDuration of the call in seconds.Not subject to field-level security, available for any user in an organization with Salesforce CRM Call Center. |
| CallObject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of a call center. Limit is 255 characters.Not subject to field-level security, available for any user in an organization with Salesforce CRM Call Center. |
| CallType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of call being answered: Inbound, Internal, or Outbound. |
| CompletedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the task was saved with a Closed status.For insert, if the task is saved with a Closed status the field is set. If the task is saved with an Open status the field is set to NULL.For update, if the task is saved with a new Closed status, the field is reset.If the task is saved with a new non-closed status, the field is reset to NULL.If the task is saved with the same closed status (that is, unchanged) there is no change to the field.NoteThe status is a dynamic enum. If the Closed mapping is changed it won’t cause an update of existing tasks. Only new insert/update operations are affected. |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContains a text description of the task. |
| IsArchived | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the event has been archived. The default value of this field is false. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the task has been completed (true) or not (false). The default value of this field is false. Is only set indirectly via the Status picklist. Label is Closed. |
| IsHighPriority | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates a high-priority task. This field is derived from the Priority field. The default value of this field is false. |
| IsRecurrence | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the task is scheduled to repeat itself (true) or only occurs once (false). The default value of this field is false. This field is read-only on update, but not on create. If this field value is true, then RecurrenceStartDateOnly, RecurrenceEndDateOnly, RecurrenceType, and any recurrence fields associated with the given recurrence type must be populated. See Recurring Tasks. |
| IsReminderSet | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a popup reminder has been set for the task (true) or not (false). The default value of this field is false. |
| IsVisibleInSelfService | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a task associated with an object can be viewed in the Customer Portal (true) or not (false).If your organization has digital experiences enabled, tasks marked IsVisibleInSelfService are visible to any external user in the Experience Cloud site, as long as the user has access to the record the task was created on. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User or Group who owns the record. Label is Assigned To ID. This field accepts Groups of type Queue only.In the user interface, Group IDs correspond with the queue’s list view names. To create or update tasks assigned to Group, use v48.0 or later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates the importance or urgency of a task, such as high or low. The default value of this field is Normal. |
| RecurrenceActivityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead-only. Not required on create. ID of the main record of the recurring task. Subsequent occurrences have the same value in this field. |
| RecurrenceDayOfMonth | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe day of the month in which the task repeats. |
| RecurrenceDayOfWeekMask | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe day or days of the week on which the task repeats. This field contains a bitmask. The values are as follows:Sunday = 1Monday = 2Tuesday = 4Wednesday = 8Thursday = 16Friday = 32Saturday = 64Multiple days are represented as the sum of their numerical values. For example, Tuesday and Thursday = 4 + 16 = 20. |
| RecurrenceEndDateOnly | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date on which the task repeats. This field has a timestamp that is always set to midnight in the Coordinated Universal Time (UTC) time zone. The timestamp is not relevant; do not attempt to alter it to accommodate time zone differences. |
| RecurrenceInstance | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency of the recurring task.Possible values are:First—1stFourth—4thLast—lastSecond—2ndThird—3rd |
| RecurrenceInterval | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval between recurring tasks. |
| RecurrenceMonthOfYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe month of the year in which the task repeats. |
| RecurrenceRegeneratedType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents what triggers a repeating task to repeat. Add this field to a page layout together with the RecurrenceInterval field, which determines the number of days between the triggering date (due date or close date) and the due date of the next repeating task in the series.Label is Repeat This Task. This field has the following picklist values:None: The task doesn’t repeat.After due date: The next repeating task will be due the specified number of days after the current task’s due date.After the task is closed: The next repeating task will be due the specified number of days after the current task is closed.(Task closed): This task, now closed, was opened as part of a repeating series.NoteWhen tasks in a series are set to repeat after their due date, Salesforce doesn’t create recurrences that would have been due in the past. Instead, Salesforce keeps adding the interval until a repeated task has a due date in the future.For example, suppose that someone sets a task to repeat three days after it’s due. But, that person doesn’t complete the task (mark it Closed) until five days after it’s due. Instead of creating a task that’s already overdue, Salesforce gives the new task a due date of tomorrow. This due date is equivalent to 6 days after the due date; two intervals of three days each.If that person completes the repeating task (marks it Closed) before the due date, the next task is still due three days after the due date. |
| RecurrenceStartDateOnly | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the recurring task begins. Must be a date and time before RecurrenceEndDateOnly. |
| RecurrenceTimeZoneSidKey | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time zone associated with the recurring task. For example, “UTC-8:00” for Pacific Standard Time. |
| RecurrenceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates how often the task repeats. For example, daily, weekly, or every nth month (where “nth” is defined in RecurrenceInstance). |
| ReminderDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the time when the reminder is scheduled to fire, if IsReminderSet is set to true. If IsReminderSet is set to false, then the user may have deselected the reminder checkbox in the Salesforce user interface, or the reminder has already fired at the time indicated by the value. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates the status of the task. The default value of this field is Not Started. Each predefined Status field implies a value for the IsClosed flag. To obtain picklist values, query the TaskStatus object.Possible values are:CompletedDeferredIn ProgressNot StartedWaiting on someone elseNoteThis field can’t be updated for recurring tasks (IsRecurrence is true). |
| Subject | TypecomboboxPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe subject line of the task, such as “Call” or “Send Quote.” Limit: 255 characters. |
| TaskSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionProvides standard subtypes to facilitate creating and searching for specific task subtypes. This field isn’t updateable.TaskSubtype values:TaskEmailLinkedIn —Available in API version 56.0 and later.List EmailCadenceCallNoteThe Cadence subtype is an internal value used by Sales Engagement, and can’t be set manually. |
| TaskWhoIds | TypeJunctionIdListPropertiesCreate, UpdateDescriptionA string array of contact or lead IDs related to this task. This JunctionIdList field is linked to the TaskWhoRelations child relationship. TaskWhoIds is only available when the shared activities setting is enabled. The first contact or lead ID in the list becomes the primary WhoId if you don’t specify a primary WhoId. If you set the EventWhoIds field to null, all entries in the list are deleted and the value of WhoId is added as the first entry.WarningAdding a JunctionIdList field name to the fieldsToNull property deletes all related junction records. This action can’t be undone. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of task, such as Call or Meeting. |
| WhatCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionAvailable to organizations that have Shared Activities enabled. Count of related TaskRelations pertaining to WhatId. Count of the WhatId must be 1 or less. |
| WhatId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe WhatId represents nonhuman objects such as accounts, opportunities, campaigns, cases, or custom objects. WhatIds are polymorphic. Polymorphic means a WhatId is equivalent to the ID of a related object. The label is Related To ID.This is a polymorphic relationship field.Relationship NameWhatRelationship TypeLookupRefers ToAccount, Accreditation, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareProviderSearchableField, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CommSubscriptionConsent, ContactEncounter, ContactEncounterParticipant, ContactRequest, Contract, CoverageBenefit, CoverageBenefitItem, CreditMemo, DelegatedAccount, DocumentChecklistItem, EnrollmentEligibilityCriteria, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, IdentityDocument, Image, IndividualApplication, Invoice, ListEmail, Location, MemberPlan, Opportunity, Order, OtherComponentTask, PartyConsent, PersonLifeEvent, PlanBenefit, PlanBenefitItem, ProcessException, Product2, ProductItem, ProductRequest, ProductRequestLineItem, ProductTransfer, PurchaserPlan, ReceivedDocument, ResourceAbsence, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, Shift, Shipment, ShipmentItem, Solution, Visit, VisitedParty, VolunteerProject, WorkOrder, WorkOrderLineItem |
| WhoCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionAvailable to organizations that have Shared Activities enabled. Count of related TaskRelations pertaining to WhoId. |
| WhoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe WhoId represents a human such as a lead or a contact. WhoIds are polymorphic. Polymorphic means a WhoId is equivalent to a contact’s ID or a lead’s ID. The label is Name ID.If Shared Activities is enabled, the value of this field is the ID of the related lead or primary contact. If you add, update, or remove the WhoId field, you might encounter problems with triggers, workflows, and data validation rules that are associated with the record. The label is Name ID.Beginning in API version 37.0, if the contact or lead ID in the WhoId field is not in the TaskWhoIds list, no error occurs and the ID is added to the TaskWhoIds as the primary WhoId. If WhoId is set to null, an arbitrary ID from the existing TaskWhoIds list is promoted to the primary position.This is a polymorphic relationship field.Relationship NameWhoRelationship TypeLookupRefers ToContact, Lead |

## Usage

**Recurring Tasks**

-   Recurring tasks are available in API version 16.0 and later.
-   After a task is created, it can’t be changed from recurring to nonrecurring or vice versa.
-   When a user creates a series of recurring tasks, Salesforce creates a main record and subsequent occurrences. For the main record, IsRecurrence is set to true and other fields that define the recurrence pattern are populated. The ID of the main record of the recurring task is saved in the subsequent occurrences, in the RecurrenceActivityId field.
-   When you delete a recurring task series through the API, all open and closed task occurrences in the series are removed. However, when you delete a recurring task series through the user interface, only open tasks occurrences (IsClosed is false) in the series are removed.
-   If IsRecurrence is true, then RecurrenceStartDateOnly, RecurrenceEndDateOnly, RecurrenceType, and any properties associated with the given recurrence type (see the following table) must be populated.
-   When you change the RecurrenceStartDateOnly field or the recurrence pattern, all open tasks occurrences in the series are deleted and new open task occurrences are created based on the new recurrence pattern. The following fields determine the recurrence pattern: RecurrenceType, RecurrenceTimeZoneSidKey, RecurrenceInterval, RecurrenceDayOfWeekMask, RecurrenceDayOfMonth, RecurrenceInstance, and RecurrenceMonthOfYear.
-   When you change the value of RecurrenceEndDateOnly to an earlier date (for example, from January 20 to January 10), all open task occurrences in the series with the ActivityDate value greater than the new end date value are deleted. Other open and closed task occurrences in the series are not affected.
-   When you change the value of RecurrenceEndDateOnly to a later date (for example, from January 10 to January 20), new task occurrences are created up to the new end date. Existing open and closed tasks in the series are not affected.

This table describes the usage of recurrence fields for Salesforce Classic recurring events. Each recurrence type must have all of its properties set. All unused properties must be set to null.

| RecurrenceType Value | Properties | Example Pattern |
| --- | --- | --- |
| RecursDaily | RecurrenceInterval | Every second day |
| RecursEveryWeekday | RecurrenceDayOfWeekMask | Every weekday - can’t be Saturday or Sunday |
| RecursMonthly | RecurrenceDayOfMonth RecurrenceInterval | Every second month, on the third day of the month |
| RecursMonthlyNth | RecurrenceInterval RecurrenceInstance RecurrenceDayOfWeekMask | Every second month, on the last Friday of the month |
| RecursWeekly | RecurrenceInterval RecurrenceDayOfWeekMask | Every three weeks on Wednesday and Friday |
| RecursYearly | RecurrenceDayOfMonth RecurrenceMonthOfYear | Every March on the 26th day of the month |
| RecursYearlyNth | RecurrenceDayOfWeekMask RecurrenceInstanceRecurrenceMonthOfYear | The first Saturday in every October |

JunctionIdList

The JunctionIdList field is now implemented in the Event and Task objects. With a single API call, it’s easy to create many-to-many relationships between the Event or Task object with contacts, leads, or users.

To create a Task with related Contacts without JunctionIdList, you first have to create the task, then use the returned task ID to create the TaskRelation records. If the TaskRelation save call fails, error handling is your responsibility because the task has already been committed to the database.

```

```

To create a task using JuncionIdList, IDs are pulled from the related contacts and both the task and the TaskRelation records are created in one API call. If the TaskRelation fails, the task is rolled back because it’s all done in a single API call.

```

```

**Shared Field-Level Security for Event and Task Objects**

Metadata deployments for the Task object should always include the field-level security for the Event object. Shared field-level security prevents each object from changing the field-level security of the associated object.

Metadata deployments that include field-level security for only one of either the Event or Task objects can cause field-level security changes to the other object that aren't reflected in the metadata.

-   If field-level security is enabled for one object, then field-level security is enabled for both objects.
-   If field-level security is disabled for one object, then it's disabled for both objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

A missing entry in the metadata is treated as field-level security being disabled.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TaskChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[TaskFeed](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 20.0)

Feed tracking is available for the object.

## Code Examples

```apex
public void createTasksOld(Contact[] contacts) {
	Task task = new Task();
	task.setSubject("New Task");
	SaveResult[] results = null;
	try {
		results = connection.create(new Task[] {
			task
		});
		if (results[0].isSuccess()) {
			TaskRelation[] relations = new TaskRelation[contacts.size()];
			for (int i = 0; i < contacts.length; i++) {
				relations[i] = new TaskRelation();
				relations[i].setTaskId(results[0].getID());
				relations[i].setRelationId(contacts[i].getID());
			}
			results = connection.create(relations);
		}
	} catch (ConnectionException ce) {
		ce.printStackTrace();
	}
}
```

```apex
public void createTaskNew(Contact[] contacts) {
	String[] contactIds = new String[contacts.size()];
	for (int i = 0; i < contacts.size(); i++) {
		contactIds[i] = contacts[i].getID();
	}
	Task task = new Task();
	task.setSubject("New Task");
	task.setTaskWhoIds(contactIds);
	SaveResult[] results = null;
	try {
		results = connection.create(new Task[] {
			task
		});
	} catch (ConnectionException ce) {
		ce.printStackTrace();
	}
}
```

## Related Topics

- TaskChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
- TaskFeed (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_feed.htm)
