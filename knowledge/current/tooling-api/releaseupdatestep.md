---
title: "ReleaseUpdateStep"
domain: tooling-api
topic: releaseupdatestep
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.778Z
estimatedTokens: 288
keywords: [ReleaseUpdateStep, individual, release, step, API, version, 49.0, later, SOAP, Calls, REST, Special, Access, Rules]
---

# ReleaseUpdateStep

> Represents an individual release update step. Available in API version 49.0 and later.

# ReleaseUpdateStep

Represents an individual release update step. Available in API version 49.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

GET, HEAD, PATCH, POST, Query

## Special Access Rules

To enable or disable release updates, users must have the Manage Release Updates or Customize Application permission.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the release update step. |
| Number | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe corresponding number for this release update step. |
| ReleaseUpdateId | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the related release update.This field is a relationship field.Relationship NameReleaseUpdateRefers ToReleaseUpdate |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the release update step.Possible values are:CompleteIncompleteNewStartedViewed |
