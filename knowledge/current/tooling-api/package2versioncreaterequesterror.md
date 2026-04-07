---
title: "Package2VersionCreateRequestError"
domain: tooling-api
topic: package2versioncreaterequesterror
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:33.764Z
estimatedTokens: 157
keywords: [Package2VersionCreateRequestError, error, encountered, creating, second-generation, managed, package, unlocked, API, 41.0, SOAP, REST, HTTP]
---

> Represents
            an error encountered while creating a second-generation managed package or an unlocked
            package version. Available in API version 41.0 and later.

# Package2VersionCreateRequestError

Represents an error encountered while creating a second-generation managed package or an unlocked package version. Available in API version 41.0 and later.

## Supported SOAP Calls

query(), retrieve()

## Supported REST HTTP Methods

Query, GET

## Fields

| Field | Details |
| --- | --- |
| Message | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe error that was encountered during the creation of a package version. |
| ParentRequestId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Package2VersionCreateRequest that encountered an error. |
