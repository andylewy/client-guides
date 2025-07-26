 title 	audience
Refund Policy Overview
	
all
Introduction

This refund policy applies to all customers purchasing from our store.

{% if audience == "internal" %}

    Internal Note: We allow discretionary refunds for VIP clients, but this is not publicly advertised. {% endif %}

Refund Window

Customers have 30 days from the date of purchase to request a refund.

{% if audience == "external" %}

    If you have any issues, please contact our customer support team. {% endif %}

{% if audience == "internal" %}

    Log all refund exceptions in Salesforce using the "Refund Exception" case type. {% endif %}

