---
title: "EntitySubscription"
domain: object-reference
topic: entitysubscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.734Z
estimatedTokens: 1943
keywords: [EntitySubscription, subscription, user, record, another, API, version, 34.0, later, Calls, Usage, Sample—SOQL]
---

# EntitySubscription

> Represents a subscription for a user following a record or another
      user. This object is available in API version 34.0 and later.

# EntitySubscription

Represents a subscription for a user following a record or another user. This object is available in API version 34.0 and later.

A user can subscribe to a record or to another user. Changes to the record and updates from the users are displayed in the Chatter feed on the user's home page, which is a useful way to stay up-to-date with other users and with changes made to records in Salesforce. Feeds are available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the Experience Cloud site where the user is following the record or user. This field is available in API version 26.0 and later, if digital experiences is enabled for your org. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the record or user which the user is following.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount, Accreditation, ActivationTarget, ActivationTrgtIntOrgAccess, ApiAnomalyEventStore, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskIndDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareProviderSearchableField, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CodeSet, CollaborationGroup, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, ConsumptionSchedule, Contact, ContactEncounter, ContactEncounterParticipant, ContentDocument, Contract, CoverageBenefit, CoverageBenefitItem, CredentialStuffingEventStore, CreditMemo, CreditMemoLine, Dashboard, DashboardComponent, DataStream, DelegatedAccount, DocumentChecklistItem, EngagementChannelType, EnhancedLetterhead, EnrollmentEligibilityCriteria, Event, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, Identifier, Image, IndividualApplication, Invoice, InvoiceLine, Lead, Location, MarketSegment, MarketSegmentActivation, MemberPlan, MessagingSession, MktCalculatedInsight, OperatingHours, Opportunity, Order, OrderItem, OtherComponentTask, PartyConsent, PersonEducation, PersonLanguage, PersonLifeEvent, PersonName, PlanBenefit, PlanBenefitItem, Product2, ProductFulfillmentLocation, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, ProviderSearchSyncLog, PurchaserPlan, PurchaserPlanAssn, ReceivedDocument, Report, ReportAnomalyEventStore, ResourceAbsence, ResourcePreference, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, ServiceTerritoryWorkType, SessionHijackingEventStore, Shift, Shipment, ShipmentItem, Site, SkillRequirement, SocialPost, Solution, Task, ThreatDetectionFeedback, Topic, User, Visit, VisitedParty, Visitor, VoiceCall, VolunteerProject, WorkBadgeDefinition, WorkOrder, WorkOrderLineItem, WorkType, WorkTypeGroup, WorkTypeGroupMember |
| SubscriberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the user who is following the record or user.This is a relationship field.Relationship NameSubscriberRelationship TypeLookupRefers ToUser |

## Usage

Consider this when following records and users:

-   Users can only follow records that they can see.
-   Users can see which records other users are following, unless they don’t have access to the records.
-   Administrators and users with the “Modify All Data” permission can configure a user to follow records that the user has read access to.
-   Administrators and users with the “Modify All Data” permission can configure users to stop following records.
-   Following topics is available in API version 29.0 and later. For this reason, a topic ID is now a supported value for the ParentId field.
-   If you deactivate a user, any EntitySubscription where the user is associated with the ParentId or SubscriberId field, meaning all subscriptions both to and from the user, are soft deleted. If the user is reactivated, the subscriptions are restored. However, if you deactivate multiple users at once and these users follow each other, their subscriptions are hard deleted. In this case, the user-to-user EntitySubscription is deleted twice (double deleted). Such subscriptions can’t be restored upon user reactivation.


When using query() with EntitySubscription,

-   Note the following SOQL restriction. No SOQL limit if logged-in user has “View All Data” permission. If not, specify a LIMIT clause of 1,000 records or fewer.
-   A query using a WHERE clause can only filter by fields on the EntitySubscription object.
-   If user sharing is enabled and the querying user is not an administrator, a SOQL query must be constrained either by the ParentId or SubscriberId. Otherwise, the query behavior at run time is undefined, meaning the result set can be incomplete or inconsistent from invocation to invocation. For an unconstrained query, the sharing check limits imposed on a non-adminstrative user are likely to be exceeded before the query completes, because access checks are run against both parent and subject, for each row of the result set. We recommend using the Connect REST API to query EntitySubscription data instead of running a SOQL query.
-   Users without the “View All Data” permission
    -   Need read access on the object associated with the ParentId field to see which users are following records for the object.
    -   Can use an ORDER BY clause in a query only to order by fields on the EntitySubscription object. For example, if the subscription relates to an Account record, the query can ORDER BY ParentId, but it can’t ORDER BY Account.Name.
    -   Don’t always get all matching subscriptions when running a query. For these users, a query evaluates visibility criteria on a maximum of 500 records to reduce the prospect of long-running queries. If a user runs a query to see the CEO's subscriptions, it might scan a large number of records. The query only returns matches within the first 500 records scanned. It is possible that there are more subscriptions that are visible to the user, but they are not returned. To mitigate this, we recommend using a WHERE clause, if possible, to reduce the scope of the query.

## Sample—SOQL

The following SOQL query returns subscriptions for all the accounts that a subscriber is following that have more than 10 employees:

```

```

#### See Also

-   [Custom Object \_\_Feed \_\_Feed](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm "Represents the feed, specifically posts and feed-tracked changes, on a custom object.")

## Code Examples

```
SELECT Id 
FROM EntitySubscription 
WHERE SubscriberId = '005U0000000Rg2CIAS'
AND ParentId IN (
  SELECT Id FROM Account
  WHERE NumberOfEmployees > 10
)
LIMIT 200
```

## Related Topics

- Custom Object __Feed __Feed (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm)
