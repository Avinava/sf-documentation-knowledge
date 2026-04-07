---
title: "RetrieveSalesforceObjects"
domain: mc-programmatic-content
topic: retrievesalesforceobjects
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.757Z
estimatedTokens: 413
keywords: [RetrieveSalesforceObjects, UsageThe, system, leads, Salesforce, account, region, equals, west.The, West, AnnualRevenue, over, million, Updated, Jun, Fun, **Overview**, **Syntax**]
---

> RetrieveSalesforceObjects(1, 2, 3, 4, 5)

UsageThe system returns the first name and last name of all leads in your Salesforce account where the region equals west.The system returns all leads in the West region with AnnualRevenue over 1 million.
  
  
  
    Last Updated: Jun 8, 2021
  

  
    Fun

# RetrieveSalesforceObjects

## **Overview**

Returns a rowset with the selected information from Salesforce objects that match the criteria you specify. This function works only with an account integrated with a Salesforce account. Include multiple sets of ordinals 3, 4, and 5 to retrieve information as necessary. Because this function returns data as a rowset, use Row() and Field() to evaluate the data.

### **Syntax**

RetrieveSalesforceObjects(1, 2, 3, 4, 5)

### Usage

The system returns the first name and last name of all leads in your Salesforce account where the region equals west.

The system returns all leads in the West region with AnnualRevenue over 1 million.

Last Updated: Jun 8, 2021

| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Type of object from which to retrieve information, such as Lead or CustomObject |
| 2 | string | Required | Names of fields from which to retrieve information, including multiple comma-separated values such as FirstName,LastName |
| 3 | string | Required | Names of fields used to match the record for selection as a WHERE clause. Include only one field name for this parameter. |
| 4 | string | Required | Operator used to compare the fifth ordinal to the third ordinal. Valid values include:= (is equal to)(is less than)> (is greater than)!= (is not equal to)= (is less than or equal to)>= (is greater than or equal to) |
| 5 | string | Required | Value to compare to the third ordinal for record selection. You may add additional name, operator, and value parameters for more complex filtering. This function joins these WHERE clauses with AND only. |
