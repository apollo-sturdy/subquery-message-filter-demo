# Subquery Cosmo Message Filter Bug Demo

This is a simple demo to show a bug in the Cosmo Message Filter.

The send in this tx is not being indexed and should be: https://neutron.celat.one/neutron-1/txs/BBDD27E29EAE66972E2F3E00E79239330CAD00693E7CDBE012BBC46729C8C972

It should be indexed because the contract execution does a `cosmos.bank.v1beta1.MsgSend` to the filtered address.
