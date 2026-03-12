---
title: "Limit Access to Apex Classes"
domain: communities-dev
topic: limit-access-to-apex-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.482Z
estimatedTokens: 180
keywords: [Limit, Access, Apex, Classes, Allow, guest, external, users, they, call]
---

# Limit Access to Apex Classes

> Allow guest and external users access to only those classes that they must
    call.

# Limit Access to Apex Classes

Allow guest and external users access to only those classes that they must call.

If an Apex class contains publicly exposed methods, such as methods using @InvocableMethod, @AuraEnabled, @RestResource, or webservice, then guest and external users can invoke these methods with arbitrary parameters. But they must have permission to execute the Apex class. We recommend limiting Apex class access to users with specific permission sets or profiles. Allowing guest and external users full access to Apex classes isn’t secure. Think carefully about which users must call which Apex classes, create permission sets for these roles, and enable the Apex class for the required permission sets.
