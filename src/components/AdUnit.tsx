import { useEffect } from "react";

export interface WindowWithAds extends Window {
  adsbygoogle: Array<Object>;
}
declare let window: WindowWithAds;

export const AdUnit = ({ slot }: { slot: string }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7130144081891362"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};
