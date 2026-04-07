---
title: "Perform a Data Extract"
domain: mc-apis
topic: perform-a-data-extract
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.132Z
estimatedTokens: 5496
keywords: [Perform, Extract, performing, SOAP, API, Why, How, Activity, Sample, NET, Code, PHP, Java, Axis, 1.4, Envelope, Extension, Items]
---

> This page contains information  about performing a data extract using the SOAP API.

# Perform a Data Extract

This page contains information about performing a data extract using the SOAP API.

## Why Perform a Data Extract

You can use a data extract to pull information from your Marketing Cloud account and place it in a file on an FTP site for use in a different system (such as a web analytics tool).

## How to Perform a Tracking Data Extract Activity

Use the code below as a model to construct your own API call. Note that the ExtractRequest ID can be obtained by performing a Retrieve call on the ExtractDescription object. This call returns all possible IDs for the extracts available to your account.

### Sample .NET Code

```apex
public void RequestDataExtract()
        {
            SoapClient framework = new SoapClient();
            framework.ClientCredentials.UserName.UserName = "XXXX";
            framework.ClientCredentials.UserName.Password = "XXXX";
            ExtractRequest request = new ExtractRequest();
            ExtractRequest[] requests = new ExtractRequest[1];
            List<ExtractParameter> extractParameters = new List<ExtractParameter>();
            ExtractParameter extractParam = null;
            ExtractResult[] responses;
            request = new ExtractRequest();
            requests = new ExtractRequest[1];
            extractParameters = new List<ExtractParameter>();
            // This is a constant value used to identify the desired extract.  This is required.  This values is for "Tracking Extract"
            request.ID = "c7219016-a7f0-4c72-8657-1ec12c28a0db";
            extractParam = new ExtractParameter();
            extractParam.Name = "StartDate";
            extractParam.Value = Convert.ToDateTime("2009-09-12").ToString();
            extractParameters.Add(extractParam);
            DateTime endDateTime = Convert.ToDateTime("2009-09-18");
            extractParam = new ExtractParameter();
            extractParam.Name = "EndDate";
            extractParam.Value = endDateTime.ToString();
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractOpens";
            extractParam.Value = "true";   // Get opens, set to false to not return opens
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractClicks";
            extractParam.Value = "true"; // Get clicks, set to false to not return clicks\
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractSent";
            extractParam.Value = "true"; // Get sent events, set to false to not return sent envents
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractUnsubs";
            extractParam.Value = "true";  // Get unsubscribes, set to false to not return unsubscribes.
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractConversions";
            extractParam.Value = "false";  // Get conversion events, set to false to not return conversions.
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractSurveyResponses";
            extractParam.Value = "false";  // Get survey respones, set to false to not return survey respones.
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractBounces";
            extractParam.Value = "true";  // Get bounces, set to false to not reutrn bounces.
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractSubscribers";
            extractParam.Value = "true";  // Get subscribers, set to false to not return subscribers.
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "ExtractSendJobs";
            extractParam.Value = "true";  // Get sends, set to false to not return sends
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "QuoteText";
            extractParam.Value = "true";  // Quote the text
            extractParameters.Add(extractParam);
            extractParam = new ExtractParameter();
            extractParam.Name = "OutputFileName";
            extractParam.Value = String.Format("tracking_test.zip");
            extractParameters.Add(extractParam);
            request.Parameters = extractParameters.ToArray();
            requests[0] = request;
            string requestID = String.Empty;
            string overallResult = String.Empty;
            overallResult = framework.Extract(requests, out requestID, out responses);
            Console.WriteLine(String.Format("{0} - [{1}] {2}", overallResult, responses[0].ErrorCode, responses[0].ErrorCode));
    }
```

### Sample PHP Code

