import Image from "next/image";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { IconBed, IconBath, IconSquare, IconEye, IconEdit, IconTrash } from "./Icons";

export default function PropertyCard({ property }) {
  const { title, price, type, status, beds, baths, sqft, views, image } = property;
  const statusColor = status === "Available" ? "green" : status === "Pending" ? "yellow" : "red";

  return (
    <div className="rounded-lg border border-black/10 overflow-hidden bg-white flex flex-col shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-neutral-900 line-clamp-2">{title}</h3>
            <p className="mt-1 text-xs text-neutral-500">{type}</p>
          </div>
          <Badge className="shrink-0" color={statusColor}>{status}</Badge>
        </div>
        <div className="text-[18px] font-bold text-blue-600">{price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}</div>
        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1 text-blue-600"><IconBed /><span className="text-neutral-600">{beds}</span></span>
          <span className="inline-flex items-center gap-1 text-blue-600"><IconBath /><span className="text-neutral-600">{baths}</span></span>
          <span className="inline-flex items-center gap-1 text-blue-600"><IconSquare /><span className="text-neutral-600">{sqft.toLocaleString()}</span></span>
          <span className="ml-auto inline-flex items-center gap-1 text-blue-600"><IconEye /><span className="text-neutral-600">{views}</span></span>
        </div>
        <div className="flex gap-2 pt-1">
          <Button variant="ghost" size="sm" leadingIcon={IconEye}>View</Button>
          <Button variant="outline" size="sm" leadingIcon={IconEdit}>Edit</Button>
          <Button variant="destructive" size="sm" leadingIcon={IconTrash}>Delete</Button>
        </div>
      </div>
    </div>
  );
}


