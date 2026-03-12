---
title: "Fields on ProductRequest"
domain: life-sciences-dev-guide
topic: fields-on-productrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.736Z
estimatedTokens: 162
keywords: [ProductRequest, Life, Sciences, Cloud, extend, standard, sample, order, including, destination, user, urgency, level]
---

# Fields on ProductRequest

> Life Sciences Cloud fields extend the standard ProductRequest object for sample order
    information, including destination user and urgency level.

# Fields on ProductRequest

Life Sciences Cloud fields extend the standard ProductRequest object for sample order information, including destination user and urgency level.

## Fields

| Field | Details |
| --- | --- |
| DestinationLocationUserId | TypeReferencePropertiesFilter, Group, Nillable, SortDescriptionThe primary user of the destination location associated with the product request.This field is a relationship field.Relationship NameDestinationLocationUserRefers ToUser |
| UrgencyLevel | TypePicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the level of urgency associated with the product request. |
