---
title: "Allow Users to See an External Object's Records"
domain: restriction-rules
topic: allow-users-to-see-an-external-objects-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.377Z
estimatedTokens: 339
keywords: [Allow, Users, External, Object's, Records, restriction, rule, active, Salesforce, Purchase, Order, uses, IsClosed, record, criteria]
---

# Allow Users to See an External Object's Records

> This restriction rule allows active Salesforce users to see the records of an external
    object called Purchase Order. The rule uses a field called IsClosed on Purchase Order records in
    its record criteria.

# Allow Users to See an External Object's Records

This restriction rule allows active Salesforce users to see the records of an external object called Purchase Order. The rule uses a field called IsClosed on Purchase Order records in its record criteria.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=restriction_rules)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Available in: Lightning Experience in Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=restriction_rules)

#### Note

Only external objects created using the Salesforce Connect: OData 2.0, OData 4.0, and Cross-Org adapters support restriction rules. Find out more in Restriction Rule Considerations.

## Tooling API

```

```

## Metadata API

```

```

#### See Also

-   [*Salesforce Help*: Restriction Rule Considerations](https://help.salesforce.com/s/articleView?id=platform.security_restriction_rule_considerations.htm&type=5&language=en_US)

-   [*Salesforce Help*: Define External Objects](https://help.salesforce.com/s/articleView?id=platform.external_object_define.htm&type=5&language=en_US)

## Code Examples

```
{
    "FullName":"purchase_orders_restictionrule",
    "Metadata": {
        "active":true,
        "description":"Allows accounting department users to access open purchase order records from external system.",
        "enforcementType":"Restrict",
        "masterLabel":"OpenPurchaseOrderRecords",
        "recordFilter":"IsClosed__c = ‘false’",
        "targetEntity":"PurchaseOrder__x",
        "userCriteria":"$User.Department = ‘Accounting’",
        "version":1
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>Allows accounting department users to access open purchase order records from external system.</description>
    <enforcementType>Restrict</enforcementType>
    <masterLabel>OpenPurchaseOrderRecords</masterLabel>
    <recordFilter>IsClosed__c = ‘false’</recordFilter>
    <targetEntity>PurchaseOrder__x</targetEntity>
    <userCriteria>$User.Department = ‘Accounting’</userCriteria>
    <version>1</version>
</RestrictionRule>
```
