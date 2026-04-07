---
title: "Create a List-Based Email Send Workflow"
domain: mc-apis
topic: create-a-list-based-email-send-workflow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.159Z
estimatedTokens: 5091
keywords: [List-Based, Email, Send, Workflow, conceptual, procedural, creating, Marketing, Cloud, SOAP, API, put, together, Why, Campaign, How, Process, Envelopes, Import, Subscribers, Retrieve, Defintion, Tie, Start, Definition, Check, Status]
---

> This page contains conceptual and procedural information on creating a list-based email send using the Marketing Cloud SOAP API. You can use this workflow to put together all of the elements in a list-based email send.

# Create a List-Based Email Send Workflow

This page contains conceptual and procedural information on creating a list-based email send using the Marketing Cloud SOAP API. You can use this workflow to put together all of the elements in a list-based email send.

## Why Create a List-Based Email Send Campaign

A list-based email send campaign takes a previously created email message and sends that message out to list of subscribers who have opted in to receive such emails.

## How To Create a List-Based Email Send Campaign

Use the flow chart and sample code as an example of how to create and order the processes necessary for the list-based email campaign.

### List-Based Email Send Workflow Process

![listbasedsendemailcampaign.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Flistbasedsendemailcampaign.jpg&folder=mc-apis)

### SOAP Envelopes to Import Subscribers to List and Send Email

This section includes sample code you can use to create a list-based email send.

#### SOAP Request to Retrieve List

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-24440876"xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurityutility-1.0.xsd">
                <wsse:Username>***********</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">***********</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <RetrieveRequest>
                <ObjectType>List</ObjectType>
                <Properties>ID</Properties>
                <Filter xsi:type="ns1:SimpleFilterPart"xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
                    <Property>ListName</Property>
                    <SimpleOperator>equals</SimpleOperator>
                    <Value>Sample_List</Value>
                </Filter>
            </RetrieveRequest>
        </RetrieveRequestMsg>
    </soapenv:Body>
</soapenv:Envelope>
```

#### SOAP Response for Retrieve

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecuritysecext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>RetrieveResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:80c72cc6-c586-4fa4-856f-3530eee98072</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:bd93b8a4-f973-44c3-94d8-d06620d7117b</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
            <wsse:Security>
                <wsu:Timestamp wsu:Id="Timestamp-e918cece-9709-4dd2-a94e-d55018ec57aa">
                    <wsu:Created>2009-10-27T18:27:51Z</wsu:Created>
                    <wsu:Expires>2009-10-27T18:32:51Z</wsu:Expires>
                </wsu:Timestamp>
            </wsse:Security>
    </soap:Header>
    <soap:Body>
        <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <OverallStatus>OK</OverallStatus>
            <RequestID>49d17e84-c178-408d-97b4-90a17890e2df</RequestID>
            <Results xsi:type="List">
                <ID>123</ID> //List ID
                <ObjectID xsi:nil="true"/>
            </Results>
        </RetrieveResponseMsg>
    </soap:Body>
</soap:Envelope>
```

#### SOAP Request to Create an Import Defintion and Tie It to a List

Before doing this, place a file containing your subscriber information in the Import directory under your FTP site.

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xmlns:xsd="http://www.w3.org/2001/XMLSchema"xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecuritysecext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>Create</wsa:Action>
        <wsa:MessageID>urn:uuid:e133baeb-0ea6-48c4-97a2-a35259159789</wsa:MessageID>
        <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsse:Security soap:mustUnderstand="1">
            <wsse:UsernameToken wsu:Id="SecurityToken-cfa5c193-106c-42b5-80fc-2f1bd831e480">
                <wsse:Username>***********</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">***********</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options/>
            <Objects xsi:type="ImportDefinition">
                <CustomerKey>SAP_IMP_KEY_1</CustomerKey>---------? Customer Key (User Defined)
                <Name>SAP_IMP_1</Name>
                <Description>Import to SAP Sample List</Description>
                <DestinationObject xsi:type="List">
                    <ID>123</ID> ------------------------? List ID
                    <ObjectID xsi:nil="true"/>
                </DestinationObject>
                <FieldMappingType>MapByOrdinal</FieldMappingType>
                <FieldMaps>
                    <FieldMap>
                        <SourceOrdinal>0</SourceOrdinal>
                        <DestinationName>ID</DestinationName> ------------------------? Field Name
                    </FieldMap>
                    <FieldMap>
                        <SourceOrdinal>1</SourceOrdinal>
                        <DestinationName>NAME_FIRST</DestinationName>
                    </FieldMap>
                    <FieldMap>
                        <SourceOrdinal>2</SourceOrdinal>
                        <DestinationName>NAME_LAST</DestinationName>
                    </FieldMap>
                        <FieldMap>
                            <SourceOrdinal>3</SourceOrdinal>
                            <DestinationName>TITLE_TEXT</DestinationName>
                        </FieldMap>
                        <FieldMap>
                            <SourceOrdinal>4</SourceOrdinal>
                            <DestinationName>Email Address</DestinationName>
                        </FieldMap>
                    </FieldMaps>
                    <FileSpec>SAP_List.csv</FileSpec>-----------------? File Name with Subscribers
                    <FileType>CSV</FileType>
                    <Notification>
                        <ResponseType>email</ResponseType>
                        <ResponseAddress>help@example.com</ResponseAddress>
                    </Notification>
                    <RetrieveFileTransferLocation>
                        <ObjectID xsi:nil="true"/> ------------------------? Marketing Cloud Enhanced FTP site, Import Directory alias Key
                        <CustomerKey>ExactTarget Enhanced FTP</CustomerKey>
                    </RetrieveFileTransferLocation>
                <UpdateType>AddAndUpdate</UpdateType>
            </Objects>
        </CreateRequest>
    </soap:Body>
