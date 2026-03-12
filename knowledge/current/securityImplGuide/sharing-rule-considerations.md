---
title: "Sharing Rule Considerations"
domain: securityImplGuide
topic: sharing-rule-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:45.181Z
estimatedTokens: 1865
keywords: [Sharing, Rule, Considerations, Review, rules]
---

# Sharing Rule Considerations

> Review these considerations before using sharing rules.

# Sharing Rule Considerations

Review these considerations before using sharing rules.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


-   General Considerations
    -   You can use sharing rules to grant wider access to data. You can’t restrict access below your organization-wide default levels.
    -   To create sharing rules, your organization-wide defaults must be Public Read Only or Private.
    -   If multiple sharing rules give a user different levels of access to a record, the user gets the most permissive access level.
    -   Sharing rules automatically grant additional access to related records. For example, opportunity, contact, or case sharing rules give role or group members access to the account associated with the child record.
    -   Users in the role hierarchy are automatically granted the same access that users below them in the hierarchy have from a sharing rule provided that the object is a standard object or the Grant Access Using Hierarchies option is selected if the object is a custom object.
    -   Users who don’t have licenses that support roles can only be included in some types of sharing rules, both to receive access and to have records that they own shared. High-volume community or site users, Chatter External, and Chatter Free users can't be included in owner-based sharing rules. You can share records owned by high-volume users in guest user or criteria-based sharing rules.
    -   If you share records owned by a queue in an owner-based sharing rule, only records owned by the queue are shared. Records owned by individual members of the queue aren’t shared.
    -   Using blank values in criteria-based sharing rule conditions with equal and not equal operators isn’t recommended.
-   Availability
    -   Account, campaign, case, contact, lead, opportunity, and custom object sharing rules are available for Enterprise, Performance, Unlimited, and Developer Editions.
    -   Only account, asset, campaign, and contact sharing rules are available in Professional Edition.
    -   Only custom object sharing rules are available in Database.com
    -   Criteria-based sharing rules aren’t available for all objects.
    -   Your org can have other objects that are available for sharing rules. To see which sharing rules are available, see the Sharing Settings Setup page.
    -   For Product2, you can create only guest user sharing rules. Criteria-based and owner-based sharing rules aren’t available.
    -   Developers can use Apex to programmatically share custom objects based on record owners but not other criteria.
-   Updating
    -   Creating an owner-based sharing rule with the same source and target groups as an existing rule overwrites the existing rule.
    -   After a sharing rule is saved, you can’t change the Share with field settings when you edit the sharing rule.
    -   Sharing rules apply to all new and existing records that meet the definition of the source dataset.
    -   Sharing rules apply to active and inactive users.
    -   When you change the access levels for a sharing rule, all records are automatically updated to reflect the new access levels.
    -   When you delete a sharing rule, the sharing access created by that rule is removed.
    -   When you modify which users are in a group, role, or territory, the sharing rules are reevaluated to add or remove access as necessary.
    -   When you transfer records from one user to another, the sharing rules are reevaluated to add or remove access to the transferred records as necessary.
    -   Changing sharing rules can require changing a large number of records at once. If your request is queued to process these changes efficiently, you receive an email notification when the process has been completed.
    -   Lead sharing rules don’t automatically grant access to lead information after leads are converted into account, contact, and opportunity records.
-   Criteria-Based Sharing Rules
    -   Users who can’t have an assigned role can be included in criteria-based sharing rules that were created after the Spring ’22 release. To include these users in criteria-based sharing rules that were created before Spring ’22, delete the rule and select **Include records owned by users who can't have an assigned role** when you recreate it. These users can’t be included in other types of sharing rules.
    -   In criteria-based sharing rules, you can’t use lookup fields, encrypted fields, formula fields, or fields whose values are derived from other fields on the record.
    -   For rules that reference record types as criteria, the label is used, not the developer name. To avoid issues, make sure the record type’s label and its translations are unique.
    -   Using blank values in criteria-based sharing rule conditions with equal and not equal operators isn't recommended.
    -   You can’t use Apex to create a criteria-based sharing rule. And you can’t test criteria-based sharing using Apex.
    -   If a criteria-based sharing rule references a field from a licensed managed package whose license has expired, (expired) is appended to the label of the field. The field label appears in the field dropdown list on the rule’s definition page in Setup. Criteria-based sharing rules that reference expired fields aren't recalculated, and new records aren't shared based on those rules. But the sharing of existing records before the package's expiration is preserved.
-   Site and Portal Users
    -   You can create rules to share records between most types of site or portal and Salesforce users. And you can create sharing rules between site or portal users from different accounts as long as their license type supports roles. But you can’t include high-volume community or site users in owner-based sharing rules because they don’t have roles and can’t be in public groups. You can share records owned by high-volume users in guest user or criteria-based sharing rules.
    -   In Salesforce orgs that enabled digital experiences before February 8, 2024, existing sharing rules automatically extend access to external users. This change occurs because sharing rules that grant access to Roles and Subordinates are converted to grant access to Roles, Internal and Portal Subordinates instead. To ensure that external users can't access records or folders containing sensitive data, update your sharing rules.
    -   You can easily convert sharing rules that include Roles, Internal, and Portal Subordinates to include Roles and Internal Subordinates instead by using the Convert External User Access Wizard on the Digital Experiences Settings Setup page. You can use this wizard to convert any publicly accessible report, dashboard, and document folders to folders that are accessible by all users except for external users. For more information, see [Considerations for the Convert External User Access Wizard](https://help.salesforce.com/s/articleView?id=sf.customer_portal_access_wizard_considerations.htm&language=en_US).
    -   You can only use guest user sharing rules to share records with unauthenticated guest users.
    -   For more information on using sharing rules in Experience Cloud sites, see the [Who Sees What in Experience Cloud: Sharing Rules](https://salesforce.vidyard.com/watch/UWy5gsp8sg6cnveyunm8py) video.
