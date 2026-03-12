---
title: "json Functions"
domain: bi-dev-guide-wave-templates
topic: json-functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.560Z
estimatedTokens: 296
keywords: [json, Functions, rules, manipulate, runtime, paths, dashboard, link, widget, links, Function, searchPaths, searchValues]
---

# json Functions

> Use json functions in rules to manipulate JSON at runtime. For example, find all the
    JSON paths in a dashboard that have a link widget and update the links at runtime.

# json Functions

Use json functions in rules to manipulate JSON at runtime. For example, find all the JSON paths in a dashboard that have a link widget and update the links at runtime.

## Function Name: searchPaths

Parameters: String jsonPath

Returns: Collection*<String>* See *Description* for detail.

Recursive: Not supported

Description: Searches the current JSON document and returns matching fully qualified JSON paths. If no results are found, returns an empty array. If more than one item is found, returns an array of JSON paths.

## Example

```

```

run on a dashboard returns all JSON paths in the dashboard with link widgets:

```

```

These paths can be used to make runtime updates to the links in the dashboard.

## Function Name: searchValues

Parameters: String jsonPath

Returns: Collection*<Object>* See *Description* for detail.

Recursive: Not supported

Description: Searches the current JSON document and returns values of the matching nodes. If no results are found, returns an empty array. If more than one item is found, returns an array of objects.

## Example

```

```

If this function is called outside of rules execution, an error is thrown.

## Code Examples

```
${json:searchPaths('$.state.widget..[?(@.type in ["link"])]')}
```

```
["$['state']['widgets']['link3']", "$['state']['widgets']['link4']", "$['state']['widgets']['link1']", "$['state']['widgets']['link2']" ].
```

```
${json:searchValues('$.path.to.json.object')}
```
