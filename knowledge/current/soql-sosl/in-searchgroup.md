---
title: "IN  SearchGroup"
domain: soql-sosl
topic: in-searchgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.872Z
estimatedTokens: 669
keywords: [SearchGroup, SOSL, query, specify, text, search, clause, scope, email, phone, sidebar, Settings, Examples, Clauses]
---

# IN  SearchGroup

> In an SOSL query, you can specify which types of text fields to search for using the IN
   SearchGroup optional clause. The SearchGroup defines the scope of the search. For
  example, you can search for name, email, phone, sidebar, or all fields.

# IN SearchGroup

In an SOSL query, you can specify which types of text fields to search for using the IN *SearchGroup* optional clause. The *SearchGroup* defines the scope of the search. For example, you can search for name, email, phone, sidebar, or all fields.

The following table lists the valid SearchGroup values. If you don’t specify a value, the default behavior is to search all text fields in searchable objects. Numeric fields aren’t searchable.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

This clause doesn’t apply to articles, documents, feed comments, feed items, files, products, and solutions. If these objects are specified in the RETURNING clause, the search is not limited to specific fields, and all fields are searched.

## Valid SearchGroup Settings

| SearchGroup | Description |
| --- | --- |
| ALL FIELDS | Search all searchable fields. If the IN clause is unspecified, then ALL FIELDS is the default setting. |
| EMAIL FIELDS | Search only email fields. |
| NAME FIELDS | Search only name fields for standard objects.In addition to the Name field, Salesforce searches the following fields when using IN NAME FIELDS with these standard objects:Account: Website, Site, NameLocalAsset: SerialNumberCase: SuppliedName, SuppliedCompany, SubjectContact: AssistantName, FirstNameLocal, LastNameLocal, AccountNameEvent: SubjectLead: Company, CompanyLocal, FirstNameLocal, LastNameLocalNote: TitlePermissionSet: LabelReport: DescriptionTagDefinition: NormNameTask: SubjectUser: CommunityNicknameIn custom objects, fields that are defined as “Name Field” are searched. In standard and custom objects, name fields have the nameField property set to true. (See the Field array of the fields parameter of the DescribeSObjectResult for more information.) |
| PHONE FIELDS | Search only phone number fields. |
| SIDEBAR FIELDS | Search for valid records as listed in the Sidebar dropdown list. Unlike search in the application, the asterisk (*) wildcard isn’t appended to the end of a search string. |

The IN clause is optional, but it limits the search scope, making the search more efficient. For example, to search only for an email address, specify IN EMAIL FIELDS.

## Examples of IN Clauses

| Search Type | Examples |
| --- | --- |
| No search group | FIND {MyProspect} |
| ALL FIELDS | FIND {MyProspect} IN ALL FIELDS |
| EMAIL FIELDS | FIND {mylogin@mycompany.com} IN EMAIL FIELDS |
| NAME FIELDS | FIND {MyProspect} IN NAME FIELDS |
| PHONE FIELDS | FIND {MyProspect} IN PHONE FIELDS |
| SIDEBAR FIELDS | FIND {MyProspect} IN SIDEBAR FIELDS |
| Invalid search | FIND {MyProspect} IN Accounts |
