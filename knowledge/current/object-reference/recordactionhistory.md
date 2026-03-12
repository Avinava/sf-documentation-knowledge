---
title: "RecordActionHistory"
domain: object-reference
topic: recordactionhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.049Z
estimatedTokens: 1170
keywords: [RecordActionHistory, lifecycle, RecordAction, goes, different, states, API, version, 44.0, later, Calls, Special, Access, Rules, Usage]
---

# RecordActionHistory

> Represents the lifecycle of a RecordAction as it goes through
         different states. Available in API version 44.0 and later.

# RecordActionHistory

Represents the lifecycle of a RecordAction as it goes through different states. Available in API version 44.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

This object is always read-only.

## Fields

| Field | Details |
| --- | --- |
| ActionDefinitionApiName | TypestringDescriptionRequired. The API name of the action associated with the record. To distinguish a quick action from a flow with the same API name, we prepend "QuickAction" to the API name of every quick action. |
| ActionDefinitionLabel | TypestringDescriptionRequired. The label of the action that took place. |
| ActionType | TypepicklistPropertiesDefaulted on create, Restricted picklistDescriptionRequired. The type of action associated with the record. Possible values are:Flow (default)QuickAction |
| IsMandatory | TypebooleanPropertiesDefaulted on createDescriptionOptional. Specifies whether the action is mandatory. The default value is false. |
| LoggedTime | TypedateTimePropertiesFilter, SortDescriptionRequired. The timestamp when the state change occurred. |
| ParentRecordId | TypereferencePropertiesFilter, SortDescriptionRequired. The parent record for the associated action.This is a relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToAccount, Address, Asset, AssetRelationship, AssociatedLocation, Case, ChangeRequest, CollaborationGroup, Contact, ContactRequest, Contract, EnhancedLetterhead, Incident, Lead, Location, OperatingHours, Opportunity, Order, Pricebook2, PricebookEntry, Problem, Product2, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, RebateMemberAggregateItem, ResourceAbsence, Scorecard, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, Shipment, SkillRequirement, SocialPersona, SocialPost, TimeSlot, User, Visit, VoiceCall, WorkTypeChangeRequest, Incident, Problem are available in API version 53.0 and later.RebateMemberAggregateItem is available in API version 54.0 and later. |
| Pinned | TypepicklistPropertiesDefaulted on create, Nillable, Restricted picklistDescriptionOptional. Specifies whether the action is pinned to the top or bottom, or unpinned. Possible values are:NoneTopBottom |
| RecordActionId | TypestringPropertiesFilter, SortDescriptionRequired. The ID of the RecordAction. |
| State | TypepicklistPropertiesDefaulted on create, Restricted picklistDescriptionRequired. The state of the action. A state change triggers the logging of a history event. Possible values are:Started (default)PausedResumedCompletedUnlinked—The action was unlinked because the flow was paused and the current record for the flow interview changed. |
| UserId | TypereferenceDescriptionRequired. The user that conducted the action.This is a polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Usage

The RecordActionHistory object represents the lifecycle of an action on a record as it goes through different states.

The RecordActionHistory object is a big object. For this reason, when you use synchronous SOQL, SOAP, REST, Bulk, or Apex APIs to read this object, queries must follow a specific pattern or they fail. Queries must match one of these patterns and use fields in this precise order when more than one field is used.

-   ParentRecordId
-   ParentRecordId, LoggedTime (DESC)
-   ParentRecordId, LoggedTime (DESC), RecordActionId

For example, this SOQL query follows the ParentRecordId, LoggedTime (DESC) pattern.

```

```

Asynchronous SOQL queries do not need to follow a pattern, and can query any field.

Apex triggers cannot reference big object records. Use SOQL queries if you want to query RecordActionHistory records in Apex.

For more information about the Actions & Recommendations component and how it works with RecordActions, see the [Lightning Flow for Service Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_guided_engagement.meta/salesforce_guided_engagement/salesforce_guided_engagement.htm "HTML (New Window)"). Learn more about big objects and how to query them in the *[Query Big Objects](https://trailhead.salesforce.com/en/modules/big_objects/units/big_objects_querying "HTML (New Window)")* module on Trailhead.

## Java Example

Here’s a Java example of how to query a RecordActionHistory object.

```

```

## Code Examples

```
SELECT ActionDefinitionApiName, User, State FROM RecordActionHistory WHERE
          ParentRecordId = {CaseId} ORDER BY ParentRecordId, LoggedTime DESC
```

```apex
public void queryHBPOs(String parentRecordId) {
	  try {
		  SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

	      // query for the RecordActionHistory associated with ParentRecord
	      QueryResult queryResults = connection.query("SELECT ActionDefinitionApiName, LoggedTime, State " +
	      		"FROM RecordActionHistory WHERE ParentRecordId = '" + parentRecordId + "' LIMIT 50");
	      if (queryResults.getSize() > 0) {
	        for (int i=0;i<queryResults.getRecords().length;i++) {
	          // cast the SObject to a strongly-typed RecordActionHistory
	          RecordActionHistory raa = (RecordActionHistory)queryResults.getRecords()[i];
	          System.out.println("ActionDefinitionApiName: " + raa.getActionDefinitionApiName() + " - LoggedTime: "+ format.format(raa.getLoggedTime().getTime()) + " - State: " +
	              raa.getState());
	        }
	      }
	  } catch (Exception e) {
	      e.printStackTrace();
	  }
  }
```
