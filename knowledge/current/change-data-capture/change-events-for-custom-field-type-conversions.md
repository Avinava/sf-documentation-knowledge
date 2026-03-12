---
title: "Change Events for Custom Field Type Conversions"
domain: change-data-capture
topic: change-events-for-custom-field-type-conversions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.565Z
estimatedTokens: 507
keywords: [Change, Events, Custom, Conversions, event, gap, generated, data, changes, preserve, truncate, don't, generate]
---

# Change Events for Custom Field Type Conversions

> When you change the type of a custom field, a change event or gap event is generated for
  data changes for some conversions. Other conversions, such as those that preserve or truncate
  field values, don't generate events.

# Change Events for Custom Field Type Conversions

When you change the type of a custom field, a change event or gap event is generated for data changes for some conversions. Other conversions, such as those that preserve or truncate field values, don't generate events.

-   **[Conversions That Generate a Change Event](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_single_event.htm)**
    When converting a custom field type to another type that isn’t compatible, field data is lost and is set to null in records corresponding to the object. One change event is generated for all the affected records, and the event message contains no record fields.
-   **[Conversions That Generate a Gap Event](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_gap_event.htm)**
    A gap event is generated for all the affected records for some field conversions from Picklist. The change event header of the gap event message contains information about the records, including the record IDs and a change type of GAP\_UPDATE.
-   **[Conversions That Don’t Generate Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_no_events.htm)**
    No change or gap events are generated for custom field type conversions that preserve or truncate field data, and for conversions between Picklist and Text fields.

#### See Also

-   [*Salesforce Help*: Change the Custom Field Type](https://help.salesforce.com/articleView?id=customize_fieldtype.htm&language=en_US "Salesforce Help: Change the Custom Field Type - HTML (New Window)")

-   [*Salesforce Help*: Notes on Changing Custom Field Types](https://help.salesforce.com/articleView?id=notes_on_changing_custom_field_types.htm&language=en_US "Salesforce Help: Notes on Changing Custom Field Types - HTML (New Window)")

-   [*Salesforce Help*: Custom Field Types](https://help.salesforce.com/articleView?id=custom_field_types.htm&language=en_US "Salesforce Help: Custom Field Types - HTML (New Window)")

## Related Topics

- Conversions That Generate a Change Event (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_single_event.htm)
- Conversions That Generate a Gap Event (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_gap_event.htm)
- Conversions That Don’t Generate Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_no_events.htm)
