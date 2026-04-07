---
title: "Create, Retrieve, Update, and Delete Folders"
domain: mc-apis
topic: create-retrieve-update-and-delete-folders
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:21.196Z
estimatedTokens: 6219
keywords: [Retrieve, Folders, creating, retrieving, updating, deleting, account, via, SOAP, API, Why, How, Sample, NET, Code]
---

# Create, Retrieve, Update, and Delete Folders

> This page contains information  about creating, retrieving, updating, and deleting folders in your account via the SOAP API.

# Create, Retrieve, Update, and Delete Folders

This page contains information about creating, retrieving, updating, and deleting folders in your account via the SOAP API.

## Why Create, Retrieve, Update, and Delete Folders

You can use the SOAP API to interact with new or existing folders in your Marketing Cloud account. Use these folders to better organize the portfolio items, programs, or other assets in your account. This process allows you to maintain the tight integration between your development environment and Marketing Cloud.

## How to Create, Retrieve, Update, and Delete Folders

Use the sample code below as a model for your own API calls. You can specify whether the folder is active, editable, or can support child folders using Boolean operators outlined in the sample code.

### Sample .NET Code

#### Create a Folder

The Create call requires the name of the folder, the description of the folder, and the parent folder in which to place the new folder.

By default, the Create call for a DataFolder object sets the IsEditable and AllowChildren properties to false.

```apex
private void CreateDataFolder()
{
    SoapClient framework2 = new SoapClient();
    framework2.ClientCredentials.UserName.UserName = "xxx";
    framework2.ClientCredentials.UserName.Password = "xxx";
    String requestID;
    String status;
    DataFolder datafolder = new DataFolder();
    datafolder.Name = "API Created Folder";
    datafolder.Description = "API Created Folder";
    datafolder.ParentFolder = new DataFolder();
    datafolder.ParentFolder.ID = 12345; // This is the ID of the 'my emails' folder that you can get from doing a retrieve
    datafolder.ParentFolder.IDSpecified = true;
    datafolder.ContentType = "email";
    CreateResult[] cresults = framework2.Create(new CreateOptions(), new APIObject[] { datafolder }, out requestID, out status);
    foreach (CreateResult result in cresults)
    {
        Console.WriteLine(result.StatusMessage);
    }
    Console.WriteLine(requestID + ": " + status);
}
```

#### Retrieve a Folder with Filter by Type

```apex
private void RetrieveDataFolder(object sender, EventArgs e)
{
    SoapClient framework = new SoapClient();
    framework.ClientCredentials.UserName.UserName = "xxx";
    framework.ClientCredentials.UserName.Password = "xxx";
    String requestID;
    String status;
    APIObject[] results;
    SimpleFilterPart sfp = new SimpleFilterPart();
    sfp.Property = "ContentType";
    sfp.SimpleOperator = SimpleOperators.equals;
    sfp.Value = new string[] { "email" };
    RetrieveRequest rr = new RetrieveRequest();
    rr.ObjectType = "DataFolder";
    rr.Properties = new string[] { "ID", "Name"};
    rr.Filter = sfp;
    status = framework.Retrieve(rr, out requestID, out results);
    Console.WriteLine(status);
    foreach (DataFolder df in results)
    {
        Console.WriteLine("Folder Name: " + df.Name);
        Console.WriteLine("Folder ID: " + df.ID);
    }

}
```

### Sample PHP Code

#### Retrieve Folder

```
<?php
    echo '<pre>';
    $path = $_SERVER[DOCUMENT_ROOT].'/00 Includes/';
    require($path . 'exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
    /* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    /* Set username and password here */
    $client->username = 'XXXXX';
    $client->password = 'XXXXX';
    $rr = new Marketing Cloud_RetrieveRequest();
    $rr->ObjectType = 'DataFolder';
    //Set the properties to return
    $props = array('ID', 'Name');
    $rr->Properties = $props;
    //Setup account filtering, to look for a given account MID
    $filterPart = new Marketing Cloud_SimpleFilterPart();
    $filterPart->Property = 'ContentType';
    $values = array('Email');
    $filterPart->Value = $values;
    $filterPart->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
    //Encode the SOAP package
    $filterPart = new SoapVar($filterPart, SOAP_ENC_OBJECT,'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
    //Set the filter to NULL to return all MIDs, otherwise set to filter object
    //$rr->Filter = NULL;
    $rr->Filter = $filterPart;
    //Setup and execute request
    $rrm = new Marketing Cloud_RetrieveRequestMsg();
    $rrm->RetrieveRequest = $rr;
    $results = $client->Retrieve($rrm);
    print_r($results);
} catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}
    echo '</pre>';
?>
```

