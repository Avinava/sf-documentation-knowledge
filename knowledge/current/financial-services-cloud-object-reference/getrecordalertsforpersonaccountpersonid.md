---
title: "getRecordAlertsForPersonAccount(personId)"
domain: financial-services-cloud-object-reference
topic: getrecordalertsforpersonaccountpersonid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.895Z
estimatedTokens: 153
keywords: [getRecordAlertsForPersonAccount, personId, Retrieve, active, record, alerts, person, accounts, API, Version, Requires, Chatter]
---

# getRecordAlertsForPersonAccount(personId)

> Retrieve a list of active record alerts on person
    accounts.

# getRecordAlertsForPersonAccount(personId)

Retrieve a list of active record alerts on person accounts.

## API Version

54.0

## Requires Chatter

No

## Signature

public static ConnectApi.RecordAlertCollectionRepresentation getRecordAlertsForPersonAccount(String personId)

## Parameters

personId

Type: String

The person account record ID.

## Return Value

Type: [ConnectApi.RecordAlertCollection](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_output_record_alert_collection.htm "Representation of a collection of record alerts.")

## Related Topics

- ConnectApi.RecordAlertCollection (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_output_record_alert_collection.htm)
