---
title: "Restriction Rule Considerations"
domain: securityImplGuide
topic: restriction-rule-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:45.132Z
estimatedTokens: 2532
keywords: [Restriction, Rule, Considerations, Keep, limitations, mind, rules, Objects, Applicable, Features, Creating, External, Performance]
---

# Restriction Rule Considerations

> Keep these considerations and limitations in mind while using restriction
  rules.

# Restriction Rule Considerations

Keep these considerations and limitations in mind while using restriction rules.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


## Available Objects

-   Before creating restriction rules, we recommend that you [Turn Off Salesforce Classic for Your Org](https://help.salesforce.com/s/articleView?id=sf.lex_turn_off_classic.htm&type=5&language=en_US). Salesforce can't guarantee that restriction rules work as intended for end users who are in the Salesforce Classic experience.
-   Restriction rules are available for custom objects, external objects, contracts, events, quotes, tasks, time sheets, and time sheet entries.
-   In calendars, if the Show Details access level is selected, users can see the subject of all events, regardless of the restriction rules created. For more information, see [Share Your Calendar in Lightning Experience](https://help.salesforce.com/articleView?id=calendar_sharing_share_lex.htm&language=en_US) in Salesforce Help.

## Applicable Features

-   Restriction rules are applied to the following Salesforce features:
    -   Links
    -   List Views
    -   Lookups
    -   Records
    -   Related Lists
    -   Reports
    -   Search
    -   SOQL
    -   SOSL
-   Restriction rules support custom picklist values in record and user criteria. If you delete a custom picklist value used in a restriction rule, the rule no longer works as intended.
-   Use the Activity Timeline instead of activity related lists, such as Open Activities or Activity History. If you use activity related lists, create rules on task or event objects using fields that are only available in the related lists.
-   If you use Open Activities and Activity History related lists, when restriction rules are applied, it’s possible that fewer than 50 records are displayed when more activities exist that the user has access to. This behavior occurs because these lists display at most 50 records, and restriction rules are applied after. This behavior is related to the known issue[, Limit of Fifty Records Visible in Related List View](https://trailblazer.salesforce.com/issues_view?id=a1p3A000000ehkQQAQ).
-   After restriction rules are applied, users can still see records that they previously had access to in the search box shortcuts list or in the Recently Viewed list view. When users click the record name, they can't access the record and get an error.
-   Users can see their subordinates' events in calendars even if the users have an active restriction rule applied.
-   If a user creates an event or a task record using the Chatter publisher, the record name is visible in the related Chatter post. Restriction rules don’t restrict visibility to these record names.
-   Users can’t clone records that have a lookup to a record that they can’t see due to a restriction rule. For example, you have a restriction rule that prevents a user from seeing a specific contract record, and the user tries to clone an order record that has a lookup to the contract record. The user gets an error, preventing the clone operation from succeeding.
-   Restriction rules aren’t applied for code executed in System Mode.
-   Users with the View All or View All Data permissions can view all records regardless of restriction rules. Users with the Modify All or Modify All Data permissions can view, edit, and delete all records regardless of restriction rules.
-   A user with a restriction rule applied might not find all possible matching results when searching for a record. For performance reasons, search crowding applies limits to the number of search results. The record the user is looking for can fall outside those limits. Learn how to adjust your searches for the best results at [How Search Crowding Affects Search Results](https://help.salesforce.com/s/articleView?id=sf.search_crowding_considerations.htm&type=5&language=en_US).
-   The [UserRecordAccess](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userrecordaccess.htm) object doesn’t consider whether a user’s access is blocked due to a restriction rule. If a user’s access is blocked even though query results state that they should have access, check to see if a restriction rule on the object prevents the user’s access.

## Creating Restriction Rules

-   You can create up to two restriction rules per object in Enterprise and Developer editions and up to five restriction rules per object in Performance and Unlimited editions.
-   Create only one restriction or scoping rule per object per user. In other words, for a given object, only one restriction or scoping rule at most can have the User Criteria field evaluate to true for a given user.
-   Creating a restriction rule for an object doesn’t automatically restrict access to its child objects. For example, if you create a restriction rule for the Contract object, the access doesn’t change for notes that are associated with the affected contract records. To secure these child objects, you must use other sharing mechanisms.
-   You can reference another object’s field using the Record Criteria field. See [Restriction Rule Example Scenarios](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_examples.htm "Refer to these sample restriction rules, which fulfill different access requirements.") for examples.
-   If you reference IDs in the record criteria, use 15-character IDs instead of 18-character IDs.
-   In the rule’s record criteria, you can’t reference fields on the object’s parent. For example, if you’re creating a rule for the Task object, the record criteria can’t reference a field on the parent Activity object.
-   We support these data types in the User Criteria and Record Criteria fields:

    -   boolean
    -   date
    -   dateTime
    -   double
    -   int
    -   reference
    -   string
    -   time
    -   single picklist

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    Comma-separated ID or string values are supported in the Record Criteria field.

-   Restriction rules support only the EQUALS operator. The use of AND and OR operators isn't supported.
-   The use of formulas isn’t supported.
-   Don't create rules on Event.IsGroupEvent, which indicates whether the event has invitees.
-   You can use a change set or unlocked package to move restriction rules from one org to another.
-   Some IDs are specific to your Salesforce org, such as role, record type, or profile IDs. If you include these IDs in your User Criteria or Record Criteria fields, keep this consideration in mind when deploying rules between sandboxes or to a production org. You must modify these IDs in the target org if the restriction rules were originally created somewhere else.
-   When you reference the Owner field, you must specify the object type in your syntax. For example, the Owner field on an Event object can contain a user or a queue, but queues aren’t supported in restriction rules. So it’s necessary to specify Owner:User in the record criteria syntax when the criteria should allow only users.

## Restriction Rules and External Objects

![ Chart showing that Restriction Rules are a filter on external record fields resulting in filtered records when combined.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_access%2Fimages%2Fsharing_restriction_rules_external_objects.png&folder=securityImplGuide)

-   Only external objects created using the Salesforce Connect: OData 2.0, OData 4.0, and Cross-Org adapters support restriction rules.
-   External objects created using the Cross-Org adapter don’t support search or SOSL when a rule is applied to a user. Salesforce returns only search results that match the most recently viewed records.
-   External objects created using the Salesforce Connect custom adapter aren’t supported.
-   External object record data is stored outside Salesforce. Admins are responsible for ensuring that rules they create on external objects don’t negatively impact performance in Salesforce or in the external system.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

    #### Important

    -   Editing or deleting a restriction rule on an external object causes an additional database call, which can result in additional billing when the external data source bills per call.
    -   When search is enabled for external object records, searching requires additional database calls each time. Avoid additional charges by turning off search for external object records.

    As with all restriction rules, using only object fields that are indexed is recommended, especially in record criteria.
-   Using external IDs in record criteria isn’t supported.
-   Restriction rules for external objects don’t include organization-wide defaults or sharing mechanisms.
-   External objects don’t appear in Object Manager. To navigate to an external object, enter External Data Sources in the Quick Find box in Setup, then select **External Data Sources**. Select an external object from the list view on this page.
-   Disabling search on external objects is recommended.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

You can also find external objects in the Most Recently Used list in Setup.

## Performance Considerations

-   Restriction rules were built to support sharing needs in a performant way. Your data volume and architecture are also factors in rule performance.
-   To test a rule’s performance impact, take the record criteria to your API client of choice and run the query. If it’s fast for a given user, the rule is likely to run efficiently. For objects with large data volumes, add three to five percent overhead to the record filter’s performance.
-   If it isn’t performant, isolate the field that is slowing performance. Work with Salesforce customer support to get the field indexed.

## Related Topics

- Restriction Rule Example
      Scenarios (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_examples.htm)
