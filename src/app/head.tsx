export default function Head() {
  return (
    <>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SSCSSHN6DT"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SSCSSHN6DT');
        `
      }} />
      <title>Alexander Hall Lanerfeldt | Portfolio</title>
      <meta name="description" content="Portfolio of Alexander Hall Lanerfeldt – Developer specializing in 3D engines, Unity, C#, and immersive interactive experiences." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#1e293b" />
      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Alexander Hall Lanerfeldt | Portfolio" />
      <meta property="og:description" content="Portfolio of Alexander Hall Lanerfeldt – Developer specializing in 3D engines, Unity, C#, and immersive interactive experiences." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/profile.jpg" />
      <meta property="og:url" content="https://kiadorn.github.io" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Alexander Hall Lanerfeldt | Portfolio" />
      <meta name="twitter:description" content="Portfolio of Alexander Hall Lanerfeldt – Developer specializing in 3D engines, Unity, C#, and immersive interactive experiences." />
      <meta name="twitter:image" content="/images/profile.jpg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
