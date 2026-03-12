---
title: "Examples"
domain: federated-search
topic: examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.710Z
estimatedTokens: 197
keywords: [Examples, provided, uses, search, blog, posts, medical, records, basic, understanding, OpenSearch, specification, Atom, Results, RSS]
---

# Examples

> The provided example uses a search for blog posts and medical records. A basic
    understanding of the OpenSearch specification is required.

# Examples

The provided example uses a search for blog posts and medical records. A basic understanding of the OpenSearch specification is required.

The OpenSearch protocol is composed of two parts:

-   The OpenSearch XML description, which describes how to search the external search engine and which features it supports. The description is provided by the search engine itself at a public URL. The main element of the description is the <Url>, in which the template attribute provides the URL to call and the supported parameters with semantics.
-   The search results returned by the external search engine, in Atom or RSS format, as the response of the HTTP search request.

## OpenSearch Description

```

```

## Atom Search Results

```

```

## RSS Search Results

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:sfdc="http://salesforce.com/2016/federatedsearch/1.0">
  <ShortName>Document Search</ShortName>
  <Contact>support@example.com</Contact>
  <Url type="application/atom+xml" sfdc:maxTotalResults="500" 
template="https://example.com/search?q={searchTerms}&amp;
byId={sfdc:searchById?}&amp;type={sfdc:recordType}&amp;
user={sfdc:userEmail}&amp;start={startIndex?}&amp;num={count?}&amp;
sf={sfdc:sortField?}&amp;sd={sfdc:sortDirection?}"/>
  <sfdc:RecordTypes>
    <sfdc:RecordType name="Blog Post">
      <sfdc:Field name="Author" type="string" sortable="true"/>
      <sfdc:Field name="Expiration date" type="date" sortable="true"/>
    </sfdc:RecordType>
    <sfdc:RecordType name="Medical Record">
      <sfdc:Field name="Main author" type="string" sortable="true"/>
      <sfdc:Field name="Reviewed" type="boolean" sortable="false"/>
    </sfdc:RecordType>
  </sfdc:RecordTypes>
  <Attribution>
    Copyright 2016, All Rights Reserved
  </Attribution>
  <InputEncoding>UTF-8</InputEncoding>
  <OutputEncoding>UTF-8</OutputEncoding>
  <sfdc:Version>1</sfdc:Version>
</OpenSearchDescription>
```

```
<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns="http://www.w3.org/2005/Atom"
xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/"
xmlns:sfdc="http://salesforce.com/2016/federatedsearch/1.0">
  <title>Example Search: test</title>
  <link>https://example.com</link>
  <updated>2016-11-21T10:19:37.644Z</updated>
  <author>
    <name>Example</name>
  </author>
  <id>urn:uuid:6b63a81d-0a77-48e3-8a74-5d5f34b9da98</id>
  <opensearch:totalResults>10</opensearch:totalResults>
  <opensearch:startIndex>0</opensearch:startIndex>
  <opensearch:itemsPerPage>2</opensearch:itemsPerPage>
  <opensearch:Query role="request" searchTerms="test" startIndex="0" count="2"/>
  <entry>
    <title>Unit testing framework</title>
    <id>https://example.com/id:GhITRcjf5go_JLero45</id>
    <link href="https://www.example.com/library/unittest.html"/>
    <sfdc:link>/apex/ExampleApp_view?id=GhITRcjf5go_JLero45&amp;q=test</sfdc:link>
    <sfdc:recordType>Blog Post</sfdc:recordType>
    <summary>The unit testing framework is ...</summary>
    <updated>2016-07-13T15:24:57.000Z</updated>
    <published>2016-07-13T15:24:57.000Z</published>
    <sfdc:Author>Maker</sfdc:Author>
    <sfdc:Expiration_date>2017-07-13T15:24:57.000Z</sfdc:Expiration_date>
  </entry>
  <entry>
    <title>Cancer tests | Cancer Research</title>
    <id>https://example.com/id:UCAuUUnT6oDeKwE6v1</id>
    <link href="https://www.example.com/library/cancertest.html"/>
    <sfdc:link>/apex/ExampleApp_view?id=UCAuUUnT6oDeKwE6v1&amp;q=test</sfdc:link>
    <sfdc:recordType>Medical Record</sfdc:recordType>
    <summary>A short overview about current cancer research ...</summary>
    <updated>2012-08-15T15:20:54.000Z</updated>
    <published>2012-08-15T15:20:54.000Z</published>
    <sfdc:Main_author>Maker</sfdc:Main_author>
    <sfdc:Reviewed>true</sfdc:Reviewed>
  </entry>
</feed>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/"
xmlns:sfdc="http://salesforce.com/2016/federatedsearch/1.0">
  <channel>
    <title>Example Search: test</title>
    <link>https://example.com</link>
    <description>Search results for "test" at Example.com</description>
    <opensearch:totalResults>10</opensearch:totalResults>
    <opensearch:startIndex>0</opensearch:startIndex>
    <opensearch:itemsPerPage>2</opensearch:itemsPerPage>
    <item>
      <title>Unit testing framework</title>
      <guid>https://example.com/id:GhITRcjf5go_JLero45</guid>
      <link>https://www.example.com/library/unittest.html</link>
      <description>The unit testing framework is ...</description>
      <pubDate>Sat, 07 Sep 2002 0:00:01 GMT</pubDate>
      <sfdc:link>/apex/ExampleApp_view?id=GhITRcjf5go_JLero45&amp;q=test</sfdc:link>
      <sfdc:recordType>Blog Post</sfdc:recordType>
      <sfdc:Author>Maker</sfdc:Author>
      <sfdc:Expiration_date>2017-07-13T15:24:57.000Z</sfdc:Expiration_date>
    </item>
    <item>
      <title>Cancer tests | Cancer Research</title>
      <guid>https://example.com/id:UCAuUUnT6oDeKwE6v1</guid>
      <link>https://www.example.com/library/cancertest.html</link>
      <description>A short overview about current cancer research ...</description>
      <pubDate>Sat, 07 Sep 2002 0:00:01 GMT</pubDate>
      <sfdc:link>/apex/ExampleApp_view?id=UCAuUUnT6oDeKwE6v1&amp;q=test</sfdc:link>
      <sfdc:recordType>Medical Record</sfdc:recordType>
      <sfdc:Main_author>Maker</sfdc:Main_author>
      <sfdc:Reviewed>true</sfdc:Reviewed>
    </item>
  </channel>
</rss>
```
