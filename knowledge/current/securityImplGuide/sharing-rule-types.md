---
title: "Sharing Rule Types"
domain: securityImplGuide
topic: sharing-rule-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.186Z
estimatedTokens: 829
keywords: [Sharing, Rule, base, record, ownership, criteria, Owner-Based, Rules, Criteria-Based, Guest, User]
---

# Sharing Rule Types

> You can base a sharing rule on record ownership or other criteria.

# Sharing Rule Types

You can base a sharing rule on record ownership or other criteria.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer EditionsSee Sharing Rule Considerations for more information on availability. |


## Owner-Based Sharing Rules

An owner-based sharing rule opens access to records owned by certain users. For example, a company’s sales managers must see opportunities owned by sales managers in a different region. The U.S. sales manager could give the APAC sales manager access to the opportunities owned by the U.S. team using owner-based sharing.

## Criteria-Based Sharing Rules

A criteria-based sharing rule determines with whom to share records based on field values. For example, you have a custom object for job applications, with a custom picklist field named “Department.” A criteria-based sharing rule could share all job applications in which the Department field is set to “IT” with all IT managers in your organization.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

-   A criteria-based sharing rule is based on record values and not the record owners. However, a role or territory hierarchy still allows users higher in the hierarchy to access the records.

You can create criteria-based sharing rules for many objects, including accounts, assets, campaigns, cases, contacts, leads, opportunities, work orders, and custom objects. For the sharing criteria, record types and these field types are supported.

-   Auto Number
-   Checkbox
-   Date
-   Date/Time
-   Email
-   Lookup Relationship (to user ID or queue ID)
-   Number
-   Percent
-   Phone
-   Picklist
-   Text
-   Text Area
-   URL

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Text and Text Area are case-sensitive. For example, a criteria-based sharing rule that specifies “Manager” in a text field doesn’t share records that have “manager” in the field. To create a rule with several common cases of a word, enter each value separated by a comma.

## Guest User Sharing Rules

A guest user sharing rule is a special type of criteria-based sharing rule and the only way to grant record access to unauthenticated guest users. For example, you create a sharing rule so that all visitors to your site can see all product review records.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=securityImplGuide)

#### Warning

The guest user sharing rule type grants access to guest users without login credentials. By creating a guest user sharing rule, you're allowing immediate and unlimited access to all records matching the sharing rule's criteria to anyone. To secure your Salesforce data and give your guest users access to what they need, consider all the use cases and implications of creating this type of sharing rule. Implement security controls that you think are appropriate for the sensitivity of your data. Salesforce is not responsible for any exposure of your data to unauthenticated users based on this change from default settings.

You can also create user sharing rules based on group membership.

## Related Topics

- Sharing Rule Considerations (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_considerations.htm)
