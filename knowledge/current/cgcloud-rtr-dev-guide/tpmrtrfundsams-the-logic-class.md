---
title: "TPM_RTRFunds_AMS (The Logic Class)"
domain: cgcloud-rtr-dev-guide
topic: tpmrtrfundsams-the-logic-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.423Z
estimatedTokens: 158
keywords: [TPM_RTRFunds_AMS, Logic, RTRSalesforceMonthlyMeasures, datasource, execute, base, classes, every, report, TPM, _RTRFunds, _AMS]
---

# TPM_RTRFunds_AMS (The Logic Class)

> Use RTRSalesforceMonthlyMeasures as the datasource to execute the base classes by every
    report.

# TPM\_RTRFunds\_AMS (The Logic Class)

Use RTRSalesforceMonthlyMeasures as the datasource to execute the base classes by every report.

This function performs these steps:

1.  Defines a list of output record items.
2.  Retrieves the fund amounts from Salesforce data by using SOQL, depending on the use case. In this example, only funds at the category level are shown. You can use the category filter as the selection criterion. The funds are also limited to the account and time frame that's selected in the filter.
3.  For every result record, the function creates an output record and adds it to the list of results.

```

```

## Code Examples

```apex
global with sharing class TPM_RTRFunds_AMS{
global static List<TPM_RTRReportingWrapper_AMS.OutputRecord>
doPost(Date inputDateBegin , Date inputDateEnd,
TPM_RTRReportingWrapper_AMS.InputPayload payload) {
List<TPM_RTRReportingWrapper_AMS.OutputRecord> output =
new List<TPM_RTRReportingWrapper_AMS.OutputRecord> ();
String pdim ;
String kdim ;
String tdim ;
Double v ;
AggregateResult[] groupedResults = [SELECT cgcloud__Anchor_Product__c,
sum (cgcloud__Deposits_Approved__c ) sumValue
from cgcloud__Fund__c
WHERE cgcloud__Anchor_Product__c IN :payload.productsfids
AND cgcloud__Anchor_Account__c IN :payload.accountsfids
AND ((cgcloud__Valid_From__c <= :inputDateEnd
AND cgcloud__Valid_From__c >= :inputDateBegin)
OR (cgcloud__Valid_Thru__c <= :inputDateEnd
AND cgcloud__Valid_Thru__c >= :inputDateBegin))
group by cgcloud__Anchor_Product__c
];
for(Integer i=0; i < groupedResults.size(); i++) {
v =(Double) groupedResults[i].get('sumValue');
pdim =(String) groupedResults[i].get('cgcloud__Anchor_Product__c');
kdim = 'myFndAmount';
tdim = 'Total';
output.add(new TPM_RTRReportingWrapper_AMS.OutputRecord(pdim ,kdim, tdim, v));
}
return output;
}
}
```
