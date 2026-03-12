---
title: "getAlertsByWhatIdAndParentId(var1, var2)"
domain: financial-services-cloud-object-reference
topic: getalertsbywhatidandparentidvar1-var2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.178Z
estimatedTokens: 341
keywords: [getAlertsByWhatIdAndParentId, var1, var2, Retrieve, record, alerts, Salesforce, parent]
---

# getAlertsByWhatIdAndParentId(var1, var2)

> Retrieve record alerts by both the Salesforce record ID and the
      related parent ID.

# getAlertsByWhatIdAndParentId(var1, var2)

Retrieve record alerts by both the Salesforce record ID and the related parent ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=financial_services_cloud_object_reference)

#### Note

This method aggregates alerts associated with PersonAccount and FinancialAccount. For example, getRecordByWhatId on PersonAccount returns all alerts related to the person account, all alerts related to the person's financial accounts, and all alerts related to financial account transactions for each financial account.

It returns alerts in the following basic structure for whatId and parentId.

| What Id | Parent Id | Subject | Description |
| --- | --- | --- | --- |
| Person AccountId | null | Text1 | Text2 |
| Financial AccountId | null | Text3 | Text4 |
| Financial TransactionId | Financial AccountId | Text5 | Text6 |

## Signature

public List<fscwmgen.RecordAlertInfo> getAlertsByWhatIdAndParentId(String var1, String var2)

## Parameters

var1

Type: String

Specify the related parent ID.

var2

Type: String

Specify the Salesforce record ID.

## Return Value

Type: List<[fscwmgen.RecordAlertInfo](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_class_fscwmgen_RecordAlertInfo.htm "Represents details about the record alert.")\>

## Related Topics

- fscwmgen.RecordAlertInfo (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_class_fscwmgen_RecordAlertInfo.htm)
