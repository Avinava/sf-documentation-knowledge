---
title: "TPM_RTRFixedFunds_AMS"
domain: cgcloud-rtr-dev-guide
topic: tpmrtrfixedfundsams
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.435Z
estimatedTokens: 21
keywords: [TPM_RTRFixedFunds_AMS, Sample, TPM, _RTRFixedFunds, _AMS]
---

# TPM_RTRFixedFunds_AMS

> Sample of the TPM_RTRFixedFunds_AMS class.

# TPM\_RTRFixedFunds\_AMS

Sample of the TPM\_RTRFixedFunds\_AMS class.

```

```

## Code Examples

```apex
global class TPM_RTRFixedFunds_AMS{
global static List<TPM_RTRReportingWrapper_AMS.OutputRecord> getBrand(Date inputDateBegin, Date inputDateEnd, TPM_RTRReportingWrapper_AMS.InputPayload payload, List<TPM_RTRReportingWrapper_AMS.OutputRecord> output, Map<String, TPM_RTRRouting__mdt> fixedFunds){
//This code creates a list based on the map that was passed into the method. In this List only the Fund Template
//Names are stored so that the list can be used in the AggregateResult query (where clause). The goal is to only load records that
//are related to the Fund Templates we're looking at.
List<String> FundTemplateTypes = New List<String>();
String SalesOrg;
For(String cmID : fixedFunds.keyset()){
FundTemplateTypes.add(fixedFunds.get(cmID).Fund_Template__c);
if(Salesorg == Null){
Salesorg = fixedFunds.get(cmID).Sales_Org__c;
}
}
//The query returns Fund_Transaction_Row records based on the selected timeframe, customer, category and templates
//The results are aggregated TPM_RTR_Amount values grouped by BRAND, FUND TEMPLATE
AggregateResult[] groupedResults = [SELECT SUM(TPM_RTRAmount__c) amount,
cgcloud__Target_Fund__r.cgcloud__Fund_Template__r.Name template,
cgcloud__Target_Fund__r.cgcloud__Fund_Template__r.TPM_RTRRoutingFundType__c RTRRoutingFundType,
cgcloud__Fund_Transaction__r.cgcloud__Fund_Transaction_Header__r.TPM_Product__c brand
FROM cgcloud__Fund_Transaction_Row__c
WHERE cgcloud__Target_Fund__r.cgcloud__Fund_Template__r.TPM_RTRRoutingFundType__c in :FundTemplateTypes
AND cgcloud__Target_Fund__r.cgcloud__Sales_Org__c= :SalesOrg
AND cgcloud__Fund_Transaction__r.cgcloud__Fund_Transaction_Header__r.TPM_Product__r.cgcloud__Criterion_1_Product__c IN :payload.productsfids
AND cgcloud__Target_Fund__r.cgcloud__Anchor_Account__c IN :payload.accountsfids
AND cgcloud__Transaction_Type__c IN ('Deposit','Withdraw')
AND ((cgcloud__Target_Fund__r.cgcloud__Valid_From__c <= :inputDateEnd
AND cgcloud__Target_Fund__r.cgcloud__Valid_From__c >= :inputDateBegin) OR (cgcloud__Target_Fund__r.cgcloud__Valid_Thru__c <= :inputDateEnd
AND cgcloud__Target_Fund__r.cgcloud__Valid_Thru__c >= :inputDateBegin))
GROUP BY cgcloud__Fund_Transaction__r.cgcloud__Fund_Transaction_Header__r.TPM_Product__c, cgcloud__Target_Fund__r.cgcloud__Fund_Template__r.Name, cgcloud__Target_Fund__r.cgcloud__Fund_Template__r.TPM_RTRRoutingFundType__c];
String brand, template, RTRRoutingFundType;
Double amount;
Map<String, Decimal> templateMap;
Map<String, Map<String, Decimal>> cmap = New Map<String, Map<String, Decimal>>();
Map<String, String> RTRRoutingFundTypeMap = New Map<String, String>();
//This For-Loop works on the aggregateResults and allocates all the records to their respective "place" -
//it basically sorts all data into the right maps
For(AggregateResult ar : groupedResults){
brand = String.valueOf(ar.get('brand')); //the last part of this line retrieved the brand id of our query (brand is an alias)
template = String.valueOf(ar.get('template')); //the last part of this line retrieved the template Name of our query (template is an alias)
RTRRoutingFundType = String.valueOf(ar.get('RTRRoutingFundType')); //the last part of this line retrieved the RTR Routing Fund Type of our query (RTRRoutingFundType is an alias)'));
amount = Double.valueOf(ar.get('amount')); //the last part of this line retrieved the aggregated amount of our query (amount is an alias)
templateMap = New Map<String, Decimal>();
If(!cmap.containsKey(brand)){
templateMap.put(template, amount);
cmap.put(brand, templateMap);
}
else {
templateMap = cmap.get(brand);
if(!templateMap.containsKey(template)){
templateMap.put(template, amount);
cmap.put(brand, templateMap);
}
}
if(!RTRRoutingFundTypeMap.containskey(RTRRoutingFundType)){
RTRRoutingFundTypeMap.put(RTRRoutingFundType, template);
}
}
//Once all the results of our query are allocated and sorted, the data needs to be written back to the report
//For each brand in cmap,
For(String brandId : cmap.keyset()){
//and each template for that brand,
For(String templateId : cmap.get(brandId).keyset()){
//Now we loop trough the map that was passed to this method
For(String ffID : fixedFunds.keyset()){
//to check to which KPI the map we're currently in is corrosponding to
If(templateId == RTRRoutingFundTypeMap.get(fixedFunds.get(ffID).Fund_Template__c)){
//If the map we're working on right now has the RDF Fund Template, and one of the records in our map has
//the RDF Fund Template assigned, we write back this KPI to the corrosponding KPI Definition of the Custom Meta Data
output.add(new TPM_RTRReportingWrapper_AMS.OutputRecord(String.valueOf(brandId), String.valueOf(fixedFunds.get(ffID).KPI_Definition__c), 'Total', Double.valueOf(cmap.get(brandId).get(templateId))));
}
}
}
}
return output;
}
global static List<TPM_RTRReportingWrapper_AMS.OutputRecord> getCategory(Date inputDateBegin, Date inputDateEnd, TPM_RTRReportingWrapper_AMS.InputPayload payload, List<TPM_RTRReportingWrapper_AMS.OutputRecord> output, Map<String, TPM_RTRRouting__mdt> fixedFunds){
//This code creates a list based on the map that was passed into the method. In this List only the Fund Template
//Names are stored so that the list can be used in the AggregateResult query. The goal is to only load records that
//are related to the Fund Templates we're looking at.
List<String> FundTemplateTypes = New List<String>();
String SalesOrg;
For(String cmID : fixedFunds.keyset()){
FundTemplateTypes.add(fixedFunds.get(cmID).Fund_Template__c);
if(SalesOrg == Null){
SalesOrg = fixedFunds.get(cmID).Sales_Org__c;
}
}
//Calculation of the current week number
Date todaysDate = date.today();
Date todaysDateInstance = date.newInstance(todaysdate.year(), todaysdate.month(), todaysdate.day());
todaysdate.day();
Integer currentyear = todaysdate.year();
Date startDate = date.newInstance(currentyear, 1,1);
Integer numberDaysDue = startDate.daysBetween(todaysDateInstance);
Integer numberOfWeek = math.mod(Integer.valueOf(math.floor((numberDaysDue))/7),52)+1;
//Support Map for NA_REP_FixedFund_A Calculation
Map<String, Decimal> mPrdAmounts = new Map<String, Decimal>();
//Query
AggregateResult[] groupedResults = [SELECT SUM(cgcloud__Deposits_Approved__c) sumValue,
cgcloud__Anchor_Product__c,
cgcloud__Fund_Template__c,
cgcloud__Fund_Template__r.Name tmplName,
cgcloud__Fund_Template__r.TPM_RTRRoutingFundType__c RTRRoutingFundType
FROM cgcloud__Fund__c
WHERE cgcloud__Fund_Template__r.TPM_RTRRoutingFundType__c IN :FundTemplateTypes
AND cgcloud__Sales_Org__c= :SalesOrg
AND cgcloud__Anchor_Product__c IN :payload.productsfids
AND cgcloud__Anchor_Account__c IN :payload.accountsfids
AND ((cgcloud__Valid_From__c <= :inputDateEnd
AND cgcloud__Valid_From__c >= :inputDateBegin)
OR (cgcloud__Valid_Thru__c <= :inputDateEnd
AND cgcloud__Valid_Thru__c >= :inputDateBegin))
GROUP BY cgcloud__Anchor_Product__c, cgcloud__Fund_Template__c, cgcloud__Fund_Template__r.Name, cgcloud__Fund_Template__r.TPM_RTRRoutingFundType__c];
For (AggregateResult ar : groupedResults){
//Check if current product is not already in the map, if so, add to the map with value 0
If(!mPrdAmounts.containsKey(String.valueOf(ar.get('cgcloud__Anchor_Product__c')))){
mPrdAmounts.put(String.valueOf(ar.get('cgcloud__Anchor_Product__c')), 0);
}
//Add the sum of the aggregateResult to the existing value in map for current product
mPrdAmounts.put(String.valueOf(ar.get('cgcloud__Anchor_Product__c')), mPrdAmounts.get(String.valueOf(ar.get('cgcloud__Anchor_Product__c'))) + Double.valueOf(ar.get('sumValue')));
//Check Fund Template and add KPI
For(String qKPI : fixedFunds.keyset()){
If(String.valueOf(ar.get('RTRRoutingFundType')) == fixedFunds.get(qKPI).Fund_Template__c){
output.add(new TPM_RTRReportingWrapper_AMS.OutputRecord(String.valueOf(ar.get('cgcloud__Anchor_Product__c')), String.valueOf(fixedFunds.get(qKPI).KPI_Definition__c), 'Total', Double.valueOf(ar.get('sumValue'))));
}
}
}
//Add NA_REP_FixedFund_A if required
If(fixedFunds.containsKey('NA_REP_FixedFund_A')){
For(String cdr : mPrdAmounts.keyset()){
output.add(new TPM_RTRReportingWrapper_AMS.OutputRecord(String.valueOf(cdr), 'NA_REP_FixedFund_A', 'Total', Double.valueOf((mPrdAmounts.get(cdr)*numberOfWeek/52))));
}
}
return output;
}
}
```
