---
title: "Limit Multivalue Fields"
domain: bi-dev-guide-saql
topic: limit-multivalue-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.708Z
estimatedTokens: 1181
keywords: [Limit, Multivalue, cause, poor, performance, behavior, group-by, foreach, statements, possible, write, query, referenced, filters]
---

# Limit Multivalue Fields

> Multivalue fields can cause poor performance. The behavior of these fields is undefined
  for group-by and foreach
  statements. If possible, write your query so that the fields are referenced only in filters.

# Limit Multivalue Fields

Multivalue fields can cause poor performance. The behavior of these fields is undefined for group-by and foreach statements. If possible, write your query so that the fields are referenced only in filters.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

To work with multivalue fields, from Setup, in the Quick Find box, enter Analytics, and then select **Settings**. In Settings, click the checkbox for **Enable indexing of multivalue fields in CRM Analytics**. If you don’t select this preference, the mv\_to\_string() function returns only the first value in the field. See [mv\_to\_string()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_string_mts.htm "Converts multivalue fields to string fields.") for more information.

Even with indexing enabled, multivalue fields in multilevel grouping, such as group by(Year, Region), can cause poor performance.

Here’s FlightsMV, a sample dataset of flight information.

| airline | flight_num | origin | dest | pilot | airplane | flight_classes | flight_attendants | distance | num_passengers |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| southwest | sw301 | lax | sfo | john | boeing 737-700 | business;economy | mark;sara;kate;maria;martin | 1000 | 100 |
| united | u321 | lax | sfo | mark | boeing 737-900 | first;business;economy | jen;sophia;emma;alice | 1000 | 200 |
| alaska | as400 | lax | sfo | tim | airbus A320 | business;economy | mark;leila;brad | 1000 | 100 |
| delta | d301 | lax | sfo | martin | airbus A321 | business;economy | sarah;maria | 1000 | 100 |
| southwest | sw302 | sfo | lax | - |  | business;economy | - | 1000 | 100 |
| united | u322 | sfo | lax | john | boeing 737-700 | first;business;economy | sarah;martin | 1000 | 200 |
| alaska | as401 | sfo | lax | mark | boeing 737-900 | business;economy | maria;mark;sara;kate;martin | 1000 | 100 |
| delta | d302 | sfo | lax | tim | airbus A320 | business;economy | emma;jen;sophia;alice | 1000 | 100 |
| southwest | sw303 | lax | jfk | robert | airbus A321 | business;economy | leila;mark;brad | 1000 | 100 |
| united | u323 | lax | jfk | maria |  | first;business;economy | - | 1000 | 200 |
| alaska | as403 | lax | jfk | mark | boeing 737-700 | business;economy | - | 1000 | 100 |
| delta | d303 | lax | jfk | tim | boeing 737-900 | business;economy | maria;sarah | 1000 | 100 |
| southwest | sw304 | jfk | lax | robert | airbus A320 | business;economy | martin;sarah | 1000 | 100 |
| united | u324 | jfk | lax | - | airbus A321 | first;business;economy | kate;mark;sara;maria;martin | 1000 | 200 |
| alaska | as404 | jfk | lax | john |  | business;economy | sophia;jen;emma;alice | 1000 | 100 |
| delta | d304 | jfk | lax | mark | boeing 737-700 | business;economy | - | 1000 | 100 |
| southwest | sw303 | lax | ord | martin | boeing 737-900 | business;economy | - | 1000 | 100 |
| united | u323 | lax | ord | robert | airbus A320 | first;business;economy |  | 1000 | 200 |
| alaska | as403 | lax | ord | - | airbus A321 | business;economy | brad;mark;leila | 1000 | 100 |
| delta | d303 | lax | ord | john | - | business;economy | sarah;maria | 1000 | 100 |

The flight\_attendants column contains multivalue fields. Let’s write a query to filter on the rows where maria is listed as a flight attendant.

```

```

| airplane | distance | flight_attendants | flight_num | id | num_passengers | origin | pilot |
| --- | --- | --- | --- | --- | --- | --- | --- |
| boeing 737-700 | 1000 | kate | sw301 | 1 | 100 | lax | john |
| airbus A321 | 1000 | maria | d301 | 4 | 100 | lax | martin |
| boeing 737-900 | 1000 | kate | as401 | 7 | 100 | sfo | mark |
| boeing 737-900 | 1000 | maria | d303 | 12 | 100 | lax | tim |
| airbus A321 | 1000 | kate | u324 | 14 | 200 | jfk | - |
| - | 1000 | maria | d303 | 20 | 100 | lax | john |

The results display the rows that include maria. The flight\_attendants field displays only one flight attendant name when the field is multivalue. To return all the names, use the mv\_to\_string() function.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_saql)

#### Warning

When using comparison operators in the filter, use in and not in to return the correct values. Using \== and != returns unexpected values when null handling is enabled. See [Group-by with Null Values](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm#GroupByWithNullValues) for more information.

#### See Also

-   [Multivalue Field](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_multivalue.htm "A multivalue field contains more than one value.")

## Code Examples

```
q = load "FlightsMV";
q = filter q by 'flight_attendants' in ["maria"];
q = foreach q generate 'airplane' as 'airplane', 'distance' as 'distance', 'flight_attendants' as 'flight_attendants', 'flight_num' as 'flight_num', 'id' as 'id', 'num_passengers' as 'num_passengers', 'origin' as 'origin', 'pilot' as 'pilot';
```

```
q = load "FlightsMV";
q = filter q by 'flight_attendants' in ["maria"];
q = foreach q generate 'airplane' as 'airplane', 'distance' as 'distance', mv_to_string('flight_attendants') as 'flight_attendants', 'flight_num' as 'flight_num', 'id' as 'id', 'num_passengers' as 'num_passengers', 'origin' as 'origin', 'pilot' as 'pilot';
```

## Related Topics

- mv_to_string() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_string_mts.htm)
- Group-by with Null
    Values (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm)
- Multivalue Field (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_multivalue.htm)
