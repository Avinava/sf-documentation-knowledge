---
title: "OpenInterface Interface"
domain: clm-developer-guide
topic: openinterface-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.023Z
estimatedTokens: 417
keywords: [OpenInterface, Invokes, use-case, invokeMethod, var1, var2, var3, Implementation]
---

# OpenInterface Interface

> Invokes method based on the use-case.

# OpenInterface Interface

The OpenInterface provides user the capability to provide custom logic for task permitted by Salesforce.

## Namespace

[industries\_clm](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_industries_clm.htm "The industries_clm namespace allows user to provide custom logic for any specific task permitted by salesforce. For example, Custom Document Template Filtering, which allows user to provide the filtering logic on Document tab under Contract.")

-   **[OpenInterface Methods](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_industries_clm_OpenInterface.htm#apex_industries_clm_OpenInterface_methods)**

-   **[OpenInterface Example Implementation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_industries_clm_OpenInterface.htm#apex_interface_industries_clm_OpenInterface_Example)**


## OpenInterface Methods

The following are methods for OpenInterface.

-   **[invokeMethod(var1, var2, var3)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_industries_clm_OpenInterface.htm#apex_industries_clm_OpenInterface_invokeMethod)**
    Invokes method based on the use-case.

### invokeMethod(var1, var2, var3)

Invokes method based on the use-case.

#### Signature

public Boolean invokeMethod(String var1, Map<String,Object\> var2, Map<String,Object\> var3)

#### Parameters

var1

Type: String

Contains the name of the method that is supposed to be implemented from invoke method.

var2

Type: Map<String,ANY>

Contains the inputs as per the use-case.

var3

Type: Map<String,ANY>

Returns the output as per the use-case.

#### Return Value

Type: Boolean

true or false

## OpenInterface Example Implementation

This is an example implementation of the industries\_clm.OpenInterface interface.

```

```

## Code Examples

```apex
global class TestTF implements ind_docgen_api.OpenInterface {
public Boolean invokeMethod(String methodName, Map<String, Object> request, Map<String, Object> outMap) {
Boolean success = true;
if (methodName == 'getDocumentTemplateList') {
getTemplateList(request, outMap);
}
return success;
} 
 
private void getTemplateList(Map < String, Object > inputMap, Map < String, Object > outMap) {
String contractId = (String) inputMap.get('contractId');
String usageType = (String) inputMap.get('usageType');
String billingCountry;
List<Contract> contractList = [SELECT BillingCountry, Id FROM Contract where Id = :contractId];
if(!contractList.isEmpty()) {
Contract contract = contractList.get(0);
billingCountry = contract.BillingCountry != null ? contract.BillingCountry : '';
}
List<DocumentTemplate> templist;
String objName = 'DocumentTemplate';
try {
if(billingCountry.equalsIgnoreCase('India')) {
templist = [select id, isActive, name, type, versionNumber from DocumentTemplate where IsActive=true and Type = 'MicrosoftWord' and Name like '%APAC%'
order by Name];
} else {
templist = [select id, isActive, name, type, versionNumber from DocumentTemplate where IsActive=true and Type = 'MicrosoftWord' order by Name];
}
} catch (Exception e) {
throw e;
}
if (tempList != null && tempList.size() > 0) {
outMap.put('documentTemplateList', tempList);
}
}
}
```

```apex
global class TestTF implements industries_clm.OpenInterface {
public Boolean invokeMethod(String methodName, Map<String, Object> request, Map<String, Object> outMap) {
Boolean success = true;
if (methodName == 'getDocumentTemplateList') {
getTemplateList(request, outMap);
}
return success;
} 
 
private void getTemplateList(Map < String, Object > inputMap, Map < String, Object > outMap) {
String contractId = (String) inputMap.get('contractId');
String usageType = (String) inputMap.get('usageType');
String billingCountry;
List<Contract> contractList = [SELECT BillingCountry, Id FROM Contract where Id = :contractId];
if(!contractList.isEmpty()) {
Contract contract = contractList.get(0);
billingCountry = contract.BillingCountry != null ? contract.BillingCountry : '';
}
List<DocumentTemplate> templist;
String objName = 'DocumentTemplate';
try {
if(billingCountry.equalsIgnoreCase('India')) {
templist = [select id, isActive, name, type, versionNumber from DocumentTemplate where IsActive=true and Type = 'MicrosoftWord' and Name like '%APAC%'
order by Name];
} else {
templist = [select id, isActive, name, type, versionNumber from DocumentTemplate where IsActive=true and Type = 'MicrosoftWord' order by Name];
}
} catch (Exception e) {
throw e;
}
if (tempList != null && tempList.size() > 0) {
outMap.put('documentTemplateList', tempList);
}
}
}
```

## Related Topics

- ind_docgen_api (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_ind_docgen_api.htm)
- OpenInterface Methods (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_ind_docgen_api_OpenInterface.htm)
- OpenInterface Example Implementation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_ind_docgen_api_OpenInterface.htm)
- invokeMethod(var1, var2, var3) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_ind_docgen_api_OpenInterface.htm)
- industries_clm (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_industries_clm.htm)
- OpenInterface Methods (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_industries_clm_OpenInterface.htm)
- OpenInterface Example Implementation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_industries_clm_OpenInterface.htm)
- invokeMethod(var1, var2, var3) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_interface_industries_clm_OpenInterface.htm)
