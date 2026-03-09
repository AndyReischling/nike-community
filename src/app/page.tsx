"use client";

import { ScrollManager } from "@/components/ScrollManager";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ActOne } from "@/components/acts/ActOne";
import { ActTwo } from "@/components/acts/ActTwo";
import { ActThree } from "@/components/acts/ActThree";
import { ActFour } from "@/components/acts/ActFour";

export default function Home() {
  return (
    <ScrollManager>
      <PhoneFrame />
      <main>
        <ActOne />
        <ActTwo />
        <ActThree />
        <ActFour />
      </main>
    </ScrollManager>
  );
}
