---
title: "Fields on Account"
domain: life-sciences-dev-guide
topic: fields-on-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.592Z
estimatedTokens: 165
keywords: [Account, Life, Sciences, Cloud, extend, standard, represent, patients, providers]
---

# Fields on Account

> Life Sciences Cloud fields extend the standard Account object to represent information
      about patients and providers.

# Fields on Account

Life Sciences Cloud fields extend the standard Account object to represent information about patients and providers.

## Fields

| Field | Details |
| --- | --- |
| Effective Date | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the person account is active. |
| End Date | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the person account is no longer active. |
| Source System ID | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. This field can’t be encrypted. |