```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'xxx';
        $client->password = 'xxx';

            $er = new Marketing Cloud_ExtractRequest();
            $er->ID = "c7219016-a7f0-4c72-8657-1ec12c28a0db";
            $er->Parameters =  array();
            $ep1 = new Marketing Cloud_APIProperty();
            $ep1->Name = "StartDate";
            $ep1->Value = "8/12/2010 12:00:00 AM";
            $er->Parameters[] = $ep1;
            $ep2 = new Marketing Cloud_APIProperty();
            $ep2->Name = "EndDate";
            $ep2->Value = "8/14/2010 12:00:00 AM";
            $er->Parameters[] = $ep2;
            $ep3 = new Marketing Cloud_APIProperty();
            $ep3->Name = "ExtractSent";
            $ep3->Value = "true";
            $er->Parameters[] = $ep3;
            $ep4 = new Marketing Cloud_APIProperty();
            $ep4->Name = "OutputFileName";
            $ep4->Value = "PHP data extract.zip";
            $er->Parameters[] = $ep4;
            $ep5 = new Marketing Cloud_APIProperty();
            $ep5->Name = "Format";
            $ep5->Value = "csv";
            $er->Parameters[] = $ep5;
        $er->Options = NULL;
            $erm = new Marketing Cloud_ExtractRequestMsg();
            $erm->Requests =  array();
            $erm->Requests[] = $er;

        $results = $client->Extract($erm);
            var_dump($results);
} catch (SoapFault $e) {
    var_dump($e);
}
?>
```

### Sample Java Code (Axis 1.4)

```apex
public void testExtractDataFromETSystem() throws RemoteException {
        Soap_PortType soap_portType = init();
        ExtractRequest request = new ExtractRequest();
        ArrayList<ExtractParameter> extractParameters = new ArrayList();
        ExtractParameter extractParam = null;
        extractParam = new ExtractParameter();
        extractParam.setName("ExtractClicks");
        extractParam.setValue("true");
        extractParameters.add(extractParam);
        extractParam = new ExtractParameter();
        extractParam.setName("ExtractBounces");
        extractParam.setValue("true");
        extractParameters.add(extractParam);
        extractParam = new ExtractParameter();
        extractParam.setName("ExtractOpens");
        extractParam.setValue("true");
        extractParameters.add(extractParam);
        extractParam = new ExtractParameter();
        extractParam.setName("ExtractSubscribers");
        extractParam.setValue("true");
        extractParameters.add(extractParam);
        String datePattern = "MM/dd/yyyy KK:mm a";
        extractParam = new ExtractParameter();
        extractParam.setName("StartDate");
        Calendar start = Calendar.getInstance();
        start.set(2008, 05, 01, 0, 0);
        SimpleDateFormat dateFormat = new SimpleDateFormat(datePattern);
        String cd1 = dateFormat.format(start.getTime());
        extractParam.setValue(cd1);
        extractParameters.add(extractParam);
        extractParam = new ExtractParameter();
        extractParam.setName("EndDate");
        Calendar end = Calendar.getInstance();
        end.set(2009, 05, 01, 0, 0);
        String cd2 = dateFormat.format(end.getTime());
        extractParam.setValue(cd2);
        extractParameters.add(extractParam);
        extractParam = new ExtractParameter();
        extractParam.setName("OutputFileName");
        extractParam.setValue("tracking_october08.zip");
        extractParameters.add(extractParam);
        ExtractParameter[] parameters = extractParameters.toArray(new ExtractParameter[extractParameters.size()]);
        request.setParameters(parameters);
        request.setOptions(new ExtractOptions());
        request.setID("c7219016-a7f0-4c72-8657-1ec12c28a0db");
        ExtractRequest[] requests = new ExtractRequest[]{request};
        ExtractResponseMsg extractResult = soap_portType.extract(requests);
        System.out.println("Resposne ::: " + extractResult.getOverallStatus());
}
```

