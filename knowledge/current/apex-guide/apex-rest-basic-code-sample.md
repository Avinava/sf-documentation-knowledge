---
title: "Apex REST Basic Code Sample"
domain: apex-guide
topic: apex-rest-basic-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.522Z
keywords: [Apex, REST, Basic, Code, Sample]
---

# Apex REST Basic Code Sample

# Apex REST Basic Code Sample

This sample shows how to implement a simple REST API in Apex with three HTTP request methods to delete, retrieve, and update a record.

For more information about authenticating with cURL, see the [Quick Start](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/quickstart.htm "HTML (New Window)") section of the REST API Developer Guide.

1.  Create an Apex class in your instance from Setup. Enter Apex Classes in the Quick Find box, select **Apex Classes**, and then click **New**. Add this code to the new Apex class:
    
    ```
    
    ```
    
2.  To call the doGet method from a client, open a command-line window and execute the following cURL command to retrieve an account by ID:
    
    curl -H "Authorization: Bearer **sessionId**" "https://**instance**.salesforce.com/services/apexrest/Account/**accountId**"
    
    -   Replace **sessionId** with the <sessionId\> element that you noted in the login response.
    -   Replace **instance** with your <serverUrl\> element.
    -   Replace **accountId** with the ID of an account which exists in your organization.
    
    After calling the doGet method, Salesforce returns a JSON response with data such as the following:
    
    ```
    
    ```
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    The cURL examples in this section don't use a namespaced Apex class so you don’t see the namespace in the URL.
    
3.  Create a file called account.txt to contain the data for the account you will create in the next step.
    
    ```
    
    ```
    
4.  Using a command-line window, execute the following cURL command to create a new account:
    
    curl -H "Authorization: Bearer **sessionId**" -H "Content-Type: application/json" -d @account.txt "https://**instance**.salesforce.com/services/apexrest/Account/"
    
    After calling the doPost method, Salesforce returns a response with data such as the following:
    
    ```
    
    ```
    
    The **accountId** is the ID of the account you just created with the POST request.
    
5.  Using a command-line window, execute the following cURL command to delete an account by specifying the ID:
    
    curl —X DELETE —H "Authorization: Bearer **sessionId**" "https://**instance**.salesforce.com/services/apexrest/Account/**accountId**"