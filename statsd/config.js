{
  address: "::1",
  address_ipv6: true,
  port: 8125,
  mgmt_port: 8126,

  percentThreshold: [50, 75, 90, 95, 98, 99, 99.9, 99.99, 99.999],

  graphitePort: 2003,
  graphiteHost: "0.0.0.0",
  flushInterval: 10000,

  backends: ['./backends/graphite'],
  graphite: {
    legacyNamespace: false
  }
}

