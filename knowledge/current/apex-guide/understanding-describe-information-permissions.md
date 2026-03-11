---
title: "Understanding Describe Information Permissions"
domain: apex-guide
topic: understanding-describe-information-permissions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.072Z
keywords: [Understanding, Describe, Information, Permissions, See]
---

# Understanding Describe Information Permissions

# Understanding Describe Information Permissions

Apex classes and triggers run in system mode. Classes and triggers have no restrictions on dynamically looking up any sObject that is available in the org. You can generate a map of all the sObjects for your org regardless of the current user’s permission, unless you are executing anonymous Apex.

User permissions matter when you execute describe calls in an anonymous block.. As a result, not all sObjects and fields can be looked up if access is restricted for the running user. For example, if you describe account fields in an anonymous block and you don’t have access to all fields, not all fields are returned. However, all fields are returned for the same call in an Apex class.

For more information, see “About API and Dynamic Apex Access in Packages” in Salesforce Help.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm "Using Field Tokens")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm "Describing sObjects Using Schema Method")

#### See Also

-   [Anonymous Blocks](atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm "An anonymous block is Apex code that doesn’t get stored in the metadata, but that can be compiled and executed.")
    
-   [Managed Package Types](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm "Salesforce supports the creation and distribution of Apex through different types of packages. Understand the distinctions between package types, and recognize that Apex behavior can vary across them.")