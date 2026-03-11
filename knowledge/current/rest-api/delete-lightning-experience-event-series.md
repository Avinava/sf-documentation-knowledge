---
title: "Delete Lightning Experience Event Series"
domain: rest-api
topic: delete-lightning-experience-event-series
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.897Z
keywords: [Delete, Lightning, Experience, Event, Series, Single, Multiple, Events, Considerations]
---

# Delete Lightning Experience Event Series

# Delete Lightning Experience Event Series

Use the HTTP DELETE method to remove one or more IsRecurrence2 events in a series. You can remove a single event, all events following and including a specific event, or an entire event series.

## Delete a Single Event in a Series

Use the [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") resource to delete event records. To delete a single occurrence in a series, specify the event ID and use the [DELETE method](atlas.en-us.api_rest.meta/api_rest/dome_delete_record.htm "Use the *** resource to delete records. Specify the record ID and use the DELETE method of the resource to delete a record.") of the resource to delete a record.

## Delete Multiple Events or All Events from a Series

To delete all events in a series from a specific occurrence and onwards, specify the event ID and use the DELETE method of the resource to delete a record. When calling this method, IsRecurrence2 must be true and IsRecurrence2Exclusion must be false.

To delete an entire event series, specify the event ID of the first occurrence in the series and use the DELETE method of the resource to delete a record.

Example for deleting multiple events or all events from a series

```

```

Example request body

```

```

Example response body after successfully deleting events

```

```

## Considerations

Deleting from an event onwards doesn’t support calls from events that:

-   Occurred before the original value of Recurrence2PatternStartDate.
-   Are defined as child events.

If the event series originated outside of Salesforce and the event ID of the first occurrence is unavailable, you can’t delete all events in a series. Instead, delete events from a specific occurrence onwards.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_records.htm "Working with Records")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_searches_and_queries.htm "Working with Searches and Queries")