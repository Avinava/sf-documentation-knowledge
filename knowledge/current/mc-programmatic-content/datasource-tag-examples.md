---
title: "Datasource Tag Examples"
domain: mc-programmatic-content
topic: datasource-tag-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.979Z
estimatedTokens: 365
keywords: [Datasource, Tag, Examples, loads, AMPscript, variable, collection, objects, Server-Side, JavaScript, JSON, Data, Filter, Order, Nested]
---

# Datasource Tag Examples

> This example loads information from an AMPscript variable with collection of objects read by a Datasource tag:

# Datasource Tag Examples

## Datasource AMPscript Examples

This example loads information from an AMPscript variable with collection of objects read by a Datasource tag:

This example produces this information:

```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
```
```
Email Address: john@example.com
Region: West
State: California
City: San Francisco
```

## Datasource Server-Side JavaScript Example

This example loads JSON data from a server-side JavaScript variable using a Datasource tag:

The example produces this information:

```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
```

## JSON Data Filter and Order Example

This example loads JSON data from a data extension using a Datasource tag, then filters and orders that data:

This example produces this information:

```
Email Address: john@example.com
Region: West
State: California
City: San Francisco
```
```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
```

## Nested Datasource Example

This example takes information from a nested JSON using the Datasource tag:

The example produces this information:

```
Email Address: john@example.com
Region: West
State: California
City: San Francisco
   Home: 555-555-1111
   Cell: 555-555-2222
```
```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
   Home: 555-555-4444
   Cell: 555-555-5555
```
