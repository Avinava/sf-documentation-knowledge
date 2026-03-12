---
title: "TPM_RTRSalesforceMonthlyMeasures_AMS (Base Class)"
domain: cgcloud-rtr-dev-guide
topic: tpmrtrsalesforcemonthlymeasuresams-base-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.426Z
estimatedTokens: 381
keywords: [TPM_RTRSalesforceMonthlyMeasures_AMS, Base, second, that's, code-routing, retrieve, Salesforce, REST, endpoint, services, apexrest, RTRSalesforceMonthlyMeasures, TPM, _RTRSalesforceMonthlyMeasures, _AMS, classes]
---

# TPM_RTRSalesforceMonthlyMeasures_AMS (Base Class)

> TPM_RTRSalesforceMonthlyMeasures_AMS is the second
    base class that's used for code-routing and is required to retrieve the information by a
    Salesforce REST endpoint (/services/apexrest/RTRSalesforceMonthlyMeasures).

# TPM\_RTRSalesforceMonthlyMeasures\_AMS (Base Class)

TPM\_RTRSalesforceMonthlyMeasures\_AMS is the second base class that's used for code-routing and is required to retrieve the information by a Salesforce REST endpoint (/services/apexrest/RTRSalesforceMonthlyMeasures).

```

```

These are the code details:

1.  The payload is received, and is then turned into an object of our wrapper class. The payload contains the KPIs that are defined in the report configuration.

    ```

    ```

2.  The integration user runs the base classes, not the user who opens the report. As a result, ensure that you query an account on the payload that the user selected to retrieve the actual user's sales org.

    ```

    ```

3.  Helper maps and lists are created.

    ```

    ```

4.  The dates from the payload are converted to a workable format.

    ```

    ```

5.  The Apex class contains use case-specific code. Here, you can query all custom metadata records that were defined earlier and that belong to the sales org of the user. Then you can check whether the payload contains any KPIs in the custom metadata records. If it does, verify the level on which those KPIs are available and then add them to a dedicated map (category KPIs or brand KPIs map).

    ```

    ```

6.  You can check whether the two maps (brandKPIs and categoryKPIs) contain any values — if not, nothing happens. If they do, the actual class where all the logic happens is called and parameters such as the payload are passed.

    ```

    ```

## Code Examples

```apex
@RestResource(urlMapping='/RTRSalesforceMonthlyMeasures')
global with sharing class TPM_RTRSalesforceMonthlyMeasures_AMS {
@HttpGet
global static String doGet(){
return 'Hello world!';
}
@HttpPost
global static List<TPM_RTRReportingWrapper_AMS.OutputRecord> doPost(){
RestContext.response.statuscode = 200;
```

```apex
String requestBody = RestContext.request.requestBody.toString();
TPM_RTRReportingWrapper_AMS.InputPayload payload = (TPM_RTRReportingWrapper_AMS.InputPayload) JSON.deserialize(requestBody, TPM_RTRReportingWrapper_AMS.InputPayload.class);
System.debug(payload);
if(payload.error == true) {
RestContext.response.statuscode = 500;
return null;
}
```

```
//Get Sales Org of the user who initiated the report
Account acc = [SELECT Id, cgcloud__Sales_Org__c FROM Account WHERE Id IN :payload.accountsfids LIMIT 1];
String userSFOrg = acc.cgcloud__Sales_Org__c;
```

```apex
//Helper Maps/List
List<TPM_RTRReportingWrapper_AMS.OutputRecord> output = new List<TPM_RTRReportingWrapper_AMS.OutputRecord>();
Map<String, TPM_RTRRouting__mdt> categoryKPIs = New Map<String, TPM_RTRRouting__mdt>();
Map<String, TPM_RTRRouting__mdt> brandKPIs = New Map<String, TPM_RTRRouting__mdt>();
```

```
//Loading and transforming the dates selected in the filter
Date inputDateBegin = Date.newInstance(payload.periodmonth.year, payload.periodmonth.start+1, 1);
Date inputDateEnd = inputDateBegin.addMonths(payload.periodmonth.total).addDays(-1);
```
