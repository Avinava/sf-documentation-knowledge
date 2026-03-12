---
title: "Prospect"
domain: object-reference
topic: prospect
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.732Z
estimatedTokens: 1588
keywords: [Prospect, individual, shared, contact, isn't, yet, qualified, API, version, 63.0, later, Calls]
---

# Prospect

> Represents a prospect. A prospect is an individual who has shared contact
      information, but isn't yet qualified. This object is available in API version 63.0 and later.

# Prospect

Represents a prospect. A prospect is an individual who has shared contact information, but isn't yet qualified. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionStreet address of the prospect. Up to 255 characters are allowed. |
| AnnualRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe prospect company's yearly revenue. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity that's included in the prospect’s address. |
| Company | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prospect's company. |
| ConvertedAccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionObject reference ID that points to the account into which the prospect converted.This is a relationship field.Relationship NameConvertedAccountRefers ToAccount |
| ConvertedContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionObject reference ID that points to the contact into which the prospect converted.This is a relationship field.Relationship NameConvertedContactRefers ToContact |
| ConvertedDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate on which this prospect was converted. |
| ConvertedLeadId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionObject reference ID that points to the lead into which the prospect has been converted.This is a relationship field.This field is a relationship field.Relationship NameConvertedLeadRefers ToLead |
| ConvertedOpportunityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionObject reference ID that points to the opportunity into which the prospect has been converted.This is a relationship field.Relationship NameConvertedOpportunityRefers ToOpportunity |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Prospect's country. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe prospect’s description. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prospect's email address. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prospect’s first name. Up to 40 characters allowed. |
| GenderIdentity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prospect’s self-identified experience of their gender, which does or doesn’t correspond to the prospect’s designated sex at birth. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address. For details on geolocation compound fields, see Geolocation Compound Field. |
| Industry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPrimary business of the prospect’s company |
| IsConverted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the prospect has been converted (true) or not (false). Label is Converted. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The Last name of the prospect. Up to 80 characters are allowed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of an address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| LeadSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe origin or source of the lead. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionConcatenation of FirstName, MiddleName, LastName, and Suffix up to 203 characters, including whitespaces. |
| NumberOfEmployees | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of employees at the prospect's company. Label is Employees. |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prospect's phone number. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code that's included in the prospect's address. Label is Zip/Postal Code. |
| ProspectRecordName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the prospect record used for managing prospects. |
| ProspectStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the prospect.Possible values are:ContactedNewNurturingQualifiedUnqualifiedThe default value is New. |
| Salutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prospect's preferred title.Possible values are:Dr.Mr.Mrs.Ms.Mx.Prof. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState that's included in the prospect's address. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet number or name that's included in the prospect's address. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prospect's business title, such as CFO or CEO. The maximum size is 128 characters. When converting a prospect to a person account, the conversion fails if the prospect Title field contains more than 80 characters. |

## Related Topics

- Geolocation Compound Field (atlas.en-us.object_reference.meta/object_reference/compound_fields_geolocation.htm)
- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
