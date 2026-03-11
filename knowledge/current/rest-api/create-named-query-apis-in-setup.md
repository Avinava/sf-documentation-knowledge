---
title: "Create Named Query APIs in Setup"
domain: rest-api
topic: create-named-query-apis-in-setup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.477Z
keywords: [Create, Named, Query, APIs, Setup]
---

# Create Named Query APIs in Setup

# Create Named Query APIs in Setup

In Setup, you can create a Named Query API, validate its Salesforce Object Query Language (SOQL) query, and get the resulting API endpoint.

  
| User Permissions Needed |
| --- |
| To work with Named Query API: | Allows users to create, read, update and delete Named Query API records |

1.  From Setup, in the Quick Find box, enter Named Query API, and then select **Named Query API**.
2.  Click **New Named Query API**.
3.  In **Label**, give your Named Query API a descriptive name.
4.  Accept the suggested API name or enter a different API name.
    
    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_rest)
    
    #### Important
    
    The API name must begin with a letter. It can contain only alpha-numeric characters.
    
5.  Enter the API version. For example, 65.0.
6.  Enter a description for the Named Query API.
    
    This description will be used in the OpenAPI document. Provide enough detail to make the Named Query API's purpose clear. If you intend to use the Named Query API as an agent action, AI agents will use it to understand when it’s optimal to select this action.
    
    ![Screenshot of an example Named Query API creation screen](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fnamed_query_apis_create.png&folder=api_rest)
    
7.  Enter a SOQL query that’s valid for the Named Query API.
    
    You can define filter conditions for the query by specifying parameters in a WHERE clause. For example, in SELECT Name FROM Account WHERE name = :name the parameter name = :name specifies a filter condition based on account names.
    
    To control the amount of returned data, [include a LIMIT clause](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_limit.htm).
    
    The API endpoint is automatically created and displayed. For example, ../services/data/v65.0/named/query/mybigquery?name=<name>.
    
8.  Click **Validate** to validate your SOQL.
9.  If the Named Query API creator throws an error, correct the SOQL query and click **Validate** again.
    
    See the information on supported SOQL syntax later on this page.
    
10.  Enter a description for any parameters that you created.
     
     If you intend to use the Named Query API as an agent action, provide enough detail for AI agents to understand how to give the parameter with a valid value.
     
11.  Click **Save**.

Named Query API execution logic supports the use of parameters only within certain SOQL language features. In a WHERE clause, use parameters in simple expressions such as name = :name, and with the logical operators AND, OR, NOT. You can also use parameters within parentheses. If a LIMIT clause in the top-level query has a colon parameter, it must be named maxrecords. For example, the clause SELECT Name FROM Account LIMIT :maxrecords is supported.

Parameters aren't supported within these SOQL language features. These features can be used in a Named Query API as long as they don’t contain a parameter reference.

-   WHERE clauses:
    -   Calculated expressions
    -   DISTANCE expressions
    -   INCLUDES expressions
    -   IN expressions
    -   IN colon expressions
-   SELECT DISTANCE(...) expressions
-   OFFSET clauses
-   WITH clauses