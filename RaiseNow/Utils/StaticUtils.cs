namespace RaiseNow.Utils
{
    public static class StaticUtils
    {
        public static string PINATA_GATEWAY { get; private set; } = "https://gateway.pinata.cloud/ipfs";
        public static string RPC_URL { get; private set; } = "https://eth-goerli.g.alchemy.com/v2/QDm5sVnGSaCxhnkbdAhmunxVV0Gj1VBs";
        public static string ADDRESS { get; private set; } = "0xB8F4c289c8c2A910F17ec06BAaBbf9b37d85A857";
        public static string PINATA_API_KEY { get; private set; } = "f539be80f98cf35d1064";
        public static string PINATA_API_SECRET { get; private set; } = "41c4cc0b4e2fb88295a77369cd9ba135152fda9fcb93663aa037f8770cb37dab";
        public static string GOERLI_ETHERSCAN { get; private set; } = "https://goerli.etherscan.io/address";
        // TODO: event api end point
        public static string EVENTS_API { get; private set; } = "https://eventapi.infodatics.com/api/event";
    }
}
