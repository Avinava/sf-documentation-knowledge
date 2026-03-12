---
title: "Transaction Management Fields on Quote Document"
domain: revenue-cloud
topic: transaction-management-fields-on-quote-document
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.569Z
estimatedTokens: 252
keywords: [Transaction, Management, Quote, Document, Standard, custom, extend, represent, documents, API, version, 61.0, later, Special, Access]
---

# Transaction Management Fields on Quote Document

> Standard and custom fields extend the standard Quote Document object for use
         in Transaction Management to represent information about quote documents. This object
      is available in API version 61.0 and later.

# Transaction Management Fields on Quote Document

Standard and custom fields extend the standard Quote Document object for use in Transaction Management to represent information about quote documents. This object is available in API version 61.0 and later.

## Special Access Rules

To view these fields, you must have the Revenue Cloud Advanced license. See [Quote Document](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quotedocument.htm) for fields on the Salesforce platform object.

## Fields

| Field | Details |
| --- | --- |
| Document Template | TypeStringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe template ID used for generating the quote document. |
| Status | TypePicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the quote document.Possible values are:CompletedFailedGeneratingIn ProgressNoneQueuedThe default value is None. |
