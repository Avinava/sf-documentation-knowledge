---
title: "SalesWorkQueueSettings"
domain: object-reference
topic: salesworkqueuesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.538Z
estimatedTokens: 392
keywords: [SalesWorkQueueSettings, settings, customize, work, queue, options, third-party, scoring, custom, number, person, accounts, contacts, leads, Sales]
---

# SalesWorkQueueSettings

> Represents settings used to customize work queue options for
         third-party scoring. Third-party scoring enables custom number fields on person accounts,
         contacts, and leads. You must be a Sales Engagement customer to update this object.
         Previously, you could only use the Einstein Intelligence Score for third-party scoring.
      Available starting in Version
      47.0.

# SalesWorkQueueSettings

Represents settings used to customize work queue options for third-party scoring. Third-party scoring enables custom number fields on person accounts, contacts, and leads. You must be a Sales Engagement customer to update this object. Previously, you could only use the Einstein Intelligence Score for third-party scoring. Available starting in Version 47.0.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object can’t be packaged.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FeatureName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA value that represents the name of the work queue settings.To use custom number fields in the work queue, the value must be entered as ThirdPartyScore. |
| TargetEntity | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe related record object of the custom number field. Acceptable SObjects include PersonAccount, Contact, and Lead. |
| TargetField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the DeveloperName of the custom number field related to the TargetEntity. Custom fields must have a custom number data type.To use Einstein Intelligence Score for lead scoring, enter ScoreIntelligence.Score for the DeveloperName.To remove custom number fields from the work queue, enter None. |
