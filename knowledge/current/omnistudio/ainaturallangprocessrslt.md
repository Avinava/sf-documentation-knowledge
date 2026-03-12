---
title: "AINaturalLangProcessRslt"
domain: omnistudio
topic: ainaturallangprocessrslt
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:52.844Z
estimatedTokens: 653
keywords: [AINaturalLangProcessRslt, stores, result, natural, language, processing, NLP, operation, API, version, 57.0, later, SOAP, Calls, REST]
---

# AINaturalLangProcessRslt

> Represents information about the object that stores the result of a
         natural language processing (NLP) operation. This object is available in API version
      57.0 and later.

# AINaturalLangProcessRslt

Represents information about the object that stores the result of a natural language processing (NLP) operation. This object is available in API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Reference Record | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record with the text field that's processed by an AI natural language process request.Relationship TypeLookup |
| Text Field | TypestringDescriptionThe field storing the text that's processed by an natural language process request. |
| Service Name | TypestringPropertiesFilter, Group, SortDescriptionSpecifies the name of the service that's used to process an AI natural language process request. |
| Response | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe response received after an AI natural language process request is processed. |
| Status | TypereferencePropertiesFilter, Group, SortDescriptionSpecifies the status of an AI natural language process request. |
| Additional Information | TypestringPropertiesFilter, Group, SortDescriptionAdditional information about the request and result of the natural language processing. For example, this field can store the input prompt that's part of the request and the length of the response. |
| Source Record | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the source record for which an AI natural language process request is processed.Relationship TypeLookup |
| AI Scoring Model Definition Version | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe AI Scoring Model Definition Version record that's used to process an AI natural language process request.Relationship TypeLookup |
| Request Text | TypestringPropertiesFilter, Group, SortDescriptionThe text that's processed by an AI natural language process request in the absence of any reference or source record. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the text that's processed. |
| Processed Chunk Count | TypestringPropertiesFilter, Group, SortDescriptionThe number of chunks that have been processed. |
| Custom Object List | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe list of custom objects used for processing an AI natural language processing request. |
