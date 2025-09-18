import { useEffect, useRef, useState } from "react";

export const AdUnit = ({ slot }: { slot: string }) => {
  const insRef = useRef<HTMLModElement>(null);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    try {
      const w = window as unknown as {
        adsbygoogle: Array<Record<string, unknown>>;
      };
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }

    const target = insRef.current;
    if (!target) return;

    const observer = new MutationObserver(() => {
      const hasIframe = target.querySelector("iframe");
      if (!hasIframe) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    });

    observer.observe(target, { childList: true, subtree: true });

    // check once after a delay (ads may take a second to inject)
    const timeout = setTimeout(() => {
      if (!target.querySelector("iframe")) {
        setEmpty(true);
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ins
      ref={insRef}
      className={`max-w-[calc(100vw-32px)] mx-auto md:max-w-full block adsbygoogle ${!empty && "mt-4"}`}
      data-ad-client="ca-pub-7130144081891362"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};
