
import Button from "./Button";

export default function HeaderBar() {
  return (
    <header className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <h1 className="text-lg sm:text-xl font-semibold">Property Management</h1>
      </div>
      <div className="flex items-center gap-3">
        <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Add New Property</Button>
        <div className="h-8 w-8 rounded-full bg-gray-300"/>
      </div>
    </header>
  );
}


