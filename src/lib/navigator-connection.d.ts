interface Navigator {
  connection?: Connection;
  mozConnection?: Connection;
  webkitConnection?: Connection;
}

interface Connection {
  effectiveType: "slow-2g" | "2g" | "3g" | "4g";
}
