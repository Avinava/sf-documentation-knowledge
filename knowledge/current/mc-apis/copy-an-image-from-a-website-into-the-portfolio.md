---
title: "Copy an Image from a Website into the Portfolio"
domain: mc-apis
topic: copy-an-image-from-a-website-into-the-portfolio
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.892Z
estimatedTokens: 777
keywords: [Copy, Image, Website, Portfolio, images, documents, directly, off, directory, there, emails, landing, pages, Items, uploaded, Akamai, until, IsUploaded, Sample, NET, Code, SOAP, Envelope]
---

> Portfolio images or documents can be read directly off of a public website into a Portfolio directory. From there, you can use the image in your emails or landing pages. Items are not uploaded to Akamai until the IsUploaded property is True.

# Copy an Image from a Website into the Portfolio

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

Portfolio images or documents can be read directly off of a public website into a Portfolio directory. From there, you can use the image in your emails or landing pages. Items are not uploaded to Akamai until the IsUploaded property is True.

Be sure to transfer only those images that you have explicit permission to use in your emails or landing pages.

Use the sample code below as an example to construct your own call to copy an image from a website into the Portfolio.

### Sample .NET Code

```
// Instantiate a Portfolio object
Portfolio p = new Portfolio();
p.Source = new ResourceSpecification();
p.Source.URN = "http://email.exacttarget.com/ETWeb/images/exactTargetLogo.jpg";
// Create the Portfolio object
CreateResult[] results = integrationFramework.Create(null, new APIObject[] { p }, out requestID, out status);
// Output the results
Console.WriteLine(status);
Console.WriteLine(results[0].ErrorCode);
Console.WriteLine(results[0].StatusCode);
Console.WriteLine(results[0].StatusMessage);
```

### Output

```
OK 0 OK Media item queued for upload
```

### Sample SOAP Envelope

```
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Header>
      <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
         <wsse:UsernameToken>
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </SOAP-ENV:Header>
   <SOAP-ENV:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <ns1:Objects xsi:type="ns1:Portfolio" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <ns1:PartnerKey xsi:nil="true"/>
            <ns1:ModifiedDate xsi:nil="true"/>
            <ns1:ObjectID xsi:nil="true"/>
            <ns1:CustomerKey/>
            <ns1:Source>
               <ns1:PartnerKey xsi:nil="true"/>
               <ns1:ModifiedDate xsi:nil="true"/>
               <ns1:ObjectID xsi:nil="true"/>
               <ns1:URN>http://email.exacttarget.com/ETWeb/images/exactTargetLogo.jpg</ns1:URN>
            </ns1:Source>
            <ns1:FileName>exactTargetLogo.jpg</ns1:FileName>
         </ns1:Objects>
      </CreateRequest>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

## Related Items

[REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
