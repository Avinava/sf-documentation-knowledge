---
title: "Extensions"
domain: federated-search
topic: extensions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.716Z
estimatedTokens: 1292
keywords: [Extensions, API, follows, OpenSearch, specification, Salesforce, declared, support, Salesforce-specific, search, features, Federated, http, salesforce.com, federatedsearch]
---

# Extensions

> This API follows the OpenSearch specification with more Salesforce extensions declared.
  The Salesforce extensions support Salesforce-specific search features, and use the Salesforce
  Federated Search namespace, http://salesforce.com/2016/federatedsearch/1.0, denoted by the sfdc
  prefix in attribute names.

# Extensions

This API follows the OpenSearch specification with more Salesforce extensions declared. The Salesforce extensions support Salesforce-specific search features, and use the Salesforce Federated Search namespace, http://salesforce.com/2016/federatedsearch/1.0, denoted by the sfdc prefix in attribute names.

| Attribute | Description |
| --- | --- |
| <sfdc:Version> | Optional. Zero or 1 occurrence. Declares that the OpenSearch description and the external search provider are compliant to a specific Salesforce Federated Search API version. First version is version 1. If not present, it is considered version 1. |
| <sfdc:RecordTypes> | Optional. If not present, the search results are not typed and only the standard OpenSearch fields are supported. Zero or more occurrences. Declares the complete list of record types supported by the external search provider. Each record type is declared in an <sfdc:RecordType> child element with zero or more occurrences and a case-sensitive name attribute.The attribute name must be unique and can contain only ASCII alphanumeric characters, spaces (“ ”, U+0020), or hyphens (“-”, U+002D). The maximum length is 80 characters. All RecordType names must be distinct.For example, the following declares that the external search provider declares that the external search provider categorizes the records into blog post to Blog Post, Medical Record, or Supervisor. Any distinct value can be declared. These record type values are meant to be passed to the extended parameter {sfdc:recordType} of the search request URL template.<sfdc:RecordTypes>      <sfdc:RecordType name=”Blog Post”/>      <sfdc:RecordType name=”Medical Record”/>      <sfdc:RecordType name=”Supervisor”/> </sfdc:RecordTypes> |
| <sfdc:Field> | Optional. Zero or more occurrences. Declares more custom fields that can be returned as elements of the search results for the record type. These custom fields can have any distinct name and are in addition to the common fields. When no custom field is declared, search results are expected to contain only common fields.Child element of <sfdc:RecordType>, with a case-sensitive name, type and sortable attributes:name—Required. Declares the name of the field. Must contain only ASCII alphanumeric characters, spaces (“ ”, U+0020), or hyphens (“-”,U+002D). The maximum length is 40 characters. All Field names must be distinct for a given record type. Custom fields must not have the same name as common fields for Atom (title, id, link, summary, content, updated, published) and RSS (title, guid, pubDate, link, description). Fields with duplicate names are ignored. However, it is possible to declare a field with a common field name. This action doesn’t add a custom field. Rather, it defines whether it is sortable for the parent record type. The type is ignored for a common field.type—Required. Declares the field type. The attribute value can be string, longstring, number, boolean, percent, currency, email, url, phone, or date. The phone format follows the E.123 standard. For example: +31 42 1123 4567. The date format follows the Atom date format, 2003-12-13T18:30:02.25+01:00, or RSS date format, Sat, 07 Sep 2002 0:00:01 GMT.sortable—Optional. Declares whether the field can be used to sort search results. The attribute value can be true or false. The default is true, or sortable. If the field is sortable, its name can be passed as the value of the URL template parameter {sfdc:sortField}.For example, the following declares that results of record type Blog Post can have the additional custom fields Author, Agent, and Relevant Tags, which all type string, and all are sortable. It also declares that the standard Atom field link is not sortable for Blog Post.<sfdc:RecordTypes>     <sfdc:RecordType name=”Blog Post”>       <sfdc:Field name=”Author” type=”string” sortable=”true”/>       <sfdc:Field name=”Agent” type=”string” sortable=”true”/>       <sfdc:Field name=”Relevant Tags” type=”string” sortable=”true”/>       <sfdc:Field name=”link” type=”url” sortable=”false”/>      </sfdc:RecordType> </sfdc:RecordTypes> |
| <sfdc:maxCount> | Optional. Integer value greater than or equal to 1. Declares that the external search provider serves up to a specified number of results per page. It defines the maximum value for the count parameter of the URL template. The federated search connector doesn’t ask for more results than this limit per page. By default, if this attribute is absent, the count parameter has no declared limit. In all cases, the value of the count parameter might not be honored by the external search provider, as stated in the OpenSearch specification. It’s a parameter of the <Url> element. |
| <sfdc:maxTotalResult> | Optional. Integer value greater than or equal to 1. Declares that the external search provider serves up to a specified number of results per search. It defines the maximum value for the (startIndex + count) parameters of the URL template. The federated search connector doesn’t ask for more results than this limit per search. By default, if this attribute is absent, there is no declared limit. It’s a parameter of the <Url> element. |

## Code Examples

```
<sfdc:RecordTypes>
     <sfdc:RecordType name=”Blog Post”/>
     <sfdc:RecordType name=”Medical Record”/>
     <sfdc:RecordType name=”Supervisor”/>
</sfdc:RecordTypes>
```

```
<sfdc:RecordTypes>
    <sfdc:RecordType name=”Blog Post”>
      <sfdc:Field name=”Author” type=”string” sortable=”true”/>
      <sfdc:Field name=”Agent” type=”string” sortable=”true”/>
      <sfdc:Field name=”Relevant Tags” type=”string” sortable=”true”/>
      <sfdc:Field name=”link” type=”url” sortable=”false”/>
     </sfdc:RecordType>
</sfdc:RecordTypes>
```
