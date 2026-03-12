---
title: "Access Industries Features Deployed Using Managed Packages"
domain: omnistudio
topic: access-industries-features-deployed-using-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:51.559Z
estimatedTokens: 263
keywords: [Access, Industries, Features, Deployed, Managed, Packages, org, records, Apex, REST]
---

# Access Industries Features Deployed Using Managed Packages

> Some of the features of Industries are deployed in your org using managed packages. To
  access records of features that are deployed using managed packages, you must use Apex REST
  methods.

# Access Industries Features Deployed Using Managed Packages

Some of the features of Industries are deployed in your org using managed packages. To access records of features that are deployed using managed packages, you must use Apex REST methods.

| Health Cloud and Financial Services Cloud are available in Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions with Health Cloud and Financial Services Cloud |


When trying to access records of features deployed using a managed package, the REST call URL must contain the namespace of the managed package.

https://instance.salesforce.com/services/apexrest/packageNamespace/MyMethod/.

For example, here's how a call to view the details of all the individuals in an org where Health Cloud's managed package is deployed.

services/apexrest/org1\_gs0/v1/individual/

To know more about Apex REST methods, see [Apex REST Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_rest_methods.htm).