</soap:Envelope>
```

#### SOAP Response to Create Import Defintion

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurityutility-1.0.xsd">
    <soap:Header>
        <wsa:Action>CreateResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:bf33eaea-ec2d-47f5-9bc7-e878a1ce6004</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:e133baeb-0ea6-48c4-97a2-a35259159789</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsse:Security>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <CreateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Results>
                <StatusCode>OK</StatusCode> ----------? Status as OK
                <StatusMessage>ImportDefinition created.</StatusMessage>
                <OrdinalID>0</OrdinalID>
                <NewID>0</NewID>
                <NewObjectID>b026fa12-28c3-de11-8abe-001cc494a3a4</NewObjectID>
                <Object xsi:type="ImportDefinition">
                        <ObjectID>b026fa12-28c3-de11-8abe-001cc494a3a4</ObjectID>
                        <CustomerKey>SAP_IMP_KEY_1</CustomerKey>
                        <Name>SAP_IMP_1</Name>
                        <Description>Import to SAP Sample List</Description>
                        <DestinationObject xsi:type="List">
                            <ID>1942713</ID>
                            <ObjectID xsi:nil="true"/>
                        </DestinationObject>
                        <FieldMappingType>MapByOrdinal</FieldMappingType>
                        <FieldMaps>
                            <FieldMap>
                                <SourceOrdinal>0</SourceOrdinal>
                                <DestinationName>ID</DestinationName>
                            </FieldMap>
                            <FieldMap>
                                <SourceOrdinal>1</SourceOrdinal>
                                <DestinationName>NAME_FIRST</DestinationName>
                            </FieldMap>
                            <FieldMap>
                                <SourceOrdinal>2</SourceOrdinal>
                                <DestinationName>NAME_LAST</DestinationName>
                            </FieldMap>
                            <FieldMap>
                                <SourceOrdinal>3</SourceOrdinal>
                                <DestinationName>TITLE_TEXT</DestinationName>
                            </FieldMap>
                            <FieldMap>
                                <SourceOrdinal>4</SourceOrdinal>
                                <DestinationName>Email Address</DestinationName>
                            </FieldMap>
                        </FieldMaps>
                        <FileSpec>SAP_List.csv</FileSpec>
                        <FileType>CSV</FileType>
                    <Notification>
                        <ResponseType>email</ResponseType>
                        <ResponseAddress>bgogineni@exacttarget.com</ResponseAddress>
                    </Notification>
                    <RetrieveFileTransferLocation>
                        <ObjectID xsi:nil="true"/>
                        <CustomerKey>ExactTarget Enhanced FTP</CustomerKey>
                    </RetrieveFileTransferLocation>
                    <UpdateType>AddAndUpdate</UpdateType>
                </Object>
            </Results>
            <RequestID>295f0445-c04b-4611-97bd-48951b59283c</RequestID>
            <OverallStatus>OK</OverallStatus>
        </CreateResponse>
    </soap:Body>
</soap:Envelope>
```

#### SOAP Request to Start Import Definition

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xmlns:xsd="http://www.w3.org/2001/XMLSchema"xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurityutility-1.0.xsd">
    <soap:Header>
        <wsa:Action>Perform</wsa:Action>
        <wsa:MessageID>urn:uuid:30ffce73-2bdc-422a-b3da-1e71e3f15270</wsa:MessageID>
        <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsse:Security soap:mustUnderstand="1">
            <wsse:UsernameToken wsu:Id="SecurityToken-4c1eed3b-75ee-4d19-8712-731028aaad77">
                <wsse:Username>***********</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wssusername-token-profile-1.0#PasswordText">***********</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Action>start</Action>
            <Options></Options>
            <Definitions>
                <Definition xsi:type="ImportDefinition">
                    <CustomerKey>SAP_IMP_KEY_1</CustomerKey>-------? CustomerKey to Start Import
                </Definition>
            </Definitions>
        </PerformRequestMsg>
    </soap:Body>
