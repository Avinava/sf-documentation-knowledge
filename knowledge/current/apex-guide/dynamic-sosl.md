---
title: "Dynamic SOSL"
domain: apex-guide
topic: dynamic-sosl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.329Z
estimatedTokens: 837
keywords: [Dynamic, SOSL, refers, creation, run, time, Apex, code., enables, create, flexible, applications., example, search, based, input, end, user, update, records]
---

# Dynamic SOSL

> Dynamic SOSL refers to the creation of a SOSL string at run time with Apex
            code. Dynamic SOSL enables you to create more flexible applications. For example, you
            can create a search based on input from an end user, or update records with varying
            field names.

# Dynamic SOSL

Dynamic SOSL refers to the creation of a SOSL string at run time with Apex code. Dynamic SOSL enables you to create more flexible applications. For example, you can create a search based on input from an end user, or update records with varying field names.

To create a dynamic SOSL query at run time, use the search query method. For example:

```

```

The following example exercises a simple SOSL query string.

```

```

Dynamic SOSL statements evaluate to a list of lists of sObjects, where each list contains the search results for a particular sObject type. The result lists are always returned in the same order as they were specified in the dynamic SOSL query. From the example above, the results from Account are first, then Contact, then Lead.

The search query method can be used wherever an inline SOSL query can be used, such as in regular assignment statements and for loops. The results are processed in much the same way as static SOSL queries are processed.

Dynamic SOSL queries have the same governor limits as static queries. For more information on governor limits, see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

For a full description of SOSL query syntax, see [Salesforce Object Search Language (SOSL)](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl.htm "html (New Window)") in the SOQL and SOSL Reference.

## Use Dynamic SOSL to Return Snippets

To provide more context for records in search results, use the SOSL WITH SNIPPET clause. Snippets make it easier to identify the content you’re looking for. For information about how snippets are generated, see [WITH SNIPPET](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_with_snippet.htm "HTML (New Window)") in the *SOQL and SOSL Reference*.

To use the SOSL WITH SNIPPET clause in a dynamic SOSL query at run time, use the Search.find method.

```

```

This example exercises a simple SOSL query string that includes a WITH SNIPPET clause. The example calls System.debug() to print the returned titles and snippets. Your code would display the titles and snippets in a Web page.

```

```

## SOSL Injection

SOSL injection is a technique by which a user causes your application to execute database methods you did not intend by passing SOSL statements into your code. A SOSL injection can occur in Apex code whenever your application relies on end-user input to construct a dynamic SOSL statement and you do not handle the input properly.

To prevent SOSL injection, use the escapeSingleQuotes method. This method adds the escape character (\\) to all single quotation marks in a string that is passed in from a user. The method ensures that all single quotation marks are treated as enclosing strings, instead of database commands.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm "Dynamic SOQL")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_dml.htm "Dynamic DML")

## Code Examples

```apex
List<List <sObject>> myQuery = search.query(SOSL_search_string);
```

```apex
String searchquery='FIND\'Edge*\'IN ALL FIELDS RETURNING Account(id,name),Contact, Lead'; 
List<List<SObject>>searchList=search.query(searchquery);
```

```
Search.SearchResults searchResults = Search.find(SOSL_search_string);
```

```apex
Search.SearchResults searchResults = Search.find('FIND \'test\' IN ALL FIELDS RETURNING 
KnowledgeArticleVersion(id, title WHERE PublishStatus = \'Online\' AND Language = \'en_US\') WITH SNIPPET (target_length=120)');
 
List<Search.SearchResult> articlelist = searchResults.get('KnowledgeArticleVersion');

for (Search.SearchResult searchResult : articleList) { 
	KnowledgeArticleVersion article = (KnowledgeArticleVersion) searchResult.getSObject(); 
	System.debug(article.Title); 
	System.debug(searchResult.getSnippet()); 
}
```

## Related Topics

- Execution
                Governors and Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_dml.htm)
