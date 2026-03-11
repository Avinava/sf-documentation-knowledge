---
title: "SchedulingObjective"
domain: tooling-api
topic: schedulingobjective
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.722Z
keywords: [SchedulingObjective, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# SchedulingObjective

# SchedulingObjective

Represents scheduling objective settings for Workforce Engagement. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This object is available only if Workforce Engagement is enabled in your org. To view, create, edit, and delete records, the user requires the Workforce Engagement Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the scheduling objective.Possible values are the supported languages in Workforce Engagement. |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionLabel for the scheduling objective. In the UI, this field is Scheduling Objective. |
| Metadata | Typemns:SchedulingObjectivePropertiesCreate, Nillable, UpdateDescriptionThe scheduling objective’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| SchedulingCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionWhat the scheduling logic applies the objective to.Possible values are:A—Service AppointmentB—Shift |
| SchedulingObjectiveType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the type of scheduling objective.Possible values are:AgentPreference—In the UI, this value appears as Maximized Preferences.BalanceNonStandardShiftsBalanceShifts |