---
title: "Manage Data in Data Extensions"
domain: mc-apis
topic: manage-data-in-data-extensions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.826Z
estimatedTokens: 5569
keywords: [Retrieve, Upsert, Manage, Extensions, managing, via, SOAP, API, Why, How, Sample, PHP, Code, NET, Java, Axis, 1.4, Add, Items]
---

> This page contains information about managing data in data extensions via the SOAP API.

# Manage Data in Data Extensions

This page contains information about managing data in data extensions via the SOAP API.

## Why Manage Data in Data Extensions

Using the SOAP API to manage data in data extensions allows you to use data extensions in your interactions with Marketing Cloud while maintaining a tight integration with your system or development environment. Data contained within data extensions can be used to better target or exclude individual subscribers from mailing lists or store more data about subscribers for later use.

## How to Manage Data in Data Extensions

Use the sample code below as a model to construct your own API calls.

### Create

#### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try
{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'username';
        $client->password = 'password';
$DE = new Marketing Cloud_DataExtensionObject();
        $DE->CustomerKey="UpdateTest_Key";
        $apiProperty1 =new Marketing Cloud_APIProperty();
        $apiProperty1->Name="SubscriberKey";
        $apiProperty1->Value="PHP_DE_Key";
        $apiProperty2 =new Marketing Cloud_APIProperty();
        $apiProperty2->Name="EmailAddress";
        $apiProperty2->Value="help@example.com";
        $apiProperty3 =new Marketing Cloud_APIProperty();
        $apiProperty3->Name="Name";
        $apiProperty3->Value="PHP_Name";

        $apiProperty4 =new  Marketing Cloud_APIProperty();
        $apiProperty4->Name="PhoneNumber";
        $apiProperty4->Value="5555555555";

        $DE->Properties=array($apiProperty1,$apiProperty2,$apiProperty3,$apiProperty4);
        $object1 = new SoapVar($DE, SOAP_ENC_OBJECT, 'DataExtensionObject', "http://exacttarget.com/wsdl/partnerAPI");
        $request = new Marketing Cloud_CreateRequest();
        $request->Options = NULL;
        $request->Objects = array($object1);
        echo "break6: make request object<br>";
        //print_r($request);
        $results = $client->Create($request);
        var_dump($results);
} catch (SoapFault $e) {
    var_dump($e);
}
print "Request:
".
$client->__getLastRequestHeaders() ."
";
print "Request:
".
$client->__getLastRequest() ."
";
print "Response:
".
$client->__getLastResponseHeaders()."
";
print "Response:
".
$client->__getLastResponse()."
";
echo "complete";
?>
```

#### SOAP Request

```
<soap-ENV:Body>
      <ns1:CreateRequest>
         <ns1:Options/>
         <ns1:Objects xsi:type="ns1:DataExtensionObject">
            <ns1:CustomerKey>UpdateTest_Key</ns1:CustomerKey>
            <ns1:Properties>
               <ns1:Property>
                  <ns1:Name>SubscriberKey</ns1:Name>
                  <ns1:Value>PHP_DE_Key</ns1:Value>
               </ns1:Property>
               <ns1:Property>
                  <ns1:Name>EmailAddress</ns1:Name>
                  <ns1:Value>help@example.com</ns1:Value>
               </ns1:Property>
               <ns1:Property>
                  <ns1:Name>Name</ns1:Name>
                  <ns1:Value>PHP_Name</ns1:Value>
               </ns1:Property>
               <ns1:Property>
                  <ns1:Name>PhoneNumber</ns1:Name>
                  <ns1:Value>5555555555</ns1:Value>
               </ns1:Property>
            </ns1:Properties>
         </ns1:Objects>
      </ns1:CreateRequest>
   </SOAP-ENV:Body>
