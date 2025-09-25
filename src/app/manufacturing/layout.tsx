// filepath: d:\000 Clients\DRITI DIGITAL\dhriti-digital-main\src\app\manufacturing\layout.tsx
import '@/styles/manufacturing.css'; // Import the new stylesheet for this section

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // This class will scope all our new styles to the manufacturing section
    <div className="manufacturing-hub">
      {children}
    </div>
  );
}