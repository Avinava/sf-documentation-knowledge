---
title: "GitHub Issues Custom Adapter for Salesforce Connect"
domain: apex-guide
topic: github-issues-custom-adapter-for-salesforce-connect
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.929Z
estimatedTokens: 420
keywords: [GitHub, Issues, Custom, Adapter, Salesforce, Connect, example, creates, custom, adapter, links, products, indirect, lookup, relationship., external, relationship, comments, issue., DataSource.Connection]
---

# GitHub Issues Custom Adapter for Salesforce Connect

> This example creates a custom adapter that links GitHub Issues to products in Salesforce
        using an indirect lookup relationship. An external lookup relationship also links GitHub
        Issues to the comments on each issue.

# GitHub Issues Custom Adapter for Salesforce Connect

This example creates a custom adapter that links GitHub Issues to products in Salesforce using an indirect lookup relationship. An external lookup relationship also links GitHub Issues to the comments on each issue.

This example illustrates a range of common use cases for custom adapters, including how to:

-   Query external data.
-   Work with a range of external object field types, such as Date and Picklist fields.
-   Use indirect lookup relationships, which link a child external object to a parent standard or custom object.
-   Use external lookup relationships, which link a child standard, custom, or external object to a parent external object.
-   Use Data Manipulation Language (DML) operations to insert, update, and delete external data.

To improve unit tests for the Apex code in this example, you can also return mock records in a testing context. See [Mock SOQL Tests for External Objects](atlas.en-us.apexcode.meta/apexcode/apex_connector_external_objects_mock_soql_tests.htm "You can mock SOQL query responses for external objects in Apex testing by using SOQL stub methods and a new test class. Use basic and joined SOQL queries against external objects and return mock records in a testing context.").

## DataSource.Connection Class

This example creates a class named GitHubDataSourceConnection. For this example to work, create a custom field on the Product2 standard object. Specify the name of the custom text field as Repository, and select the External ID and Unique attributes.

```

```

## DataSource.Provider Class

This example creates a class named GitHubDataSourceProvider.

```

```

## Code Examples

