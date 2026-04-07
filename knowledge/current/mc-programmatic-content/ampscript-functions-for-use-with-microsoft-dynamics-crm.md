---
title: "AMPscript Functions for use with Microsoft Dynamics CRM"
domain: mc-programmatic-content
topic: ampscript-functions-for-use-with-microsoft-dynamics-crm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.185Z
estimatedTokens: 991
keywords: [Lookup, AMPscript, Functions, Microsoft, Dynamics, CRM, conjunction, Smart, Capture, landing, pages, modify, records, Salesforce, Marketing, Cloud, integration, system, Party]
---

> Use these AMPscript functions in conjunction with Smart Capture and landing pages to modify records in the Salesforce Marketing Cloud integration with the Microsoft Dynamics CRM system.

# AMPscript Functions for use with Microsoft Dynamics CRM

Use these AMPscript functions in conjunction with Smart Capture and landing pages to modify records in the Salesforce Marketing Cloud integration with the Microsoft Dynamics CRM system.

## Smart Capture Null Value Return

This example demonstrates how AMPscript functions for Microsoft Dynamics CRM returns values of columns collected on Smart Capture pages when returning null values.

```
<html>
<head>
<title>Test Page for Fetch XML</title>
</head>

<body>
%%[
Set @accountId = CreateMscrmRecord("account", 1, "name", "SC Test")
Set @contactId = CreateMscrmRecord("contact", 10, "firstname", "Sally", "lastname", "Jo-Bob", "parentcustomerid", CONCAT(@accountId, "|account"), "birthdate", "12/3/1981", "accountrolecode", "3", "creditlimit", "12000.55", "donotemail", "true", "numberofchildren", "4", "exchangerate", "1.115", "address1_longitude", "150.34545")
]%%

%%[
Set @contacts = RetrieveMscrmRecordsFetchXML("<fetch mapping='logical' count='50' version='1.0'><entity name='contact' ><attribute name='firstname' /><attribute name='lastname' /><attribute name='jobtitle' /><attribute name='parentcustomerid' /><attribute name='donotemail' /><attribute name='numberofchildren' /><attribute name='birthdate' /><attribute name='exchangerate' /><attribute name='address1_longitude' /><attribute name='accountrolecode' /><attribute name='createdby' /><attribute name='creditlimit' /><attribute name='accountrolecode' /><filter><condition attribute='firstname' operator='eq' value='Sally' /></filter><link-entity name='account' from='accountid' to='parentcustomerid' ><attribute name='name' /></link-entity></entity></fetch>")]%%

            Account Count: %%= RowCount(@accounts) =%%
            Contact Count: %%= RowCount(@contacts) =%%

<p>Contacts:</p><br><br>
%%[

for @counter = 1 to rowcount(@contacts) do

set @firstname = field(row(@contacts,@counter),'firstname')
set @lastname = field(row(@contacts,@counter),'lastname')
set @name = field(row(@contacts,@counter),'account1.name')
set @acctRoleCode= field(row(@contacts,@counter),'accountrolecode')
set @doNotEmail= field(row(@contacts,@counter),'donotemail')
set @createdBy= field(row(@contacts,@counter),'createdby')
set @creditLimit= field(row(@contacts,@counter),'creditlimit', 1)
set @jobTitle= field(row(@contacts,@counter),'jobtitle', 0)

]%%

<p>First: &nbsp; &nbsp; %%=v(@firstname)=%% </p>
<p>Last: &nbsp; &nbsp; %%=v(@lastname)=%% </p>
<p>Linked Entity (Account) Name: &nbsp; &nbsp; %%=v(@name)=%% </p>
<p>Account Role Code: &nbsp; &nbsp; %%=v(@acctRoleCode)=%% </p>
<p>Do Not Email: &nbsp; &nbsp; %%=v(@doNotEmail)=%% </p>
<p>Created By: &nbsp; &nbsp; %%=v(@createdBy)=%% </p>
<p>Credit Limit: &nbsp; &nbsp; %%=v(@creditLimit)=%% </p>
<p>Job Title: &nbsp; &nbsp; %%=v(@jobTitle)=%% </p> <br><br>

%%[next @counter ]%%
</body><custom name="opencounter" type="tracking"></html>
```

## Lookup

If you can relate the specified attribute to multiple Dynamics CRM entities, you must specify the type of entity the attribute belongs to by adding this string, replacing lookup with the entity:

```
|lookup
```

For example, you can relate the customerid field to an account or contact. If you relate customerid to an account, specify this by adding |account at the end of the attribute.

## Party List

By including |partyentityname and substituting your name for the text following the pipe at the end of a series of fields and values, you can create a record on the party list with those fields and values. This process creates only one record, but you can populate any values (except for another party list). Use this attribute specifically for campaign responses, and the party list maps directly to the customer field on a campaign response.

```
"field,value,field2,value2"|examplepartylist
```

This text creates a record on example partylist with two fields, field and field 2, assigned values of value and value2, respectively.
