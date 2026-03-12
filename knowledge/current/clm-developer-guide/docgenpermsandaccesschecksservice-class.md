---
title: "DocGenPermsAndAccessChecksService Class"
domain: clm-developer-guide
topic: docgenpermsandaccesschecksservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.006Z
estimatedTokens: 1720
keywords: [DocGenPermsAndAccessChecksService, check, permissions, settings, document, generation, integration, features, hasDocGenMetadataSetting, orgId, orgPreference, hasDocGenOrgPerm, orgPermission, hasMS365IntegrationSettingOrgPerm, hasOmnistudioOrgPerm]
---

# DocGenPermsAndAccessChecksService Class

> The
      DocGenPermsAndAccessChecksService class contains
    methods to check permissions and settings related to document generation and integration
    features.

# DocGenPermsAndAccessChecksService Class

The DocGenPermsAndAccessChecksService class contains methods to check permissions and settings related to document generation and integration features.

## Namespace

[industries\_docgen](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_industries_docgen.htm "The industries_docgen namespace provides classes and methods for document generation and permission management in Salesforce Industries.")

## Example

```

```

This Apex code sample checks whether a user has specific docgen permissions.

-   **[DocGenPermsAndAccessChecksService Methods](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm#apex_industries_docgen_DocGenPermsAndAccessChecksService_methods)**


## DocGenPermsAndAccessChecksService Methods

The following are methods for DocGenPermsAndAccessChecksService.

-   **[hasDocGenMetadataSetting(orgId, orgPreference)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm#apex_industries_docgen_DocGenPermsAndAccessChecksService_hasDocGenMetadataSetting)**
    Checks whether the DocGen metadata setting is enabled for the org (true) or not (false).
-   **[hasDocGenOrgPerm(orgId, orgPermission)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm#apex_industries_docgen_DocGenPermsAndAccessChecksService_hasDocGenOrgPerm)**
    Checks whether the org has the DocGen permission (true) or not (false).
-   **[hasMS365IntegrationSettingOrgPerm(orgId, orgPermission)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm#apex_industries_docgen_DocGenPermsAndAccessChecksService_hasMS365IntegrationSettingOrgPerm)**
    Checks whether the org has a Microsoft 365 integration setting permission enabled (true) or not (false).
-   **[hasOmnistudioOrgPerm(orgId, orgPermission)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm#apex_industries_docgen_DocGenPermsAndAccessChecksService_hasOmniStudioOrgPerm)**
    Checks whether the org has Omnistudio permission enabled (true) or not (false).
-   **[isDesigner(orgId, userId, userPerm)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm#apex_industries_docgen_DocGenPermsAndAccessChecksService_isDesigner)**
    Checks whether the user has designer permissions enabled (true) or not (false).
-   **[isRuntimeCCUser(orgId, userId, userPerm)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm#apex_industries_docgen_DocGenPermsAndAccessChecksService_isRuntimeCCUser)**
    Checks whether the user has runtime customer community user permissions (true) or not (false).
-   **[isRuntimeUser(orgId, userId, userPerm)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm#apex_industries_docgen_DocGenPermsAndAccessChecksService_isRuntimeUser)**
    Checks whether the user has runtime user permissions (true) or not (false).

### hasDocGenMetadataSetting(orgId, orgPreference)

Checks whether the DocGen metadata setting is enabled for the org (true) or not (false).

#### Signature

public static Boolean hasDocGenMetadataSetting(String orgId, String orgPreference)

#### Parameters

orgId

Type: String

ID of the org.

orgPreference

Type: String

Name of the DocGen metadata setting.

#### Return Value

Type: Boolean

### hasDocGenOrgPerm(orgId, orgPermission)

Checks whether the org has the DocGen permission (true) or not (false).

#### Signature

public static Boolean hasDocGenOrgPerm(String orgId, String orgPermission)

#### Parameters

orgId

Type: String

ID of the org.

orgPermission

Type: String

Name of the permission.

#### Return Value

Type: Boolean

### hasMS365IntegrationSettingOrgPerm(orgId, orgPermission)

Checks whether the org has a Microsoft 365 integration setting permission enabled (true) or not (false).

#### Signature

public static Boolean hasMS365InetgrationSettingOrgPerm(String orgId, String orgPermission)

#### Parameters

orgId

Type: String

ID of the org.

orgPermission

Type: String

Name of the permission.

#### Return Value

Type: Boolean

### hasOmnistudioOrgPerm(orgId, orgPermission)

Checks whether the org has Omnistudio permission enabled (true) or not (false).

#### Signature

public static Boolean hasOmnistudioOrgPerm(String orgId, String orgPermission)

#### Parameters

orgId

Type: String

ID of the org.

orgPermission

Type: String

Name of the Omnistudio permission.

#### Return Value

Type: Boolean

### isDesigner(orgId, userId, userPerm)

Checks whether the user has designer permissions enabled (true) or not (false).

#### Signature

public static Boolean isDesigner(String orgId, String userId, String userPerm)

#### Parameters

orgId

Type: String

ID of the org.

userId

Type: String

ID of the user.

userPerm

Type: String

Name of the user permission to check for designer status.

#### Return Value

Type: Boolean

#### See Also

-   [*Salesforce Help* : Permission Set Licenses for Omnistudio Document Generation](https://help.salesforce.com/s/articleView?id=ind.doc_gen_Permission_Set_Licenses_for_OmniStudio_DocGen.htm&language=en_US "
    Salesforce Help
    : Permission Set Licenses for Omnistudio Document Generation - HTML (New Window)")


### isRuntimeCCUser(orgId, userId, userPerm)

Checks whether the user has runtime customer community user permissions (true) or not (false).

#### Signature

public static Boolean isRuntimeCCUser(String orgId, String userId, String userPerm)

#### Parameters

orgId

Type: String

ID of the org.

userId

Type: String

ID of the user.

userPerm

Type: String

Name of the user permission to check for runtime customer community user status.

#### Return Value

Type: Boolean

#### See Also

-   [*Salesforce Help* : Permission Set Licenses for Omnistudio Document Generation](https://help.salesforce.com/s/articleView?id=ind.doc_gen_Permission_Set_Licenses_for_OmniStudio_DocGen.htm&language=en_US "
    Salesforce Help
    : Permission Set Licenses for Omnistudio Document Generation - HTML (New Window)")


### isRuntimeUser(orgId, userId, userPerm)

Checks whether the user has runtime user permissions (true) or not (false).

#### Signature

public static Boolean isRuntimeUser(String orgId, String userId, String userPerm)

#### Parameters

orgId

Type: String

ID of the org.

userId

Type: String

ID of the user.

userPerm

Type: String

Name of the user permission to check for runtime user status.

#### Return Value

Type: Boolean

## Code Examples

```
industries_docgen.DocGenPermsAndAccessChecksService.isDesigner(UserInfo.getOrganizationId(), userInfo.getUserId(), 'DocGenDesigner');
industries_docgen.DocGenPermsAndAccessChecksService.isRuntimeUser(UserInfo.getOrganizationId(), userInfo.getUserId(), 'DocGenRuntimeUser');
industries_docgen.DocGenPermsAndAccessChecksService.isRuntimeCCUser(UserInfo.getOrganizationId(), userInfo.getUserId(),'DocGenRuntimeCCUser');
```

## Related Topics

- industries_docgen (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_industries_docgen.htm)
- DocGenPermsAndAccessChecksService Methods (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm)
- hasDocGenMetadataSetting(orgId, orgPreference) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm)
- hasDocGenOrgPerm(orgId, orgPermission) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm)
- hasMS365IntegrationSettingOrgPerm(orgId, orgPermission) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm)
- hasOmnistudioOrgPerm(orgId, orgPermission) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm)
- isDesigner(orgId, userId, userPerm) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm)
- isRuntimeCCUser(orgId, userId, userPerm) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm)
- isRuntimeUser(orgId, userId, userPerm) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocGenPermsAndAccessChecksService.htm)
