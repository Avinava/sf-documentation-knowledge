---
title: "Create a Wealth Management Scoping Rule Using the Tooling API"
domain: scoping-rules
topic: create-a-wealth-management-scoping-rule-using-the-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.338Z
estimatedTokens: 495
keywords: [Wealth, Management, Scoping, Rule, Tooling, API, sales, support, associate, supports, multiple, financial, advisors, record, corresponds]
---

# Create a Wealth Management Scoping Rule Using the Tooling API

> Create a scoping rule that shows a sales support associate who supports multiple
  financial advisors only the record set that corresponds to the financial advisor that the
  associate is working with. Use the RestrictionRule Tooling API object.

# Create a Wealth Management Scoping Rule Using the Tooling API

Create a scoping rule that shows a sales support associate who supports multiple financial advisors only the record set that corresponds to the financial advisor that the associate is working with. Use the RestrictionRule Tooling API object.

| Available in: Lightning Experience in Performance and Unlimited Editions |
| --- |


| User Permissions Needed |
| --- |
| To create and manage scoping rules: | Manage Sharing |
| To view scoping rules: | View Setup & Configuration AND View Restriction and Scoping Rules |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=scoping_rules)

#### Note

You can use the RestrictionRule object to create and manage both restriction rules and scoping rules. For information on restriction rules, see the Restriction Rule Developer Guide.

This example uses the SOQL operator in the recordFilter field to determine which accounts to display to the user based on the account, team, and user entitlements.![Diagram illustrating the entitlement junction objects that connect the client (account) object to the user object, determining the user's access.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fscoping_rules_wealth_mgmt_diagram.png&folder=scoping_rules)

1.  Set a value for the FullName value (the full name of the associated metadata object in Metadata API).
2.  Include all other required fields. For more information, see the reference topic [RestrictionRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.restriction_rules.meta/restriction_rules/tooling_api_objects_restrictionrule.htm).

    In this example, we used these values.

    ```

    ```

3.  Use a POST request to create the scoping rule.

    POST /services/data/66.0/tooling/sobjects/RestrictionRule

4.  Copy your scoping rule definition into the request body.
5.  Execute your request. Copy the ID returned for the scoping rule for later reference.

## Code Examples

```
{
    "FullName": "SalesSupportAssociateScopingRule",
    "Metadata": {
        "active": true,
        "description": "Sales support associate sees only account records of of Advisor1",
        "enforcementType": "Scoping",
        "masterLabel": "Advisor1 Record Set",
        "recordFilter": "SOQL(id, SELECT Account__c FROM Client_Entitlement__c USING SCOPE EVERYTHING
	WHERE Team_Entitlement__c IN (
		SELECT Team_Entitlement__c
		FROM User_Entitlement__c
			USING SCOPE EVERYTHING
		WHERE User__c = $User.id)
	)",
        "targetEntity": "Account",
        "userCriteria": "$User.ProfileId = '00exxxxxxxxxxxx'",
        "version": 1
    }
}
```
