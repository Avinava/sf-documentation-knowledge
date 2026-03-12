---
title: "ExternalDocStorageConfig"
domain: netzero-cloud-dev-guide
topic: externaldocstorageconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.490Z
estimatedTokens: 235
keywords: [ExternalDocStorageConfig, configuration, admin, setup, specify, drive, path, named, credential, storing, documents, external, drives, SOAP, API]
---

# ExternalDocStorageConfig

> Represents configuration, which admin makes in setup to specify the drive,
         path, and named credential to be used for storing documents on external
      drives.

# ExternalDocStorageConfig

Represents configuration, which admin makes in setup to specify the drive, path, and named credential to be used for storing documents on external drives.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| TargetObject | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe target object associated with the external document storage.Possible values are:AllContractDisclosureDocumentTemplate—Document TemplateInfoLibraryExternalDocument—Information Library External Document |

For more information, see [ExternalDocStorageConfig in Salesforce Contracts](https://developer.salesforce.com/docs/atlas.en-us.260.0.clm_developer_guide.meta/clm_developer_guide/meta_externaldocstorageconfig.htm "HTML (New Window)").
