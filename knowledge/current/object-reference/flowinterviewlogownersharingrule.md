---
title: "FlowInterviewLogOwnerSharingRule"
domain: object-reference
topic: flowinterviewlogownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.290Z
estimatedTokens: 584
keywords: [FlowInterviewLogOwnerSharingRule, rules, sharing, FlowInterviewLog, users, owner.This, API, version, 49.0, later, Calls, Usage]
---

# FlowInterviewLogOwnerSharingRule

> Represents the rules for sharing a FlowInterviewLog with users other
      than the owner.This object is available in API version 49.0 and later.

# FlowInterviewLogOwnerSharingRule

Represents the rules for sharing a FlowInterviewLog with users other than the owner.This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of sharing being allowed.Possible values are:Edit—Read/WriteRead—Read Only |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the sharing rule. Maximum size is 1,000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Rule Name in the user interface.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the source group. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the user interface. Limited to 80 characters. Corresponds to Label on the user interface. |
| OptionsIncludeHVUOwnedRecords | TypebooleanPropertiesCreate, Filter, UpdateDescription |
| OptionsIncludeRecordsOwnedByAll | TypebooleanPropertiesCreate, Filter, UpdateDescription |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the target user or group that’s given access. |

## Usage

Use this object to manage the sharing rules for FlowInterviewLog records. General sharing uses this object.
