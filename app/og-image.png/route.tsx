import { ImageResponse } from "next/og";
import { seo } from "../lib/seo";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#18212A",
          color: "#FBFAF7",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 78% 42%, rgba(184,148,93,0.38), transparent 30%), linear-gradient(90deg, #FBFAF7 0%, #FBFAF7 42%, #18212A 42%, #18212A 100%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 72,
            width: 360,
            height: 486,
            border: "1px solid rgba(184,148,93,0.38)",
            background: "rgba(255,255,255,0.58)",
            padding: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              color: "#8E6E3E",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 0,
              textTransform: "uppercase"
            }}
          >
            Complexidade Simples
          </div>
          <div
            style={{
              color: "#18212A",
              fontSize: 58,
              lineHeight: 1.02,
              fontWeight: 700
            }}
          >
            Sistemas sob medida para operações reais.
          </div>
          <div
            style={{
              color: "rgba(24,33,42,0.68)",
              fontSize: 24,
              lineHeight: 1.35
            }}
          >
            Diagnóstico, captação, painéis, automações e plataformas.
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 560,
            top: 98,
            right: 72,
            bottom: 98,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.06)",
            padding: 44,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            {["Dra. Lays", "Habitta", "TrustVerify"].map((name) => (
              <div
                key={name}
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  color: "#D9BC82",
                  fontSize: 22,
                  fontWeight: 700,
                  padding: "14px 18px"
                }}
              >
                {name}
              </div>
            ))}
          </div>
          <div
            style={{
              color: "#FBFAF7",
              fontSize: 72,
              lineHeight: 1,
              fontWeight: 700
            }}
          >
            Captação, gestão de leads e automação.
          </div>
          <div
            style={{
              color: "rgba(251,250,247,0.68)",
              fontSize: 26,
              lineHeight: 1.35,
              maxWidth: 520
            }}
          >
            {seo.shortDescription}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
