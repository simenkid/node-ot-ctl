const CMD = {
    // bbr
    // bbr mgmt dua <status> [meshLocalIid]
    // bbr state
    // bbr enable
    // bbr disable
    // bbr register
    // bbr config
    // bbr config [seqno <seqno>] [delay <delay>] [timeout <timeout>]
    // bbr jitter
    // bbr jitter <jitter>
    bufferinfo
    channel
    channel <channel>
    channel preferred
    channel supported
    child list
    child table
    child <id>
    childip
    childip max
    childip max <count>
    childmax
    childmax <count>
    childtimeout
    childtimeout <timeout>
    contextreusedelay
    contextreusedelay <delay>
    counters
    counters <countername>
    counters <countername> reset
    networktime
    networktime <timesyncperiod> <xtalthreshold>
    delaytimermin
    delaytimermin <delaytimermin>
    discover [channel]
    dns resolve <hostname> [DNS server IP] [DNS server port]
    domainname
    domainname <name>
    dua iid
    dua iid <iid>
    dua iid clear
    eidcache
    eui64
    extaddr
    extaddr <extaddr>
    extpanid
    extpanid <extpanid>
    factoryreset
    ifconfig
    ifconfig up
    ifconfig down
    ipaddr
    ipaddr add <ipaddr>
    ipaddr del <ipaddr>
    ipaddr linklocal
    ipaddr mleid
    ipaddr rloc
    ipmaddr
    ipmaddr add <ipaddr>
    ipmaddr del <ipaddr>
    ipmaddr promiscuous
    ipmaddr promiscuous enable
    ipmaddr promiscuous disable
    joinerport <port>
    keysequence counter
    keysequence counter <counter>
    keysequence guardtime
    keysequence guardtime <guardtime>
    leaderpartitionid
    leaderpartitionid <partitionid>
    leaderdata
    leaderweight
    leaderweight <weight>
    linkquality <extaddr>
    linkquality <extaddr> <linkquality>
    log filename <filename>
    log level
    log level <level>
    masterkey
    masterkey <key>
    mode
    mode [rsdn]
    neighbor list
    neighbor table
    netdataregister
    netdatashow
    netstat
    networkdiagnostic get <addr> <type> ..
    networkdiagnostic reset <addr> <type> ..
    networkidtimeout
    networkidtimeout <timeout>
    networkname
    networkname <name>
    panid
    panid <panid>
    parent
    parentpriority
    parentpriority <parentpriority>
    ping <ipaddr> [size][count] [interval][hoplimit]
    ping stop
    pollperiod
    pollperiod <pollperiod>
    pskc [-p] <key>|<passphrase>
    preferrouterid <routerid>
    prefix
    prefix add <prefix> [padcrosnD][prf]
    prefix remove <prefix>
    promiscuous
    promiscuous enable
    promiscuous disable
    rcp
    rcp version
    releaserouterid <routerid>
    reset
    rloc16
    route
    route add <prefix> [s][prf]
    route remove <prefix>
    router list
    router table
    router <id>
    routerdowngradethreshold
    routerdowngradethreshold <threshold>
    routereligible
    routereligible enable
    routereligible disable
    routerselectionjitter
    routerselectionjitter <jitter>
    routerupgradethreshold
    routerupgradethreshold <threshold>
    scan [channel]
    scan energy [duration]
    singleton
    sntp query [SNTP server IP] [SNTP server port]
    state
    state
    thread start
    thread stop
    thread version
    txpower
    txpower <txpower>
    version
    mac retries direct
    mac retries direct <number>
    mac retries indirect
    mac retries indirect <number>
    macfilter
    macfilter addr
    macfilter addr disable
    macfilter addr whitelist
    macfilter addr blacklist
    macfilter addr add <extaddr> [rss]
    macfilter addr remove <extaddr>
    macfilter addr clear
    macfilter rss
    macfilter rss add <extaddr> <rss>
    macfilter rss add-lqi <extaddr> <lqi>
    macfilter rss remove <extaddr>
    macfilter rss clear
    diag
    service
    service add <enterpriseNumber> <serviceData> <serverData>
    service remove <enterpriseNumber> <serviceData>

};

module.exports = CMD;