---
title: "Considerations for Scoping Rules"
domain: scoping-rules
topic: considerations-for-scoping-rules
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.278Z
estimatedTokens: 2036
keywords: [Considerations, Scoping, Rules, Familiarize, yourself, Creating, SOQL, Modifying, Accounts, Contacts, Person, Performance]
---

# Considerations for Scoping Rules

> Familiarize yourself with these considerations for using scoping rules.

# Considerations for Scoping Rules

Familiarize yourself with these considerations for using scoping rules.

| Available in: Lightning Experience in Performance and Unlimited Editions |
| --- |


## Creating Scoping Rules

Your edition affects how many active rules you can have.

-   Create up to two active scoping rules per object in Developer editions.
-   Create up to five active scoping rules per object in Performance and Unlimited editions.
-   Create only one scoping or restriction rule per object per user. For a given object, only one scoping or restriction rule’s userCriteria field can evaluate to true for a given user.
-   In reports that contain data for multiple objects, all relevant scoping rules are applied when **Filter by scope** is selected. For example, if you have a report on opportunities with added account fields, both the opportunity and account scoping rules are considered when filtering the records.
-   Creating a scoping rule for an object impacts only that object and doesn’t affect child objects.
-   When you reference the Owner field, you must specify the object type in your syntax. For example, the Owner field on an event object can contain a user or a queue, but queues aren’t supported in scoping rules. So it’s necessary to specify Owner:User in the recordFilter syntax when the filter allows only users.
-   You can reference another object’s field using dot notation in the recordFilter field. You can use only one “dot” (one lookup level from the targetEntity). For example, Owner.UserRoleId.
-   These data types are supported in the recordFilter and userCriteria fields.

    -   boolean
    -   date (yyyy-MM-dd)
    -   dateTime (yyyy-MM-dd HH:mm:ss)
    -   double
    -   int
    -   reference
    -   string
    -   time
    -   single picklist

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=scoping_rules)

    #### Note

    Comma-separated ID or string values are supported in the Record Criteria field.

-   Including a null or blank value in record criteria isn't supported and can result in unexpected behavior.
-   Don't create rules on Event.IsGroupEvent, which indicates whether the event has invitees.
-   Use the Activity Timeline instead of Open Activities or Activity History. If you use Open Activities and Activity History related lists, create rules on task or event objects using fields that are only available on the OpenActivity and ActivityHistory objects.
-   For list views and reports, you can apply the scope through Metadata API (using the filterScope field on the ListView type and the scope field on the Report type “scope”).
-   If you include an ID in your recordFilter or userCriteria field that’s specific to your Salesforce org (such as a role, record type, or profile ID), you must modify the ID in the target org if it’s different from the org where the scoping rule was originally created. Keep this consideration in mind when deploying rules between sandboxes or to a production org.

## Using SOQL

-   You can use a SOQL operator in record criteria only when creating scoping rules via the API.
-   Unless you use SOQL, scoping rules support only the EQUALS operator. The AND and OR operators aren’t supported.
-   When using the SOQL operator in the record filter, the SELECT statement, including nested SELECT statements, must include USING SCOPE EVERYTHING. USING SCOPE EVERYTHING is the only valid scope clause syntax for scoping rules.
-   The SOQL operator doesn't support $User syntax except for $User.Id. Dynamic queries within the SOQL operator aren't supported, including on other user object fields.

## Example

Supported SOQL Syntax

```

```

Unsupported SOQL Syntax

```

```

-   Using the same object as the SOQL Query object and the Scoping Rule object isn’t supported.
-   The left operand in the SOQL type RecordCriteria must query a single ID (primary key) or reference (foreign key) field. See Comparison Operators for a list of valid operators that you can use in the field expression of a WHERE clause, which you use in a SELECT statement.

## Example

"recordFilter":"SOQL(OwnerId, Select Id from User USING SCOPE Everything LIMIT 2)"

The left operand is OwnerId in this example.

-   These objects aren't supported in the SOQL operator:
    -   ActivityHistory
    -   Attachments
    -   Event
    -   EventAttendee
    -   Note
    -   OpenActivity
    -   Tags (AccountTag, ContactTag, and all other tag objects)
    -   Task

## Modifying Scoping Rules

-   We recommend not editing the targetEntity field after a scoping rule is created. Instead, delete the rule and create another one with the correct values.
-   To disable a scoping rule, first delete the list views and reports that have **Filter by scope** selected. After a scoping rule is disabled, the list views and reports aren't functional nor modifiable.
-   The scoping rule userCriteria field supports custom permissions. If you delete the custom permission, the scoping rules that use the custom permissions don’t work.
-   Scoping rules support custom picklist values in record filter and user criteria. If you delete a custom picklist value used in a scoping rule, the rule no longer works as intended.

## Accounts, Contacts, and Person Accounts

-   Scoping rules don't support IsPersonAccount fields on the account object. When setting a scoping rule, don't use IsPersonAccount fields such as PersonDepartment or PersonLeadSource in record filter criteria. Find a list of IsPersonAccount fields on the [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") page.
-   An error can result if you navigate to a person account detail page from a Contacts list view. To navigate to a person account detail page when there's a scoping rule on the account object, use an Accounts list view such as All Accounts.
-   In related lists, all associated records that a user can access are visible, regardless of scope, except in the contact role related list. When a scoping rule is applied on the contact object, scope is applied to the [contact role](https://help.salesforce.com/s/articleView?id=sales.sales_core_contact_roles.htm&type=5&language=en_US) related list that appears on account, opportunity, case, and contract records. So it’s possible that users, such as members of a sales team, see a filtered set of contact roles without knowing that the list is filtered.
-   When an org uses duplicate rules to prevent creating duplicate records, scoping rules limit the potential duplicates that are shown, even when **Bypass sharing rules** is turned on. Duplicate records are limited by the scope set in the scoping rule.

## Performance Considerations

-   Scoping rules were built to support sharing needs in a performant way. Your data volume and architecture are factors in rule performance. Salesforce reserves the right to disable a scoping rule if a rule you create is inefficient or if your data model has so much data that scoping rules cause slowness when applied. To prevent throttling or deactivation, test the scoping rules that you plan to apply in a sandbox environment before enabling them in production.
-   To test the performance impact of a rule that uses a SOQL operator, take the SOQL statement and run it in your API client of choice. If it’s fast for a given user, the rule is likely to run efficiently.
-   If a rule isn’t performant, isolate the field that’s slowing performance. Work with Salesforce customer support to find out if the field can be indexed.

#### See Also

-   [*Knowledge Article*: Improve Performance of SOQL Queries using a Custom Index](https://help.salesforce.com/apex/HTViewSolution?urlname=Custom-indexes-for-an-organization-to-help-improve-performance&language=en_US "Knowledge Article: Improve Performance of SOQL Queries using a Custom
    Index - HTML (New Window)")

-   [*SOQL and SOSL Reference*: Comparison Operators](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm)

## Code Examples

```
SOQL(Id, SELECT Account.id FROM AccountAdvisors USING SCOPE EVERYTHING WHERE userid = $User.Id)
```

```
SOQL(Id, SELECT Account.id FROM AccountAdvisors USING SCOPE EVERYTHING WHERE userid = $User.Current_Advisor__c)
```
