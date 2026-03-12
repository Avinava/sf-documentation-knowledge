---
title: "OrderItemRecipient"
domain: object-reference
topic: orderitemrecipient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.868Z
estimatedTokens: 1490
keywords: [OrderItemRecipient, site, employee, entity, services, ordered, includes, essential, recipient's, contact, specific, location, provided, API, version]
---

# OrderItemRecipient

> Represents a site, employee, or other entity for which services are being
         ordered. This includes essential details such as the recipient's name, contact information,
         and the specific site or location where the services will be provided. This object is
      available in API version 62.0 and later.

# OrderItemRecipient

Represents a site, employee, or other entity for which services are being ordered. This includes essential details such as the recipient's name, contact information, and the specific site or location where the services will be provided. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BroadbandConnectionType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the broadband connection that's available at the address. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaxDownloadSpeed | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum download speed available at the address. |
| MaxUploadSpeed | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum upload speed available at the address. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the customer's site or location. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe order associated with the recipient.This field is a relationship field.Relationship NameOrderRelationship TypeMaster-detailRefers ToOrder (the master object) |
| RecipientType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of recipient of the order.Possible values are:LocationSubscriberThe default value is Location. |
| ServiceAddrValidationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the address was validated. |
| Service Account | TypeentityidPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Account Entity where the product is used, serviced, or installed. |
| ServiceAddrValidationMsg | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe message sent after the validation of the address. |
| ServiceAddrValidationResult | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the address validation.Possible values are:FailPartial SuccessSuccessThe default value is Success. |
| ServiceAddress | TypeaddressPropertiesFilterDescriptionThe address where the recipient receives the order. |
| ServiceCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the recipient receives the order. |
| ServiceCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the recipient receives the order. |
| ServiceGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the accuracy level of the geocoded address coordinates.Possible values are:AddressBlockCityCountyExtendedZip—Extended ZipNearAddress—Near AddressNeighborhoodStateStreetUnknownZip |
| ServiceLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the location where the recipient receives the order. |
| ServiceLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the location where the recipient receives the order. |
| ServicePostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address. |
| ServiceState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the recipient receives the order. |
| ServiceStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street where the recipient receives the order |
| ServiceabilityCheckDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the serviceability check was done. |
| ServiceabilityData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about serviciability, such as broadband connection, download, and upload speeds available at the address. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderItemRecipientChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[OrderItemRecipientFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[OrderItemRecipientHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[OrderItemRecipientOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[OrderItemRecipientShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
