---
title: "AppExchange Object Prefixes and the API"
domain: object-reference
topic: appexchange-object-prefixes-and-the-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.140Z
estimatedTokens: 184
keywords: [AppExchange, Prefixes, API, unmanaged, package, managed, version, becomes, custom, objects, Scontrol, change, prefix, added, component]
---

# AppExchange Object Prefixes and the API

> If you have an unmanaged package and a managed package
        version becomes available, the API names of custom fields, custom objects, and Scontrol
        objects in the package change. A namespace prefix is added to each component to make it
        unique: name__c becomes prefix__name__c. To m

# AppExchange Object Prefixes and the API

If you have an unmanaged package and a managed package version becomes available, the API names of custom fields, custom objects, and Scontrol objects in the package change. A namespace prefix is added to each component to make it unique: *name*\_\_c becomes *prefix*\_\_*name*\_\_c. To move from an unmanaged package to a managed package version of the same application, export your data, uninstall the old package, and install the new package. Then review the name changes and import your data with the relevant mapping. For details, see the [ISVforce Guide](https://resources.docs.salesforce.com/260/latest/en-us/sfdc/pdf/salesforce_packaging_guide.pdf "Adobe Acrobat PDF (New Window)").
