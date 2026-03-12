---
title: "Create a Restriction Rule Using the Tooling API"
domain: restriction-rules
topic: create-a-restriction-rule-using-the-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.414Z
estimatedTokens: 497
keywords: [Restriction, Rule, Tooling, API, tasks, members, Sales, Team, access, RestrictionRule]
---

# Create a Restriction Rule Using the Tooling API

> Create a restriction rule that controls which tasks members of the Sales Team can access
  using the RestrictionRule Tooling API object.

# Create a Restriction Rule Using the Tooling API

Create a restriction rule that controls which tasks members of the Sales Team can access using the RestrictionRule Tooling API object.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=restriction_rules)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Available in: Lightning Experience in Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


| User Permissions Needed |
| --- |
| To create and manage restriction rules: | Manage Sharing |
| To view restriction rules: | View Setup & Configuration AND View Restriction and Scoping Rules |

You can create up to two restriction rules per object in Enterprise and Developer Editions and up to five restriction rules per object in Performance and Unlimited Editions.

1.  Set a value for the FullName value (the full name of the associated metadata object in Metadata API). We don't support two consecutive underscores in the FullName field.
2.  Include all other required fields. For more information, see the reference topic [RestrictionRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.restriction_rules.meta/restriction_rules/tooling_api_objects_restrictionrule.htm).

    For our example, we set the fields as follows:

    ```

    ```

3.  Use a POST request to create the restriction rule.

    POST /services/data/v55.0/tooling/sobjects/RestrictionRule

4.  Copy your restriction rule definition into the request body.
5.  Execute your request. Note the ID returned for the newly created restriction rule for later reference.

-   **[Retrieve and Update Information](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_quickstart_tooling_methods.htm)**
    Use the GET, PATCH, and DELETE methods to retrieve, update, and delete restriction rules.

## Code Examples

```
{
    "FullName": "restrictionrulesalesteam",
    "Metadata": {
        "active": true,
        "description": "Sales team can see only task records with specified record type",
        "enforcementType": "Restrict",
        "masterLabel": "Sales Team Record Type",
        "recordFilter": "recordTypeId = '011xxxxxxxxxxxx'",
        "targetEntity": "Task",
        "userCriteria": "$User.ProfileId = '00exxxxxxxxxxxx'",
        "version": 1
    }
}
```

## Related Topics

- Retrieve and Update Information (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_quickstart_tooling_methods.htm)