### Sample SOAP Envelope

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <Header>
       <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
   </Header>
   <Body>
      <ExtractRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Requests>
            <ID>c7219016-a7f0-4c72-8657-1ec12c28a0db</ID>
            <Parameters>
               <Parameter>
                  <Name>StartDate</Name>
                  <Value>10/26/2012 12:00:00 AM</Value>
               </Parameter>
               <Parameter>
                  <Name>EndDate</Name>
                  <Value>10/29/2015 12:00:00 AM</Value>
               </Parameter>
               <Parameter>
                  <Name>OutputFileName</Name>
                  <Value>ExampleTracking.zip</Value>
               </Parameter>
               <Parameter>
                  <Name>AccountIDs</Name>
                  <Value/>
               </Parameter>
               <Parameter>
                  <Name>Attributes</Name>
                  <Value/>
               </Parameter>
               <Parameter>
                  <Name>CharacterEncoding</Name>
                  <Value>Default</Value>
               </Parameter>
               <Parameter>
                  <Name>ColumnDelimiter</Name>
                  <Value>Default</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractAttributes</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractBounces</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractClickImpressions</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractClicks</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractConversions</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>extractListMembershipChanges</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>extractLists</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractNotSent</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractOpens</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractSendImpressions</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractSendJobImpressions</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractSendJobs</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractSent</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <Name>extractStatusChanges</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractSubscribers</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractSurveyResponses</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <Name>ExtractUnsubs</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <Name>Format</Name>
                  <Value>csv</Value>
               </Parameter>
               <Parameter>
                  <Name>IncludeAllListMembers</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>IncludeAllSubscribers</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>IncludeInferredOpens</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>IncludeMilliseconds</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>IncludeTestSends</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <Name>IncludeUnsubReason</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>QuoteText</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>SendIDs</Name>
                  <Value>12283113,12283120</Value>
               </Parameter>
               <Parameter>
                  <Name>TextQualifier</Name>
                  <Value/>
               </Parameter>
               <Parameter>
                  <Name>Timezone</Name>
                  <Value>1</Value>
               </Parameter>
               <Parameter>
                  <Name>UnicodeOutput</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>UseIDs</Name>
                  <Value>false</Value>
               </Parameter>
               <Parameter>
                  <Name>UseLocalTZinQuery</Name>
                  <Value>false</Value>
               </Parameter>
            </Parameters>
         </Requests>
      </ExtractRequestMsg>
   </Body>
</Envelope>
```

## How to Create a Data Extension Data Extract

Use the sample code below to construct a data extract to extract data from a data extension.

### Sample .NET Code

```apex
public static void ExtractDataExtension(SoapClient soapClient, string DataExtensionCustomerKey, string FileName) {
                ExtractRequest er = new ExtractRequest();
                er.ID = "bb94a04d-9632-4623-be47-daabc3f588a6";

                // Always set an StartDate to the value specified
                ExtractParameter epOne = new ExtractParameter();
                epOne.Name = "StartDate";
                epOne.Value = "1/1/1900 1:00:00 AM";

                // Always set an StartDate to the value specified
                ExtractParameter epTwo = new ExtractParameter();
                epTwo.Name = "EndDate";
                epTwo.Value = "1/1/1900 1:00:00 AM";

                // Always set an _Async to 0
                ExtractParameter epThree = new ExtractParameter();
                epThree.Name = "_AsyncID";
                epThree.Value = "0";

                ExtractParameter epFour = new ExtractParameter();
                epFour.Name = "OutputFileName";
                epFour.Value = FileName;

                ExtractParameter epFive = new ExtractParameter();
                epFive.Name = "DECustomerKey";
                epFive.Value = DataExtensionCustomerKey;

                ExtractParameter epSix = new ExtractParameter();
                epSix.Name = "HasColumnHeaders";
                epSix.Value = "true";

                er.Parameters = new ExtractParameter[] {epOne, epTwo, epThree, epFour, epFive, epSix };

                string sRequestId;
                string sStatus;
                ExtractResult[] results;
                sStatus = soapClient.Extract(new ExtractRequest[] { er }, out sRequestId, out results);

                Console.WriteLine("Status: " + sStatus);
                Console.WriteLine("Request ID: " + sRequestId);

                foreach (ExtractResult eresult in results)
                {
                                Console.WriteLine("StatusCode: " + eresult.StatusCode);
                                Console.WriteLine("ErrorCode: " + eresult.ErrorCode);
                                Console.WriteLine("StatusMessage: " + eresult.StatusMessage);
                }
}
```

### Sample PHP Code

```
<?php
require('../exacttarget_soap_client.php');
require('../creds.php');