### Sample SOAP Envelopes

#### Create 3 Folders

##### SOAP Request

```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
    xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header>
        <wsse:Security
            xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
            xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsu:Timestamp>
                <wsu:Created>2010-06-02T14:40:19Z</wsu:Created>
                <wsu:Expires>2010-06-02T14:45:19Z</wsu:Expires>
            </wsu:Timestamp>
            <wsse:UsernameToken>
                <wsse:Username>XXX</wsse:Username>
                <wsse:Password
                    Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
                <wsse:Nonce>XXX</wsse:Nonce>
                <wsu:Created>2010-06-02T14:40:19Z</wsu:Created>
            </wsse:UsernameToken>
        </wsse:Security>
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <CreateRequest
            xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options/>
            <ns1:Objects
                xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI"
                xsi:type="ns1:DataFolder">
                <ns1:ModifiedDate
                 xsi:nil="true"/>
                <ns1:ObjectID
                 xsi:nil="true"/>
                <ns1:CustomerKey>email folder1</ns1:CustomerKey>
                <ns1:ParentFolder>
                    <ns1:ModifiedDate
                     xsi:nil="true"/>
                    <ns1:ID>123</ns1:ID>
                    <ns1:ObjectID
                     xsi:nil="true"/>
                </ns1:ParentFolder>
                <ns1:Name>email folder1</ns1:Name>
                <ns1:Description>email folder1</ns1:Description>
                <ns1:ContentType>email</ns1:ContentType>
                <ns1:IsActive>true</ns1:IsActive>
                <ns1:IsEditable>true</ns1:IsEditable>
                <ns1:AllowChildren>true</ns1:AllowChildren>
            </ns1:Objects>
            <ns2:Objects
                xmlns:ns2="http://exacttarget.com/wsdl/partnerAPI"
                xsi:type="ns2:DataFolder">
                <ns2:ModifiedDate
                 xsi:nil="true"/>
                <ns2:ObjectID
                 xsi:nil="true"/>
                <ns2:CustomerKey>email folder2</ns2:CustomerKey>
                <ns2:ParentFolder>
                    <ns2:ModifiedDate
                     xsi:nil="true"/>
                    <ns2:ID>124</ns2:ID>
                    <ns2:ObjectID
                     xsi:nil="true"/>
                </ns2:ParentFolder>
                <ns2:Name>email folder2</ns2:Name>
                <ns2:Description>email folder2</ns2:Description>
                <ns2:ContentType>email</ns2:ContentType>
                <ns2:IsActive>true</ns2:IsActive>
                <ns2:IsEditable>true</ns2:IsEditable>
                <ns2:AllowChildren>true</ns2:AllowChildren>
            </ns2:Objects>
            <ns3:Objects
                 xmlns:ns3="http://exacttarget.com/wsdl/partnerAPI"
                 xsi:type="ns3:DataFolder">
                 <ns3:ModifiedDate
                  xsi:nil="true"/>
                 <ns3:ObjectID
                  xsi:nil="true"/>
                 <ns3:CustomerKey>email folder3</ns3:CustomerKey>
                 <ns3:ParentFolder>
                     <ns3:ModifiedDate
                      xsi:nil="true"/>
                     <ns3:ID>125</ns3:ID>
                     <ns3:ObjectID xsi:nil="true"/>
                 </ns3:ParentFolder>
                 <ns3:Name>email folder3</ns3:Name>
                 <ns3:Description>email folder3</ns3:Description>
                 <ns3:ContentType>email</ns3:ContentType>
                 <ns3:IsActive>true</ns3:IsActive>
                 <ns3:IsEditable>true</ns3:IsEditable>
                 <ns3:AllowChildren>true</ns3:AllowChildren>
            </ns3:Objects>
        </CreateRequest>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

##### SOAP Response

```
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
    xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
    xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soap:Header>
        <wsa:Action>CreateResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:cb885f66-cfca-4022-a179-98eaf7cc85a2</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:a78f7bbd-ecda-4faf-ace9-3f9b19b486ad</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsse:Security>
            <wsu:Timestamp
                wsu:Id="Timestamp-e79bfbd7-b1ed-4eaa-8c35-9e3ccba1d86b">
                <wsu:Created>2010-06-02T14:40:19Z</wsu:Created>
                <wsu:Expires>2010-06-02T14:45:19Z</wsu:Expires>
            </wsu:Timestamp>
        </wsse:Security>
     </soap:Header>
     <soap:Body>
         <CreateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
             <Results>
                 <StatusCode>OK</StatusCode>
                 <StatusMessage>Folder created successfully.</StatusMessage>
                 <OrdinalID>0</OrdinalID>
                 <NewID>705821</NewID>
                 <NewObjectID>72c97bcc-3992-4e69-ac1d-0d21d71209f4</NewObjectID>
             </Results>
             <Results>
                 <StatusCode>OK</StatusCode>
                 <StatusMessage>Folder created successfully.</StatusMessage>
                 <OrdinalID>1</OrdinalID>
                 <NewID>705822</NewID>
                 <NewObjectID>0dcc63d3-cfbe-4d9e-83d0-13e99cbdbe9c</NewObjectID>
             </Results>
             <Results>
                 <StatusCode>OK</StatusCode>
                 <StatusMessage>Folder created successfully.</StatusMessage>
                 <OrdinalID>2</OrdinalID>
                 <NewID>705823</NewID>
                 <NewObjectID>30c709fa-bbc2-4571-ae00-079c4511a1e0</NewObjectID>
             </Results>
             <RequestID>bd23ba6f-c491-480f-bb47-6b9e5d5b7a22</RequestID>
             <OverallStatus>OK</OverallStatus>
         </CreateResponse>
     </soap:Body>
