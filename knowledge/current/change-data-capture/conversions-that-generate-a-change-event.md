---
title: "Conversions That Generate a Change Event"
domain: change-data-capture
topic: conversions-that-generate-a-change-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.561Z
estimatedTokens: 297
keywords: [Conversions, Generate, Change, Event, converting, custom, another, isn’t, compatible, data, lost, records, corresponding, generated, affected]
---

# Conversions That Generate a Change Event

> When converting a custom field type to another type that isn’t compatible, field data is
    lost and is set to null in records corresponding to the object. One change event is generated
    for all the affected records, and the event message contains no record fields.

# Conversions That Generate a Change Event

When converting a custom field type to another type that isn’t compatible, field data is lost and is set to null in records corresponding to the object. One change event is generated for all the affected records, and the event message contains no record fields.

Examples of incompatible field changes are:

-   Changing a Date or Date/Time field to any other field type, and vice versa
-   Changing a Checkbox field to any other field type
-   Changing a Picklist (Multi-Select) field to any other field type

Because a field type conversion can affect many records, the recordIds header field value in the event message contains a wildcard value instead of a record ID array. The value starts with the three-character object ID prefix, followed by the wildcard character \*. For example, if you make an incompatible field type change for an Account custom field, the recordIds field looks similar to the following.

```

```

#### See Also

-   [ChangeEventHeader Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm "Check out the descriptions of the fields that the change event header contains.")

## Code Examples

```
"ChangeEventHeader": {
        "entityName": "Account",
        "recordIds": [
          "001*"
        ],
        ...
}
```

## Related Topics

- ChangeEventHeader Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm)
