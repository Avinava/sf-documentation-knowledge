---
title: "SOAP API Examples"
domain: caf-dev-guide
topic: soap-api-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.253Z
estimatedTokens: 415
keywords: [SOAP, API, Examples, record, Custom, Address, data, New, Account]
---

# SOAP API Examples

> Use SOAP API to create, update, or delete a record with Custom Address Fields
        data.

# SOAP API Examples

Use SOAP API to create, update, or delete a record with Custom Address Fields data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

Before you create a custom address field, review the [Custom Address Fields Requirements and Limitations](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm "Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature."). To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

## Create a New Account with Data in a Custom Address Field

This example creates an Account record which includes address data stored in the Mailing Address custom address field.

```

```

## Update Data Within a Custom Address Field on a Record

This example updates the data stored in the Mailing Address custom address field for record ID 001XXXXXXXXXXXXXXX.

```

```

## Delete Data Within a Custom Address Field from a Record

To delete address data stored within a custom address field on a record, update the record. This example deletes the address stored in the Mailing Address custom address field on the Account with record with ID 001XXXXXXXXXXXXXXX.

```

```

## Delete a Record That Contains Data in a Custom Address Field

This example deletes the Account record with ID 001XXXXXXXXXXXXXXX. When a record is deleted, all data for that record is deleted, including the custom address field information.

```

```

## Code Examples

```
<?xml version="1.0" encoding="utf-8"?> 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:urn="urn:enterprise.soap.sforce.com"
    xmlns:urn1="urn:sobject.enterprise.soap.sforce.com"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <urn:SessionHeader>
            <urn:sessionId>$0XXXXXXXXXXXXXXX</urn:sessionId>
        </urn:SessionHeader>
    </soapenv:Header>
    <soapenv:Body> 
        <urn:create>
            <urn:sObjects xsi:type="urn1:Account"> <!--Zero or more repetitions:-->
                <Name>Puneet Ahmedabad Account</Name>
                <Mailing_Address__City__s>Ahmedabad</Mailing_Address__City__s>
                <Mailing_Address__Street__s>102 Suryakoti</Mailing_Address__Street__s>
                <Mailing_Address__PostalCode__s>380022</Mailing_Address__PostalCode__s>
                <Mailing_Address__StateCode__s>GJ</Mailing_Address__StateCode__s>
                <Mailing_Address__CountryCode__s>IN</Mailing_Address__CountryCode__s>
                <Mailing_Address__Latitude__s>37.775</Mailing_Address__Latitude__s>
                <Mailing_Address__Longitude__s>-122.418</Mailing_Address__Longitude__s>
            </urn:sObjects>
        </urn:create> 
    </soapenv:Body> 
</soapenv:Envelope>
```

```
<?xml version="1.0" encoding="utf-8"?>   
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:urn="urn:enterprise.soap.sforce.com"
    xmlns:urn1="urn:sobject.enterprise.soap.sforce.com"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <urn:SessionHeader>
            <urn:sessionId>$0XXXXXXXXXXXXXXX</urn:sessionId>
        </urn:SessionHeader>
    </soapenv:Header>
    <soapenv:Body> 
        <urn:update>
            <urn:sObjects xsi:type="urn1:Account">
                <Id>$001XXXXXXXXXXXXXXX</Id>
                <Mailing_Address__Street__s>20 Udhyog Nagar</Mailing_Address__Street__s>
                <Mailing_Address__City__s>Surendranagar</Mailing_Address__City__s>
                <Mailing_Address__PostalCode__s>363001</Mailing_Address__PostalCode__s>
                <Mailing_Address__StateCode__s>GJ</Mailing_Address__StateCode__s>
                <Mailing_Address__CountryCode__s>IN</Mailing_Address__CountryCode__s>
                <Mailing_Address__Latitude__s>22.757580</Mailing_Address__Latitude__s>
                <Mailing_Address__Longitude__s>71.619350</Mailing_Address__Longitude__s>
            </urn:sObjects>
        </urn:update>
    </soapenv:Body>
</soapenv:Envelope>
```

```
<?xml version="1.0" encoding="utf-8"?>   
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:urn="urn:enterprise.soap.sforce.com"
    xmlns:urn1="urn:sobject.enterprise.soap.sforce.com"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <urn:SessionHeader>
            <urn:sessionId>$0XXXXXXXXXXXXXXX</urn:sessionId>
        </urn:SessionHeader>
    </soapenv:Header>
    <soapenv:Body> 
        <urn:update>
            <urn:sObjects xsi:type="urn1:Account">
                <Id>$001XXXXXXXXXXXXXXX</Id>
                <Name>Acc updated</Name>
                <urn:fieldsToNull>Mailing_Address__Street__s</urn:fieldsToNull>
                <urn:fieldsToNull>Mailing_Address__City__s</urn:fieldsToNull>
                <urn:fieldsToNull>Mailing_Address__PostalCode__s</urn:fieldsToNull>
                <urn:fieldsToNull>Mailing_Address__StateCode__s</urn:fieldsToNull>
                <urn:fieldsToNull>Mailing_Address__CountryCode__s</urn:fieldsToNull>
                <urn:fieldsToNull>Mailing_Address__Latitude__s</urn:fieldsToNull>
                <urn:fieldsToNull>Mailing_Address__Longitude__s</urn:fieldsToNull>
            </urn:sObjects>
        </urn:update>
    </soapenv:Body>
</soapenv:Envelope>
```

```
<?xml version="1.0" encoding="utf-8"?>   
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:urn="urn:enterprise.soap.sforce.com"
    xmlns:urn1="urn:sobject.enterprise.soap.sforce.com"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <urn:SessionHeader>
           <urn:sessionId>$0XXXXXXXXXXXXXXX</urn:sessionId>
        </urn:SessionHeader>
  </soapenv:Header>
  <soapenv:Body> 
      <urn:delete>
          <Id>$001XXXXXXXXXXXXXXX</Id>
      </urn:delete> 
   </soapenv:Body>
</soapenv:Envelope>
```

## Related Topics

- Custom Address Fields Requirements and Limitations (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm)
