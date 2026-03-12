---
title: "Conversions That Don’t Generate Events"
domain: change-data-capture
topic: conversions-that-dont-generate-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.559Z
estimatedTokens: 249
keywords: [Conversions, Don’t, Generate, Events, change, gap, generated, custom, preserve, truncate, data, Picklist, Text, Compatible]
---

# Conversions That Don’t Generate Events

> No change or gap events are generated for custom field type conversions that preserve or
  truncate field data, and for conversions between Picklist and Text fields.

# Conversions That Don’t Generate Events

No change or gap events are generated for custom field type conversions that preserve or truncate field data, and for conversions between Picklist and Text fields.

## Compatible Field Types with No Data Change

When converting a field type to another type that is compatible, field data is unchanged, and no event is generated. For example, these conversions are compatible.

-   Changing a Text Area, Email, Url, Phone, Autonumber, Number, Percent, or Currency field to a Text field
-   Changing a Text field to a Text Area, Text Area (Long), Email, Url, Phone, or Autonumber field

## Other Field Type Conversions

These field type conversions also don't generate events.

-   Changing a Picklist field to a Text field
-   Changing a Text field to a Picklist field
-   Conversions that result in truncated data because the target field type has a smaller size, such as changing a Text Area (Long) field to a Text, Text Area, Email, Url, or Phone field
