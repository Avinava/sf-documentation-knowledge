---
title: "Lightning LockerService Disabled"
domain: packagingGuide
topic: lightning-lockerservice-disabled
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:21.157Z
estimatedTokens: 413
keywords: [Lightning, LockerService, Disabled, critical, security, feature, code, component, isolation, sources, execute, interact, safe, standard, APIs]
---

# Lightning LockerService Disabled

> Lightning LockerService is a critical security feature for Lightning code. It provides
    component isolation that allows code from many sources to execute and interact using safe,
    standard APIs and event mechanisms. Enable Lightning Locker for AppExchange packages that
    contain Lightning components or applications.

# Lightning LockerService Disabled

Lightning LockerService is a critical security feature for Lightning code. It provides component isolation that allows code from many sources to execute and interact using safe, standard APIs and event mechanisms. Enable Lightning Locker for AppExchange packages that contain Lightning components or applications.

Lightning LockerService is enabled for all custom Lightning web components. The service was activated for customers in the Summer ’17 release. Lightning LockerService isn’t enforced for components that use API version 39.0 and lower, which covers any component created before Summer ’17. When a component is set to at least API version 40.0, it’s enabled. New AppExchange security reviews and periodic re-reviews require components to be version 40.0 or higher so that Locker is enabled.

## Metadata Example

In this component’s <AuraDefinitionBundle\> metadata, the <apiVersion\> field sets the API version to 39.0. LockerService is disabled for components that use API version 39.0 and lower.

```

```

In this component’s revised <AuraDefinitionBundle\> metadata, the <apiVersion\> field sets the API version to 40.0. LockerService is enforced for components that use API version 40.0 and higher.

```

```

For more information, read the [Summer 2017 Release Notes](https://releasenotes.docs.salesforce.com/en-us/summer17/release-notes/rn_lightning_lockerservice.htm "HTML (New Window)") and [Security with Lightning Locker](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/security_locker_service "HTML (New Window)") in the Lightning Web Components Developer Guide.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AuraDefinitionBundle xmlns="http://soap.sforce.com/2006/04/metadata">
     <apiVersion>39.0</apiVersion>
     <description>My Component</description>
</AuraDefinitionBundle>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<AuraDefinitionBundle xmlns="http://soap.sforce.com/2006/04/metadata">
     <apiVersion>40.0</apiVersion>
     <description>My Component</description>
</AuraDefinitionBundle>
```
