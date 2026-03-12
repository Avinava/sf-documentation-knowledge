---
title: "ArchivePolicyDefinition"
domain: object-reference
topic: archivepolicydefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.890Z
estimatedTokens: 608
keywords: [ArchivePolicyDefinition, data, lifecycle, policy, row, scope, frequency, rules, automated, archiving, purging, records, root, entity, Contact]
---

# ArchivePolicyDefinition

> Represents a data lifecycle policy that, in each row, defines the
            scope, frequency, and rules for automated archiving or purging of records from a root
            entity, such as Contact or Lead. This object is available in API version 65.0 and
        later.

# ArchivePolicyDefinition

Represents a data lifecycle policy that, in each row, defines the scope, frequency, and rules for automated archiving or purging of records from a root entity, such as Contact or Lead. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Create, Update, and Delete operations are restricted to the Archive Admin profile. All other profiles have Read-Only access.

## Fields

| Field | Details |
| --- | --- |
| DataProtectionThreshold | TypeintPropertiesCreate, Filter, Sort, UpdateDescriptionSpecifies a retention buffer, in days, during which recently updated or sensitive records must not be archived or deleted. Enforces data protection compliance. |
| Description | TypetextareaPropertiesCreate, UpdateDescriptionThe purpose or scope of the policy. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the policy is active and eligible for execution. Only active policies can be executed by scheduled or manual processes. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name assigned to the policy. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionProcess type that the policy executes.Valid values are:ArchiveImportPurge |
| Query | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA complete SOQL or custom query defining the set of records to archive or purge, based on policy rules. Determines which records are eligible for processing. |
| QueryLimit | TypeintPropertiesCreate, Filter, Sort, UpdateDescriptionThe maximum number of root records this policy can process in a single run. Used to throttle execution for scalability and control. |
| RootEntityName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the Salesforce object targeted by the policy. Determines which object’s records are queried and processed. |
| RunFrequency | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies how often the policy is executed—manually or on a regular interval. Enables automation for recurring data lifecycle operations.Valid values are:NoneThis option is specifically for manual policy runs.DailyWeeklyMonthly |
