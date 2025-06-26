// Trigger Vercel deploy

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [logoAvailable, setLogoAvailable] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.src = "/demine-logo.png";
      img.onload = () => setLogoAvailable(true);
      img.onerror = () => setLogoAvailable(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1F1F] text-white px-6 py-10 space-y-12">
      <header className="flex items-center justify-center mb-6">
        {logoAvailable && (
          <Image
            src="/demine-logo.png"
            alt="DeMine Logo"
            width={60}
            height={60}
            priority
          />
        )}
        <h1 className="text-4xl font-bold text-[#16F2B3] ml-4">DeMine</h1>
      </header>

      <section className="text-center space-y-4">
        <p className="text-lg italic text-gray-300">Decentralized Mining — Crypto Mining for Everyone</p>
        <p className="text-sm text-[#16F2B3]">“Find the best KASPA ASIC mining hosting site for you.”</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#16F2B3]">Top Hosting Sites for KASPA ASIC Miners</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["MillionMiner", "IceRiver", "Metered Mining", "BitCap"].map((host, i) => (
            <Card key={i} className="bg-[#122828]">
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-[#16F2B3]">{host}</h3>
                <ul className="text-sm text-gray-300 list-disc list-inside">
                  <li>Electricity: TBD</li>
                  <li>Installation Fees: TBD</li>
                  <li>Location: TBD</li>
                  <li>Payment: TBD</li>
                  <li>Customer Support: TBD</li>
                </ul>
                <Button variant="secondary" className="bg-[#16F2B3] text-black hover:bg-[#0ED39B]">Visit Site</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#16F2B3]">Trusted Miner Sources</h2>
        <ul className="text-gray-300 list-disc list-inside">
          <li><a href="https://www.asicminervalue.com/" className="text-[#16F2B3] hover:underline">ASICMinerValue</a></li>
          <li><a href="https://bitmars.io" className="text-[#16F2B3] hover:underline">Bitmars</a></li>
          <li><a href="https://nhash.net" className="text-[#16F2B3] hover:underline">NHash</a></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#16F2B3]">Why Mine KASPA?</h2>
        <p className="text-gray-300">
          KASPA offers a more affordable entry point for individuals and solo miners than BTC mining.
          Its energy efficiency, faster block times, and ASIC compatibility make it perfect for beginners
          and veterans alike. It supports the true spirit of decentralization.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#16F2B3]">Home Mining Options</h2>
        <p className="text-gray-300">
          Explore low-power KASPA miners like the IceRiver KS0 or KS3. Perfect for home setups with less heat,
          noise, and no MOQ required.
        </p>
      </section>
    </div>
  );
}
