---
title: "Apply Filter to Subscriber List"
domain: mc-apis
topic: apply-filter-to-subscriber-list
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.166Z
estimatedTokens: 568
keywords: [Apply, Filter, Subscriber, FilterActivity, associate, data, activity, automation, logic, select, group, subscribers, satisfy, criteria, Sample]
---

# Apply Filter to Subscriber List

> Use the FilterActivity object to associate a data filter to a filter activity to be used in an automation. A FilterActivity applies the logic of a data filter to a subscriber list you select to create a group of subscribers who satisfy the filter criteria.

# Apply Filter to Subscriber List

Use the FilterActivity object to associate a data filter to a filter activity to be used in an automation. A FilterActivity applies the logic of a data filter to a subscriber list you select to create a group of subscribers who satisfy the filter criteria.

### Sample SOAP Envelope

```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Header>
        <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsu:Timestamp>
            </wsu:Timestamp>
            <wsse:UsernameToken>
                <wsse:Username>XXXXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
                <wsse:Nonce>eSTcdVv9GBJGgiTLlEPDuRnpTXk=</wsse:Nonce>
                <wsu:Created>2011-05-20T14:57:13Z</wsu:Created>
            </wsse:UsernameToken>
        </wsse:Security>
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options></Options>
            <Objects xsi:type="FilterActivity">
                <Name>FilterActivityAPI</Name>
                <CustomerKey>FilterActivityAPI</CustomerKey>
                <FilterDefinitionID>df07a3ad-cc8c-475b-bc74-b6ebe68d3892</FilterDefinitionID>
                <SourceObjectID>bab35f2e-9c18-e711-ada2-38eaa791d4a1</SourceObjectID>
                <DestinationObjectID>dd4e5eee-e829-e711-ada2-38eaa791d4a1</DestinationObjectID>
                <DestinationTypeID>2</DestinationTypeID>
                <SourceTypeID>2</SourceTypeID>
            </Objects>
        </CreateRequest>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

## Related Items

-   [FilterActivity Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/filteractivity.htm)
-   [Filter Activity Help Documentation](https://help.salesforce.com/articleView?id=mc_es_filter_activity.htm&type=5)

## Related Topics

- FilterActivity Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/filteractivity.htm)
