---
title: "FlowRecordVersionOccurrence"
domain: object-reference
topic: flowrecordversionoccurrence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.491Z
estimatedTokens: 686
keywords: [FlowRecordVersionOccurrence, instance, recurring, flow, runs, schedule, weekly, Wednesdays, creates, occurrence, time, API, version, 60.0, later]
---

# FlowRecordVersionOccurrence

> Represents an instance of a recurring flow that runs on a schedule. For example, a flow that runs weekly on Wednesdays creates an occurrence each time it runs.
		This object is available in API version 60.0 and later.

# FlowRecordVersionOccurrence

Represents an instance of a recurring flow that runs on a schedule. For example, a flow that runs weekly on Wednesdays creates an occurrence each time it runs. This object is available in API version 60.0 and later.

## Supported Calls

describe(), read()

## Fields

| Field | Details |
| --- | --- |
| DataSpaceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the data space for this occurence. This field is available in API version 65.0 and later.This field is a relationship field.Relationship NameDataSpaceRefers ToDataSpace |
| Entries | TypeintegerPropertiesFilter, Group, Query, Retrieve, SortDescriptionThe number of entries for this occurrence. |
| Errors | TypeintegerPropertiesFilter, Group, Query, Retrieve, SortDescriptionThe number of errors for this occurrence. |
| ErrorDetail | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA description of the error. This field is available in API version 63.0 and later. |
| Exits | TypeintegerPropertiesFilter, Group, Query, Retrieve, SortDescriptionThe number of exits for this occurrence. |
| FlowRecordId | TypestringPropertiesFilter, Group, Query, Retrieve, SortDescriptionThe ID of the associated flow record. |
| FlowRecordVersionId | TypestringPropertiesFilter, Group, Query, Retrieve, SortDescriptionThe ID of the associated version of the flow record. |
| ProgressStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe running status of the flow interview.Valid values are:CanceledSpecifies a flow interview that was deactivated by a user. The flow doesn’t process previously added records and no additional records are added to this flow.CompletedIndicates a flow interview that is complete. No additional records are eligible to be processed in this flow.ErrorIndicates a flow interview that has been deactivated because it encountered an error. When the error occurs, the error details are emailed to up to 5 users with the Manage Flows permission who most recently logged into Salesforce.FinishingIndicates a flow interview that was deactivated by a user, but is finishing records previously added that are eligible to run to completion. No additional records are added to this flow.InProgressIndicates a flow interview that is running or ready to run.PreparingDataIndicates a flow interview that is preparing the resources it requires to run. This process can take up to 2 hours. |
| ScheduledDate | TypedateTimePropertiesFilter, Group, Query, Retrieve, SortDescriptionThe scheduled time and date of the occurrence. |
| Stopped | TypeintegerPropertiesFilter, Group, Query, Retrieve, SortDescriptionThe number of flows that were stopped for this occurrence. |