</soap:Envelope>
```

#### SOAP Response to Start Import Defintion

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xmlns:xsd="http://www.w3.org/2001/XMLSchema"xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurityutility-1.0.xsd">
    <soap:Header>
        <wsa:Action>PerformResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:e02e8608-a21c-4a18-937c-c2e71d11bf25</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:30ffce73-2bdc-422a-b3da-1e71e3f15270</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsse:Security>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <PerformResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Results>
                <Result>
                    <StatusCode>OK</StatusCode>
                    <StatusMessage>ImportDefinition performed AsyncID:129159023</StatusMessage>
                    <Object xsi:type="ImportDefinition">
                        <ObjectID xsi:nil="true"/>
                        <CustomerKey>SAP_IMP_KEY_1</CustomerKey>
                    </Object>
                    <Task>
                        <StatusCode>OK</StatusCode>
                        <StatusMessage>OK</StatusMessage>
                        <ID>129159023</ID> -----? TaskId of Process used to check status later
                        <InteractionObjectID>5e1ad037-29c3-de11-8abe-001cc494a3a4</InteractionObjectID>
                    </Task>
                </Result>
            </Results>
            <OverallStatus>OK</OverallStatus>
            <OverallStatusMessage/>
            <RequestID>bda5a2c0-2647-418a-859b-06c717046037</RequestID>
        </PerformResponseMsg>
    </soap:Body>
</soap:Envelope>
```

#### SOAP Request to Check Status of Import Start

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-32259181" xmlns:wsu="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>***********</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wssusername-token-profile-1.0#PasswordText">***********</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <RetrieveRequest>
                <ObjectType>ImportResultsSummary</ObjectType>
                <Properties>ImportDefinitionCustomerKey</Properties>
                <Properties>ImportType</Properties>
                <Properties>ImportStatus</Properties>
                <Properties>DestinationID</Properties>
                <Properties>NumberSuccessful</Properties>
                <Filter xsi:type="ns1:SimpleFilterPart"xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
                    <Property>TaskResultID</Property>
                    <SimpleOperator>equals</SimpleOperator>
                    <Value>129159023</Value>
                </Filter>
                <QueryAllAccounts>true</QueryAllAccounts>
            </RetrieveRequest>
        </RetrieveRequestMsg>
    </soapenv:Body>
</soapenv:Envelope>
```

#### SOAP Response to Check Status of Import Start

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xmlns:xsd="http://www.w3.org/2001/XMLSchema"xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurityutility-1.0.xsd">
    <soap:Header>
        <wsa:Action>RetrieveResponse</wsa:Action>
        <wsa:MessageID>urn:uuid:789c6fdf-def6-474b-85b9-1010202ebbfd</wsa:MessageID>
        <wsa:RelatesTo>urn:uuid:7a5b3270-b941-4784-8b17-f7e4792c541c</wsa:RelatesTo>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsse:Security>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <RetrieveResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <OverallStatus>OK</OverallStatus>
            <RequestID>50eb097d-bd01-43d3-9da5-7e28328ef41f</RequestID>
            <Results xsi:type="ImportResultsSummary">
                <ObjectID xsi:nil="true"/>
                <ImportDefinitionCustomerKey>SAP_IMP_KEY_1</ImportDefinitionCustomerKey>
                <DestinationID>1942713</DestinationID> --? List to where we imported
                <NumberSuccessful>1</NumberSuccessful>
                <ImportType>Subscriber List</ImportType>
                <ImportStatus>Completed</ImportStatus> --? Status Completed, if error you havecheck FTP for details.
            </Results>
        </RetrieveResponseMsg>
    </soap:Body>
</soap:Envelope>
```

#### SOAP Request to Send Email to List

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"xmlns:xsd="http://www.w3.org/2001/XMLSchema"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-6270795" xmlns:wsu="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>***********</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wssusername-token-profile-1.0#PasswordText">***********</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options/>
            <Objects xsi:type="ns1:Send" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
                <Email>
                    <ID>123</ID> -----> Email ID
                </Email>
                <List>
                    <ID>123</ID> --? List-ID where subscribers are imported
                </List>
            </Objects>
        </CreateRequest>
    </soapenv:Body>
</soapenv:Envelope>
```
