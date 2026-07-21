"use client";

import { useRouter } from "next/navigation";
import { Button } from "tektokit";
import {
  Shader,
  SolidColor,
  Surface3D,
  DotGrid,
  Prism,
  LinearGradient,
  LiquidMetal,
} from "shaders/react";
import { BASIC_DETAILS } from "../../constants/global.constant";

export default function Hero() {
  const router = useRouter();

  return (
    <main className="relative isolation-isolate min-h-dvh overflow-hidden bg-[#080808] text-white antialiased">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Shader toneMapping="aces" className="w-full h-full block">
          <SolidColor color="#080808" />
          <Surface3D
            amplitude={0.31}
            cursorIntensity={0.83}
            edgePinning={0.4}
            farCutoff={0.12}
            frequency={1.8}
            height={0.31}
            highlights={6}
            lighting={29}
            lightX={-0.8}
            lightY={-0.95}
            octaves={1}
            tilt={73}
            zoom={1.1}
          >
            <DotGrid
              density={57}
              dotSize={{
                type: "map",
                source: "idmrf0jzpi1json7rda",
                channel: "luminance",
                inputMin: 0,
                inputMax: 1,
                outputMin: 0,
                outputMax: 0.21,
                curve: 0.2,
              }}
              speed={0.91}
              visible={true}
            />
          </Surface3D>
          <Prism
            endFalloff={0.44}
            intensity={0.24}
            position={{ x: 1.01, y: 1.23 }}
            saturation={0.79}
            softness={0.001}
            speed={0.16}
            splitPosition={{ x: 0.99, y: 1.11 }}
            spread={3}
            startFalloff={0.64}
          />
          <LinearGradient
            id="idmrf0jzpi1json7rda"
            colorSpace="oklab"
            start={{ x: 0.5, y: 1.01 }}
            end={{ x: 0.5, y: 0.15 }}
            stops={[
              { color: "#ffffff", position: 0 },
              { color: "#000000", position: 1 },
            ]}
            visible={false}
          />
          {/* <LiquidMetal
            center={{ x: 0.5, y: 0.45 }}
            lightColor="#1f1f1f"
            ripple={5.31}
            scale={1.17}
            shape='{"type":"metaballs3D","ballRadius":0.1,"spread":0.29,"blend":0.325,"speed":1,"rotX":0,"rotY":0,"rotZ":0}'
            shapeType="metaballs3D"
            turbulence={0.37}
          /> */}
        </Shader>
      </div>

      <section className="pt-1 relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
        <p className="reveal inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] text-[#d4d4d4] backdrop-blur-sm" style={{ animationDelay: "0.1s", fontFamily: '"Geist Mono", monospace' }}>
          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 ping" />
            <span className="relative block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Career-ready training and placement support
        </p>

        <h1 className="reveal mt-12 max-w-5xl text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-tight font-semibold tracking-tighter text-white" style={{ animationDelay: "0.2s" }}>
          {BASIC_DETAILS.site_name}
          <br className="hidden sm:block" />
          helps students launch meaningful careers.
        </h1>

        <p className="reveal mt-8 max-w-lg text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] text-[#d1d1d1]" style={{ animationDelay: "0.3s" }}>
          {BASIC_DETAILS.site_description_long}
        </p>

        <div className="reveal mt-10 flex w-full max-w-lg flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="solid"
            color="primary"
            size="lg"
            fullWidth
            onClick={() => router.push("/courses")}
            className="w-full sm:w-auto"
          >
            Explore courses
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="lg"
            fullWidth
            onClick={() => router.push("/contact")}
            className="w-full sm:w-auto"
          >
            Contact us
          </Button>
        </div>
      </section>
    </main>
  );
}
