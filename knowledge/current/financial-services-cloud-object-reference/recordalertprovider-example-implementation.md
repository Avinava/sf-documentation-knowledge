---
title: "RecordAlertProvider Example Implementation"
domain: financial-services-cloud-object-reference
topic: recordalertprovider-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T09:34:28.210Z
estimatedTokens: 47
keywords: [RecordAlertProvider, Implementation, fscwmgen.RecordAlertProvider]
---

# RecordAlertProvider Example Implementation

> This is an example implementation of the fscwmgen.RecordAlertProvider interface.

# RecordAlertProvider Example Implementation

This is an example implementation of the fscwmgen.RecordAlertProvider interface.

The following example tests the implementation:

```

```

## Code Examples

```apex
global class CoreBankingAlertProvider implements fscwmgen.RecordAlertProvider {
    
    public List<fscwmgen.RecordAlertInfo> getAlertsByWhatId(String whatId) {
        HttpRequest req = new HttpRequest();
        // This callout is specific to the Core banking.
        req.setEndpoint('callout:My_Named_Credential/get_by_whatId');
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        Map<String, Object> jsonResp = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        List<Object> results = (List<Object>) jsonResp.get('results');
        
        List<fscwmgen.RecordAlertInfo> newAlerts = new List<fscwmgen.RecordAlertInfo>();
        // Assuming CoreBankingResult is an apex class holding the result from CoreBanking.
        for(CoreBankingResult res : results){
            fscwmgen.RecordAlertInfo newAlert = convertCoreBankingAlertToSalesforceAlert(res, whatId, null);
            newAlerts.add(newAlert);
        }

        // Return the list of alerts
        return newAlerts;
    }
    
    public List<fscwmgen.RecordAlertInfo> getAlertsByParentId(String parentId) {
        HttpRequest req = new HttpRequest();
        // This callout is specific to the Core banking.
        req.setEndpoint('callout:My_Named_Credential/get_by_parentId');
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        Map<String, Object> jsonResp = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        List<Object> results = (List<Object>) jsonResp.get('results');
        
        List<fscwmgen.RecordAlertInfo> newAlerts = new List<fscwmgen.RecordAlertInfo>();
        // Assuming CoreBankingResult is an apex class holding the result from CoreBanking.
        for(CoreBankingResult res : results){
            // Retrieve whatId for this specific alert. Can be queried from Salesforce or provided by CoreBanking.
            String whatId = retrieveWhatId(); 
            fscwmgen.RecordAlertInfo newAlert = convertCoreBankingAlertToSalesforceAlert(res, whatId, parentId);
            newAlerts.add(newAlert);
        }

        // Return the list of alerts
        return newAlerts;
    }
    
    public List<fscwmgen.RecordAlertInfo> getAlertsByWhatIdAndParentId(String whatId, String parentId) {
        HttpRequest req = new HttpRequest();
        // This callout is specific to the Core banking.
        req.setEndpoint('callout:My_Named_Credential/get_by_whatId_and_parentId');
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        Map<String, Object> jsonResp = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        List<Object> results = (List<Object>) jsonResp.get('results');
        
        List<fscwmgen.RecordAlertInfo> newAlerts = new List<fscwmgen.RecordAlertInfo>();
        // Assuming CoreBankingResult is an apex class holding the result from CoreBanking.
        for(CoreBankingResult res : results){
            fscwmgen.RecordAlertInfo newAlert = convertCoreBankingAlertToSalesforceAlert(res, whatId, parentId);
            newAlerts.add(newAlert);
        }

        // Return the list of alerts
        return newAlerts;
    }
    
    public fscwmgen.RecordAlertInfo snoozeAlert(String alertId, Datetime snoozeUntilDate){
        HttpRequest req = new HttpRequest();
        // This callout is specific to the Core banking.
        req.setEndpoint('callout:My_Named_Credential/snoozeAlert');
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        // Perform error handling on response. Below code is when the response is valid.
        Map<String, Object> jsonResp = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        List<Object> results = (List<Object>) jsonResp.get('results');
        // Retrieve whatId from corebanking result. Other mechanism is to lookup from salesforce.
        String whatId = results.get(0).getId();
        return convertCoreBankingAlertToSalesforceAlert(results.get(0));
    }
    
    public fscwmgen.RecordAlertInfo dismissAlert(String alertId) {
        HttpRequest req = new HttpRequest();
        // This callout is specific to the Core banking.
        req.setEndpoint('callout:My_Named_Credential/snoozeAlert');
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        // Perform error handling on response. Below code is when the response is valid.
        Map<String, Object> jsonResp = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        List<Object> results = (List<Object>) jsonResp.get('results');
        / Retrieve whatId from corebanking result. Other mechanism is to lookup from salesforce.
        String whatId = results.get(0).getId();
        return convertCoreBankingAlertToSalesforceAlert(results.get(0));
    }
    
    private RecordAlertInfo convertCoreBankingAlertToSalesforceAlert(CoreBankingResult alert, String whatId, String parentId) {
        fscwmgen.RecordAlertInfo newAlert = new fscwmgen.RecordAlertInfo();
        newAlert.subject = alert.getSubject();
        newAlert.description = alert.getDescription();
        newAlert.sourceSystemId = alert.getId();
        newAlert.parentId = parentId;
        newAlert.whatId = whatId;
        // This could also use conversion from Core Banking category to salesforce RecordAlertCategory
        newAlert.categoryFullName = 'Fraud';
        
        newAlert.actionInfoList = new List<fscwmgen.RecordAlertActionInfo>();
        // snooze Action
        fscwmgen.RecordAlertActionInfo snooze = new fscwmgen.RecordAlertActionInfo();
        snooze.actionName = 'snooze';
        snooze.parameters = new List<String>();
        // SnoozeUntilDate is required parameter
        snooze.parameters.add('snoozeUntilDate');
        newAlert.actionInfoList.add(snooze);
        
        // Dismiss Action
        fscwmgen.RecordAlertActionInfo dismiss = new fscwmgen.RecordAlertActionInfo();
        dismiss.actionName = 'dismiss';
        newAlert.actionInfoList.add(dismiss);
        
        return newAlert;
    }
}
```
