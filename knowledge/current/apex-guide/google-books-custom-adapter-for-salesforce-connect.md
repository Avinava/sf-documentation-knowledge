---
title: "Google Books™ Custom Adapter for Salesforce Connect"
domain: apex-guide
topic: google-books-custom-adapter-for-salesforce-connect
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:32.939Z
estimatedTokens: 247
keywords: [Google, Books™, Custom, Adapter, Salesforce, Connect, example, illustrates, how, work, around, requirements, limits, external, system’s, APIs, case, Books, API, Family.]
---

# Google Books™ Custom Adapter for Salesforce Connect

> This example illustrates how to work around the requirements and limits of an
        external system’s APIs: in this case, the Google Books API Family.

# Google Books™ Custom Adapter for Salesforce Connect

This example illustrates how to work around the requirements and limits of an external system’s APIs: in this case, the Google Books API Family.

To integrate with the Google Books™ service, we set up Salesforce Connect as follows.

-   The Google Books API allows a maximum of 40 returned results, so we develop our custom adapter to handle result sets with more than 40 rows.
-   The Google Books API can sort only by search relevance and publish dates, so we develop our custom adapter to disable sorting on columns.
-   To support OAuth, we set up our authentication settings in Salesforce so that the requested scope of permissions for access tokens includes https://www.googleapis.com/auth/books.
-   To allow Apex callouts, we define these remote sites in Salesforce:
    -   https://www.googleapis.com
    -   https://books.google.com

## BooksDataSourceConnection Class

```

```

## BooksDataSourceProvider Class

```

```

## Code Examples

