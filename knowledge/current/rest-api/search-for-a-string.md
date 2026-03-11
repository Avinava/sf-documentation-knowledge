---
title: "Search for a String"
domain: rest-api
topic: search-for-a-string
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.977Z
keywords: [Search, String, Example, SOSL, GET, Method, Parameterized, Note, POST, See]
---

# Search for a String

# Search for a String

Use the Search resource to execute a SOSL search or use the Parameterized Search resource to execute a simple RESTful search without SOSL.

## Example SOSL Search Using the GET Method

The following example executes a SOSL search for Acme. The search string in this example must be URL-encoded.

Example usage

```

```

Example request body

None required

Example response body

```

```

## Example Parameterized Search Using the GET Method

The following example executes a parameterized search for Acme. The search string in this example must be URL-encoded.

Example usages

**Global search for all results containing *Acme***

```

```

**Account search for results containing *Acme*, returning the id and name fields**

```

```

Example request body

None required

Example response body

```

```

Example response body with metadata parameter

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The metadata parameter is only returned if the request specified metadata=LABELS.

```

```

## Example Parameterized Search Using the POST Method

Execute a parameterized search using the POST method to access all search features available.

Example usage

```

```

Example request body

None required

Example JSON file

```

```

Example response body

```

```

#### See Also

-   [Search](atlas.en-us.api_rest.meta/api_rest/resources_search.htm "Executes the specified SOSL search. The search string must be URL-encoded.")
    
-   [Parameterized Search](atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm "Executes a simple REST search using parameters instead of a SOSL clause. Indicate parameters in the URI with the GET method. Or, use the POST method to create complex searches in a request body.")