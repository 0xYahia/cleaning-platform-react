import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medi Clean",
  robots: { index: false, follow: false },
  alternates: { canonical: "/en/" },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

export default function RootIndex() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <link rel="canonical" href="/en/" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=(navigator.language||'en').toLowerCase();var t=l.startsWith('ar')?'/ar/':'/en/';location.replace(t);})();`,
          }}
        />
        <noscript>
          <a href="/en/">Continue to Medi Clean</a>
        </noscript>
      </body>
    </html>
  );
}
