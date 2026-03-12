---
title: "FunctionConnection"
domain: object-reference
topic: functionconnection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.877Z
estimatedTokens: 514
keywords: [FunctionConnection, connection, org, Salesforce, Functions, API, version, 52.0, later, Calls, Usage]
---

# FunctionConnection

> Represents a connection between an org and Salesforce Functions. This
      object is available in API version 52.0 and later.

# FunctionConnection

Represents a connection between an org and Salesforce Functions. This object is available in API version 52.0 and later.

In API version 53.0, the name of this object was changed from SfFunctionsConnection to FunctionConnection.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Error | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error string, if any, for the connection between the org and Salesforce Functions. |
| FunctionsAccountLoginOrg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce Functions account login org. |
| FunctionsAccountName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce Functions account name. |
| FunctionsAccountUuid | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique Salesforce Functions account UUID. This is a generated ID that is not in Salesforce object ID format. |
| Sequence | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionSequence number for the record. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the connection between the org and Salesforce Functions.Possible values are:AttemptedNoneTrustedBiDirectionTrustedUniDirectionThe default value is 'None'. TrustedBiDirection indicates the connection is fully established. |

## Usage

FunctionConnection is not intended for direct use and should be treated as a read-only object that represents the current connection information between your org and Salesforce Functions. To create and manage connections between your org and Salesforce Functions use the steps and commands described in the [Salesforce Functions developer documentation](https://developer.salesforce.com/docs/platform/functions/guide/index.html).

FunctionConnection is not supported in Trialforce templates or org snapshots.