```

### Retrieve

#### Sample .NET Code

```
PartnerAPIWse proxy = DefaultProxy;
APIObject[] Results = null;
RetrieveRequest request = new RetrieveRequest();
SimpleFilterPart sfp = null;
string status = null;
string requestID = null;
request.ObjectType = "DataExtensionObject[RequestControlData]";
request.Properties = new string[] { "_CustomObjectKey", "RequestStatus", "RequestType", "RequestParameters" };
sfp = new etpf.SimpleFilterPart();
sfp.Property = "Status";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] { "Name" };
request.Filter = sfp;
```

#### Response

```
do
{
  status = proxy.Retrieve(request, out requestID, out Results);
  for (int i = 0; i < Results.Length; i++)
  {
     etpf.DataExtensionObject deo = Results[i] as etpf.DataExtensionObject;
     for (int j = 0; j < deo.Properties.Length; j++)
     {
        Console.Write(string.Format("{0}-{1}     ", deo.Properties[j].Name, deo.Properties[j].Value));
     }
     Console.WriteLine();
  }
  request = new etpf.RetrieveRequest();
  request.ContinueRequest = requestID;
} while (status.Equals("MoreDataAvailable"));
```

### Update

The sample code below demonstrates how to update values in a data extension. The data extension must have at least one primary column.

#### Sample .NET Code

The code below updates the name column using the PhoneNumber field (PhoneNumber is the primary key).

```apex
public void testUpdateValueInNameColumn(){
            string requestID;
            string status;
            DataExtensionObject de = new DataExtensionObject();
            de.CustomerKey = "UpdateTest_Key";
            de.Keys = new APIProperty[1];
            de.Keys[0] = new APIProperty();
            //Primary Key column
            de.Keys[0].Name = "PhoneNumber";
            de.Keys[0].Value = "5555555555";
            de.Properties = new APIProperty[1];
            de.Properties[0] = new APIProperty();
            de.Properties[0].Name = "Name";
            de.Properties[0].Value = "John Doe";
            UpdateOptions options = new UpdateOptions();
            options.SaveOptions = new SaveOption[] {new SaveOption()};
            options.SaveOptions[0].PropertyName = "DataExtensionObject";
            options.SaveOptions[0].SaveAction = SaveAction.UpdateAdd;
            UpdateResult[] results = soapClient.Update(options, new APIObject[] {de}, out requestID, out status);
            Console.Write("Test");
        }
```

#### Sample Java Code (Axis 1.4)

```apex
public void testUpdateDataInDE() throws RemoteException {
    Soap stub = init();
    //StatusField
    DataExtensionObject dataExtensionObject = new DataExtensionObject();
    dataExtensionObject.setCustomerKey("Test2_Key");
    APIProperty a1 = new APIProperty();//primary key in DE is EmailId Column
    a1.setName("EmailId");
    a1.setValue("help@example.com");
    dataExtensionObject.setKeys(new APIProperty[]{a1});
    APIProperty a2 = new APIProperty();  //Updating status field to  new value
    a2.setName("StatusField");
    a2.setValue("Active");
    dataExtensionObject.setProperties(new APIProperty[]{a2});

    UpdateOptions updateOptions = new UpdateOptions();
    SaveOption option = new SaveOption();
    option.setPropertyName("DataExtensionObject");
    option.setSaveAction(SaveAction.UpdateOnly);
    updateOptions.setSaveOptions(new SaveOption[]{option});
    UpdateRequest updateRequest = new UpdateRequest(updateOptions, new APIObject[]{dataExtensionObject});
    UpdateResponse updateResponse = stub.update(updateRequest);
    System.out.println("Response :: " + updateResponse.getOverallStatus());
}
public void testCreateDataExtension() throws RemoteException {
    Soap stub = init();
    DataExtensionField field3 = new DataExtensionField();
    field3.setName("UniqueKey");
    field3.setFieldType(DataExtensionFieldType.Text);
    dataExtension.setSendableDataExtensionField(field3);
    Attribute a = new Attribute();
    a.setName("Subscriber Key");
    a.setValue("");
    dataExtension.setSendableSubscriberField(a);
    DataExtensionField field4 = new DataExtensionField();
    field4.setName("EmailAddress");
    field4.setFieldType(DataExtensionFieldType.EmailAddress);
    dataExtension.setFields(new DataExtensionField[]{field1, field2, field3,field4});
      //  dataExtension.setTemplate(dataExtensionTemplate);
          dataExtension.setIsSendable(true);
    CreateRequest createRequest = new CreateRequest();
    createRequest.setObjects(new APIObject[]{dataExtension});
    createRequest.setOptions(new CreateOptions());
    CreateResponse createResponse = stub.create(createRequest);
    System.out.println("CreateResponse ::: " + createResponse.getOverallStatus());
}
```

#### PHP

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
       /* Create the Soap Client */
       $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'username';
        $client->password = 'password';
$DE = new Marketing Cloud_DataExtensionObject();
        $DE->CustomerKey="UpdateTest_Key";            //Same as external key in Marketing Cloud

     /*Update can happen only if you have PrimaryKey column.IN this Example PhoneNumber is primary Key in DataExtension*/
        $apiPropertyKey = new Marketing Cloud_APIProperty();
        $apiPropertyKey->Name="PhoneNumber";
        $apiPropertyKey->Value="5555555555";
        $DE->Keys[] = $apiPropertyKey;
        $apiProperty1 =new Marketing Cloud_APIProperty();
        $apiProperty1->Name="Name";
        $apiProperty1->Value="PHP_Name_New";
        $DE->Properties=array($apiProperty1);
        $object1 = new SoapVar($DE, SOAP_ENC_OBJECT, 'DataExtensionObject', "http://exacttarget.com/wsdl/partnerAPI");
        $updateOptions = new Marketing Cloud_UpdateOptions();
         /*% Marketing Cloud_SaveOption */
         $saveOption = new Marketing Cloud_SaveOption();
         $saveOption->PropertyName="DataExtensionObject";
         $saveOption->SaveAction=ExactTarget_SaveAction::UpdateAdd;
         $updateOptions->SaveOptions[] = new SoapVar($saveOption, SOAP_ENC_OBJECT, 'SaveOption', "http://exacttarget.com/wsdl/partnerAPI");
         // Apply options and object to request
         $request = new Marketing Cloud_UpdateRequest();
         $request->Options = $updateOptions;
         $request->Objects = array($object1);
         $results = $client->Update($request);

    } catch (SoapFault $e) {
    var_dump($e);
    }
    Print "Request:
".
    $client->__getLastRequestHeaders() ."
";
    print "Request:
".
    $client->__getLastRequest() ."
";
    print "Response:
".
    $client->__getLastResponseHeaders()."
";
    print "Response:
".
    $client->__getLastResponse()."
";
?>
```

