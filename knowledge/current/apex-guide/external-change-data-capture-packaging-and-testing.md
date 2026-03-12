---
title: "External Change Data Capture Packaging and Testing"
domain: apex-guide
topic: external-change-data-capture-packaging-and-testing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:32.987Z
estimatedTokens: 235
keywords: [External, Change, Data, Capture, Packaging, Testing, distribute, components, managed, packages, including, framework, testing, Apex, triggers., Special, behaviors, limitations, apply, packaging]
---

# External Change Data Capture Packaging and Testing

> You can distribute External Change Data Capture components in managed packages,
        including a framework for testing your Apex triggers. Special behaviors and limitations
        apply to packaging and package installation.

# External Change Data Capture Packaging and Testing

You can distribute External Change Data Capture components in managed packages, including a framework for testing your Apex triggers. Special behaviors and limitations apply to packaging and package installation.

-   Include External Change Data Tracking components in a managed package by selecting your test from the Apex Class Component Type list. The trigger, test, external data source, external object, and other related assets are brought into the package for distribution.
-   Certificates aren’t packageable. If you package an external data source that specifies a certificate, make sure that the subscriber org has a valid certificate with the same name.

To help you test your External Change Data Capture–triggered Apex classes, here is a unit test code example of a trigger reacting to a simulated external change.

**Example Trigger**

```

```

**Apex Test**

```

```

## Code Examples

```
​trigger OnExternalProductChangeEventForAudit on Products__ChangeEvent (after insert) {
    if (Trigger.new.size() != 1) return;
    for (Products__ChangeEvent event: Trigger.new) {
         Product_Audit__c audit = new Product_Audit__c(); 
         audit.Name = 'ProductChangeOn' + event.ExternalId;
         audit.Change_Type__c = event.ChangeEventHeader.getChangeType();
         audit.Audit_Price__c = event.Price__c;
         audit.Product_Name__c = event.Name__c;
         insert(audit);
    }
}
```

```apex
​@isTest
public class testOnExternalProductChangeEventForAudit {
    static testMethod void testExternalProductChangeTrigger() { 
            // Create Change Event
           Products__ChangeEvent event = new Products__ChangeEvent();
            // Set Change Event Header Fields
           EventBus.ChangeEventHeader header = new EventBus.ChangeEventHeader();
           header.changeType='CREATE';
           header.entityName='Products__x';
           header.changeOrigin='here';
           header.transactionKey = 'some';
           header.commitUser = 'me';
           event.changeEventHeader = header;
           event.put('ExternalId', 'ParentExternalId');
           event.put('Price__c', 5500);
           event.put('Name__c', 'Coat');
            // Publish the event to the EventBus
           EventBus.publish(event);
           Test.getEventBus().deliver();
            // Perform assertion that the trigger was run
           Product_Audit__c audit = [SELECT name, Audit_Price__c, Product_Name__c FROM Product_Audit__c WHERE name = : 'ProductChangeOn'+ event.ExternalId LIMIT 1]; 
           System.assertEquals('ProductChangeOn'+ event.ExternalId, audit.Name); 
           System.assertEquals(5500, audit.Audit_Price__c); 
           System.assertEquals('Coat', audit.Product_Name__c); 
    }
}
```
