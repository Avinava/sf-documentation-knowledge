---
title: "SchedulingRule"
domain: tooling-api
topic: schedulingrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.761Z
estimatedTokens: 913
keywords: [SchedulingRule, Represents, scheduling, rule, settings, Workforce, Engagement., API, version, 53.0, later., Important, Supported, SOAP, Calls, REST, Special, Access, Rules, Fields]
---

# SchedulingRule

> Represents scheduling rule settings for Workforce Engagement. This
      object is available in API version 53.0 and later.

# SchedulingRule

Represents scheduling rule settings for Workforce Engagement. This object is available in API version 53.0 and later.

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
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the scheduling rule.Possible values are the supported languages in Workforce Engagement. |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionLabel for the scheduling rule. In the UI, this field is Scheduling Rule. |
| Metadata | Typemns:SchedulingRulePropertiesCreate, Nillable, UpdateDescriptionThe scheduling rule’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| SchedulingCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. What the scheduling logic applies the rule to.Possible values are:A—Service AppointmentB—Shift |
| SchedulingRuleType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the type of rule.Possible values are:A—Active ResourcesB—Match SkillsC—AvailabilityLimitNonstandardShifts—Specifies a rule type that limits how many non-standard shifts can be assigned to each agent. Available in API version 54.0 and later.M—Match TerritoryQ—Match QueuesRestTimeMinutes—Specifies a rule type that finds resources who have met the minimum rest time in minutes between consecutive shifts. Available in API version 56.0 and later.W—Work Limit |