#### SOAP Request

```
<s:Bodyxmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<UpdateRequestxmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options>
            </Options>
<Objectsxsi:type="DataExtensionObject">
                  <PartnerKey xsi:nil="true">
                  </PartnerKey>
                  <ObjectID xsi:nil="true">
                  </ObjectID>
                  <CustomerKey>Sandbox_DE</CustomerKey>
                  <Properties>
                        <Property>
                              <Name>PrimaryID</Name>
                              <Value>1</Value>
                        </Property>
                        <Property>
                              <Name>EmailAddress</Name>
                              <Value>acruz@example.com</Value>
                        </Property>
                        <Property>
                              <Name>FirstName</Name>
                              <Value>Angel</Value>
                        </Property>
                        <Property>
                              <Name>LastName</Name>
                              <Value>Cruz</Value>
                        </Property>
                  </Properties>
            </Objects>
</UpdateRequest>
</s:Body>
```

### Delete

As long as the data extension has a primary key, you can use the code below to delete the row. The code below represents a data extension with one primary key. If multiple primary keys exist, those fields would need to be specified.

```
string requestID;
string status;
DataExtensionObject de = new DataExtensionObject();
de.CustomerKey = "product_data_extension";
de.Keys = new APIProperty[1];
de.Keys[0] = new APIProperty();
de.Keys[0].Name = "item_name";
de.Keys[0].Value = "WhirlWind 6000";
DeleteOptions options = new DeleteOptions();
DeleteResult[] results = IntegrationFramework.Delete(options, new APIObject[] { de }, out requestID, out status);
```

### Upsert

This function updates existing information and inserts new information as necessary.

