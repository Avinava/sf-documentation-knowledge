---
title: "Import Records from CSV File Action"
domain: mfg-api-devguide
topic: import-records-from-csv-file-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.923Z
estimatedTokens: 424
keywords: [Import, Records, CSV, File, Action, convert, data, uploaded, target, Special, Access, Rules, REST, HTTP, Inputs]
---

# Import Records from CSV File Action

> Import and convert data from an uploaded CSV file into records of the
			target object.

# Import Records from CSV File Action

Import and convert data from an uploaded CSV file into records of the target object.

This action is available in API version 55.0 and later.

## Special Access Rules

To access the Import Records from CSV File action, enable the Import CSV for Advanced Account Forecasting system permission with the Manufacturing Advanced Account Forecast permission set, or enable the Manufacturing Program Based Business permission set.

## Supported REST HTTP Methods

URI

/services/data/v55.0/actions/standard/importRecordsFromCsvFile

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| externalIdFieldName | TypestringDescriptionRequired.The name of the target object field that contains the external ID. The external ID is used to identify the records with the upsert operation to the processed CSV file's data.NoteThe externalIdFieldName input is optional if the operationType input is insert. |
| operationType | TypestringDescriptionRequired.The type of operation to be performed on the CSV file. Valid values are:upsertinsert |
| receivedDocumentId | TypestringDescriptionRequired.The ID of the received document record to be converted. |
| targetObjectApiName | TypestringDescriptionRequired.The API name of the object that’s used to convert the CSV file data into records. |

## Outputs

None.

## Example

GET

This example shows how to get the details of the Import Records from CSV File action type.

```

```

POST

Here’s a request for the Import Records from CSV File action.

```

```

Here’s a response for the Import Records from CSV File action.

```

```

## Code Examples

```
curl --include --request GET \
--header "Authorization: Authorization: Bearer 00DR...xyz" \
--header "Content-Type: application/json" \
"https://instance.salesforce.com/services/data/v55.0/actions/standard/importRecordsFromCsvFile"
```

```
{
   "inputs":[{
      "receivedDocumentId" : "0ioT10000000043IAA",
      “targetObjectApiName” : "MfgProgramForecastFact",
      "operationType" : "upsert",
      "externalIdFieldName" : "ExternalId__c"
   }]
}
```

```
[
   {
      "actionName" : "importRecordsFromCsvFile",
      "errors" : null,
      "isSuccess" : true
   }]
```
