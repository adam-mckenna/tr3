import { useEffect } from "react";

export const AdUnit = ({ slot }: { slot: string }) => {
  useEffect(() => {
    try {
      const w = window as unknown as {
        adsbygoogle: Array<Record<string, unknown>>;
      };
      (w.adsbygoogle = w.adsbygoogle || []).push({});
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
