---
title: "Apex REST Code Sample Using RestRequest"
domain: apex-guide
topic: apex-rest-code-sample-using-restrequest
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.526Z
keywords: [Apex, REST, Code, Sample, RestRequest]
---

# Apex REST Code Sample Using RestRequest

# Apex REST Code Sample Using RestRequest

This sample shows you how to add an attachment to a record by using the RestRequest object.

For more information about authenticating with cURL, see the [Quick Start](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/quickstart.htm "HTML (New Window)") section of the REST API Developer Guide. In this code, the binary file data is stored in the RestRequest object, and the Apex service class accesses the binary data in the RestRequest object .

1.  Create an Apex class in your org from Setup by entering Apex Classes in the Quick Find box, then selecting **Apex Classes**. Click **New** and add the following code to your new class:
    
    ```
    
    ```
    
2.  Open a command-line window and execute the following cURL command to upload the attachment to a case:
    
    curl -H "Authorization: Bearer **sessionId**" -H "X-PrettyPrint: 1" -H "Content-Type: image/jpeg" --data-binary @**file** "https://**MyDomainName**.my.salesforce.com/services/apexrest/CaseManagement/v1/**caseId**"
    
    -   Replace **sessionId** with the <sessionId\> element that you noted in the login response.
    -   Replace **MyDomainName** with the My Domain name for your org.
    -   Replace **caseId** with the ID of the case you want to add the attachment to.
    -   Replace **file** with the path and file name of the file you want to attach.
    
    Your command should look something like this (with the **sessionId** replaced with your session ID and MyDomainName replaced with the My Domain Name for your org):
    
    ```
    
    ```
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    The cURL examples in this section don’t use a namespaced Apex class so you won’t see the namespace in the URL.
    
    The Apex class returns a JSON response that contains the attachment ID such as the following:
    
    ```
    
    ```
    
3.  To verify that the attachment and the image were added to the case, navigate to **Cases** and select the **All Open Cases** view. Click on the case and then scroll down to the Attachments related list. You should see the attachment you just created.