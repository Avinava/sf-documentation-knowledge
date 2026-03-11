---
title: "AnimationRule"
domain: tooling-api
topic: animationrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.152Z
keywords: [AnimationRule, Important, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# AnimationRule

# AnimationRule

Represents criteria for determining when an animation is displayed to Path users. Available in API version 46.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| AnimationFrequency | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The frequency with which an animation is displayed when a user selects the designated picklist values in a path. Valid values are:alwaysoftensometimesrarelyA value of always triggers an animation every time. The values often, sometimes, and rarely trigger an animation progressively less frequently. |
| DeveloperName | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionThe developer name for the animation rule.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the animation rule is active (true) or not (false). |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language in the user’s personal settings. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the animation rule. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionAnimationRule metadata from the mns namespace.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| RecordTypeContext | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionAn enum to track whether this AnimationRule applies to all record types for the associated sObject, or only to a single or main record type. Valid values are All, Custom, and Master. |
| RecordTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe record type selected for the sObject in which the animation is displayed. |
| SobjectType | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object on which the animation rule is run. |
| TargetField | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the field used to determine when to display an animation. |
| TargetFieldChangeToValues | TypestringPropertiesFilter, Group, SortDescriptionValues used to determine when to display an animation. When a user selects a value in TargetField that matches a value stored in TargetFieldChangeToValues, the animation is displayed. |