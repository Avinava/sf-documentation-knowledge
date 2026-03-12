---
title: "Create a Branch Management Scoping Rule Using the Metadata API"
domain: scoping-rules
topic: create-a-branch-management-scoping-rule-using-the-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.326Z
estimatedTokens: 1093
keywords: [Branch, Management, Scoping, Rule, Metadata, API, filters, account, records, banker’s, location, uses, data, model, included]
---

# Create a Branch Management Scoping Rule Using the Metadata API

> Create a scoping rule that filters account records based on a banker’s branch location.
    This example uses the branch management data model included in Financial Services Cloud and the
    RestrictionRule Metadata API type.

# Create a Branch Management Scoping Rule Using the Metadata API

Create a scoping rule that filters account records based on a banker’s branch location. This example uses the branch management data model included in Financial Services Cloud and the RestrictionRule Metadata API type.

| Available in: Lightning Experience in Performance and Unlimited Editions |
| --- |


| User Permissions Needed |
| --- |
| To create and manage scoping rules: | Manage Sharing |
| To view scoping rules: | View Setup & Configuration AND View Restriction and Scoping Rules |

This example uses the SOQL operator in its recordFilter to identify the accounts that match a retail banker’s branch location. Check out the [Branch Management data model](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_branch.htm) to understand the objects used in this example and how they relate to each other.

1.  Use the [RestrictionRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.restriction_rules.meta/restriction_rules/meta_restrictionrule.htm) type to create and manage both restriction rules and scoping rules. Set up the package.xml manifest file and your directory.

    Example package.xml file:

    ```

    ```

    Example directory:

    ```

    ```

2.  Include all required fields.

    In this example, we used these values.

    ```

    ```

    This example also uses objects from the [Branch Management data model](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_branch.htm) and sets a scoping rule that shows users lead records related to the user’s current branch location.

    ```

    ```

    To create a similar scoping rule for a different object, adjust the targetEntity field to include case, contact, or another supported standard or custom object.

3.  Zip your directory, and deploy your changes. For more information, see [Deploying and Retrieving Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm) in the Metadata API Developer Guide.

    Let’s take a closer look at the Branch Rule On Account example’s SOQL operator.

    SOQL(Id, SELECT AccountId FROM BranchUnitCustomer USING SCOPE EVERYTHING WHERE BranchUnitId IN(SELECT CurrentBranchId From Banker WHERE UserOrContactId = $User.Id))

    -   The SOQL statement takes the Id from the account object, which is the target entity whose records the scoping rule filters, and selects AccountId from the BranchUnitCustomer object.
    -   The where clause gets the BranchUnitId, which is a unique identifier of each branch, from a nested query. The nested query finds each banker’s current branch from the Banker object by matching the UserOrContactId to the currently logged-in user.

    When writing scoping rules using SOQL, follow these guidelines.

    -   In SOQL operators, the SOQL query object and the scoping rule target entity can’t be the same object. In this example, the SOQL query object is BranchUnitCustomer and the scoping rule object, called the targetEntity, is account.
    -   In the SOQL type RecordCriteria, the left operand must query a single ID (primary key) or reference (foreign key) field. In this example, the left operand is a field on the target entity called Id.

    For more tips about writing scoping rules using a performant SOQL operator, see Scoping Rules Considerations. The SOQL operator is supported for scoping rules only.


-   **[Retrieve and Update Information](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_metadata_calls.htm)**
    Use the deploy() and retrieve() calls to move metadata (XML files) between Salesforce and a local file system. You can delete scoping rules by using the same procedure used to deploy components and including a delete manifest file.

#### See Also

-   [Considerations for Scoping Rules](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_considerations.htm "Familiarize yourself with these considerations for using scoping rules.")

-   [Restriction Rule Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.scoping_rules.meta/scoping_rules/scoping_rules_about.htm "Restriction Rule Developer Guide - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>*</members>
    <name>RestrictionRule</name>
  </types>
  <version>66.0</version>
</Package>
```

```
myPackage/package.xml
myPackage/restrictionRules
myPackage/restrictionRules/Rule1.rule
myPackage/restrictionRules/Rule2.rule
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
  <active>true</active>
  <description>Scoping rule where users can scope account records by the user’s current
branch</description>
  <enforcementType>Scoping</enforcementType>
  <masterLabel>BranchRuleOnAccount</masterLabel>
  <recordFilter>SOQL(Id, SELECT AccountId FROM BranchUnitCustomer USING SCOPE
EVERYTHING WHERE BranchUnitId IN(SELECT CurrentBranchId From Banker WHERE
UserOrContactId = $User.Id))</recordFilter>
  <targetEntity>Account</targetEntity>
  <userCriteria>$User.IsActive = true</userCriteria>
  <version>1</version>
</RestrictionRule>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
  <active>true</active>
  <description>Scoping rule where users can scope lead records by their current
branch</description>
  <enforcementType>Scoping</enforcementType>
  <masterLabel>BranchRuleOnLead</masterLabel>
  <recordFilter>SOQL(Id, SELECT RelatedRecordId FROM BranchUnitRelatedRecord USING SCOPE
EVERYTHING WHERE BranchUnitId IN(SELECT CurrentBranchId From Banker WHERE
UserOrContactId = $User.Id))</recordFilter>
  <targetEntity>Lead</targetEntity>
  <userCriteria>$User.IsActive = true</userCriteria>
  <version>1</version>
</RestrictionRule>
```

## Related Topics

- Retrieve and Update Information (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_metadata_calls.htm)
- Considerations for Scoping Rules (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_considerations.htm)
