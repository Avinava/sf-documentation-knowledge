---
title: "Examples"
domain: field-history-retention
topic: examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.841Z
estimatedTokens: 919
keywords: [Examples, history, workflows, Data, Retention, Policy, Custom, Time, Query, Archived]
---

# Examples

> Here are some examples of field history workflows.

# Examples

Here are some examples of field history workflows.

## Set Data Retention Policy for Field History

This example demonstrates how to set a field history data retention policy using Metadata API. By default, field history data is not automatically deleted. Edit the metadata only if you want to override the default policy values of 18 months of production storage. Setting a data retention policy involves creating a metadata package and deploying it. The package consists of a .zip file and a project manifest that lists the objects and the API version to use. The .zip file contains an objects folder with the XML that defines each object’s retention policy.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_history_retention)

#### Note

The first copy writes the entire field history that’s defined by your policy to archive storage and takes a long time. Subsequent copies transfer only the changes since the last copy, and are faster.

1.  Define a field history data retention policy for each object. The policy specifies the number of months that you want to maintain field history in Salesforce. The following sample file defines a policy of archiving the object after six months.

    ```

    ```

    The file name determines the object to which the policy is applied. For example, to apply the preceding policy to the Account object, save the file as Account.object. For existing custom objects, the file is also named after the custom object. For example: myObject\_\_c.object.

2.  Create the project manifest, which is an XML file that’s called package.xml. The following sample file lists several objects for which data retention policy is to be applied. With this manifest file, you expect the objects folder to contain five files: Account.object, Case.object, and so on.

    ```

    ```

3.  Create the .zip file and use the deploy()function to deploy your changes to your production environment. For more information, see the [Metadata API Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/).

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_history_retention)

    #### Note

    This feature doesn’t support deployment from sandbox to production environments.


That's it! Your field history retention policy goes into effect according to the time periods that you set.

## Create a Custom Object and Set Field History Retention Policy at the Same Time

You can use Metadata API to create a custom object and set retention policy at the same time. Specify the minimum required fields when creating a custom object. This sample XML creates an object and sets field history retention policy.

```

```

Set trackHistory to true on the fields that you want to track and false on the other fields.

## Update Data Retention Policy for Field History

If a field history data retention policy is already defined on an object, you can update the policy by specifying a new value of HistoryRetentionPolicy in the metadata for that object. When you deploy the metadata changes, the new policy overwrites the previous one.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_history_retention)

#### Note

To check the current data retention policy for any object, retrieve its metadata using Metadata API and look up the value of HistoryRetentionPolicy.

## Query Archived Data

You can retrieve archived data by making SOQL queries on the FieldHistoryArchive object. You can filter on the FieldHistoryType, ParentId, and CreatedDate fields, as long as you specify them in that order. For example:

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
   <historyRetentionPolicy>
       <archiveAfterMonths>6</archiveAfterMonths>
       <archiveRetentionYears>5</archiveRetentionYears>
       <description>My field history retention</description>
   </historyRetentionPolicy>

...
</CustomObject>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Account</members>
        <members>Case</members>
        <members>Contact</members>
        <members>Lead</members>
        <members>Opportunity</members>
        <name>CustomObject</name>
    </types>
    <version>45.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <deploymentStatus>Deployed</deploymentStatus>
    <enableHistory>true</enableHistory>
    <description>just a test object with one field for eclipse ide testing</description>
    <historyRetentionPolicy>
        <archiveAfterMonths>3</archiveAfterMonths>
        <archiveRetentionYears>10</archiveRetentionYears>
        <gracePeriodDays>1</gracePeriodDays>
        <description>Transaction Line History</description>
    </historyRetentionPolicy>
    <fields>
        <fullName>Comments__c</fullName>
        <description>add your comments about this object here</description>
        <inlineHelpText>This field contains comments made about this object</inlineHelpText>
        <label>Comments</label>
        <length>32000</length>
        <trackHistory>true</trackHistory>
        <type>LongTextArea</type>
        <visibleLines>30</visibleLines>
    </fields>
    <label>MyFirstObject</label>
    <nameField>
        <label>MyFirstObject Name</label>
        <type>Text</type>
    </nameField>
    <pluralLabel>MyFirstObjects</pluralLabel>
    <sharingModel>ReadWrite</sharingModel>
</CustomObject>
```

```
SELECT ParentId, FieldHistoryType, Field, Id, NewValue, OldValue FROM FieldHistoryArchive WHERE FieldHistoryType = 'Account' AND ParentId='001D000000INjVe'
```
