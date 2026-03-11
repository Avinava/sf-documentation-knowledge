---
title: "Package2VersionCreateRequestError"
domain: tooling-api
topic: package2versioncreaterequesterror
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.411Z
keywords: [Package2VersionCreateRequestError, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# Package2VersionCreateRequestError

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