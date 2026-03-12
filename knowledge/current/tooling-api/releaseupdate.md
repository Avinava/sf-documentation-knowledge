---
title: "ReleaseUpdate"
domain: tooling-api
topic: releaseupdate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.673Z
estimatedTokens: 886
keywords: [ReleaseUpdate, Represents, individual, release, update., API, version, 50.0, later., Supported, SOAP, Calls, REST, HTTP, Fields]
---

# ReleaseUpdate

> Represents an individual release update. Available in API
        version 50.0 and later.

# ReleaseUpdate

Represents an individual release update. Available in API version 50.0 and later.

## Supported SOAP Calls

describeSObjects(), query()

## Supported REST HTTP Methods

Query

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesFilter, Nillable, SortDescriptionThe API version to which the update is applied. |
| Category | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates the type of the release update. For example, “Security” or “Usability.” |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionThe description of the update that appears on the front of the card. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the release update. |
| DueDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date by which test runs must be completed. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the release update. |
| HasNewSteps | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if steps have been added to the release update since its original release (true) or not (false). |
| IsReleased | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the update is released (true) or not (false). |
| NumCompSteps | TypeintegerPropertiesFilter, Group, Nillable, SortDescriptionIndicates how many steps have been completed in the update. |
| NumReqSteps | TypeintegerPropertiesFilter, Group, Nillable, SortDescriptionIndicates the total number of required steps before proceeding with test run. |
| NumSteps | TypeintegerPropertiesFilter, Group, Nillable, SortDescriptionIndicates the total number of all steps in the update. |
|  |  |
| Release | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe release, including patch number, in which the update is available. For example, 50.00.00.NoteAlso see ReleaseDate and ReleaseLabel. |
| ReleaseDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date in which the update is enforced.NoteOnly specified if the update is part of a scheduled release, so either Release or ReleaseDate will be non-null. Also see Release and ReleaseLabel. |
| ReleaseLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe release label in which the update is enforced. For example, “Winter ‘21.” The label could also be a formatted date if Release is null and ReleaseDate is non-null. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionValues include:Complete: The update has been applied.Info: An information-only update; no actions to take.Invocable: The update is not yet applied; ready for invocation.Invoked: The update has been invoked but can’t be revoked yet.Nascent: The update has incomplete steps so test run can’t be run yet.Pending: The Complete Steps By date is in the past and update is awaiting enforcement.Revocable: The update is in test run mode. |
| StepStage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates the stage in which the update is at. Options include Needs Action, Due Soon, Overdue, and Archived. |
| SupportsRevoke | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the update has a test run(true) or not (false). Default is false. |
| Title | TypestringPropertiesFilter, Nillable, SortDescriptionThe release update title that appears at the top of the release update in the UI. |
