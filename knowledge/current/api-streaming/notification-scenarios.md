---
title: "Notification Scenarios"
domain: api-streaming
topic: notification-scenarios
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.410Z
estimatedTokens: 421
keywords: [Notification, Scenarios, PushTopic, record, generate, notifications]
---

# Notification Scenarios

> Following is a list of example scenarios and the field values you
need in a PushTopic record to generate notifications.

# Notification Scenarios

Following is a list of example scenarios and the field values you need in a PushTopic record to generate notifications.

| Scenario | Configuration |
| --- | --- |
| You want to receive all notifications of all record updates. | MyPushTopic.Query = SELECT Id, Name, Description__c FROM Invoice_Statement__cMyPushTopic.NotifyForFields = All |
| You want to receive notifications of all record changes only when the Name or Amount fields change. For example, if you’re maintaining a list view. | MyPushTopic.Query = SELECT Id, Name, Amount__c FROM Invoice_Statement__cMyPushTopic.NotifyForFields = Referenced |
| You want to receive notification of all record changes made to a specific record. | MyPushTopic.Query = SELECT Id, Name, Amount__c FROM Invoice_Statement__c WHERE Id='a07B0000000KWZ7IAO'MyPushTopic.NotifyForFields = All |
| You want to receive notification only when the Name or Amount field changes for a specific record. For example, if the user is on a detail page and only those two fields are displayed. | MyPushTopic.Query = SELECT Id, Name, Amount__c FROM Invoice_Statement__c WHERE Id='a07B0000000KWZ7IAO'MyPushTopic.NotifyForFields = Referenced |
| You want to receive notification for all invoice statement record changes for vendors in a particular state. | MyPushTopic.Query = SELECT Id, Name, Amount__c FROM Invoice_Statement__c WHERE BillingState__c = 'NY'MyPushTopic.NotifyForFields = All |
| You want to receive notification for all invoice statement record changes where the invoice amount is $1,000 or more. | MyPushTopic.Query = SELECT Id, Name FROM Invoice_Statement__c WHERE Amount__c > 999MyPushTopic.NotifyForFields = All |
