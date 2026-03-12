---
title: "GET
  /api/v1/universalIdLookup/{entity_name}/{DataSourceId__c}/{DataSourceObjectId__c}/{SourceRecordId__c}"
domain: data-cloud
topic: get-apiv1universalidlookupentitynamedatasourceidcdatasourceobjectidcsourcerecord
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.627Z
estimatedTokens: 420
keywords: [GET, api, universalIdLookup, entity_name, DataSourceId__c, DataSourceObjectId__c, SourceRecordId__c, Retrieve, Individual, records, individual, data, sources., example, runner’s, profile, information, comes, three, sources]
---

# GET
  /api/v1/universalIdLookup/{entity_name}/{DataSourceId__c}/{DataSourceObjectId__c}/{SourceRecordId__c}

> Retrieve all the Individual records of an individual from all the data sources. For
  example, if a runner’s profile information comes from three data sources retail sales, loyalty
  program, and mobile identity. A unified individual record for the runner gets created and all the
  individual records are assigned the same unified record id.

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

## Code Examples

```
https://{TSE}.360a.salesforce.com/api/v1/universalIdLookup/IndividualIdentityLink__dlm/SFMC1487860/SFMC1487860_EmailProfile/100060522
```

```
{
          "data": [
            {
              "SourceRecordId__c": "100060522",
              "UnifiedRecordId__c": "c7ac3830-77c0-3d3d-851ccee3e8d9c2c6",
              "ssot__DataSourceObjectId__c": "SFMC1487860_EmailProfile",
              "ssot__DataSourceId__c": "SFMC1487860",
            },
            {
              "SourceRecordId__c": "138408",
              "UnifiedRecordId__c": "c7ac3830-77c0-3d3d-851ccee3e8d9c2c6",
              "ssot__DataSourceObjectId__c": "Mobile_AllSubscribers",
              "ssot__DataSourceId__c": "MobileSDK",
            },
            {
              "SourceRecordId__c": "0043V00001ENHZ",
              "UnifiedRecordId__c": "c7ac3830-77c0-3d3d-851ccee3e8d9c2c6",
              "ssot__DataSourceObjectId__c": "Salesforce_0043V00001ENHZ",
              "ssot__DataSourceId__c": "Contact",
            }
          ]
        }
```

## Related Topics

- Individual DMO (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360dm_individual_dmo.htm)
