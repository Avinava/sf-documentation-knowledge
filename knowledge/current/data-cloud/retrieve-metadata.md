---
title: "Retrieve Metadata"
domain: data-cloud
topic: retrieve-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.388Z
keywords: [Retrieve, Metadata, GET, api, metadata, Syntax, Request, Parameters, Examples, HTTP, Responses]
---

# Retrieve Metadata

# Retrieve Metadata

Data Cloud Metadata API response includes metadata about all entities, including Calculated Insights, Engagement, Profile, and other entities, and their relationships to other objects. For Data Lake Objects (DLOs) and Data Model Objects (DMOs), the API response also includes information about key qualifier fields. For each DLO field and DMO field, the API response includes the name of the associated key qualifier field.

## GET /api/v1/metadata

Returns the metadata for Calculated Insights, Engagement, Profile, and other objects.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce API version 51.0 and later

Formats

REST

URI

/api/v1/metadata/

## Request Parameters

| Field Name | Description |
| --- | --- |
| entityType | Field TypestringDescriptionThe requested metadata entity type. By default, this parameter includes all of the available types. Acceptable values: DataLakeObject, DataModelObject, and CalculatedInsight |
| entityCategory | Field TypestringDescriptionThe requested metadata entity category. By default, this parameter includes all of the available categories. It isn’t applicable for Calculated Insight entities. Acceptable values: Profile, Engagement, and Related |
| entityName | Field TypestringDescriptionThe name of the requested metadata entity. By default, this parameter includes all of the available categories and an exhaustive list of entities. Example: UnifiedIndividual__dlm |

## Examples

Request

```

```

Response

```

```

## HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback successfully verified |
| 400 Bad Request | Invalid request |
| 500 Server Error | Internal error |