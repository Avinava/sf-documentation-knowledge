---
title: "Change Event Triggers"
domain: change-data-capture
topic: change-event-triggers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.769Z
estimatedTokens: 1031
keywords: [Change, Event, Triggers, Because, events, platform, they, share, characteristics, subscription, Apex, messages, contain, record, additional]
---

# Change Event Triggers

> Because change events are based on platform events, they share characteristics for
  subscription with Apex platform event triggers. Also, change event messages in triggers contain
  header and record fields, and some additional fields not present in JSON event
  messages.

# Change Event Triggers

Because change events are based on platform events, they share characteristics for subscription with Apex platform event triggers. Also, change event messages in triggers contain header and record fields, and some additional fields not present in JSON event messages.

A change event trigger:

-   Is an after-insert trigger (defined with the after insert keyword)? It fires after the change event message is published.

    For example, this empty trigger definition is for the Account standard object.

    ```

    ```

    And this empty trigger definition is for the Employee\_\_c custom object.

    ```

    ```

-   Runs under the Automated Process entity. As a result:
    -   Debug logs corresponding to the trigger execution are created by Automated Process. The logs aren't available in the Developer Console's log tab, except for Apex tests. Set up a trace flag entity for the Automated Process entity on the Debug Logs page in Setup.
    -   The system fields of records that the trigger processes, such as CreatedById and LastModifiedById, also reference the Automated Process entity.
-   Executes asynchronously outside the Apex transaction that published the change event.
-   Is subject to Apex synchronous governor limits.
-   Has a maximum batch size of 2,000 event messages.

To override a change event trigger’s default running user and batch size, use PlatformEventSubscriberConfig in Tooling API or Metadata API. PlatformEventSubscriberConfig also configures platform event triggers. For more information, see [Configure the User and Batch Size for Your Platform Event Trigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_trigger_config.htm "HTML (New Window)") in the Platform Events Developer Guide.

## Apex Change Event Message Fields

Each change event captured in the trigger contains header and record fields. Fields in a change event message are statically defined, just like in any other Apex type. As a result, all record fields are present in the change event message, whether changed or not. Unchanged fields are null in the Apex change event message. For details, see [Change Event Body Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_body.htm "The body of a change event message includes the fields and values for the corresponding Salesforce record.").

To obtain a header field, access the ChangeEventHeader field on the event object. For example, this code snippet gets the change event header and writes two header field values to the debug log.

```

```

All header fields are provided in the EventBus.ChangeEventHeader Apex class. For more information, see [ChangeEventHeader Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_class_eventbus_ChangeEventHeader.htm "HTML (New Window)") in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm). The Apex class also contains these two headers, which aren’t present in JSON event messages.

nulledfields

Contains the names of fields whose values were changed to null in an update operation. Use this field in Apex change event messages to determine if a field was changed to null in an update and isn’t an unchanged field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

Starting in API version 47.0, the changedfields header is present in Apex and JSON event messages. It contains all fields that were changed in an update operation, whether populated or set to null.

difffields

Contains the names of fields whose values are sent as a unified diff because they contain large text values.

#### See Also

-   [Other Types of Change Events: Gap and Overflow Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events.htm "Other types of change events are provided to handle special situations, such as capturing changes not caught in the Salesforce application servers, or handling high loads of changes.")

## Code Examples

```
trigger AccountChangeEventTrigger on AccountChangeEvent (after insert) {

}
```

```
trigger EmployeeChangeEventTrigger on Employee__ChangeEvent (after insert) {

}
```

```
EventBus.ChangeEventHeader header = event.ChangeEventHeader;
String changeEntity = header.entityName;
String changeOperation = header.changeType;
```

## Related Topics

- Change Event Body Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_body.htm)
- Other Types of Change Events: Gap and Overflow Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events.htm)