```
foreach (int issueId in bugs.Keys)
             {
                 DataExtensionObject row = new DataExtensionObject();
                 row.CustomerKey = "cr";
                 row.Properties = new APIProperty[10];
                 row.Properties[0] = new APIProperty();
                 row.Properties[0].Name = "ID";
                 row.Properties[0].Value = bugs[issueId].ID.ToString();
                 row.Properties[1] = new APIProperty();
                 row.Properties[1].Name = "Project";
                 row.Properties[1].Value = Request.QueryString["BG_USER_01"].Replace("'", "");
                 row.Properties[2] = new APIProperty();
                 row.Properties[2].Name = "Summary";
                 row.Properties[2].Value = bugs[issueId].Summary;
                 row.Properties[3] = new APIProperty();
                 row.Properties[3].Name = "Priority";
                 row.Properties[3].Value = bugs[issueId].Priority;
                 row.Properties[4] = new APIProperty();
                 row.Properties[4].Name = "Status";
                 row.Properties[4].Value = bugs[issueId].Status;
                 row.Properties[5] = new APIProperty();
                 row.Properties[5].Name = "AssignedTo";
                 row.Properties[5].Value = bugs[issueId].AssignedTo;
                 row.Properties[6] = new APIProperty();
                 row.Properties[6].Name = "DetectedBy";
                 row.Properties[6].Value = bugs[issueId].DetectedBy;
                 // Comments
                 if (bugs[issueId].Comments != null)
                 {
                     row.Properties[7] = new APIProperty();
                     row.Properties[7].Name = "Comments";
                     row.Properties[7].Value = bugs[issueId].Comments;
                 }
                 else
                 {
                     row.Properties[7] = new NullAPIProperty();
                     row.Properties[7].Name = "Comments";
                 }
                 // Description
                 if (bugs[issueId].Description != null)
                 {
                     row.Properties[8] = new APIProperty();
                     row.Properties[8].Name = "Description";
                     row.Properties[8].Value = bugs[issueId].Description;
                 }
                 else
                 {
                     row.Properties[8] = new NullAPIProperty();
                     row.Properties[8].Name = "Description";
                 }
                 // SalesforceID
                 if (bugs[issueId].SalesforceID != null)
                 {
                     row.Properties[9] = new APIProperty();
                     row.Properties[9].Name = "SalesforceID";
                     row.Properties[9].Value = bugs[issueId].SalesforceID.ToString();
                 }
                 else
                 {
                     row.Properties[9] = new NullAPIProperty();
                     row.Properties[9].Name = "SalesforceID";
                 }

                 objects.Add(row);

             }

             APIObject[] apiObjects = new APIObject[objects.Count];
             for(int i = 0; i<objects.Count; i++)
             {
                 apiObjects[i] = (APIObject)objects[i];
             }

             UpdateOptions uo = new UpdateOptions();
             uo.SaveOptions = new SaveOption[1];
             uo.SaveOptions[0] = new SaveOption();
             uo.SaveOptions[0].PropertyName = "DataExtensionObject";
             uo.SaveOptions[0].SaveAction = SaveAction.UpdateAdd;

             UpdateResult[] updateResults = et.Update(uo, apiObjects, out requestID, out status);
             Page.Controls.Add(new LiteralControl(String.Format("Update:{0}<br>",status)));

             objects = new ArrayList();
             foreach(UpdateResult uResult in updateResults)
             {
                 DataExtensionUpdateResult deur = (DataExtensionUpdateResult)uResult;
                 Page.Controls.Add(new LiteralControl(String.Format("Result[{0}]: {1} ({3}) - {2}<br>",deur.OrdinalID, deur.StatusCode, deur.StatusMessage, deur.ErrorCode)));
                 if (deur.KeyErrors != null)
                 {
                     foreach (DataExtensionError dee in deur.KeyErrors)
                     {
                         Page.Controls.Add(new LiteralControl(String.Format("Errors[{0}]: {1}: {2}<br>", dee.Name, dee.ErrorCode, dee.ErrorMessage)));
                     }
                 }
                 if (deur.ValueErrors != null)
                 {
                     foreach (DataExtensionError dee in deur.ValueErrors)
                     {
                         Page.Controls.Add(new LiteralControl(String.Format("Errors[{0}]: {1}: {2}<br>", dee.Name, dee.ErrorCode, dee.ErrorMessage)));
                     }
                 }
             }
```

#### SOAP Request

```
<soap:Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options>
            <SaveOptions>
               <SaveOption>
                  <PropertyName>DataExtensionObject</PropertyName>
                  <SaveAction>UpdateAdd</SaveAction>
               </SaveOption>
            </SaveOptions>
         </Options>
         <Objects xsi:type="DataExtensionObject">
            <CustomerKey>UpdateTest_Key</CustomerKey>
            <Keys>
               <Key>
                  <Name>PhoneNumber</Name>
                  <Value>5555555555</Value>
               </Key>
            </Keys>
            <Properties>
               <Property>
                  <Name>Name</Name>
                  <Value>John Doe</Value>
               </Property>
            </Properties>
         </Objects>
      </UpdateRequest>
   </soap:Body>
```

