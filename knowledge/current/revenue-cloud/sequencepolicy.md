---
title: "SequencePolicy"
domain: revenue-cloud
topic: sequencepolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.502Z
estimatedTokens: 1162
keywords: [SequencePolicy, configuration, rules, generating, unique, sequential, numbers, records, Stores, settings, numbering, patterns, prefixes, suffixes, sequence]
---

# SequencePolicy

> Represents the configuration of rules and parameters for generating
         unique, sequential numbers for records. Stores settings such as numbering patterns,
         prefixes, suffixes, sequence start numbers, increment values, and filter criteria to ensure
         accurate and compliant numbering. This object is available in API version 65.0 and
      later.

# SequencePolicy

Represents the configuration of rules and parameters for generating unique, sequential numbers for records. Stores settings such as numbering patterns, prefixes, suffixes, sequence start numbers, increment values, and filter criteria to ensure accurate and compliant numbering. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| DateStampFormat | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The format of the stamp date that’s appended to the sequence number.Valid values are:MM-YYYY—Month Year (MM-YYYY)MM-dd-yyyy—Month Day Year (MM-DD-YYYY)NoneYYYY—Year (YYYY)YYYY-YY—Org Fiscal Year (YYYY–YY) |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the sequencing policy. |
| EffectiveFromDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date and time when the policy becomes effective. |
| ExpirationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the policy expires. |
| IncrementByNumber | TypelongPropertiesFilter, Group, SortDescriptionRequired. The sequence number increment value. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the policy is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a sequence policy record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a sequence policy record. If this value is null, it’s possible that the user only accessed the sequence policy record or a related list view (LastReferencedDate), but not viewed the sequence policy record itself. |
| MaximumSequenceNumber | TypelongPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number the sequence number can reach. The maximum width is determined by the maximum sequence number value. |
| MinimumSequenceNumberWidth | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum number of digits a sequence number must have. For example, if the minimum width is set to 3, sequence numbers appear as 001, 002, and so on. If the maximum sequence number is 99999, the width would be 5 digits. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the sequence policy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the user who owns a sequence policy record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Prefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA string added to the start of the sequence number. |
| SelectionLogic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe logic that determines the records to which the sequence policy applies. |
| SequenceMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies how sequence numbers are generated.Valid values are:Basic—Gaps are allowed, such as when a record is canceled or rolled back.Gapless—Numbers follow one after another with no gaps. |
| SequencePattern | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The structure of a sequence. |
| SequenceStartNumber | TypelongPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The starting sequence number. |
| Suffix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA string added to the end of the sequence number. |
| TargetObject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The object to which the policy is applied. |
| TimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time zone applicable to the date and time related fields of the policy. When not specified, it takes the user’s time zone by default. The time zone is shown in Greenwich Mean Time (GMT). |