</soap:Envelope>
```

#### Retrieve Created Folders

##### SOAPRequest

```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
    xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header>
        <wsse:Security
            xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
            xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsu:Timestamp>
                <wsu:Created>2010-06-02T14:40:30Z</wsu:Created>
                <wsu:Expires>2010-06-02T14:45:30Z</wsu:Expires>
            </wsu:Timestamp>
            <wsse:UsernameToken>
                <wsse:Username>XXX</wsse:Username>
                <wsse:Password
                     Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
                <wsse:Nonce>XXX</wsse:Nonce>
                <wsu:Created>2010-06-02T14:40:30Z</wsu:Created>
            </wsse:UsernameToken>
        </wsse:Security>     </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <RetrieveRequestMsg
            xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <RetrieveRequest>
                <ObjectType>DataFolder</ObjectType>
                <Properties>ID</Properties>
                <Properties>Description</Properties>
                <Properties>ParentFolder.Description</Properties>
                <Properties>Client.ID</Properties>
                <Properties>ParentFolder.CustomerKey</Properties>
                <Properties>Name</Properties>
                <Properties>ContentType</Properties>
                <Properties>ParentFolder.Name</Properties>
                <Properties>ObjectID</Properties>
                <Properties>ParentFolder.ObjectID</Properties>
                <ns1:Filter
                     xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:SimpleFilterPart">
                     <ns1:Property>ID</ns1:Property>
                     <ns1:SimpleOperator>IN</ns1:SimpleOperator>
                     <ns1:Value>705821</ns1:Value>
                     <ns1:Value>705822</ns1:Value>
                     <ns1:Value>705823</ns1:Value>
                </ns1:Filter>
                <QueryAllAccounts>false</QueryAllAccounts>
            </RetrieveRequest>
        </RetrieveRequestMsg>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

##### SOAP Response

