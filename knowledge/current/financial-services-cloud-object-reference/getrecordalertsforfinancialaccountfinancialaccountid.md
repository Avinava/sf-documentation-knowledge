---
title: "getRecordAlertsForFinancialAccount(financialAccountId)"
domain: financial-services-cloud-object-reference
topic: getrecordalertsforfinancialaccountfinancialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.892Z
estimatedTokens: 163
keywords: [getRecordAlertsForFinancialAccount, financialAccountId, Retrieve, active, record, alerts, financial, accounts, API, Version, Requires, Chatter]
---

# getRecordAlertsForFinancialAccount(financialAccountId)

> Retrieve a list of active record alerts on financial
  accounts.

# getRecordAlertsForFinancialAccount(financialAccountId)

Retrieve a list of active record alerts on financial accounts.

## API Version

54.0

## Requires Chatter

No

## Signature

public static ConnectApi.RecordAlertCollectionRepresentation getRecordAlertsForFinancialAccount(String financialAccountId)

## Parameters

financialAccountId

Type: String

The financial account record ID.

## Return Value

Type: [ConnectApi.RecordAlertCollection](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_output_record_alert_collection.htm "Representation of a collection of record alerts.")

## Related Topics

- ConnectApi.RecordAlertCollection (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_output_record_alert_collection.htm)
