---
title: "Create a Branch Management Scoping Rule Using the Tooling API"
domain: scoping-rules
topic: create-a-branch-management-scoping-rule-using-the-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.344Z
estimatedTokens: 1108
keywords: [Branch, Management, Scoping, Rule, Tooling, API, filters, account, records, banker’s, location, uses, data, model, included]
---

# Create a Branch Management Scoping Rule Using the Tooling API

> Create a scoping rule that filters account records based on a banker’s branch location.
  This example uses the branch management data model included in Financial Services Cloud and the
  RestrictionRule Tooling API object.

# Create a Branch Management Scoping Rule Using the Tooling API

Create a scoping rule that filters account records based on a banker’s branch location. This example uses the branch management data model included in Financial Services Cloud and the RestrictionRule Tooling API object.

| Available in: Lightning Experience in Performance and Unlimited Editions |
| --- |


| User Permissions Needed |
| --- |
| To create and manage scoping rules: | Manage Sharing |
| To view scoping rules: | View Setup & Configuration AND View Restriction and Scoping Rules |

This example uses the SOQL operator in its recordFilter. Check out the [Branch Management data model](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_branch.htm) to understand the objects used in this example and how they relate to each other.

1.  Use the RestrictionRule object to create and manage both restriction rules and scoping rules. Include the FullName value and all required fields. For more information, see the reference topic [RestrictionRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.restriction_rules.meta/restriction_rules/tooling_api_objects_restrictionrule.htm).

    In this example, we used these values.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=scoping_rules)

    #### Note

    The userCriteria in this example applies this rule to any active user in your org. Adjust the userCriteria if the rule must apply to a different subset of your users.

    ```

    ```

    This example also uses objects from the [Branch Management data model](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_branch.htm) and sets a scoping rule that shows users lead records related to the user’s current branch location.

    ```

    ```

    To create a similar scoping rule for a different object, adjust the targetEntity field to include case, contact, or another supported standard or custom object.

2.  To create the scoping rule, use a POST request in the tooling API.

    POST /services/data/v66.0/tooling/sobjects/RestrictionRule

3.  Copy your scoping rule definition into the request body.
4.  Execute your request. Copy the ID returned for the scoping rule for later reference.

    Let’s take a closer look at the Branch Rule On Account example’s SOQL operator.

    SOQL(Id, SELECT AccountId FROM BranchUnitCustomer USING SCOPE EVERYTHING WHERE BranchUnitId IN(SELECT CurrentBranchId From Banker WHERE UserOrContactId = $User.Id))

    -   The SOQL statement takes the Id from the account object, which is the target entity whose records the scoping rule filters, and selects AccountId from the BranchUnitCustomer object.
    -   The where clause gets the BranchUnitId, which is a unique identifier of each branch, from a nested query. The nested query finds each banker’s current branch from the Banker object by matching the UserOrContactId to the currently logged-in user.

    When writing scoping rules using SOQL, follow these guidelines.

    -   In SOQL operators, the SOQL query object and the scoping rule target entity can’t be the same object. In this example, the SOQL query object is BranchUnitCustomer and the scoping rule object, called the targetEntity, is account.
    -   In the SOQL type RecordCriteria, the left operand must query a single ID (primary key) or reference (foreign key) field. In this example, the left operand is a field on the target entity called Id.

    For more tips about writing scoping rules using a performant SOQL operator, see Scoping Rules Considerations. The SOQL operator is supported for scoping rules only.


-   **[Retrieve and Update Information](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_tooling_methods.htm)**
    Use the GET, PATCH, and DELETE methods to retrieve, update, and delete scoping rules.

#### See Also

-   [Considerations for Scoping Rules](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_considerations.htm "Familiarize yourself with these considerations for using scoping rules.")

-   [Restriction Rule Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.scoping_rules.meta/scoping_rules/scoping_rules_about.htm "Restriction Rule Developer Guide - HTML (New Window)")

## Code Examples

```
{
    "FullName": "BranchRuleOnAccount",
    "Metadata": {
        "active": true,
        "description": "Scoping rule where users can scope account records by the user’s current
branch",
        "enforcementType": "Scoping",
        "masterLabel": "BranchRuleOnAccount",
        "recordFilter": "SOQL(Id, SELECT AccountId FROM BranchUnitCustomer USING SCOPE
EVERYTHING WHERE BranchUnitId IN(SELECT CurrentBranchId From Banker WHERE
UserOrContactId = $User.Id))",
        "targetEntity": "Account",
        "userCriteria": "$User.IsActive = true",
        "version": 1
    }
}
```

```
{
    "FullName": "BranchRuleOnLead",
    "Metadata": {
        "active": true,
        "description": "Scoping rule where users can scope lead records by the user’s current
branch",
        "enforcementType": "Scoping",
        "masterLabel": "BranchRuleOnLead",
        "recordFilter": "SOQL(Id, SELECT RelatedRecordId FROM BranchUnitRelatedRecord USING SCOPE
EVERYTHING WHERE BranchUnitId IN(SELECT CurrentBranchId From Banker WHERE
UserOrContactId = $User.Id))",
        "targetEntity": "Lead",
        "userCriteria": "$User.IsActive = true",
        "version": 1
    }
}
```

## Related Topics

- Retrieve and Update Information (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_tooling_methods.htm)
- Considerations for Scoping Rules (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_considerations.htm)
