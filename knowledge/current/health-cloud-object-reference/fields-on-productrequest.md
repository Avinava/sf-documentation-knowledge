---
title: "Fields on ProductRequest"
domain: health-cloud-object-reference
topic: fields-on-productrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.094Z
estimatedTokens: 173
keywords: [ProductRequest, Health, Cloud, extend, standard, associate, care, programs, track, modification, history]
---

# Fields on ProductRequest

> Health Cloud fields extend the standard ProductRequest object to associate it with care
    programs and to track modification history.

# Fields on ProductRequest

Health Cloud fields extend the standard ProductRequest object to associate it with care programs and to track modification history.

## Fields

| Field | Details |
| --- | --- |
| CareProgramEnrolleeId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care program enrollee associated with the product request. This field is available from API version 49.0 and later.This is a relationship field.Relationship NameCareProgramEnrolleeRefers ToCareProgramEnrollee |
| LastModifiedById | TypeReferencePropertiesAggregatable, Defaulted on create, Filter, Group, SortDescriptionID of the user who last updated this object. |
