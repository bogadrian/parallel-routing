export default function RootLayout({
  children,
  settings,
  landing
}: {
  children: React.ReactNode;
  settings: React.ReactNode;
  landing: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ height: '200px', backgroundColor: '#a09e14' }}>
          {children}
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{ width: '50%', height: '80vh', backgroundColor: '#7b1414' }}
          >
            {settings}
          </div>
          <div
            style={{ width: '50%', height: '80vh', backgroundColor: '#158b52' }}
          >
            {landing}
          </div>
        </div>
      </body>
    </html>
  );
}