```
<?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
        xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
        xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <soap:Header>
            <wsa:Action>RetrieveResponse</wsa:Action>
            <wsa:MessageID>urn:uuid:829ef1df-4a24-4d3c-825d-de0f18227177</wsa:MessageID>
            <wsa:RelatesTo>urn:uuid:669d194c-c918-431f-8df9-579888a567ab</wsa:RelatesTo>
            <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
            <wsse:Security>
                <wsu:Timestamp
                    wsu:Id="Timestamp-895b8734-c688-47df-834b-3a8dc85bd506">
                <wsu:Created>2010-06-02T14:40:29Z</wsu:Created>
                <wsu:Expires>2010-06-02T14:45:29Z</wsu:Expires>
                </wsu:Timestamp>
            </wsse:Security>
        </soap:Header>
        <soap:Body>
            <RetrieveResponseMsg
                xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <OverallStatus>OK</OverallStatus>
                <RequestID>b985f834-933b-4177-b1e8-c8965a674cf9</RequestID>
                <Results
                    xsi:type="DataFolder">
                    <Client>
                        <ID>41018</ID>
                    </Client>
                    <ID>705821</ID>
                    <ObjectID>72c97bcc-3992-4e69-ac1d-0d21d71209f4</ObjectID>
                    <ParentFolder>
                        <ObjectID>d991eb1a-7b3c-4482-823d-e93fe878592b</ObjectID>
                        <Name>my emails</Name>
                        <Description/>
                    </ParentFolder>
                    <Name>email folder1</Name>
                    <Description>email folder1</Description>
                    <ContentType>email</ContentType>
                </Results>
                <Results
                    xsi:type="DataFolder">
                    <Client>
                        <ID>41018</ID>
                    </Client>
                    <ID>705822</ID>
                    <ObjectID>0dcc63d3-cfbe-4d9e-83d0-13e99cbdbe9c</ObjectID>
                    <ParentFolder>
                        <ObjectID>d991eb1a-7b3c-4482-823d-e93fe878592b</ObjectID>
                        <Name>my emails</Name>
                        <Description/>
                    </ParentFolder>
                    <Name>email folder20100602104019403</Name>
                    <Description>email folder20100602104019403</Description>
                    <ContentType>email</ContentType>
                </Results>
                <Results
                    xsi:type="DataFolder">
                    <Client>
                        <ID>41018</ID>
                    </Client>
                    <ID>705823</ID>
                    <ObjectID>30c709fa-bbc2-4571-ae00-079c4511a1e0</ObjectID>
                    <ParentFolder>
                        <ObjectID>d991eb1a-7b3c-4482-823d-e93fe878592b</ObjectID>
                        <Name>my emails</Name>
                        <Description/>
                    </ParentFolder>
                    <Name>email folder20100602104019419</Name>
                    <Description>email folder20100602104019419</Description>
                    <ContentType>email</ContentType>
                </Results>
            </RetrieveResponseMsg>
        </soap:Body>
    </soap:Envelope>
```

#### Update Folders

##### SOAP Request

```
<?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <SOAP-ENV:Header>
            <wsse:Security
                xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
                xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsu:Timestamp>
                    <wsu:Created>2010-06-02T14:40:34Z</wsu:Created>
                    <wsu:Expires>2010-06-02T14:45:34Z</wsu:Expires>
                </wsu:Timestamp>
                <wsse:UsernameToken>
                    <wsse:Username>XXX</wsse:Username>
                    <wsse:Password
                        Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
                    <wsse:Nonce>XXX</wsse:Nonce>
                    <wsu:Created>2010-06-02T14:40:34Z</wsu:Created>
                </wsse:UsernameToken>
            </wsse:Security>
        </SOAP-ENV:Header>
        <SOAP-ENV:Body>
            <UpdateRequest
                xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Options/>
                <ns1:Objects
                    xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI"
                    xsi:type="ns1:DataFolder">
                    <ns1:ModifiedDate
                        xsi:nil="true"/>
                    <ns1:ID>705821</ns1:ID>
                    <ns1:ObjectID xsi:nil="true"/>
                    <ns1:Name>changing the foldername</ns1:Name>
                    <ns1:ContentType>email</ns1:ContentType>
                    <ns1:IsEditable>true</ns1:IsEditable>
                    <ns1:AllowChildren>true</ns1:AllowChildren>
                </ns1:Objects>
            </UpdateRequest>
        </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
```

