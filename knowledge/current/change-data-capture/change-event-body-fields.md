---
title: "Change Event Body Fields"
domain: change-data-capture
topic: change-event-body-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.547Z
estimatedTokens: 951
keywords: [Change, Event, message, includes, corresponding, Salesforce, record, Messages, Pub, Sub, API, Clients, Apex, JSON, CometD]
---

# Change Event Body Fields

> The body of a change event message includes the fields and values for the corresponding
    Salesforce record.

# Change Event Body Fields

The body of a change event message includes the fields and values for the corresponding Salesforce record.

## Change Event Messages in Pub/Sub API Clients

Change events received with Pub/Sub API contain all the record fields, including the unchanged fields and empty fields. Check out the details for each type of operation performed.

Create

For a new record, the event message body includes all record and system fields, even if they’re empty.

Update

For an updated record, the body includes all record and system fields, even if they’re unchanged or empty. Unchanged fields have an empty value even if they have a value on the record. Fields set to null are included with an empty value. To determine which fields have changed, check changedFields, after decoding it, in ChangeEventHeader. The fields that have changed include fields set to null but if you want to find only the fields that were set to null, check nulledFields, after decoding it, in ChangeEventHeader. For details about decoding fields in ChangeEventHeader, see [Event Deserialization Considerations](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/event-deserialization-considerations.html) in the Pub/Sub API Developer Guide.

Delete

For a deleted record, the body doesn’t include any values for record or system fields. All record and system fields are included but with empty values.

Undelete

For an undeleted record, the body includes all record and system fields from the original record. If fields are empty, they’re included with empty values.

## Apex Change Event Messages

Fields in a change event message are statically defined, just like in any other Apex type. As a result, all record fields are available in the change event message received in an Apex trigger, regardless of the operation performed. The event message can contain empty (null) fields.

Create

For a new record, the event message contains all fields, whether populated or empty. It includes fields with default values and system fields, such as CreatedDate and OwnerId.

Update

For an updated record, the event message contains field values only for changed fields. Unchanged fields are present and empty (null), even if they contain a value in the record. The event message also contains the LastModifiedDate system field. The body includes the LastModifiedById field only if it has changed—if the user who modified the record is different than the previous user who saved it.

Delete

For a deleted record, all record fields in the event message are empty (null).

Undelete

For an undeleted record, the event message contains all fields from the original record, including empty (null) fields and system fields.

## JSON Change Event Messages in CometD Clients

The fields that Salesforce includes in a JSON event message that a CometD client receives depend on the operation performed.

Create

For a new record, the event message body includes all non-empty fields and system fields, such as the CreatedDate and OwnerId fields.

Update

For an updated record, the body includes only the changed fields. It includes empty fields only if they’re updated to an empty value (null). It also includes the LastModifiedDate system field. The body includes the LastModifiedById field only if it has changed—if the user who modified the record is different than the previous user who saved it.

Delete

For a deleted record, the body doesn’t include any fields or system fields.

Undelete

For an undeleted record, the body includes all non-empty fields from the original record, in addition to system fields.

For examples of change event messages, see the [Change Data Capture Basics](https://trailhead.salesforce.com/content/learn/modules/change-data-capture "HTML (New Window)") Trailhead module.
