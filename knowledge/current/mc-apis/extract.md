---
title: "Extract"
domain: mc-apis
topic: extract
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.774Z
estimatedTokens: 1818
keywords: [Extract, package, Marketing, Cloud, FTP, site, Specify, File, Transfer, Location, intent, deliver, different, Sample, Java]
---

# Extract

> Use the Extract method to extract a package to the Marketing Cloud FTP site. Specify the File Transfer Location only when the intent is to deliver the file to a different FTP site.

# Extract

Use the Extract method to extract a package to the Marketing Cloud FTP site. Specify the File Transfer Location only when the intent is to deliver the file to a different FTP site.

> Marketing Cloud recommends extracting data during evening hours to decrease database impact.

## C# Syntax

```apex
System.String extract = Extract(Requests, RequestID, Results)
```

## Parameters

This method has the following parameters.

| Name | Data Type | Description |
| --- | --- | --- |
| RequestID | String | Marketing Cloud's unique identifier for every request. |
| Requests | ExtractRequest[] | The requests specifying execution properties for a method. |
| Results | ExtractResult[]& | The results of a method execution returned as an output parameter. |

### Sample Java Code in Java

This example extracts all sends from a Marketing Cloud account into a file named SendJobs and outputs the file as a ZIP file on the Marketing Cloud FTP site. The stubs in this example come from Axis 1.4.

```apex
/**
     * Program showing how to Extract Data From Marketing Cloud using Data Extract Feature
     *
     * Prerequisites.
     * 1) Enable Data_Extract permission in Marketing Cloud
     * 2) Enable Tracking Extract in Marketing Cloud
     * 3) Request ID to use for Extracting Data : c7219016-a7f0-4c72-8657-1ec12c28a0db
     * 4) Enable Enhanced FTP in Marketing Cloud
     */
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

### SOAP Request

```
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing"
xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
  <s:Header>
    <a:Action s:mustUnderstand="1">Extract</a:Action>
    <a:MessageID>urn:uuid:137067bb-1ec4-43e7-ba83-a183b94c7e47</a:MessageID>
    <ActivityId CorrelationId="001eee78-681b-4165-9364-9610316736bb"
    xmlns="http://schemas.microsoft.com/2004/09/ServiceModel/Diagnostics">
    e6c2db06-4440-4a6d-8e23-abc0c7ee0e64</ActivityId>
    <a:ReplyTo>
      <a:Address>
      http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
    </a:ReplyTo>
    <a:To s:mustUnderstand="1">
    https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
    <o:Security s:mustUnderstand="1"
    xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <o:UsernameToken u:Id="uuid-670c9c31-fc0e-40b9-8e1b-531f8bc5e7b0-1">
        <o:Username>username</o:Username>
        <o:Password>*******</o:Password>
      </o:UsernameToken>
    </o:Security>
  </s:Header>
  <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <ExtractRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
      <Requests>
        <!-- tracking extract -->
        <ID>c7219016-a7f0-4c72-8657-1ec12c28a0db</ID>
        <Parameters>
          <Parameter>
            <Name>StartDate</Name>
            <Value>4/1/2008 1:00:00 AM</Value>
          </Parameter>
          <Parameter>
            <Name>EndDate</Name>
            <Value>5/31/2009 1:00:00 AM</Value>
          </Parameter>
          <Parameter>
            <Name>ExtractBounces</Name>
            <Value>true</Value>
          </Parameter>
          <Parameter>
            <Name>ExtractClicks</Name>
            <Value>true</Value>
          </Parameter>
          <Parameter>
            <Name>ExtractConvers</Name>
            <Value>true</Value>
          </Parameter>
          <Parameter>
            <Name>ExtractOpens</Name>
            <Value>true</Value>
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
            <Name>ExtractSubscribers</Name>
            <Value>true</Value>
          </Parameter>
          <Parameter>
            <Name>ExtractSurveyResponse</Name>
            <Value>true</Value>
          </Parameter>
          <Parameter>
            <Name>ExtractUnsubs</Name>
            <Value>true</Value>
          </Parameter>
          <Parameter>
            <Name>QuoteText</Name>
            <Value>true</Value>
          </Parameter>
          <Parameter>
            <Name>OutputFileName</Name>
            <Value>trackinghistory.zip</Value>
          </Parameter>
        </Parameters>
      </Requests>
    </ExtractRequestMsg>
  </s:Body>
</s:Envelope>
```

### SOAP Response

```
<soap:Body>
    <ExtractResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
      <OverallStatus>OK</OverallStatus>
      <RequestID>03bc4f0a-5527-4b10-8743-f9456d7d8608</RequestID>
      <Results />
    </ExtractResponseMsg>
  </soap:Body>
</soap:Envelope>
```
