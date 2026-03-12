---
title: "Retrieve and Update Information"
domain: scoping-rules
topic: retrieve-and-update-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.334Z
estimatedTokens: 387
keywords: [Retrieve, deploy, calls, move, metadata, XML, files, Salesforce, local, file, system, scoping, rules, procedure, components, PATCH]
---

# Retrieve and Update Information

> Use the GET, PATCH, and DELETE methods to retrieve, update, and delete scoping
  rules.

# Retrieve and Update Information

Use the GET, PATCH, and DELETE methods to retrieve, update, and delete scoping rules.

| Available in: Lightning Experience in Performance and Unlimited Editions |
| --- |


## Retrieve

To retrieve information about a scoping rule, use the GET method.

Example HTTP Method and URI:

GET /services/data/v66.0/tooling/query/?q=SELECT+id,+targetEntity,+enforcementType,+recordFilter,+userCriteria+FROM+RestrictionRule+WHERE+enforcementtype='Scoping'

## Update

To update a scoping rule, use the PATCH method.

We recommend that you don’t update the value of targetEntity after a scoping rule is created. Instead, delete the scoping rule and create another one with the correct values.

Example HTTP Method and URI:

PATCH /services/data/v66.0/tooling/sobjects/RestrictionRule/0eYxxxxxxxxxxxx2AY

Replace 0eYxxxxxxxxxxxx2AY with the ID returned when the scoping rule was created.

Example Request Body:

Include all Metadata fields, even if you aren’t updating them. Specify the FullName value only if you’re changing this field.

This example deactivates the scoping rule by setting active to false.

```

```

## Delete

To delete a scoping rule, use the DELETE method.

Example HTTP Method and URI:

DELETE /services/data/v66.0/tooling/sobjects/RestrictionRule/0eYxxxxxxxxxxxx2AY

Replace 0eYxxxxxxxxxxxx2AY with the ID returned when creating the scoping rule.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=scoping_rules)

#### Note

If the userCriteria or recordCriteria field contains a Salesforce org ID and you’re deploying to a different org than the org you retrieved them from, modify the Salesforce ID first.

## Code Examples

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
