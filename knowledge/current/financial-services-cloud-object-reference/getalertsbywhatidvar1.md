---
title: "getAlertsByWhatId(var1)"
domain: financial-services-cloud-object-reference
topic: getalertsbywhatidvar1
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.174Z
estimatedTokens: 235
keywords: [getAlertsByWhatId, var1, Retrieve, record, alerts, Salesforce]
---

# getAlertsByWhatId(var1)

> Retrieve record alerts by the Salesforce object record
    ID.

# getAlertsByWhatId(var1)

Retrieve record alerts by the Salesforce object record ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

This method aggregates alerts associated with PersonAccount and FinancialAccount. For example, getRecordByWhatId on PersonAccount returns all alerts related to the person account, all alerts related to the person's financial accounts, and all alerts related to financial account transactions for each financial account.

## Signature

public List<fscwmgen.RecordAlertInfo> getAlertsByWhatId(String var1)

## Parameters

var1

Type: String

Specify the Salesforce record ID.

## Return Value

Type: List<[fscwmgen.RecordAlertInfo](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_class_fscwmgen_RecordAlertInfo.htm "Represents details about the record alert.")\>

## Related Topics

- fscwmgen.RecordAlertInfo (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_class_fscwmgen_RecordAlertInfo.htm)
