---
title: "Stack Overflow Custom Adapter for Salesforce Connect"
domain: apex-guide
topic: stack-overflow-custom-adapter-for-salesforce-connect
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:32.965Z
estimatedTokens: 151
keywords: [Stack, Overflow, Custom, Adapter, Salesforce, Connect, example, illustrates, how, support, external, lookup, relationships, multiple, tables., relationship, links, child, standard, custom]
---

# Stack Overflow Custom Adapter for Salesforce Connect

> This example illustrates how to support external lookup relationships and multiple
        tables. An external lookup relationship links a child standard, custom, or external object
        to a parent external object. Each table can become an external object in the Salesforce
        org.

# Stack Overflow Custom Adapter for Salesforce Connect

This example illustrates how to support external lookup relationships and multiple tables. An external lookup relationship links a child standard, custom, or external object to a parent external object. Each table can become an external object in the Salesforce org.

For this example to work, create a custom field on the Contact standard object. Name the custom field “github\_username” and select the External ID and Unique attributes.

## StackOverflowDataSourceConnection Class

```

```

## StackOverflowPostDataSourceProvider Class

```

```

## Code Examples

```apex
/**
 *   Defines the connection to Stack Exchange API v2.2 to support
 *   querying of Stack Overflow users (stackoverflowUser)
 *   and posts (stackoverflowPost).
 *   Extends the DataSource.Connection class to enable
 *   Salesforce to sync the external system’s schema
 *   and to handle queries of the external data.
 **/
global class StackOverflowDataSourceConnection extends
        DataSource.Connection {
    private DataSource.ConnectionParams connectionInfo;

    /**
     *   Constructor for StackOverflowDataSourceConnection
     **/
    global StackOverflowDataSourceConnection(
            DataSource.ConnectionParams connectionInfo) {
        this.connectionInfo = connectionInfo;
    }

    /**
     *   Defines the schema for the external system. 
     *   Called when the administrator clicks “Validate and Sync”
     *   in the user interface for the external data source.
     **/
    override global List<DataSource.Table> sync() {
        List<DataSource.Table> tables =
                new List<DataSource.Table>();

        // Defines columns for the table of Stack OverFlow posts
        List<DataSource.Column> postColumns =
          new List<DataSource.Column>();

        // Defines the external lookup field.
        postColumns.add(DataSource.Column.externalLookup(
          'owner_id', 'stackoverflowUser__x'));
        postColumns.add(DataSource.Column.text('title', 255));
        postColumns.add(DataSource.Column.text('view_count', 255));
        postColumns.add(DataSource.Column.text('question_id',255));
        postColumns.add(DataSource.Column.text('creation_date',255));
        postColumns.add(DataSource.Column.text('score',255));
        postColumns.add(DataSource.Column.url('link'));
        postColumns.add(DataSource.Column.url('DisplayUrl'));
        postColumns.add(DataSource.Column.text('ExternalId',255));

        tables.add(DataSource.Table.get('stackoverflowPost','title',
          postColumns));

        // Defines columns for the table of Stack OverFlow users
        List<DataSource.Column> userColumns =
          new List<DataSource.Column>();
        userColumns.add(DataSource.Column.text('user_id', 255));
        userColumns.add(DataSource.Column.text('display_name', 255));
        userColumns.add(DataSource.Column.text('location',255));
        userColumns.add(DataSource.Column.text('creation_date',255));
        userColumns.add(DataSource.Column.url('website_url',255));
        userColumns.add(DataSource.Column.text('reputation',255));
        userColumns.add(DataSource.Column.url('link'));
        userColumns.add(DataSource.Column.url('DisplayUrl'));
        userColumns.add(DataSource.Column.text('ExternalId',255));

        tables.add(DataSource.Table.get('stackoverflowUser',
                'Display_name', userColumns));

        return tables;
    }

    /**
     *   Called to query and get results from the external
     *   system for SOQL queries, list views, and detail pages
     *   for an external object that’s associated with the
     *   external data source.
     *
     *   The QueryContext argument represents the query to run
     *   against a table in the external system.
     *
     *   Returns a list of rows as the query results.
     **/
    override global DataSource.TableResult query(
            DataSource.QueryContext context) {
        DataSource.Filter filter = context.tableSelection.filter;
        String url;

        // Sets the URL to query Stack Overflow posts
        if (context.tableSelection.tableSelected
.equals('stackoverflowPost')) {
            if (filter != null) {
                String thisColumnName = filter.columnName;
                if (thisColumnName != null &&
                        thisColumnName.equals('ExternalId'))
                    url = 'https://api.stackexchange.com/2.2/'
                            + 'questions/' + filter.columnValue
                            + '?order=desc&sort=activity'
                            + '&site=stackoverflow';
                else
                        url = 'https://api.stackexchange.com/2.2/'
                                + 'questions'
                                + '?order=desc&sort=activity'
                                + '&site=stackoverflow';
            } else {
                url = 'https://api.stackexchange.com/2.2/'
                        + 'questions'
                        + '?order=desc&sort=activity'
                        + '&site=stackoverflow';
            }
        // Sets the URL to query Stack Overflow users
        } else if (context.tableSelection.tableSelected
.equals('stackoverflowUser')) {
            if (filter != null) {
                String thisColumnName = filter.columnName;
                if (thisColumnName != null &&
                        thisColumnName.equals('ExternalId'))
                    url = 'https://api.stackexchange.com/2.2/'
                            + 'users/' + filter.columnValue
                            + '?order=desc&sort=reputation'
                            + '&site=stackoverflow';
                else
                    url = 'https://api.stackexchange.com/2.2/'
                            + 'users' + 
'?order=desc&sort=reputation&site=stackoverflow';
            } else {
                url = 'https://api.stackexchange.com/2.2/'
                        + 'users' + '?order=desc&sort=reputation'
                        + '&site=stackoverflow';
            }
        }

        /**
         * Filters, sorts, and applies limit and offset clauses.
         **/
        List<Map<String, Object>> rows =
                DataSource.QueryUtils.process(context, getData(url));
        return DataSource.TableResult.get(true, null,
                context.tableSelection.tableSelected, rows);
    }

    /**
     *   Helper method to parse the data.
     *   The url argument is the URL of the external system.
     *   Returns a list of rows from the external system.
     **/
    public List<Map<String, Object>> getData(String url) {
        String response = getResponse(url);

        List<Map<String, Object>> rows =
                new List<Map<String, Object>>();

        Map<String, Object> responseBodyMap = (Map<String, Object>)
                JSON.deserializeUntyped(response);

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
            String errorMessage = (String)errors.get('message');
            throw new 
                    DataSource.OAuthTokenExpiredException(errorMessage);
        }

        List<Object> fileItems=
            (List<Object>)responseBodyMap.get('items');
        if (fileItems != null) {
            for (Integer i=0; i < fileItems.size(); i++) {
                Map<String, Object> item =
                        (Map<String, Object>)fileItems[i];
                rows.add(createRow(item));
            }
        } else {
            rows.add(createRow(responseBodyMap));
        }

        return rows;
    }

    /**
     *   Helper method to populate the External ID and Display
     *   URL fields on external object records based on the 'id'
     *   value that’s sent by the external system.
     *
     *   The Map<String, Object> item parameter maps to the data
     *   that represents a row.
     *
     *   Returns an updated map with the External ID and
     *   Display URL values.
     **/
    public Map<String, Object> createRow(
            Map<String, Object> item) {
        Map<String, Object> row = new Map<String, Object>();
        for ( String key : item.keySet() ) {
            if (key.equals('question_id') || key.equals('user_id')) {
                row.put('ExternalId', item.get(key));
            } else if (key.equals('link')) {
                row.put('DisplayUrl', item.get(key));
            } else if (key.equals('owner')) {
                Map<String, Object> ownerMap =
                (Map<String, Object>)item.get(key);
                row.put('owner_id', ownerMap.get('user_id'));
            }

            row.put(key, item.get(key));
        }
        return row;
    }

    /**
     *   Helper method to make the HTTP GET call.
     *   The url argument is the URL of the external system.
     *   Returns the response from the external system.
     **/
    public String getResponse(String url) {
        // Perform callouts for production (non-test) results.
        Http httpProtocol = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndPoint(url);
        request.setMethod('GET');
        HttpResponse response = httpProtocol.send(request);
        return response.getBody();
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
global class StackOverflowPostDataSourceProvider
        extends DataSource.Provider {

    /**
     *   For simplicity, this example declares that the external 
     *   system doesn’t require authentication by returning
     *   AuthenticationCapability.ANONYMOUS as the sole entry 
     *   in the list of authentication capabilities.
     **/
    override global List<DataSource.AuthenticationCapability>
    getAuthenticationCapabilities() {
        List<DataSource.AuthenticationCapability> capabilities =
                new List<DataSource.AuthenticationCapability>();
        capabilities.add(
                DataSource.AuthenticationCapability.ANONYMOUS);
        return capabilities;
    }

    /**
     *   Declares the functional capabilities that the
     *   external system supports, in this case
     *   only SOQL queries.
     **/
    override global List<DataSource.Capability>
    getCapabilities() {
        List<DataSource.Capability> capabilities =
                new List<DataSource.Capability>();
        capabilities.add(DataSource.Capability.ROW_QUERY);
        return capabilities;
    }

    /**
     *   Declares the associated DataSource.Connection class.
     **/
    override global DataSource.Connection getConnection(
            DataSource.ConnectionParams connectionParams) {
        return new 
            StackOverflowDataSourceConnection(connectionParams);
    }
}
```
