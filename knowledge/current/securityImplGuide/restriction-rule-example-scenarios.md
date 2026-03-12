---
title: "Restriction Rule Example Scenarios"
domain: securityImplGuide
topic: restriction-rule-example-scenarios
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.152Z
estimatedTokens: 1250
keywords: [Restriction, Rule, Scenarios, Refer, sample, rules, fulfill, different, access, requirements, Allow, Users, Record, Records, They]
---

# Restriction Rule Example Scenarios

> Refer to these sample restriction rules, which fulfill different access
  requirements.

# Restriction Rule Example Scenarios

Refer to these sample restriction rules, which fulfill different access requirements.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


To implement these examples, navigate to a supported object in the Object Manager and click **Restriction Rules**.

## Allow Users to See Only Specified Record Type

This restriction rule allows the designated users to see only the records that have a specified record type.

| Criteria | Click Path | Field | Operator | Type | Value |
| --- | --- | --- | --- | --- | --- |
| User Criteria | User \| Role ID | [$User].UserRoleId | Equals | ID | 00Exxxxxxxxxxxx |
| Record Criteria | Object \| Record Type ID \| Name | [Object].RecordType.Name | Equals | String | Sample Record Type Name |

## Allow Users to See Only Records That They Own

This restriction rule allows users with the designated profile to see only the tasks that they own.

| Criteria | Click Path | Field | Operator | Type | Value |
| --- | --- | --- | --- | --- | --- |
| User Criteria | User \| Profile ID | [$User].ProfileId | Equals | ID | 00exxxxxxxxxxxx |
| Record Criteria | Task \| Assigned To ID (User)User ID | [Task].Owner:User.Id | Equals | Current User | $User.Id |

## Allow Users to See Only Records Owned by Same Role

This restriction rule allows active users to see only the events owned by users that have the same role.

| Criteria | Click Path | Field | Operator | Type | Value |
| --- | --- | --- | --- | --- | --- |
| User Criteria | User \| Active | [$User].IsActive | Equals | Boolean | True |
| Record Criteria | Event \| Assigned To ID (User)Role ID | [Event].Owner:User.UserRoleId | Equals | Current User | $User.UserRoleId |

## Allow Users to See Only Records Owned by Same Profile

This restriction rule allows active users to see only the events owned by users that have the same profile.

| Criteria | Click Path | Field | Operator | Type | Value |
| --- | --- | --- | --- | --- | --- |
| User Criteria | User \| Active | [$User].IsActive | Equals | Boolean | True |
| Record Criteria | Event \| Assigned To ID (User)Profile ID | [Event].Owner:User.ProfileId | Equals | Current User | $User.ProfileId |

## Allow Users to See Records Based on a Custom Field

This restriction rule allows high-volume users to see only the contracts where the user's department matches the contract's department. This rule uses a custom field, Department\_\_c that must have the appropriate value set through Apex, Process Builder, workflows, or flows.

| Criteria | Click Path | Field | Operator | Type | Value |
| --- | --- | --- | --- | --- | --- |
| User Criteria | User \| User Type | [$User].UserType | Equals | Picklist | High Volume Portal |
| Record Criteria | Contract \| Department | [Contract].Department__c | Equals | Current User | $User.Department |

## Allow Users to See an External Object's Records

This restriction rule allows active Salesforce users to see the records of an external object called Purchase Order. The rule uses a field called IsClosed on Purchase Order records in its record criteria.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Only external objects created using the Salesforce Connect: OData 2.0, OData 4.0, and Cross-Org adapters support restriction rules. Find out more in Restriction Rule Considerations.

| Criteria | Click Path | Field | Operator | Type | Value |
| --- | --- | --- | --- | --- | --- |
| User Criteria | User \| Department | [$User].Department | Equals | String | Accounting |
| Record Criteria | PurchaseOrder__X \| IsClosed__c | [PurchaseOrder__X].IsClosed__c | Equals | String | false |

## Provide User Access With Multiple String or ID Values in Record Criteria

This restriction rule allows active users to see records whose Name\_\_c field matches the rule’s record criteria values. The record criteria contains strings separated by a comma. ID values are also supported. Double-quotes specify that the value inside the quotes isn’t considered a delimiter.

This rule uses a custom object called Agent\_\_c with a custom text field called Name\_\_c.

| Criteria | Click Path | Field | Operator | Type | Value |
| --- | --- | --- | --- | --- | --- |
| User Criteria | User \| Active | [$User].IsActive | Equals | Boolean | True |
| Record Criteria | Agent__c \| Name__c | [Agent__c].Name__c | Equals | String | Tom, Anita, “Torres, Jia” |

This restriction rule allows active users to see records owned by two different managers. In this example, the rule’s record criteria contains ID’s separated by a comma.

| Criteria | Click Path | Field | Operator | Type | Value |
| --- | --- | --- | --- | --- | --- |
| User Criteria | User \| Active | [$User].IsActive | Equals | Boolean | True |
| Record Criteria | Agent__c \| Owner ID (User) Manager ID | [Agent__c].Owner:User:ManagerId | Equals | ID | 001xx000003HNy7, 001xx000003HNut |