```apex
/**
 *   Defines the connection to GitHub REST API v3 to support
 *   querying of GitHub profiles.
 *   Extends the DataSource.Connection class to enable
 *   Salesforce to sync the external system’s schema
 *   and to handle queries and searches of the external data.
 **/
global class GitHubDataSourceConnection extends DataSource.Connection {
    private DataSource.ConnectionParams connectionInfo;

    /**
     *   Constructor for GitHubDataSourceConnection
     **/
    global GitHubDataSourceConnection(DataSource.ConnectionParams connectionInfo) {
        this.connectionInfo = connectionInfo;
    }

    /**
     *   Called to query and get results from the external 
     *   system for SOQL queries, list views, and detail pages 
     *   for an external object that’s associated with the 
     *   external data source.
     *   
     *   The queryContext argument represents the query to run 
     *   against a table in the external system.
     *   
     *   Returns a list of rows as the query results.
     **/
    override global DataSource.TableResult query(DataSource.QueryContext context) {
        DataSource.Filter filter = context.tableSelection.filter;
        String url, tableName;

        if(context.tableSelection.tableSelected.equals('GithubIssues')) {
            tableName = 'GithubIssues';
            if (filter != null) {
                String thisColumnName = filter.columnName;
                if (thisColumnName != null &&
                   (thisColumnName.equals('ExternalId') ||
                    thisColumnName.equals('number')))
                    url = 'callout:GithubNC/issues/' + filter.columnValue;
                else
                    url = 'callout:GithubNC/issues';
            } else {
                url = 'callout:GithubNC/issues';
            }
        } else if(context.tableSelection.tableSelected.equals('IssueComments')) {
            tableName = 'IssueComments';
            if (filter != null) {
                String thisColumnName = filter.columnName;
                if (thisColumnName != null &&
                   (thisColumnName.equals('ExternalId') ||
                    thisColumnName.equals('id')))
                    url = 'callout:GithubNC/issues/comments/' + filter.columnValue;
                else
                    url = 'callout:GithubNC/issues/comments';
            } else {
                url = 'callout:GithubNC/issues/comments';
            }
        }

        /**
         * Filters, sorts, and applies limit and offset clauses.
         **/
        List<Map<String, Object>> rows = DataSource.QueryUtils.process(context, getData(url, tableName));
        return DataSource.TableResult.get(true, null, context.tableSelection.tableSelected, rows);
    }

    /**
     *   Defines the schema for the external system. 
     *   Called when the Salesforce admin clicks “Validate and Sync”
     *   in the user interface for the external data source.
     **/
    override global List<DataSource.Table> sync() {
        List<DataSource.Table> tables =new List<DataSource.Table>();
        List<DataSource.Column> columns, commentsColumns;
        columns = new List<DataSource.Column>();
        commentsColumns = new List<DataSource.Column>();

        // Defines the external lookup field.
        commentsColumns.add(DataSource.Column.externalLookup('issue_number', 'GithubIssues__x'));
        commentsColumns.add(DataSource.Column.text('ExternalId', 255));
        commentsColumns.add(DataSource.Column.url('DisplayUrl'));
        commentsColumns.add(DataSource.Column.text('Body'));
        commentsColumns.add(DataSource.Column.text('Created_By'));
        commentsColumns.add(DataSource.Column.datetime('Created'));
        commentsColumns.add(DataSource.Column.datetime('Updated'));
        tables.add(DataSource.Table.get('IssueComments','id', commentsColumns));

        //================================================================================

        // Defines the indirect lookup field. (For this to work,
        // make sure your Product2 standard object has a
        // custom unique, external ID field called Repository.)
        columns.add(DataSource.Column.indirectLookup( 'repository_url', 'Product2', 'Repository__c'));
        columns.add(DataSource.Column.text('ExternalId',255));
        columns.add(DataSource.Column.url('DisplayUrl'));
        columns.add(DataSource.Column.text('Title',255));
        columns.add(DataSource.Column.text('Description'));
        columns.add(DataSource.Column.text('Repo_Name'));
        columns.add(DataSource.Column.url('Repo_URL'));
        List<Map<String,String>> stateList = new List<Map<String, String>>(); 
        Map<String, String> open = new Map<String,String>();
        open.put('Open', 'Open');
        stateList.add(open);
        Map<String, String> closed = new Map<String,String>();
        closed.put('Closed', 'Closed');
        stateList.add(closed);
        columns.add(DataSource.Column.picklist('State',stateList));

        List<Map<String,String>> stateReasonList = new List<Map<String, String>>(); 
        Map<String, String> completed = new Map<String,String>();
        completed.put('Completed', 'completed');
        stateReasonList.add(completed);
        Map<String, String> reopened = new Map<String,String>();
        reopened.put('Reopened', 'reopened');
        stateReasonList.add(reopened);
        Map<String, String> notPlanned = new Map<String,String>();
        notPlanned.put('Not Planned', 'not_planned');
        stateReasonList.add(notPlanned);
        columns.add(DataSource.Column.picklist('State_Reason',stateReasonList));

        columns.add(DataSource.Column.boolean('Locked'));
        columns.add(DataSource.Column.text('Lock_Reason', 255));
        columns.add(DataSource.Column.datetime('Created'));
        columns.add(DataSource.Column.datetime('Updated'));
        columns.add(DataSource.Column.datetime('Closed_At'));

        tables.add(DataSource.Table.get('GithubIssues','repository_url', columns));
        return tables;
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
            DataSource.SearchContext context) {
        List<DataSource.TableResult> results =
                new List<DataSource.TableResult>();

        for (Integer i =0;i< context.tableSelections.size();i++) {
            String entity = context.tableSelections[i].tableSelected;

            String url = 'callout:GithubNC/issues/' + context.searchPhrase;
            results.add(DataSource.TableResult.get(true, null, entity, getData(url, entity)));
        }

        return results;
    }

    global override List<DataSource.UpsertResult> upsertRows(DataSource.UpsertContext context) {
        List<DataSource.UpsertResult> results = new List<DataSource.UpsertResult>();
        String tableName = context.tableSelected;

        // Calls the GitHub API to create and update issues.
        List<Map<String, Object>> rows = context.rows;
        for(Integer i = 0; i < rows.size(); i++) {
            Map<String,Object> row = rows[i];
            Map<String,Object> obj = new Map<String,Object>();
            String externalId = (String) row.get('ExternalId');
            String url, httpMethod;

            if(tableName.equals('GithubIssues')) {
                url = 'callout:GithubNC/issues';
                httpMethod = 'POST';
                if(!String.isBlank(externalId)){
                    httpMethod = 'PATCH';
                    url = url+'/'+externalId;
                }

                obj.put('title', row.get('Title'));
                obj.put('body', row.get('Description'));
                obj.put('state', row.get('State'));
                obj.put('state_reason', String.isBlank((String) row.get('State_Reason'))? null: row.get('State_Reason'));
                obj.put('closed_at', row.get('Closed_At'));
            }
            else if(tableName.equals('IssueComments')) {
                url = 'callout:GithubNC/issues';
                if(!String.isBlank(externalId)){
                    httpMethod = 'PATCH';
                    url = url+'/comments/'+externalId;
                } else {
                    httpMethod = 'POST';
                    url = url+'/' + row.get('issue_number') + '/comments';
                }
                obj.put('body', row.get('Body'));
            }

            HttpResponse response = getResponse(url, httpMethod, obj);
            if (response.getStatusCode() != 200){ 
                results.add(DataSource.UpsertResult.failure(
                    String.valueOf(row.get('ExternalId')), 'The callout resulted in an error: ' + response.getStatusCode()+' - '+response.getBody()));
            }
            System.debug(response.getBody());

            if(tableName.equals('GithubIssues')) {
                HttpResponse responseForLock = null;
                if(!String.isBlank(externalId)) {
                    Boolean currentlyLocked = isIssueLockedCurrently(url);
                    Boolean isLocked = (Boolean) row.get('Locked');
                    Boolean lockStatusChanged = currentlyLocked != isLocked;
                    if(lockStatusChanged) {
                        url = url + '/lock';
                        if(isLocked) {
                            Map<String, Object> lockReasonObj = new Map<String, Object>();
                            lockReasonObj.put('lock_reason', row.get('Lock_Reason'));
                            responseForLock = getResponse(url, 'PUT', lockReasonObj);
                        }
                        else {
                            responseForLock = getResponse(url, 'DELETE', null);
                        }

                        if (responseForLock.getStatusCode() != 200) {
                            results.add(DataSource.UpsertResult.failure(
                                String.valueOf(row.get('ExternalId')), 'The callout resulted in an error: ' + responseForLock.getStatusCode()+' - '+responseForLock.getBody()));
                        }
                        System.debug(responseForLock.getBody());
                    }
                }
            }
            
            results.add(DataSource.UpsertResult.success(String.valueOf(externalId)));
        }
        return results;
    }

    global override List<DataSource.DeleteResult> deleteRows(DataSource.DeleteContext context) {
        List<DataSource.DeleteResult> results = new List<DataSource.DeleteResult>();
        String tableName = context.tableSelected;

        // Calls the GitHub API to delete issues.
        if(tableName.equals('IssueComments')) {
            for(String externalId: context.externalIds) {
                String httpMethod = 'DELETE';
                String url = 'callout:GithubNC/issues/comments/'+externalId;
    
                HttpResponse response = getResponse(url, httpMethod, null);
                if (response.getStatusCode() != 204){ 
                    results.add(DataSource.DeleteResult.failure(
                        externalId, 'The callout resulted in an error: ' + response.getStatusCode()+' - '+response.getBody()));
                }
                System.debug(response.getBody());
                results.add(DataSource.DeleteResult.success(String.valueOf(externalId)));
            }      
        } else if(tableName.equals('GithubIssues')) {
            System.debug('Deletion not supported for GitHub Issues.');
            results.add(DataSource.DeleteResult.failure(String.valueOf(context.externalIds), 'Deletion not supported for GitHub Issues.'));
        }
        return results;
    }

    /**
     *   Helper method to parse the data.
     *   The url argument is the URL of the external system.
     *   Returns a list of rows from the external system.
     **/
    public List<Map<String, Object>> getData(String url, String tableName) {
        String response = getResponse(url, 'GET', null).getBody();

        // Standardize response string
        if (!response.contains('"items":')) {
            if (response.substring(0,1).equals('{')) {
                response = '[' + response  + ']';
            }
            response = '{"items": ' + response + '}';
        }

        List<Map<String, Object>> rows = new List<Map<String, Object>>();

        Map<String, Object> responseBodyMap = (Map<String, Object>) JSON.deserializeUntyped(response);

        /**
         *   Checks errors.
         **/
        Map<String, Object> error = (Map<String, Object>)responseBodyMap.get('error');
        if (error!=null) {
            List<Object> errorsList = (List<Object>)error.get('errors');
            Map<String, Object> errors = (Map<String, Object>)errorsList[0];
            String errorMessage = (String)errors.get('message');
            throw new DataSource.OAuthTokenExpiredException(errorMessage);
        }

        List<Object> fileItems = (List<Object>)responseBodyMap.get('items');
        if (fileItems != null) {
            for (Integer i=0; i < fileItems.size(); i++) {
                Map<String, Object> item = (Map<String, Object>)fileItems[i];
                rows.add(createRow(item, tableName));
            }
        } else {
            rows.add(createRow(responseBodyMap, tableName));
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
    public Map<String, Object> createRow(Map<String, Object> item, String tableName) {
        Map<String, Object> row = new Map<String, Object>();
        for ( String key : item.keySet() ) {
            if(tableName.equals('GithubIssues')) {
                if (key == 'number') {
                    row.put('ExternalId', item.get(key));
                } else if (key=='title') {
                    row.put('Title', item.get(key));
                } else if (key=='body') {
                    row.put('Description', item.get(key));
                } else if (key=='url') {
                    row.put('DisplayUrl', item.get(key));
                } else if (key=='repository_url') {
                    String repoUrl = (String) item.get(key);
                    row.put('Repo_URL', repoUrl);
                    //extract repository name from the URL and add it to the Repo_Name field 
                    String repoName = repoUrl.substring(repoUrl.lastIndexOf('/')+1);
                    row.put('Repo_Name', repoName);
                    row.put(key, item.get(key));
                }  else if (key=='state') {
                    row.put('State', item.get(key));
                } else if (key=='state_reason') {
                    row.put('State_Reason', item.get(key));
                } else if (key=='locked') {
                    row.put('Locked', item.get(key));
                } else if (key=='active_lock_reason') {
                    row.put('Lock_Reason', item.get(key));
                } else if (key=='created_at' && item.get(key) != null) {
                    DateTime createdDateTime = (DateTime)Json.deserialize('"'+item.get(key)+'"', DateTime.class);
                    row.put('Created', createdDateTime);
                } else if (key=='updated_at' && item.get(key) != null) {
                    DateTime updatedDateTime = (DateTime)Json.deserialize('"'+item.get(key)+'"', DateTime.class);
                    row.put('Updated', updatedDateTime);
                } else if (key=='closed_at' && item.get(key) != null) {
                    DateTime closedDateTime = (DateTime)Json.deserialize('"'+item.get(key)+'"', DateTime.class);
                    row.put('Closed_At', closedDateTime);
                } else {
                    row.put(key, item.get(key));
                }
            }
            else if (tableName.equals('IssueComments')) {
                if (key=='id') {
                    row.put('ExternalId', item.get(key));
                } else if (key=='url') {
                    row.put('DisplayUrl', item.get(key));
                } else if (key == 'body') {
                    row.put('Body', item.get(key));
                } else if (key=='user') {
                    Map<String, Object> ownerMap = (Map<String, Object>)item.get(key);
                    row.put('Created_By', ownerMap.get('login'));
                } else if (key=='created_at' && item.get(key) != null) {
                    DateTime createdDateTime = (DateTime)Json.deserialize('"'+item.get(key)+'"', DateTime.class);
                    row.put('Created', createdDateTime);
                } else if (key=='updated_at' && item.get(key) != null) {
                    DateTime updatedDateTime = (DateTime)Json.deserialize('"'+item.get(key)+'"', DateTime.class);
                    row.put('Updated', updatedDateTime);
                } else if (key=='issue_url') {
                    String issueUrl = (String) item.get(key);
                    row.put('issue_number', issueUrl.substring(issueUrl.lastIndexOf('/')+1));
                } else {
                 row.put(key, item.get(key));   
                }
            }
        }
        return row;
    }

    public Boolean isIssueLockedCurrently(String url) {
        String existingIssue = getResponse(url, 'GET', null).getBody();
        Map<String, Object> existingIssueBodyMap = (Map<String, Object>) JSON.deserializeUntyped(existingIssue);

        /**
         *   Checks errors.
         **/
        Map<String, Object> error = (Map<String, Object>) existingIssueBodyMap.get('error');
        if (error!=null) {
            List<Object> errorsList = (List<Object>)error.get('errors');
            Map<String, Object> errors = (Map<String, Object>)errorsList[0];
            String errorMessage = (String)errors.get('message');
            throw new DataSource.OAuthTokenExpiredException(errorMessage);
        }
        
        return (Boolean) existingIssueBodyMap.get('locked');
    }

    /**
     *   The url argument is the URL of the external system.
     *   Returns the response from the external system.
     **/
    public HttpResponse getResponse(String url, String httpMethod, Map<String,Object> issue) {
        // Perform callouts for production (non-test) results.
        Http httpProtocol = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod(httpMethod);
        if(issue != null)
            request.setBody(JSON.serialize(issue));
        
        return httpProtocol.send(request);
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
global class GitHubDataSourceProvider extends DataSource.Provider {

    /**
     *   For simplicity, this example declares that the external 
     *   system doesn’t require authentication by returning
     *   AuthenticationCapability.ANONYMOUS as the sole entry 
     *   in the list of authentication capabilities.
     **/
    override global List<DataSource.AuthenticationCapability> getAuthenticationCapabilities() {
        List<DataSource.AuthenticationCapability> capabilities = new List<DataSource.AuthenticationCapability>();
        capabilities.add(DataSource.AuthenticationCapability.ANONYMOUS);
        return capabilities;
    }

    /**
     *   Declares the functional capabilities that the
     *   external system supports, in this case
     *   only SOQL queries.
     **/
    override global List<DataSource.Capability> getCapabilities() {
        List<DataSource.Capability> capabilities = new List<DataSource.Capability>();
        capabilities.add(DataSource.Capability.ROW_QUERY);
        capabilities.add(DataSource.Capability.ROW_CREATE);
        capabilities.add(DataSource.Capability.ROW_UPDATE);
        capabilities.add(DataSource.Capability.ROW_DELETE);
        capabilities.add(DataSource.Capability.PICKLIST);
        capabilities.add(DataSource.Capability.MULTI_PICKLIST);
        capabilities.add(DataSource.Capability.SEARCH);
        return capabilities;
    }

    /**
     *   Declares the associated DataSource.Connection class.
     **/
    override global DataSource.Connection getConnection(DataSource.ConnectionParams connectionParams) {
        return new GitHubDataSourceConnection(connectionParams);
    }
}
```

## Related Topics

- Mock SOQL Tests for External Objects (atlas.en-us.apexcode.meta/apexcode/apex_connector_external_objects_mock_soql_tests.htm)
