---
title: "getCompany(companyId)"
domain: apex-reference
topic: getcompanycompanyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.070Z
keywords: [getCompany, companyId, Get, company, record., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCompany(companyId)

> Get a company record.

### getCompany(companyId)

Get a company record.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudCompany getCompany(String companyId)

#### Parameters

companyId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a company in the Data.com database.

#### Return Value

Type: [ConnectApi.DatacloudCompany](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_company.htm#apex_connectapi_output_datacloud_company "Information about a Data.com company.")