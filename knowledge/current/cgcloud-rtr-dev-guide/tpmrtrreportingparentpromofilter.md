---
title: "TPM_RTRReportingParentPromoFilter"
domain: cgcloud-rtr-dev-guide
topic: tpmrtrreportingparentpromofilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.440Z
estimatedTokens: 121
keywords: [TPM_RTRReportingParentPromoFilter, Sample, TPM, _RTRReportingParentPromoFilter]
---

# TPM_RTRReportingParentPromoFilter

> Sample of the TPM_RTRReportingParentPromoFilter class.

# TPM\_RTRReportingParentPromoFilter

Sample of the TPM\_RTRReportingParentPromoFilter class.

```

```

1.  Create a new list that you can later use to store the value of results = List<Map<String, Object>>.

    ```

    ```

2.  Query the Promotion object on all records templates that have the CustomerEvents picklist value selected on the TPM\_Promo\_Type\_ControlView\_\_c field for the appropriate sales org ad user.

    ```

    ```

3.  Return the list.

    ```

    ```

## Code Examples

```apex
public with sharing class TPM_RTRReportingParentPromoFilter implements System.Callable {
public class TPM_RTRPromotionsCallableException extends Exception {}
private static List<User> users = [SELECT cgcloud__Sales_Org__c FROM User WHERE Id = :String.escapeSingleQuotes(UserInfo.getUserId()) LIMIT 1];
private static String userSalesOrgName = users[0].cgcloud__Sales_Org__c;
```

```apex
@TestVisible private static List<Map<String, Object>> getParentPromotion() {
List<Map<String, Object>> result = new List<Map<String, Object>>();
```

```apex
List<cgcloud__Promotion__c> prmTmpl = [SELECT ID, Name, cgcloud__Slogan__c , cgcloud__Anchor_Account__c,cgcloud__Anchor_Account__r.Name,cgcloud__Promotion_Template__r.cgcloud__Description__c,cgcloud__Promotion_Template__r.cgcloud__Sales_Org__c,cgcloud__Promotion_Template__r.TPM_Promo_Type_ControlView__c FROM cgcloud__Promotion__c WHERE cgcloud__Promotion_Template__r.TPM_Promo_Type_ControlView__c ='CustomerEvent' and cgcloud__Promotion_Template__r.cgcloud__Sales_Org__c =: userSalesOrgName ];
Map<ID, String> outP = New Map<ID, String>();
for(cgcloud__Promotion__c templ : prmTmpl){
If(!outP.containsKey(templ.ID)){
outP.put(String.valueOf(templ.Id), String.valueOf(templ. cgcloud__Slogan__c));
}
}
```

```apex
for(String statusTo : outP.keyset()){
result.add(new Map<String, Object> {
'label' => outP.get(statusTo),
'value' => statusTo
});
}
system.debug(json.serialize(result));
return result;
}
public Object call(String method, Map<String, Object> args) {
return getParentPromotion();
}
}
```
