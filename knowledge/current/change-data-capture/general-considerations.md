---
title: "General Considerations"
domain: change-data-capture
topic: general-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.613Z
estimatedTokens: 1056
keywords: [General, Considerations]
---

# General Considerations

# General Considerations

No Change Events Generated for Some Actions

These actions don’t generate change events for affected records.

-   Hard-deleting a record, that is, deleting a record from the Recycle Bin.
-   Any action related to state and country/territory picklists that you perform in Setup on the State and Country/Territory Picklists page.
-   Changing the type of an opportunity stage picklist value.
-   When a custom picklist field is defined on Contact in a person account org, the field is present on Account with the \_\_pc suffix. Replacing or renaming a value of the custom picklist doesn’t generate account change events but only contact change events for the affected records. But if the custom picklist field is defined on Account, the field isn’t present on Contact and only account change events are generated, as expected.

Change Event Generation in a Transaction with Multiple Changes for the Same Record

If multiple DML operations are performed on a record within the same transaction boundary, only one change event is generated for the initial change type. The change event contains the data that is committed in Salesforce at the end of the transaction. No change events are generated for the additional operations because they’re internal to the transaction. For example, a case record is created and an after-insert trigger queries this case before the transaction is committed. The trigger changes the case priority from Medium to High and performs an update operation. After the transaction is committed, one change event is generated with a changeType of CREATE and priority of High.

Event Replay ID Field

See the [Event Replay ID Field](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/event-message-durability.html#event-replay-id-field) Pub/Sub API documentation.

Formula Field Support

Custom formula fields are included in change events, but updates to the formula field don’t always trigger a change event. Formula fields don't appear in the changed record in Apex Triggers on ChangeEvent objects. Derived fields are not supported in Change Data Capture. For information on which fields are included and excluded in a change event, see [Change Event Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_message_structure.htm#cdc_fields_included).

Formula Field Numeric Digit Limits and Gap Events

When including numeric formula fields, ensure that the value does not exceed the Salesforce limit of 18 total digits (integer and decimal parts combined). If a formula field has a high number of decimal places configured, the system may pad the value with zeros to meet the configured precision, potentially causing the total number of digits to exceed 18 even if the original value has fewer digits. Change events containing values that exceed this limit are not captured and a gap event is generated instead.

Geolocation Compound Fields

When a geolocation compound field (of type location) is changed in a custom object, all its component fields are published in the change event whether they were changed or not. In contrast, when a geolocation field is changed in a standard object, only the changed field is published. For more information, see [Geolocation Compound Fields.](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/compound_fields_geolocation.htm) in the Salesforce Object Reference.

Data Cloud Channel for Data Streams

In Data Cloud, when you create a data stream by using the Salesforce CRM connector, the data stream uses Change Data Capture for synchronizing the record data if the selected objects for the data stream support change events. The selections are added to the DataCloudEntities standard channel. Make sure that you don’t modify the selections for this standard channel by using Metadata API or Tooling API. Updating the channel selections by using the API can result in unexpected synchronizations of Salesforce objects that the Data Cloud administrator didn’t intend. For more information, see [Create a Salesforce CRM Data Stream](https://help.salesforce.com/s/articleView?id=data.c360_a_create_crm_data_stream.htm&type=5&language=en_US) in Salesforce Help.

## Related Topics

- Change Event Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_message_structure.htm)
