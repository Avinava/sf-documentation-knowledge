---
title: "AIUpdateRecordEvent"
domain: platform-events
topic: aiupdaterecordevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.205Z
estimatedTokens: 977
keywords: [AIUpdateRecordEvent, Notifies, subscribers, Einstein, Case, Classification, generated, prediction, potentially, updated, record, API, version, 47.0, later]
---

# AIUpdateRecordEvent

> Notifies subscribers when Einstein Case Classification has generated a
			case field value prediction and potentially updated a case record. This object is
			available in API version 47.0 and later.

# AIUpdateRecordEvent

Notifies subscribers when Einstein Case Classification has generated a case field value prediction and potentially updated a case record. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/AIUpdateRecordEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates whether an error occurred in the automatic case update, and describes the nature of the error. Values are:none—No error occurred.entity_locked—The case is locked for editing by an approval process.no_access—The selected Einstein user or automatic process user doesn’t have permission to make the update. For example, the user needs permission to update cases or the case field in question, or needs sharing-based access to the case.validation_rule—The update violates a case validation rule.other—A different error occurred.Available in API version 50.0 and later. |
| ErrorMessage | TypestringPropertiesNillableDescriptionFurther describes an error that occurred in the automatic case update. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| IsUpdated | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the related case (RecordId) was updated by Einstein Case Classification. If a case value prediction falls below the required confidence level selected in the predictive model, the case is not updated (false). If the prediction meets the confidence level requirement, the case field is updated and the case is saved (true). It is only updated if at least one field has a confidence threshold defined for the field’s Automate Value.Available in API version 49.0 and later. |
|  |  |
| RecordId | TypestringPropertiesNoneDescriptionThe record in which the prediction results are written. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| UpdatedFields | TypecomplexvaluePropertiesNillableDescriptionIndicates which record fields, if any, were updated in the event.Available in API version 49.0 and later. |

## Usage

When Einstein Case Classification generates a case field value prediction, an AIUpdateRecordEvent event message is generated on case create whether or not Einstein updates the case, and if at least one of the prediction fields has a confidence threshold set in the Automate Value setting. A prediction will not result in a case update if its confidence level falls below the confidence threshold defined for the field’s Automate Value setting. Subscribe to AIUpdateRecordEvent to be notified of such changes and to rerun case routing logic.

If all fields have a prediction that meets the confidence threshold criteria and an unexpected error prevents recommendations from being auto-applied, an AIUpdateRecordEvent is published with a corresponding ErrorCode and Error Message.

If a case doesn't match the data segment filters for any of the apps, we don't score and auto-apply recommendations or publish any events.

There are additional considerations to auto-apply recommendations with dependent picklists. [Learn More](https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.cc_service_field_considerations.htm)
