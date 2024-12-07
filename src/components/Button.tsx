import React from "react";

type Props = {
  children: React.ReactNode,
};
type ButtonTypes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CombinedProps = Props & ButtonTypes
export default function Button({ children = 'button', ...rest }: CombinedProps) {
  return <button {...rest} className="group relative overflow-hidden bg-gray-800 text-white px-4 py-1 text-sm font-normal">
    <p className="relative top-0 group-hover:-top-10 duration-100 hover:duration-300">{children}</p>
    <p className="absolute top-full group-hover:top-1/2 group-hover:-translate-y-1/2 text-white duration-300">{children}</p>
  </button>;
}