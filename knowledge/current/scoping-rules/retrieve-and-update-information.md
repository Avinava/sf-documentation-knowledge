---
title: "Retrieve and Update Information"
domain: scoping-rules
topic: retrieve-and-update-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:05:27.879Z
estimatedTokens: 387
keywords: [Retrieve, deploy, calls, move, metadata, XML, files, Salesforce, local, file, system, scoping, rules, procedure, components, PATCH]
---

# Retrieve and Update Information

> Use the deploy() and retrieve() calls to move metadata (XML files) between Salesforce and a local file
  system. You can delete scoping rules by using the same procedure used to deploy components and
  including a delete manifest file.

# Retrieve and Update Information

Use the deploy() and retrieve() calls to move metadata (XML files) between Salesforce and a local file system. You can delete scoping rules by using the same procedure used to deploy components and including a delete manifest file.

| Available in: Lightning Experience in Performance,Unlimited, and Developer editions. |
| --- |


For more information, see [Deploying and Retrieving Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm) in the Metadata API Developer Guide.

If the userCriteria or recordCriteria field contains a Salesforce org ID and you’re deploying to a different org than the org you retrieved them from, modify the Salesforce ID first.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=scoping_rules)

#### Note

We recommend that you don’t update the value of targetEntity after a scoping rule is created. Instead, delete the scoping rule and create another one with the correct values.

To delete components, use the same procedure as with deploying components, but include a delete manifest file that’s named destructiveChanges.xml and lists the components to delete. To learn more, see Deleting Components from an Organization.

#### See Also

-   [*Metadata API Guide*: Deleting Components from an Organization](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_deploy_deleting_files.htm "Metadata API Guide: Deleting Components from an Organization - HTML (New Window)")

## Code Examples

```
GET /services/data/v66.0/tooling/query/?q=SELECT+id,+targetEntity,+enforcementType,+recordFilter,+userCriteria+FROM+RestrictionRule+WHERE+enforcementtype='Scoping'
```

```
PATCH /services/data/v66.0/tooling/sobjects/RestrictionRule/0eYxxxxxxxxxxxx2AY
```

```
{
    "Metadata": {
        "active": false,
        "description": "sales support associate sees only account records of specified advisor",
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
