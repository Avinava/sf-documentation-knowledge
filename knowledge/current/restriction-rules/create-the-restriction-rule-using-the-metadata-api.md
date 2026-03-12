---
title: "Create the Restriction Rule Using the Metadata API"
domain: restriction-rules
topic: create-the-restriction-rule-using-the-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.410Z
estimatedTokens: 504
keywords: [Restriction, Rule, Metadata, API, tasks, members, Sales, Team, access, RestrictionRule]
---

# Create the Restriction Rule Using the Metadata API

> Create a restriction rule that controls which tasks members of the Sales Team can access
    using the RestrictionRule Metadata API type.

# Create the Restriction Rule Using the Metadata API

Create a restriction rule that controls which tasks members of the Sales Team can access using the RestrictionRule Metadata API type.

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

1.  Set up the package.xml manifest file and your directory.

    Example package.xml file:

    ```

    ```

    Example directory:

    ```

    ```

2.  Include all required fields. For more information, see the reference topic [RestrictionRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.restriction_rules.meta/restriction_rules/meta_restrictionrule.htm).

    For our example, we set the fields as follows:

    ```

    ```

3.  Zip your directory and deploy your changes. For more information, see [Deploying and Retrieving Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm) in the Metadata API Developer Guide.
4.  Note the ID returned for the newly created restriction rule for later reference.

-   **[Retrieve and Update Information](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_quickstart_metadata_calls.htm)**
    Use the deploy() and retrieve() calls to move metadata (XML files) between a Salesforce organization and a local file system.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>*</members>
    <name>RestrictionRule</name>
  </types>
  <version>55.0</version>
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
  <description>Sales team can see only task records with specified record type</description>
  <enforcementType>Restrict</enforcementType>
  <masterLabel>Sales Team Record Type</masterLabel>
  <recordFilter>recordTypeId = '011xxxxxxxxxxxx'</recordFilter>
  <targetEntity>Task</targetEntity>
  <userCriteria>$User.ProfileId = '00exxxxxxxxxxxx'</userCriteria>
  <version>1</version>
</RestrictionRule>
```

## Related Topics

- Retrieve and Update Information (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_quickstart_metadata_calls.htm)
