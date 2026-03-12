---
title: "Fields on Event and Task (Activity)"
domain: health-cloud-object-reference
topic: fields-on-event-and-task-activity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.114Z
estimatedTokens: 986
keywords: [Event, Task, Activity, Custom, extend, standard, objects, represent, individual’s, activities]
---

# Fields on Event and Task (Activity)

> Custom fields extend the standard Event and Task objects to represent information
      about an individual’s activities.

# Fields on Event and Task (Activity)

Custom fields extend the standard Event and Task objects to represent information about an individual’s activities.

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

The fields described here belong to both the Event and Task objects. However, in Object Manager, you can find these fields on the Activity object, not the Event or Task objects. This difference is because the Activity object is a supertype entity that includes the Event and Task objects. When Activity records are created, those records are saved as Event or Task records in the API. For more information about this relationship, see the [Tasks & Events Data Model](https://architect.salesforce.com/design/architecture-gallery/platform-task-events-data-model "HTML (New Window)") on the Salesforce Architects site.

| Field | Details |
| --- | --- |
| Age__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe age of the activity. |
| CarePlanGoal__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the intended objectives of carrying out a care plan.This field is a relationship field.Relationship NameCarePlanGoal__rRelationship TypeLookupRefers ToCarePlanGoal__c |
| CarePlanProblem__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the conditions, problems, concerns, diagnoses, and so on, whose management and mitigation are handled by this plan.This field is a relationship field.Relationship NameCarePlanProblem__rRelationship TypeLookupRefers ToCarePlanProblem__c |
| CarePlanTemplate__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care plan template associated with this activity.This field is a relationship field.Relationship NameHealthCloudGA__CarePlanTemplate__rRelationship TypeLookupRefers ToHealthCloudGA__CarePlanTemplate__c |
| Category__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the type of activity.Possible values are:CounsellingDiagnosisExerciseVaccination |
| Conditions_Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the individual’s current condition related to this activity.Possible values are:AsymptomaticAsymptomatic - Declined to ParticipateCuredEvaluated - No RiskSymptomaticSymptomatic - Declined to Participate |
| Contract_Tracing_Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the individual’s contract tracing status related to this activity.Possible values are:CompletedIn ProgressIncomingNo Response |
| Gender__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe individual’s gender.Possible values are:Decline to SpecifyFemaleMaleOther |
| Monitored_at_Home__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the activity was monitored at the individual’s home.Possible values are:NoYes |
| SortOrder___c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe order in which the task appears among other tasks associated with a goal. |
| TaskType__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe list of healthcare-related tasks configured in the org.Possible values are:AdministrativeClinicalOtherUncategorizedThe default value is Uncategorized. |
| Testing_Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe individual’s testing status related to this activity.Possible values are:Negative TestPositive TestTest Results PendingTest ScheduledTesting RecommendedUnknown |
