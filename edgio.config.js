// This file was automatically added by edgio init.
// You should commit this file to source control.
// Learn more about this file at https://docs.edg.io/guides/edgio_config
module.exports = {
  origins: [
    {
      name: 'origin',
      override_host_header: 'publicdomainreview.org',
      tls_verify: {
      sni_hint_and_strict_san_check: "publicdomainreview.org",
      use_sni: true },
      hosts: [
        {
          location: 'publicdomainreview.org',
        },
      ],
    },
  ],

  // The name of the site in Edgio to which this app should be deployed.
  name: 'edgio-v7-simple-performance-example',
};
