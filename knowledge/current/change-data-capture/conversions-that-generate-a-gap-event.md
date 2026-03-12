---
title: "Conversions That Generate a Gap Event"
domain: change-data-capture
topic: conversions-that-generate-a-gap-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.557Z
estimatedTokens: 219
keywords: [Conversions, Generate, Gap, Event, generated, affected, records, Picklist, change, message, including, record, IDs, GAP_UPDATE]
---

# Conversions That Generate a Gap Event

> A gap event is generated for all the affected records for some field conversions from
  Picklist. The change event header of the gap event message contains information about the records,
  including the record IDs and a change type of GAP_UPDATE.

# Conversions That Generate a Gap Event

A gap event is generated for all the affected records for some field conversions from Picklist. The change event header of the gap event message contains information about the records, including the record IDs and a change type of GAP\_UPDATE.

These field type conversions generate a gap event.

-   Changing a Picklist field to Checkbox
-   Changing a Picklist field to Picklist (Multi-Select)

#### See Also

-   [Gap Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_gap.htm "Salesforce sometimes sends gap events instead of change events to inform subscribers about errors, or if it’s not possible to generate change events. A gap event contains information about the change in the header, such as the change type and record ID. It doesn’t include details about the change, such as record fields.")

## Related Topics

- Gap Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_gap.htm)
