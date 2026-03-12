---
title: "StandardObjectNameChangeEvent"
domain: nonprofit-cloud
topic: standardobjectnamechangeevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.319Z
estimatedTokens: 886
keywords: [StandardObjectNameChangeEvent, ChangeEvent, supports, Change, Data, Capture, subscribe, stream, events, receive, tied, record, changes, Salesforce, include]
---

# StandardObjectNameChangeEvent

> A ChangeEvent object is available for each object that supports Change Data Capture.
    You can subscribe to a stream of change events using Change Data Capture to receive data tied to
    record changes in Salesforce. Changes include record creation, updates to an existing record,
    deletion of a record, and undeletion of a record. A change event isn’t a Salesforce
    object—it doesn’t support CRUD operations or queries. It’s included in the object
    reference so you can discover which Salesforce objects support change events.

# StandardObjectNameChangeEvent

A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.

## Supported Calls

describeSObjects()

## Special Access Rules

-   Not all objects may be available in your org. Some objects require specific feature settings and permissions to be enabled.
-   For more special access rules, if any, see the documentation for the standard object. For example, for AccountChangeEvent, see the special access rules for Account.

## Change Event Name

Change events are available for all custom objects and a subset of standard objects. The name of a change event is based on the name of the corresponding object for which it captures the changes.

Standard Object Change Event Name

```

```

Example: AccountChangeEvent

Custom Object Change Event Name

```

```

Example: MyCustomObject\_\_ChangeEvent

## Change Event Fields

The fields that a change event can include correspond to the fields on the associated parent Salesforce object, with a few exceptions. For example, AccountChangeEvent fields correspond to the fields on Account.

The fields that a change event doesn’t include are:

-   The IsDeleted system field.
-   The SystemModStamp system field.
-   Any field whose value isn’t on the record and is derived from another record or from a formula, except roll-up summary fields, which are included. Examples are formula fields. Examples of fields with derived values include LastActivityDate and PhotoUrl.

Each change event also contains header fields. The header fields are included inside the ChangeEventHeader field. They contain information about the event, such as whether the change was an update or delete and the name of the object, like Account.

In addition to the event payload, the event schema ID is included in the schema field. Also included is the event-specific field, replayId, which is used for retrieving past events.

## Event Message Example

The following example is an event message in JSON format for a new account record creation.

```

```

## API Version and Schema

When you subscribe to change events, the subscription uses the latest API version and the event messages received reflect the latest field definitions. For more information, see [API Version and Event Schema](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_message_structure.htm#cdc_event_schema.htm) in the Change Data Capture Developer Guide.

## Usage

For more information about Change Data Capture, see [Change Data Capture Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_intro.htm).

## Objects That Support Change Events

These objects have associated ChangeEvent objects.

-   GiftCommitment
-   GiftCommitmentSchedule
-   GiftSoftCredit
-   GiftTransaction
-   GiftRefund
-   GiftTransactionDesignation
-   JobPositionAssignment
-   JobPositionQualification
-   JobPositionShift
-   OutreachSourceCode
-   PersonLocationAvailability
-   PositionBenefit
-   PositionQualification
-   VolunteerInitiative

## Code Examples

```
<Standard_Object_Name>ChangeEvent
```

```
<Custom_Object_Name>__ChangeEvent
```

```
{
  "schema": "IeRuaY6cbI_HsV8Rv1Mc5g", 
  "payload": {
    "ChangeEventHeader": {
      "entityName": "Account", 
      "recordIds": [
        "<record_ID>"
      ], 
      "changeType": "CREATE", 
      "changeOrigin": "com/salesforce/api/soap/51.0;client=SfdcInternalAPI/", 
      "transactionKey": "0002343d-9d90-e395-ed20-cf416ba652ad", 
      "sequenceNumber": 1, 
      "commitTimestamp": 1612912679000, 
      "commitNumber": 10716283339728, 
      "commitUser": "<User_ID>"
    }, 
    "Name": "Acme", 
    "Description": "Everyone is talking about the cloud. But what does it mean?", 
    "OwnerId": "<Owner_ID>", 
    "CreatedDate": "2021-02-09T23:17:59Z", 
    "CreatedById": "<User_ID>", 
    "LastModifiedDate": "2021-02-09T23:17:59Z", 
    "LastModifiedById": "<User_ID>"
  }, 
  "event": {
    "replayId": 6
  }
}
```
