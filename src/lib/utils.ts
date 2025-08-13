import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Vector3 } from "three";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function latLngToVector3(radius: number, lat: number, lng: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}
