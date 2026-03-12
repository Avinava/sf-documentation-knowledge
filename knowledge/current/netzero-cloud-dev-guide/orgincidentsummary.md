---
title: "OrgIncidentSummary"
domain: netzero-cloud-dev-guide
topic: orgincidentsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.543Z
estimatedTokens: 1863
keywords: [OrgIncidentSummary, statistics, according, various, categories, incidents, organization, non-compliance, laws, corruptions, health, safety, discrimination, marketing, labeling]
---

# OrgIncidentSummary

> Represents statistics according to various categories of incidents in
         an organization, such as non-compliance with laws, corruptions, health and safety,
         discrimination, marketing and labeling, and customer privacy. This object is available
      in API version 57.0 and later.

# OrgIncidentSummary

Represents statistics according to various categories of incidents in an organization, such as non-compliance with laws, corruptions, health and safety, discrimination, marketing and labeling, and customer privacy. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the category of the incident.Possible values are:Corruption - Business Partners Contracts TerminatedCorruption - ConfirmedCorruption - Employees Dismissed or DisciplinedCustomer PrivacyDiscrimination Incidents and Corrective ActionsNon-compliance - Customer Health and SafetyNon-compliance - Laws and RegulationsNon-compliance - Marketing CommunicationsNon-compliance - Marketing and LabelingViolation of Indigenous People RightsViolation of Anti-Corruption and Anti-Bribery LawsViolation of Human RightsWork-related IllnessWork-related Injuries |
| CorrectiveActionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of corrective action that can be taken to resolve the incident.Possible values are:Contract Termination or Non-renewalEmployee DisciplineEmployee DismissalConviction |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the incident statistics. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reporting period for which the incident statistics are generated.This field is a relationship field.Relationship NameDisclsReportingPeriodRelationship TypeLookupRefers ToDisclsReportingPeriod |
| FineAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of fine that's paid as a penalty for the incident. |
| HazardType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of hazard caused by the incident. |
| HoursWorked | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of hours worked for the organization. |
| IncidentCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of incidents based on a combination of category, incident type, incident subtype, and hazard type. |
| IncidentSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subtype of the incident.Possible values are:Data BreachData LossLaws and RegulationsMarketingProduct and Services Information and LabelsTheftVoluntary CodeNon Respect of UN Guiding Principles and OECD Guidelines for Multinational EnterprisesOther WorkersFiled to National Contact PointsOwn WorkforceOwn Workers |
| IncidentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the incident.Possible values are:CorruptionComplaintFatalityAccidentIncidentHuman Rights Violation |
| IsWorkRelated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the incident is work-related (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LostHours | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of hours lost to injuries and fatalities from work-related accidents and ill health. |
| MonetaryLoss | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of monetary loss for an incident category. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PenaltyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of penalty that's applicable for the incident.Possible values are:Monetary FineNon-Monetary Sanction |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRelationship TypeLookupRefers ToAccount |
| WorkingDaysReportingPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe working days in the reporting period for the organization. Use this value to calculate the total hours worked by the organization's workforce. |
| WorkingHoursDay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average daily working hours for employees. Use this value to calculate the total hours worked by the organization's workforce. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrgIncidentSummaryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[OrgIncidentSummaryFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OrgIncidentSummaryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[OrgIncidentSummaryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OrgIncidentSummaryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- OrgIncidentSummaryFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- OrgIncidentSummaryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- OrgIncidentSummaryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