try          {

                $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
                $client->username = $username;
                $client->password = $password;

                $er = new Marketing Cloud_ExtractRequest();
                $er->Options = NULL;
                $er->ID = "bb94a04d-9632-4623-be47-daabc3f588a6";
                $er->Parameters =  array();

                // Always set an StartDate to the value specified
                $ep1 = new Marketing Cloud_APIProperty();
                $ep1->Name = "StartDate";
                $ep1->Value = "1/1/1900 1:00:00 AM";
                $er->Parameters[] = $ep1;

                // Always set an EndDate to the value specified
                $ep2 = new Marketing Cloud_APIProperty();
                $ep2->Name = "EndDate";
                $ep2->Value = "1/1/1900 1:00:00 AM";
                $er->Parameters[] = $ep2;

                // Always set _AsyncID to 0
                $ep3 = new Marketing Cloud_APIProperty();
                $ep3->Name = "_AsyncID";
                $ep3->Value = "0";
                $er->Parameters[] = $ep3;

                $ep4 = new Marketing Cloud_APIProperty();
                $ep4->Name = "OutputFileName";
                $ep4->Value = "PHPExtractDE.csv";
                $er->Parameters[] = $ep4;

                $ep5 = new Marketing Cloud_APIProperty();
                $ep5->Name = "DECustomerKey";
                $ep5->Value = "Bademails";
                $er->Parameters[] = $ep5;

                $ep6 = new Marketing Cloud_APIProperty();
                $ep6->Name = "HasColumnHeaders";
                $ep6->Value = "true";
                $er->Parameters[] = $ep6;

                $erm = new Marketing Cloud_ExtractRequestMsg();
                $erm->Requests =  array();
                $erm->Requests[] = $er;

                $results = $client->Extract($erm);

                print_r($results);

} catch (SoapFault $e) {
                var_dump($e);
}
?>
```

### Sample SOAP Envelope

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-2517ad18-a6e9-4f38-98a9-184b30a59fb9-1">
            <o:Username>XXXXX</o:Username>
            <o:Password>XXXXX</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <ExtractRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Requests>
            <ID>bb94a04d-9632-4623-be47-daabc3f588a6</ID>
            <Parameters>
               <Parameter>
                  <Name>DECustomerKey</Name>
                  <Value>OrderHistory</Value>
               </Parameter>
               <Parameter>
                  <Name>HasColumnHeaders</Name>
                  <Value>true</Value>
               </Parameter>
               <Parameter>
                  <!--This parameter is required, always pass a value of 0-->
                  <Name>_AsyncID</Name>
                  <Value>0</Value>
               </Parameter>
               <Parameter>
                  <Name>OutputFileName</Name>
                  <Value>MyExtractFile.csv</Value>
               </Parameter>
               <Parameter>
                  <!--This parameter is required, always pass value shown below-->
                  <Name>StartDate</Name>
                  <Value>1/1/1900 1:00:00 AM</Value>
               </Parameter>
               <Parameter>
                  <!--This parameter is required, always pass value shown below-->
                  <Name>EndDate</Name>
                  <Value>1/1/1900 1:00:00 AM</Value>
               </Parameter>
            </Parameters>
         </Requests>
      </ExtractRequestMsg>
   </s:Body>
</s:Envelope>
```

## Related Items

-   [Retrieve Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
-   [ExtractDescription Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/extractdescription.htm)

## Related Topics

- Retrieve Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve.htm)
- ExtractDescription Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/extractdescription.htm)