```apex
/**
 *   Extends the DataSource.Connection class to enable
 *   Salesforce to sync the external system metadata
 *   schema and to handle queries and searches of the external
 *   data.
 **/
global class BooksDataSourceConnection extends
    DataSource.Connection {
 
    private DataSource.ConnectionParams connectionInfo;

    // Constructor for BooksDataSourceConnection.
    global BooksDataSourceConnection(DataSource.ConnectionParams
                                    connectionInfo) {
        this.connectionInfo = connectionInfo;
    }

    /**
     *   Called when an external object needs to get a list of 
     *   schema from the external data source, for example when 
     *   the administrator clicks “Validate and Sync” in the 
     *   user interface for the external data source.   
     **/
    override global List<DataSource.Table> sync() {
        List<DataSource.Table> tables =
            new List<DataSource.Table>();
        List<DataSource.Column> columns;
        columns = new List<DataSource.Column>();
        columns.add(getColumn('title'));
        columns.add(getColumn('description'));
        columns.add(getColumn('publishedDate'));
        columns.add(getColumn('publisher'));
        columns.add(DataSource.Column.url('DisplayUrl'));
        columns.add(DataSource.Column.text('ExternalId', 255));
        tables.add(DataSource.Table.get('googleBooks', 'title',
                                        columns));
        return tables;
    }

    /**
     *   Google Books API v1 doesn't support sorting,
     *   so we create a column with sortable = false.
     **/
    private DataSource.Column getColumn(String columnName) {
        DataSource.Column column = DataSource.Column.text(columnName,
                                                        255);
        column.sortable = false;
        return column;
    }

    /**
     *   Called to query and get results from the external
     *   system for SOQL queries, list views, and detail pages
     *   for an external object that's associated with the
     *   external data source.
     *
     *   The QueryContext argument represents the query to run
     *   against a table in the external system.
     *
     *   Returns a list of rows as the query results.
     **/
    override global DataSource.TableResult query(
                    DataSource.QueryContext contexts) {
        DataSource.Filter filter = contexts.tableSelection.filter;
        String url;
        if (contexts.tableSelection.columnsSelected.size() == 1 &&
        contexts.tableSelection.columnsSelected.get(0).aggregation ==
            DataSource.QueryAggregation.COUNT) {
            return getCount(contexts);
        }

        if (filter != null) {
            String thisColumnName = filter.columnName;
            if (thisColumnName != null &&
                thisColumnName.equals('ExternalId')) {
                url = 'https://www.googleapis.com/books/v1/' +
                    'volumes?q=' + filter.columnValue +
                    '&maxResults=1&id=' + filter.columnValue;
                return DataSource.TableResult.get(true, null,
                            contexts.tableSelection.tableSelected,
                            getData(url));
            }
            else {
                url = 'https://www.googleapis.com/books/' +
                    'v1/volumes?q=' + filter.columnValue +
                    '&id=' + filter.columnValue +
                    '&maxResults=40' + '&startIndex=';
            }
        } else {
            url = 'https://www.googleapis.com/books/v1/' +
                'volumes?q=america&' + '&maxResults=40' +
                '&startIndex=';
        }
        /**
         *   Google Books API v1 supports maxResults of 40
         *   so we handle pagination explicitly in the else statement
         *   when we handle more than 40 records per query.
         **/
        if (contexts.maxResults < 40) {
            return DataSource.TableResult.get(true, null,
                    contexts.tableSelection.tableSelected,
                    getData(url + contexts.offset));
        }
        else {
            return fetchData(contexts, url);
        }
     }

    /**
     *   Helper method to fetch results when maxResults is 
     *   greater than 40 (the max value for maxResults supported 
     *   by Google Books API v1).
     **/
    private DataSource.TableResult fetchData(
        DataSource.QueryContext contexts, String url) {
        Integer fetchSlot = (contexts.maxResults / 40) + 1;
        List<Map<String, Object>> data =
            new List<Map<String, Object>>();
        Integer startIndex = contexts.offset;
        for(Integer count = 0; count < fetchSlot; count++) {
            data.addAll(getData(url + startIndex));
            if(count == 0)
                contexts.offset = 41;
            else
                contexts.offset += 40;
        }
 
        return DataSource.TableResult.get(true, null,
                        contexts.tableSelection.tableSelected, data);
    }

    /**
     *   Helper method to execute count() query.
     **/
    private DataSource.TableResult getCount(
        DataSource.QueryContext contexts) {
        String url = 'https://www.googleapis.com/books/v1/' +
                    'volumes?q=america&projection=full';
        List<Map<String,Object>> response =
            DataSource.QueryUtils.filter(contexts, getData(url));
        List<Map<String, Object>> countResponse =
            new List<Map<String, Object>>();
        Map<String, Object> countRow =
            new Map<String, Object>();
        countRow.put(
            contexts.tableSelection.columnsSelected.get(0).columnName,
            response.size());
        countResponse.add(countRow);
        return DataSource.TableResult.get(contexts, countResponse);
    }

    /**
     *   Called to do a full text search and get results from
     *   the external system for SOSL queries and Salesforce
     *   global searches.
     *
     *   The SearchContext argument represents the query to run
     *   against a table in the external system.
     *
     *   Returns results for each table that the SearchContext
     *   requested to be searched.
     **/
    override global List<DataSource.TableResult> search(
        DataSource.SearchContext contexts) {
        List<DataSource.TableResult> results =
            new List<DataSource.TableResult>();

        for (Integer i =0; i< contexts.tableSelections.size();i++) {
            String entity = contexts.tableSelections[i].tableSelected;
            String url = 'https://www.googleapis.com/books/v1' +
                        '/volumes?q=' + contexts.searchPhrase;
            results.add(DataSource.TableResult.get(true, null,
                                                entity,
                                                getData(url)));
        }

        return results;
    }

    /**
     *   Helper method to parse the data.
     *   Returns a list of rows from the external system.
     **/
    public List<Map<String, Object>> getData(String url) {
        HttpResponse response = getResponse(url);
        String body = response.getBody();

        List<Map<String, Object>> rows =
            new List<Map<String, Object>>();

        Map<String, Object> responseBodyMap =
            (Map<String, Object>)JSON.deserializeUntyped(body);

    /**
     *   Checks errors.
     **/        
        Map<String, Object> error =
            (Map<String, Object>)responseBodyMap.get('error');
        if (error!=null) {
            List<Object> errorsList =
                (List<Object>)error.get('errors');
            Map<String, Object> errors =
                (Map<String, Object>)errorsList[0];
            String messages = (String)errors.get('message');
            throw new DataSource.OAuthTokenExpiredException(messages);
        }

        List<Object> sItems = (List<Object>)responseBodyMap.get('items');
        if (sItems != null) {
            for (Integer i=0; i< sItems.size(); i++) {
                Map<String, Object> item =
                    (Map<String, Object>)sItems[i];
                rows.add(createRow(item));
            }
        } else {
            rows.add(createRow(responseBodyMap));
        }
 
        return rows;
    }

    /**
     *   Helper method to populate a row based on source data.
     *
     *   The item argument maps to the data that
     *   represents a row.
     *
     *   Returns an updated map with the External ID and
     *   Display URL values.
     **/
    public Map<String, Object> createRow(
        Map<String, Object> item) {
        Map<String, Object> row = new Map<String, Object>();
        for ( String key : item.keySet() ){
            if (key == 'id') {
                row.put('ExternalId', item.get(key));
            } else if (key == 'volumeInfo') {
                Map<String, Object> volumeInfoMap =
                    (Map<String, Object>)item.get(key);
                row.put('title', volumeInfoMap.get('title'));
                row.put('description',
                        volumeInfoMap.get('description'));
                row.put('DisplayUrl',
                        volumeInfoMap.get('infoLink'));
                row.put('publishedDate',
                        volumeInfoMap.get('publishedDate'));
                row.put('publisher',
                        volumeInfoMap.get('publisher'));
            }
        }
        return row;
    }

    /**
     *   Helper method to make the HTTP GET call.
     *   The url argument is the URL of the external system.
     *   Returns the response from the external system.
     **/
    public HttpResponse getResponse(String url) {
        Http httpProtocol = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndPoint(url);
        request.setMethod('GET');
        request.setHeader('Authorization', 'Bearer '+
                        this.connectionInfo.oauthToken);
        HttpResponse response = httpProtocol.send(request);
        return response;
    }
}
```

```apex
/**
 *   Extends the DataSource.Provider base class to create a
 *   custom adapter for Salesforce Connect. The class informs
 *   Salesforce of the functional and authentication
 *   capabilities that are supported by or required to connect
 *   to an external system.
 **/
global class BooksDataSourceProvider extends
    DataSource.Provider {
    /**
     *   Declares the types of authentication that can be used
     *   to access the external system.
     **/   
    override global List<DataSource.AuthenticationCapability>
        getAuthenticationCapabilities() {
        List<DataSource.AuthenticationCapability> capabilities =
            new List<DataSource.AuthenticationCapability>();
        capabilities.add(
            DataSource.AuthenticationCapability.OAUTH);
        capabilities.add(
            DataSource.AuthenticationCapability.ANONYMOUS);
        return capabilities;
    }

    /**
     *   Declares the functional capabilities that the
     *   external system supports.
     **/
    override global List<DataSource.Capability>
        getCapabilities() {
        List<DataSource.Capability> capabilities = new
            List<DataSource.Capability>();
        capabilities.add(DataSource.Capability.ROW_QUERY);
        capabilities.add(DataSource.Capability.SEARCH);
        return capabilities;
    }

    /**
     *   Declares the associated DataSource.Connection class.
     **/
    override global DataSource.Connection getConnection(
        DataSource.ConnectionParams connectionParams) {
        return new BooksDataSourceConnection(connectionParams);
    }
}
```
