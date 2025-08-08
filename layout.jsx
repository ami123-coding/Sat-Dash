import './globals.css';
export const metadata = { title: 'SAT Practice', description: 'Simple SAT-style practice test' };
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="header">
            <div className="logo">SAT Practice</div>
            <div className="pill"><span>1 full test</span></div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}