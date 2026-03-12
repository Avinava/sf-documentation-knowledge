---
title: "TPM_RTRPromoTypeFilter_AMS"
domain: cgcloud-rtr-dev-guide
topic: tpmrtrpromotypefilterams
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.438Z
estimatedTokens: 183
keywords: [TPM_RTRPromoTypeFilter_AMS, Sample, TPM, _RTRPromoTypeFilter, _AMS]
---

# TPM_RTRPromoTypeFilter_AMS

> Sample of the TPM_RTRPromoTypeFilter_AMS class.

# TPM\_RTRPromoTypeFilter\_AMS

Sample of the TPM\_RTRPromoTypeFilter\_AMS class.

```

```

1.  Query the custom metadata record based on the parameter, and then perform workarounds for the test classes.

    ```

    ```

2.  From the custom metadata record, split the value of the Promo\_Types\_\_c field into individual values and then parse them into a new list type called groups.

    ```

    ```

3.  Create a new list that you can later use to store the value of results = List<Map<String, Object>>. You can also query promotion templates into another active list that has the same sales org as the user and whose name matches the values in the Groups list type.

    ```

    ```

4.  Return the result.

    ```

    ```

## Code Examples

```apex
public with sharing class TPM_RTRPromoTypeFilter_AMS implements System.Callable {
public class TPM_RTRPromotionsCallableException extends Exception {}
private static String userSalesOrgName = null;
//GET SF ID
static {
List<User> users = [SELECT cgcloud__Sales_Org__c FROM User WHERE Id = :String.escapeSingleQuotes(UserInfo.getUserId()) LIMIT 1];
userSalesOrgName = users[0].cgcloud__Sales_Org__c;
}
@testVisible private static List<Map<String, Object>> getPromotionTypes(String devname) {
String myCM;
```

```
//GET CUSTOM METADATA TYPE PROMO TYPE GROUPINGS (BASED ON ARGUMENT OF REPORT)
if(!Test.isRunningTest()){
TPM_RTRPromoTypes__mdt customMetaData = [SELECT Promo_Types__c FROM TPM_RTRPromoTypes__mdt WHERE DeveloperName = :devname LIMIT 1];
myCM = customMetaData.Promo_Types__c;
}
//WORKAROUND FOR TESTCLASS (CUSTOM METADATA TYPE)
else {
myCM = devname;
}
```

```apex
List<String> splitGrouping = myCM.split(';');
List<String> typeGroups = New List<String>();
For(String item : splitGrouping){
typeGroups.add(item.trim());
}
```

```apex
List<Map<String, Object>> result = new List<Map<String, Object>>();
List<cgcloud__Promotion_Template__c> prmTmpl = New List<cgcloud__Promotion_Template__c>();
prmTmpl = [SELECT Id, Name FROM cgcloud__Promotion_Template__c WHERE cgcloud__Active__c = true AND cgcloud__Sales_Org__c = :userSalesOrgName AND Name IN :typeGroups];
Map<String, String> outP = New Map<String, String>();
```

```apex
for(cgcloud__Promotion_Template__c tmpl : prmTmpl){
If(!outP.containsKey(tmpl.Name)){
outP.put(String.valueOf(tmpl.Id), String.valueOf(tmpl.Name));
}
}
for(String typeId : outP.keyset()){
result.add(new Map<String, Object> {
'label' => outP.get(typeId),
'value' => typeId
});
}
return result;
}
public Object call(String method, Map<String, Object> args) {
return getPromotionTypes(method);
}
}
```