#### SOAP Response

```
<soap:Body>
      <UpdateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Results xsi:type="DataExtensionUpdateResult">
            <StatusCode>OK</StatusCode>
            <StatusMessage>Updated DataExtensionObject</StatusMessage>
            <OrdinalID>0</OrdinalID>
            <Object xsi:type="DataExtensionObject">
               <ObjectID xsi:nil="true"/>
               <CustomerKey>UpdateTest_Key</CustomerKey>
               <Properties>
                  <Property>
                     <Name>Name</Name>
                     <Value>John Doe</Value>
                  </Property>
               </Properties>
               <Keys>
                  <Key>
                     <Name>PhoneNumber</Name>
                     <Value>5555555555</Value>
                  </Key>
               </Keys>
            </Object>
         </Results>
         <RequestID>e3901f3a-c866-4227-a912-eafd4ff191d0</RequestID>
         <OverallStatus>OK</OverallStatus>
      </UpdateResponse>
```

### Add Data

#### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try
{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'username';
        $client->password = 'password';
$DE = new Marketing Cloud_DataExtensionObject();
        $DE->CustomerKey="UpdateTest_Key";                //Same as external key in Marketing Cloud
        $apiProperty1 =new Marketing Cloud_APIProperty();
        $apiProperty1->Name="SubscriberKey";
        $apiProperty1->Value="PHP_DE_Key";
        $apiProperty2 =new Marketing Cloud_APIProperty();
        $apiProperty2->Name="EmailAddress";
        $apiProperty2->Value="acruz@example.com";
        $apiProperty3 =new Marketing Cloud_APIProperty();
        $apiProperty3->Name="Name";
        $apiProperty3->Value="PHP_Name";

        $apiProperty4 =new  Marketing Cloud_APIProperty();
        $apiProperty4->Name="PhoneNumber";
        $apiProperty4->Value="5555555555";

        $DE->Properties=array($apiProperty1,$apiProperty2,$apiProperty3,$apiProperty4);
        $object1 = new SoapVar($DE, SOAP_ENC_OBJECT, 'DataExtensionObject', "http://exacttarget.com/wsdl/partnerAPI");
        $request = new Marketing Cloud_CreateRequest();
        $request->Options = NULL;
        $request->Objects = array($object1);
        echo "break6: make request object<br>";
        //print_r($request);
        $results = $client->Create($request);
        var_dump($results);
} catch (SoapFault $e) {
    var_dump($e);
}
print "Request:
".
$client->__getLastRequestHeaders() ."
";
print "Request:
".
$client->__getLastRequest() ."
";
print "Response:
".
$client->__getLastResponseHeaders()."
";
print "Response:
".
$client->__getLastResponse()."
";
echo "complete";
?>
```

### SOAP Request

```
<soap-ENV:Body>
      <ns1:CreateRequest>
         <ns1:Options/>
         <ns1:Objects xsi:type="ns1:DataExtensionObject">
            <ns1:CustomerKey>UpdateTest_Key</ns1:CustomerKey>
            <ns1:Properties>
               <ns1:Property>
                  <ns1:Name>SubscriberKey</ns1:Name>
                  <ns1:Value>PHP_DE_Key</ns1:Value>
               </ns1:Property>
               <ns1:Property>
                  <ns1:Name>EmailAddress</ns1:Name>
                  <ns1:Value>bgogineni@test.com</ns1:Value>
               </ns1:Property>
               <ns1:Property>
                  <ns1:Name>Name</ns1:Name>
                  <ns1:Value>PHP_Name</ns1:Value>
               </ns1:Property>
               <ns1:Property>
                  <ns1:Name>SSN</ns1:Name>
                  <ns1:Value>21321</ns1:Value>
               </ns1:Property>
            </ns1:Properties>
         </ns1:Objects>
      </ns1:CreateRequest>
   </SOAP-ENV:Body>
```

## Related Items

[Data Extensions](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
