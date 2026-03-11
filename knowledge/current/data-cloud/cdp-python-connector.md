---
title: "CDP Python Connector"
domain: data-cloud
topic: cdp-python-connector
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.443Z
keywords: [CDP, Python, Connector, Prerequisites]
---

# CDP Python Connector

# CDP Python Connector

Unlock and extend the value of Data Cloud data with the CDP Python Connector. The connector uses the Query API and extracts data from Data Cloud into Python so that you can fetch data in Pandas DataFrames. With the data in your environment, you can create visual data models, perform powerful analytical operations, or build powerful machine learning and AI models as well.

## Prerequisites

To configure the CDP Python Connector:

-   Install the CDP Python Connector from the PyPI (Python Package Index) repository.
    
    ```
    
    ```
    
    ![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)
    
    #### Note
    
    Upon successful installation, you see this message Successfully Installed salesforce-cdp-connector-<version>.
    
-   Authenticate the CDP Python Connector. You can authenticate the connector in one of two ways.
    -   **Authenticate with username and password**
        1.  Create your [connected app](https://help.salesforce.com/s/articleView?id=sf.connected_app_overview.htm&type=5&language=en_US), and complete its [basic information](https://help.salesforce.com/s/articleView?id=sf.connected_app_create_basics.htm&type=5&language=en_US).
        2.  Select **Enable OAuth Settings**.
        3.  Enter the callback URL (endpoint) that Salesforce calls back to your application during OAuth.
        4.  Select the [OAuth scopes](https://help.salesforce.com/s/articleView?id=sf.connected_app_create_api_integration.htm&language=en_US "HTML (New Window)") to apply to the connected app. OAuth scopes define permissions for the connected app, which are granted as tokens after the app is authorized. The OAuth token name is in parentheses.
        5.  Click **Save** for the changes to take effect.
        6.  Click **Continue** to get to Manage Connected Apps.
        7.  Copy the *consumer key* and *consumer secret*. They’re used during the creation of the Connection Object.
    -   **Authenticate using OAuth endpoint**
        1.  Create your [connected app](https://help.salesforce.com/s/articleView?id=sf.connected_app_overview.htm&type=5&language=en_US), and complete its [basic information](https://help.salesforce.com/s/articleView?id=sf.connected_app_create_basics.htm&type=5&language=en_US).
        2.  Select **Enable OAuth Settings**.
        3.  Enter the callback URL (endpoint) that Salesforce calls back to your application during OAuth.
        4.  Select the [OAuth scopes](https://help.salesforce.com/s/articleView?id=sf.connected_app_create_api_integration.htm&language=en_US "HTML (New Window)") to apply to the connected app. Ensure that refresh\_token, api, cdp\_query\_api, and cdp\_profile\_api are selected.
            
            OAuth scopes define permissions for the connected app, which are granted as tokens after the app is authorized. The OAuth token name is in parentheses.
            
        5.  Click **Save** for the changes to take effect.
        6.  Click **Continue** to get to Manage Connected Apps.
        7.  Copy the *consumer key* and *consumer secret*. They’re used during the creation of the Connection Object.
        8.  Construct the URL
            
            <LOGIN\_URL>/services/oauth2/authorize?response\_type=code&client\_id=<client\_id>&redirect\_uri=<callback\_url>.
            
            1.  To get the <Login\_URL>, go to **Setup** | **My Domain**.
                
            2.  To get the <callback\_url>, go to **Setup** | **App Manager** | **View Connected app** | **Call Back URL**.
                
        9.  Paste the URL in a browser and it redirects you to the callback url. The redirected url is of the form <callback url>?code=<CODE>. Extract the CODE from the address bar.
        10.  Make a post call by using curl or postman to
             
             <YOUR\_ORG\_URL>/services/oauth2/token?code=<CODE>&grant\_type=authorization\_code&client\_id=<clientId>&client\_secret=<clientSecret>&redirect\_uri=<callback\_uri>.
             
             The response to the post call is a json with access\_token and refresh\_token.
             

## Use CDP Python Connector

The CDP Python Connector setup requires you to:

-   Create a Connection Object
-   Create a Cursor Object and query Data Cloud
-   Fetch the Data Cloud data

**Create a Connection Object**

You can create a connection object in one of two ways.

-   **With username and password:** Use the parameters described here, and instantiate a Connection Object with your username and password.
    
    | Parameters | Description |
    | --- | --- |
    | login_url | Salesforce org url |
    | user_name | Salesforce org Username |
    | password | Salesforce org password |
    | client_id | consumer key generated by Connected App |
    | client_secret | consumer secret generated by the Connected App |
    
    ```
    
    ```
    
-   **With OAuth endpoint:** Use the parameters described here, and instantiate a connection object with OAuth endpoint.
    
    | Parameters | Description |
    | --- | --- |
    | login_url | Salesforce org url |
    | client_id | Salesforce org username |
    | client_secret | Salesforce org password |
    | core_token | access_token received in step 9 of Authenticate by using the OAuth endpoint section |
    | refresh_token | refresh_token received in step 9 of Authenticate by using the OAuth endpoint section |
    
    ```
    
    ```
    

**Create a Cursor Object and query Data Cloud**

To execute queries, create a cursor object When a query is executed, the cursor passes on that query to the Data Cloud to fetch the results.

```

```

**Fetch Data Cloud data**

You can fetch the data in one of three possible ways.

-   **One row at a time:** Use the fetchone() method to retrieve one row of result at a time.
    
    ```
    
    ```
    
-   **Get all the rows:**Use the fetchall() method to retrieve all the query results in one call.
    
    ```
    
    ```
    
-   **Get results in a dataframe:** You can retrieve the results into a Pandas DataFrame using the get\_pandas\_dataframe() method.
    
    ```
    
    ```