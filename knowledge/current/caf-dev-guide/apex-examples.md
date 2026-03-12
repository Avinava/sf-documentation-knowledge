---
title: "Apex Examples"
domain: caf-dev-guide
topic: apex-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.237Z
estimatedTokens: 1105
keywords: [Apex, Examples, code, Custom, Address, record, data, Insert]
---

# Apex Examples

> Apex code examples for Custom Address Fields. The examples create a record with custom
    address data, update the custom address on an existing record, and delete a record that contains
    custom address data.

# Apex Examples

Apex code examples for Custom Address Fields. The examples create a record with custom address data, update the custom address on an existing record, and delete a record that contains custom address data.

| Available in: all editions. |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

Before you create a custom address field, review the [Custom Address Fields Requirements and Limitations](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm "Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature."). To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

## Insert a Record

This example code creates an Opportunity record which includes address data stored in the custom address field, “Mailing Address”.

Opportunity a = new Opportunity(); a.StageName='Prospecting'; a.CloseDate=System.today(); a.Name = 'Dublin Order'; a.Mailing\_Address\_\_StateCode\_\_s='CA'; a.Mailing\_Address\_\_CountryCode\_\_s='US'; a.Mailing\_Address\_\_Street\_\_s='1234 Dublin Blvd'; a.Mailing\_Address\_\_PostalCode\_\_s='12345'; a.Mailing\_Address\_\_City\_\_s='Dublin'; a.Mailing\_Address\_\_Latitude\_\_s=80.34; a.Mailing\_Address\_\_Longitude\_\_s=80.35; a.Mailing\_Address\_\_GeocodeAccuracy\_\_s='Address'; insert a;

This example code add a record for a custom object, “Gas Station” (Gas\_Station\_\_c). The new record includes address data stored in the the custom address field, “Mailing Address”.

Gas\_Station\_\_c a = new Gas\_Station\_\_c(); a.Name = 'Amador Valley'; a.Mailing\_Address\_\_StateCode\_\_s='CA'; a.Mailing\_Address\_\_CountryCode\_\_s='US'; a.Mailing\_Address\_\_Street\_\_s='1234 Dublin Blvd'; a.Mailing\_Address\_\_PostalCode\_\_s='12345'; a.Mailing\_Address\_\_City\_\_s='Dublin'; a.Mailing\_Address\_\_Latitude\_\_s=80.34; a.Mailing\_Address\_\_Longitude\_\_s=80.35; a.Mailing\_Address\_\_GeocodeAccuracy\_\_s='Address'; insert a;

## Update an Existing Record

This example code updates the custom address field “Mailing Address” on an Opportunity record with ID 006XXXXXXXXXXXXXXX.

Opportunity o = \[select Id from Opportunity where Id='006XXXXXXXXXXXXXXX'\]; o.Mailing\_Address\_\_StateCode\_\_s='CA'; o.Mailing\_Address\_\_CountryCode\_\_s='US'; o.Mailing\_Address\_\_Street\_\_s='1234 Dublin Blvd'; o.Mailing\_Address\_\_PostalCode\_\_s='12345'; o.Mailing\_Address\_\_City\_\_s='Dublin'; o.Mailing\_Address\_\_Latitude\_\_s=80.34; o.Mailing\_Address\_\_Longitude\_\_s=80.35; o.Mailing\_Address\_\_GeocodeAccuracy\_\_s='Address'; update o;

This example code updates an existing record for a custom object, “Gas Station” (Gas\_Station\_\_c) with ID aIsXXXXXXXXXXXXXXX. It updates custom address field “Mailing Address”.

Gas\_Station\_\_c a = \[select Id from Gas\_Station\_\_c where Id='aIsXXXXXXXXXXXXXXX'\]; a.Mailing\_Address\_\_StateCode\_\_s='CA'; a.Mailing\_Address\_\_CountryCode\_\_s='US'; a.Mailing\_Address\_\_Street\_\_s='1234 Dublin Blvd'; a.Mailing\_Address\_\_PostalCode\_\_s='12345'; a.Mailing\_Address\_\_City\_\_s='Dublin'; a.Mailing\_Address\_\_Latitude\_\_s=80.34; a.Mailing\_Address\_\_Longitude\_\_s=80.35; a.Mailing\_Address\_\_GeocodeAccuracy\_\_s='Address'; update a;

## Delete Data Within a Custom Address Field from a Record

To delete an address stored in a custom address field from a record, update the record. This example code removes the data stored the custom address field “Mailing Address” on an Opportunity record with ID 006XXXXXXXXXXXXXXX.

Opportunity o = \[select Id from Opportunity where Id='006XXXXXXXXXXXXXXX'\]; o.Mailing\_Address\_\_StateCode\_\_s= null; o.Mailing\_Address\_\_CountryCode\_\_s= null; o.Mailing\_Address\_\_Street\_\_s=null; o.Mailing\_Address\_\_PostalCode\_\_s=null; o.Mailing\_Address\_\_City\_\_s=null; o.Mailing\_Address\_\_Latitude\_\_s=null; o.Mailing\_Address\_\_Longitude\_\_s=null; o.Mailing\_Address\_\_GeocodeAccuracy\_\_s=null; update o;

## Delete a Record

This code deletes a record for the custom object, “Gas Station” (Gas\_Station\_\_c) with ID aIsXXXXXXXXXXXXXXX. When a record is deleted, all data for that record is deleted, including the custom address field information.

```

```

## Code Examples

```
Gas_Station__c a = [select Id from Gas_Station__c where Id='aIsXXXXXXXXXXXXXXX'];
delete a;
```

## Related Topics

- Custom Address Fields Requirements and Limitations (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm)