##### SOAP Response

```
<?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
        xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
        xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <soap:Header>
            <wsa:Action>UpdateResponse</wsa:Action>
            <wsa:MessageID>urn:uuid:88320e26-abd4-49d2-b7f2-6494ab778856</wsa:MessageID>
            <wsa:RelatesTo>urn:uuid:92d0f682-2f2b-484a-a5af-a700fb44899a</wsa:RelatesTo>
            <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
            <wsse:Security>
                <wsu:Timestamp
                    wsu:Id="Timestamp-a3104331-a8c4-43a3-bcbd-4d3ecebcdee9">
                    <wsu:Created>2010-06-02T14:40:34Z</wsu:Created>
                    <wsu:Expires>2010-06-02T14:45:34Z</wsu:Expires>
                </wsu:Timestamp>
            </wsse:Security>
        </soap:Header>
        <soap:Body>
            <UpdateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Results>
                    <StatusCode>OK</StatusCode>
                    <StatusMessage>Folder updated successfully.</StatusMessage>
                    <OrdinalID>0</OrdinalID>
                </Results>
                <RequestID>df6468d2-f3bc-4975-a441-c396f2dead24</RequestID>
                <OverallStatus>OK</OverallStatus>
            </UpdateResponse>
        </soap:Body>
    </soap:Envelope>
```

#### Delete Folders

##### SOAP Request

```
<?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <SOAP-ENV:Header>
            <wsse:Security
                xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
                xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsu:Timestamp>
                    <wsu:Created>2010-06-02T14:41:07Z</wsu:Created>
                    <wsu:Expires>2010-06-02T14:46:07Z</wsu:Expires>
                </wsu:Timestamp>
                <wsse:UsernameToken>
                    <wsse:Username>XXX</wsse:Username>
                    <wsse:Password
                        Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
                    <wsse:Nonce>XXX</wsse:Nonce>
                    <wsu:Created>2010-06-02T14:41:07Z</wsu:Created>
                </wsse:UsernameToken>
            </wsse:Security>
        </SOAP-ENV:Header>
        <SOAP-ENV:Body>
            <DeleteRequest
                xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Options/>
                <ns1:Objects
                    xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI"
                    xsi:type="ns1:DataFolder">
                    <ns1:ModifiedDate
                    xsi:nil="true"/>
                    <ns1:ID>705821</ns1:ID>
                    <ns1:ObjectID xsi:nil="true"/>
                </ns1:Objects>
            </DeleteRequest>
        </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>
```

##### SOAP Response

```
<?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
        xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
        xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <soap:Header>
            <wsa:Action>DeleteResponse</wsa:Action>
            <wsa:MessageID>urn:uuid:20a68e8b-8ab2-42ef-9dc4-5d4aead5bddd</wsa:MessageID>
            <wsa:RelatesTo>urn:uuid:d29c9e94-209e-4acb-9ef9-af44886f94ed</wsa:RelatesTo>
            <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
            <wsse:Security>
                <wsu:Timestamp
                    wsu:Id="Timestamp-957bf0a1-765e-4d66-a0a8-fab49af86931">
                    <wsu:Created>2010-06-02T14:41:06Z</wsu:Created>
                    <wsu:Expires>2010-06-02T14:46:06Z</wsu:Expires>
                </wsu:Timestamp>
            </wsse:Security>
        </soap:Header>
        <soap:Body>
            <DeleteResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
                <Results>
                    <StatusCode>OK</StatusCode>
                    <StatusMessage>Folder deleted successfully.</StatusMessage>
                    <OrdinalID>0</OrdinalID>
                </Results>
                <RequestID>a71aa629-64d8-4326-a26e-97a7a928dba5</RequestID>
                <OverallStatus>OK</OverallStatus>
            </DeleteResponse>
        </soap:Body>
    </soap:Envelope>
```
