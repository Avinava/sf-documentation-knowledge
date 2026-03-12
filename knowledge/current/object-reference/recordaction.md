---
title: "RecordAction"
domain: object-reference
topic: recordaction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.039Z
estimatedTokens: 2034
keywords: [RecordAction, relationship, record, action, flow, every, want, associate, particular, API, version, 42.0, later, Calls, Special]
---

# RecordAction

> Represents a relationship between a record and an action, such as a
         flow. Create a RecordAction for every action that you want to associate with a particular
         record. Available in API version 42.0 and later.

# RecordAction

Represents a relationship between a record and an action, such as a flow. Create a RecordAction for every action that you want to associate with a particular record. Available in API version 42.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Access to the RecordAction object is determined by a user’s access to the associated parent record.

## Supported Calls

create(), delete(), , describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| ActionDefinition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired in Lightning Flow for Service implementations that use version 44.0 or later of the API. The API name of the action to associate with the record; for example, the API name of a flow. Use this field rather than FlowDefinition. To distinguish a quick action from a flow with the same API name, we prepend "QuickAction" to the API name of every quick action. |
| ActionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired in Lightning Flow for Service implementations that use version 46.0 or later of the API. The type of action. Possible values are:Flow (default)QuickActionFor versions of the API prior to version 46.0, this field is set to Flow. |
| FlowDefinition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionOptional in Lightning Flow for Service implementations using version 42.0 or 43.0 of the API. An upgrade to Winter '19 or later, which uses API version 44.0 or later, copies FlowDefinition to ActionDefinition. For versions 42.0 and 43.0, this field is the API name of the flow that’s associated with the record. |
| FlowInterviewId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. The flow interview ID of the paused or completed flow. This field can’t be set in Process Builder.This is a relationship field.Relationship NameFlowInterviewRelationship TypeLookupRefers ToFlowInterview |
| IsMandatory | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOptional. Specifies whether the action is mandatory. The default value is false.NoteAt runtime, we show a reminder when the user closes a mandatory flow without completing it. We don't show the reminder for quick actions. |
| IsUiRemoveHidden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOptional. Specifies whether the ability to remove the action is hidden in the UI. The default value is false. If true, the UI hides the ability to remove the action. However, actions can still be deleted using the API. |
| Order | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The order of the action among all actions associated with this record. |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe participant role that's associated with the record action.This field is a polymorphic relationship field and is available in API version 58.0 and later.Relationship NameParticipantRoleRelationship TypeLookupRefers ToParticipantRole |
| Pinned | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether the action is pinned to the top or bottom of the component. If an action is pinned, users see the Remove option in the UI unless IsUiRemoveHidden is set to true. Possible values are:None (default)TopBottom |
| RecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Record associated with the action. In version 46.0 and above, we support most object types. To learn about supported objects, see the Lightning Flow for Service Developer’s Guide.This is a relationship field.Relationship NameRecordRelationship TypeLookupRefers ToAccount, Address, Asset, AssetRelationship, AssignedResource, AssociatedLocation, Campaign, CampaignMember, CarePreauth, CarePreauthItem, Case, ChangeRequest, CollaborationGroup, Contact, ContactRequest, Contract, CoverageBenefit, CoverageBenefitItem, EnhancedLetterhead, Incident, Lead, Location, MemberPlan, OperatingHours, Opportunity, Order, PlanBenefit, PlanBenefitItem, Problem, Pricebook2, PricebookEntry, Product2, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, PurchaserPlan, PurchaserPlanAssn, RebateMemberAggregateItem, ResourceAbsence, ResourcePreference, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, Shipment, SkillRequirement, SocialPersona, SocialPost, TimeSlot, User, Visit, VoiceCall, WorkOrder, WorkOrderLineItem, WorkType, WorkTypeGroupChangeRequest, Incident, Problem are available in API version 53.0 and later.RebateMemberAggregateItem is available in API version 54.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The current state of the action. Possible values are:New (default)PausedCompleteStartedUnlinked—The action was unlinked because the flow was paused and the current record for the flow interview changed.Paused and unlinked statuses do not apply to quick actions. This field can’t be set in Process Builder. |

## Usage

The RecordAction object works with the Actions & Recommendations component in Lightning Experience. Although this junction object can be used to create relationships between records and actions in Salesforce Classic, those relationships can’t be displayed in Salesforce Classic.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

API version 44.0 added a field, ActionDefinition, so that a RecordAction in future releases can support other types of actions in addition to flows. API version 44.0 and later maintain the FlowDefinition field to support processes that reference this field in earlier API versions. Upgrading an org to Winter '19 or later, which uses API version 44.0 or later, copies the FlowDefinition field to the ActionDefinition field. FlowDefinition will be deprecated in a future release, so use ActionDefinition instead.

When an action is deleted that’s referenced in an ActionDefinition or FlowDefinition, the RecordAction object is deleted. RecordAction objects are also deleted when the associated parent record is deleted, or when a flow is paused and the current record context has changed. When an action is completed, the associated RecordAction object is also deleted.

Deleted RecordActions are removed from the list when the page is refreshed.

For more information about the Actions & Recommendations component and how it works with RecordActions, see the *[Lightning Flow for Service Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_guided_engagement.meta/salesforce_guided_engagement/salesforce_guided_engagement.htm "HTML (New Window)")*.

## Java Example

Here’s an example of how to associate flows to a record using the RecordAction object.

```

```

## Data Model

![The RecordAction data model.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FSforce_record_action.png&folder=object_reference)

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[RecordActionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordactionhistory.htm "Represents the lifecycle of a RecordAction as it goes through different states. Available in API version 44.0 and later.")

History is available for tracked fields of the object.

## Code Examples

```apex
public void associateNewCustomerFlowWithAccount(Account a) {
   try {
      RecordAction newRecordAction = new RecordAction();
      newRecordAction.setRecordId(a.getId());
      newRecordAction.setActionDefinition(“New_Customer_Flow”);
      newRecordAction.setOrder(1);

      SaveResult[] results = connection
            .create(new SObject[] { newRecordAction });
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

## Related Topics

- RecordActionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordactionhistory.htm)
