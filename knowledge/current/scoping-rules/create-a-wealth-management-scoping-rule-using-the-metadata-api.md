---
title: "Create a Wealth Management Scoping Rule Using the Metadata API"
domain: scoping-rules
topic: create-a-wealth-management-scoping-rule-using-the-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.331Z
estimatedTokens: 388
keywords: [Wealth, Management, Scoping, Rule, Metadata, API, sales, support, associate, supports, multiple, financial, advisors, record, corresponds]
---

# Create a Wealth Management Scoping Rule Using the Metadata API

> Create a scoping rule that shows a sales support associate who supports multiple
  financial advisors only the record set that corresponds to the financial advisor that the
  associate is working with. Use the RestrictionRule Metadata API type.

# Create a Wealth Management Scoping Rule Using the Metadata API

Create a scoping rule that shows a sales support associate who supports multiple financial advisors only the record set that corresponds to the financial advisor that the associate is working with. Use the RestrictionRule Metadata API type.

| Available in: Lightning Experience in Performance and Unlimited Editions |
| --- |


| User Permissions Needed |
| --- |
| To create and manage scoping rules: | Manage Sharing |
| To view scoping rules: | View Setup & Configuration AND View Restriction and Scoping Rules |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=scoping_rules)

#### Note

You can use the RestrictionRule object to create and manage both restriction rules and scoping rules. For information on restriction rules, see the Restriction Rule Developer Guide.

1.  Set up the package.xml manifest file and your directory.

    Example package.xml file:

    ```

    ```

    Example directory:

    ```

    ```

2.  Include all required fields. For more information, see the reference topic [RestrictionRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.restriction_rules.meta/restriction_rules/meta_restrictionrule.htm).

    In this example, we used these values.

    ```

    ```

3.  Zip your directory, and deploy your changes. For more information, see [Deploying and Retrieving Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm) in the Metadata API Developer Guide.

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
  <description>Sales support associate sees only account records of specified advisor</description>
  <enforcementType>Scoping</enforcementType>
  <masterLabel>Advisor1 Record Type</masterLabel>
  <recordFilter>recordTypeId = '012xxxxxxxxxxxx'</recordFilter>
  <targetEntity>Account</targetEntity>
  <userCriteria>$User.ProfileId = '00exxxxxxxxxxxx'</userCriteria>
  <version>1</version>
</RestrictionRule>
```
