---
title: "ReportTypeColumnCategory Class"
domain: apex-reference
topic: reporttypecolumncategory-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.006Z
keywords: [ReportTypeColumnCategory, Class, Returns, localized, display, name, section, report, type, under, which, fields, organized., example, Accounts, Contacts, custom, Account, General, contains]
---

# ReportTypeColumnCategory Class

> Returns the localized display name of a section in the
report type under which fields are organized. For example, in an Accounts
with Contacts custom report type, Account
General is the display name of the section that contains
fields on general account information.

### getLabel()

Returns the localized display name of a section in the report type under which fields are organized. For example, in an Accounts with Contacts custom report type, Account General is the display name of the section that contains fields on general account information.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")