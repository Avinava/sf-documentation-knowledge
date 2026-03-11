---
title: "GET
  /api/v1/universalIdLookup/{entity_name}/{DataSourceId__c}/{DataSourceObjectId__c}/{SourceRecordId__c}"
domain: data-cloud
topic: get-apiv1universalidlookupentitynamedatasourceidcdatasourceobjectidcsourcerecord
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.525Z
keywords: [GET, api, universalIdLookup, entity_name, DataSourceId__c, DataSourceObjectId__c, SourceRecordId__c, entity, _name, DataSourceId, DataSourceObjectId, SourceRecordId, Syntax, Request, Parameters, Note, Examples]
---

# GET
  /api/v1/universalIdLookup/{entity_name}/{DataSourceId__c}/{DataSourceObjectId__c}/{SourceRecordId__c}

# GET /api/v1/universalIdLookup/{entity\_name}/{DataSourceId\_\_c}/{DataSourceObjectId\_\_c}/{SourceRecordId\_\_c}

Retrieve all the Individual records of an individual from all the data sources. For example, if a runner’s profile information comes from three data sources retail sales, loyalty program, and mobile identity. A unified individual record for the runner gets created and all the individual records are assigned the same unified record id.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce API version 54.0 and later

Formats

REST

URI

/api/v1/universalIdLookup/{entity\_name}/{DataSourceId\_\_c}/{DataSourceObjectId\_\_c}/{SourceRecordId\_\_c}

## Request Parameters

Use the entity\_name, DataSourceId\_\_c, DataSourceObjectId\_\_c, and SourceRecordId\_\_c and retrieve the individual records.

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

SourceRecordId\_\_c maps to Individual ID of Individual data model object. For more information, see [Individual DMO](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_individual_dmo.htm "The Individual DMO is a Data Cloud data model object for contacts, customers, or other people interested in your company's products or services.").

| Field Name | Field Type | Description |
| --- | --- | --- |
| DataSourceId__c | string | Required. The data source ID. |
| DataSourceObjectId__c | string | Required. The data source object ID. |
| entity_name | string | Required. The name of the bridge table entity. |
| SourceRecordId__c | string | Required. The primary key of the data source record. |

## Examples

Request

```

```

Response

```

```