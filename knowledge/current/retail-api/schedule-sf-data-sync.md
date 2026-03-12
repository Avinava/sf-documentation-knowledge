---
title: "Schedule SF Data Sync"
domain: retail-api
topic: schedule-sf-data-sync
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.886Z
estimatedTokens: 134
keywords: [Schedule, Data, Sync, Schedules, Salesforce, off-platform, database]
---

# Schedule SF Data Sync

> Schedules a data sync from Salesforce to the off-platform
      database.

# Schedule SF Data Sync

Schedules a data sync from Salesforce to the off-platform database.

SF Data Sync is an off-platform framework component that enables down-sync and up-sync of objects from a Salesforce org to the CG Cloud Processing Services database. For more information on SF Data Sync, see [Sync Data with CG Cloud Processing Services](https://help.salesforce.com/s/articleView?id=ind.tpm_foundation_sync_data_overview.htm&type=5&language=en_US).

Resource

```

```

Available version

55.0

Apex Request Example

```

```

## Code Examples

```
SCHEDULE_SFDATA_SYNC
```

```apex
String endpointName = 'SCHEDULE_SFDATA_SYNC';
// Below is the list of all allowed SF Objects which can be synced but is not mandatory to sync all objects.
// We can have only one or two items from  the list below
List<String> synchronizableObjects = new List<String> {
    'cgcloud__Account_Extension__c',
    'cgcloud__Account_Product_Profile__c',
    'cgcloud__Account_Trade_Org_Hierarchy__c',
    'cgcloud__Custom_Calendar__c',
    'cgcloud__Custom_Period__c',
    'cgcloud__Business_Year__c',
    'cgcloud__KPI_Map__c',
    'cgcloud__Product_Category_Share__c',
    'Product2',
    'cgcloud__Product_Hierarchy__c',
    'cgcloud__Product_Part__c',
    'cgcloud__Promotion_Template__c',
    'cgcloud__Sales_Organization__c',
    'cgcloud__System_Setting__c',
    'cgcloud__Week_Day_Share_Profile__c',
    'cgcloud__Condition_Search_Group__c',
    'cgcloud__Condition_Search_Rule__c'
};
<namespace>.OffPlatformCallout request = new <namespace>.OffPlatformCallout(endpointName, '9999');
Map<String, Object> requestBody = new Map<String, Object>{
    'command' => 'SYNC', //Allowed values: SYNC | RE_SYNC => means Delta or Full synchronization
    'trackedObjectApiNames' => synchronizableObjects // Optional property: If this 'trackedObjectApiNames' property is not not sent, all objects are synced/re-synced
};
<namespace>.OffplatformCalloutResponse response = request.execute(
    <namespace>.TransactionHandler.getTransactionIdentifier(),
    null,
    JSON.serialize(requestBody)
);
if (response.status != 200) {
    // Handle errors
}
```
